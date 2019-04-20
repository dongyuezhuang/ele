const db=require("../modules/db");
const common=require("../modules/common")
const mongodb=require("mongodb")
//添加验证码的接口
module.exports.addYZM=function(req,res){
	var code=common.getRanodm(100000,999999);
	db.findOne("yzmList",{
		phone:req.body.phone
	},function(err,yzmInfo){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			if(yzmInfo){//有这个手机号
				if(yzmInfo.addTime+3*60*1000<Date.now()){//表示时间过期
					db.updateOne("yzmList",{phone:req.body.phone},{
						$set:{
							addTime:Date.now(),
							code
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
								code
							})
						}
					})
				}else{//表示时间没有过期
					res.json({
						ok:3,
						msg:"验证码时间没有过期",
						time:(yzmInfo.addTime+3*60*1000-Date.now())/1000
					})
				}
			}else{//没有这个手机号
				db.insertOne("yzmList",{
					phone:req.body.phone,
					addTime:Date.now(),
					code
				},function(err,results){
					if(err){
						res.json({
							ok:2,
							msg:"网络连接错误"
						})
					}else{
						res.json({
							ok:1,
							code
						})
					}
				})
			}
		}
	})
}


//添加用户的接口-------手机号和验证码
module.exports.addUser=function(req,res){
	db.findOne("yzmList",{phone:req.body.phone},function(err,yzmInfo){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			if(yzmInfo.code===req.body.yzm/1){//传过来的验证码正确
				db.findOne("userList",{phone:req.body.phone},function(err,userInfo){
					if(userInfo){//有就直接返回
						res.json({
							ok:1,
							msg:"用户登陆成功",
							yzmInfo
						})
					}else{//没有就添加一条用户信息
						db.insertOne("userList",{
							phone:req.body.phone,
							addTime:Date.now(),
							money:0
						},function(err,results){
							if(err){
								res.json({
									ok:2,
									msg:"网络连接错误"
								})
							}else{
								res.json({
									ok:1,
									msg:"用户登陆成功",
									yzmInfo
								})
							}
						})
					}	
				})	
			}else{//传过来的验证码错误
				res.json({
					ok:3,
					msg:"验证码错误"
				})
			}
		}
	})
}

//获取用户信息的接口
module.exports.getUser=function(req,res){
	db.findOne("userList",{phone:req.body.phone},function(err,userInfo){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"获取用户信息成功",
				userInfo
			})
		}
	})
}





