const db=require("../modules/db");
const common=require("../modules/common");
const md5=require("md5");
const mongodb=require("mongodb");
//添加addAdminList信息
module.exports.addAdminList=function(req,res){
	db.findOne("adminList",{adminName:req.body.adminName},function(err,adminInfo){
		if(adminInfo){
			res.json({
				ok:3,
				msg:"已有此用户，请前去登录",
			})
		}else{
			db.insertOne("adminList",{
				adminName:req.body.adminName,
				adminPwd:md5(req.body.adminPwd),
				addTime:common.getNowTime()
			},function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"注册成功",
						results
					})
				}
			})
		}		
	})	
}
//登录管理员
module.exports.loginAdmin=function(req,res){
	db.findOne("adminList",{adminName:req.body.adminName},function(err,adminInfo){
		if(adminInfo){
			if(adminInfo.adminPwd===md5(req.body.adminPwd)&&adminInfo.adminName===req.body.adminName){
				db.insertOne("adminLog",{
					adminId:adminInfo._id,
					adminName:adminInfo.adminName,
					logType:1,
					addTime:Date.now(),
					detail:adminInfo.adminName+"于"+common.getNowTime()+"登录了"
				},function(err,results){
					res.json({
						ok:1,
						msg:"登录成功",
						adminInfo
					})
				})
			}else{
				res.json({
					ok:2,
					msg:"用户名或者密码错误",
				})
			}
		}else{
			res.json({
				ok:3,
				msg:"没有此用户，请前去注册！",
			})
		}
	});
}
//获得管理员日志列表的接口
module.exports.getAdminLogList=function(req,res){
	var value=req.query.value;
	var whereObj={
		adminName:new RegExp(value)
	}
	var pageIndex=req.query.pageIndex/1;//传过来的当前页
	var pageSum=1;//初始化总页数
	var pageNum=5;//定义每页显示的条数
	db.count("adminLog",whereObj,function(count){
		pageSum=Math.ceil(count/pageNum);//总页数
		if(pageSum<0){
			pageSum=1;
		}
		if(pageIndex>pageSum){
			pageIndex=pageSum;
		}
		if(pageIndex<0){
			pageIndex=1
		}
		db.getAdminLogList(whereObj,(pageIndex-1)*pageNum,pageNum,function(err,adminLogList){
			if(err){
				res.json({
					ok:2,
					msg:"网络连接错误"
				})
			}else{
				res.json({
					ok:1,
					msg:"获取管理员日志成功",
					adminLogList,
					pageSum
				})
			}
		});
	});
}
//查看管理员列表的接口
module.exports.getAdminList=function(req,res){
	db.find("adminList",{},function(err,results){
		res.json({
			ok:1,
			msg:"获取管理员信息成功",
			results
		})
	})
}
//删除管理员日志列表的接口
module.exports.deleteAdminLog=function(req,res){
	db.deleteOneById("adminLog",req.body.id,function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"日志删除成功"
			})
		}
	});
}

//修改密码-----获取该用户的信息
module.exports.upPwd1=function(req,res){
	db.find("adminList",{
		whereObj:{
			_id:mongodb.ObjectId(req.body.adminId),
			adminName:req.body.adminName
		}
	},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"查找用户信息成功！",
				results
			})
		}
	})
}
//修改密码-----修改
module.exports.upPwd2=function(req,res){
	db.findOneById("adminList",req.body.id,function(err,adminInfo){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			if(adminInfo.adminPwd===md5(req.body.adminPwd)){
				var upObj={
						$set:{
							adminPwd:md5(req.body.adminPwd1)
						}
					}
					db.updateOneById("adminList",req.body.id,upObj,function(err,results){
						if(err){
							res.json({
								ok:4,
								msg:"网络连接错误"
							})
						}else{
							res.json({
								ok:1,
								msg:"修改密码成功！",
							})
						}
					})
			}else{
				res.json({
					ok:3,
					msg:"旧密码不正确"
				})
			}
		}
	})
}
//删除账号
module.exports.deleteAdmin=function(req,res){
	db.deleteOneById("adminList",req.body.id,function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"删除账号成功！",
			})
		}
	})
}









