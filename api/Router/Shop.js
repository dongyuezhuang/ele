const {upPic}=require("../modules/upPic")
const db=require("../modules/db");
const mongodb=require("mongodb")
//上传店铺类型的图片
module.exports.addShopType=function(req,res){
	upPic(req,"shopTypePic",function(obj){
		if(obj.ok===1){
			db.insertOne("shopTypeList",{
				shopTypeName:obj.params.shopTypeName,
			    shopTypePic:obj.newPicName,
			    addTime:Date.now(),
			    orderNum:obj.params.orderNum/1,
			},function(err,results){
				res.json({
					ok:1,
					msg:"上传成功！"
				})
			})
		}else if(ok===2){
			res.json({
				ok:2,
				msg:obj.msg
			})
		}else{
			res.json({
				ok:3,
				msg:obj.msg
			})
		}
	})
}
//获取店铺类型的接口--------------------------进行了模糊查询和分页
module.exports.getShopType=function(req,res){
	var value=req.query.value;
	var whereObj={
		shopTypeName:new RegExp(value)
	}
	var pageIndex=req.query.pageIndex/1;//传过来的当前页
	var pageSum=1;//初始化总页数
	var pageNum=5;//定义每页显示的条数
	db.count("shopTypeList",whereObj,function(count){
		if(count<1){
			res.json({
				ok:2,
				msg:"暂无数据"
			})
		}else{
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
			db.find("shopTypeList",{
				whereObj:whereObj,
				sortObj:{
					orderNum:-1,
					addTime:-1
				},
				skipNum:(pageIndex-1)*pageNum,
				limitNum:pageNum
			},function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"获取成功",
						results,
						pageSum
					})
				}
			})
		}
	});	
}
//获取店铺类型的信息
module.exports.getsShopTypeList=function(req,res){
	db.find("shopTypeList",{},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"成功！",
				results
			})
		}
	})
}
//删除店铺类别的接口
module.exports.deleteShopType=function(req,res){
	db.find("shopList",{
		whereObj:{
			shopTypeId:mongodb.ObjectId(req.query.id)
		}
	},function(err,shopInfo){
		if(shopInfo.length>0){
			res.json({
				ok:3,
				msg:"请先删除该店铺类别下的店铺"
			})
		}else{
			db.deleteOneById("shopTypeList",req.query.id,function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"删除店铺类别成功！",
						results
					})
				}
			})
		}
	})	
}



//获得店铺类型的接口------来确定店铺类型名称-----------------二维数组
module.exports.getshopTypeList=function(req,res){
	db.find("shopTypeList",{},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			var num=Math.ceil(results.length/10);
	        var shopTypeList=[];
	        for(var i=0;i<num;i++){
	            shopTypeList[i]=[];
	            for(var j=i*10;j<i*10+10 && j<results.length;j++){
	                shopTypeList[i].push(results[j])
	            }
	        }
	        res.json({
	            ok:1,
	            msg:"获取店铺类型成功",
	            shopTypeList
	        })
		}
	})
}

//获得店铺类型的接口------来确定店铺类型名称
module.exports.sureShopType=function(req,res){
	db.find("shopTypeList",{},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:2,
				msg:"获取店铺类型成功",
				results
			})
		}
	})
}


//上传店铺的图片
module.exports.addShopList=function(req,res){
	upPic(req,"shopListPic",function(obj){
		if(obj.ok===1){
			db.insertOne("shopList",{
				shopListName:obj.params.shopListName,
			    shopListPic:obj.newPicName,
			    shopTypeId:mongodb.ObjectId(obj.params.shopTypeId),
			    addTime:Date.now(),
			    orderNum:obj.params.orderNum/1,
			},function(err,results){
				res.json({
					ok:1,
					msg:"上传成功！"
				})
			})
		}else if(obj.ok===2){
			res.json({
				ok:2,
				msg:obj.msg
			})
		}else{
			res.json({
				ok:3,
				msg:obj.msg
			})
		}
	})
}
//通过商品类型ID------获取指定的店铺信息的接口-----------进行二级联动
module.exports.getShopList=function(req,res){
	db.find("shopList",{
		whereObj:{
			shopTypeId:mongodb.ObjectId(req.query.shopTypeId)
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
				msg:"获取成功",
				results,
			})
		}
	})
}
//删除店铺的接口
module.exports.deleteShopList=function(req,res){
	db.find("goodsTypeList",{
		whereObj:{
			shopId:mongodb.ObjectId(req.query.id)
		}
	},function(err,goodsTypeInfo){
		if(goodsTypeInfo.length>0){
			res.json({
				ok:3,
				msg:"请先删除该店铺下的商品类别"
			})
		}else{
			db.deleteOneById("shopList",req.query.id,function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"删除店铺成功！",
						results
					})
				}
			})
		}
	})
}

//shopList和shopTypeList一起进行多表联查
module.exports.ShopAndTypeList=function(req,res){
	db.ShopAndTypeList(function(err,shopListInfo){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				shopListInfo
			})
		}
	})
}


//获得店铺信息的接口
module.exports.getShopAndTypeList=function(req,res){
	var shopName=req.query.shopName;
	var whereObj={
		shopListName:new RegExp(shopName)
	}
	var pageIndex=req.query.pageIndex/1;//传过来的当前页
	var pageSum=1;//初始化总页数
	var pageNum=5;//定义每页显示的条数
	db.count("shopList",whereObj,function(count){
		if(count<1){
			res.json({
				ok:2,
				msg:"暂无数据"
			})
		}else{
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
			db.getShopAndTypeList(whereObj,(pageIndex-1)*pageNum,pageNum,function(err,stopListInfo){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"获取店铺信息成功",
						stopListInfo,
						pageSum
					})
				}
			});
		}
	});
}

//根据ID查找店铺信息
module.exports.getShopInfo=function(req,res){
	db.findOneById("shopList",req.query.id,function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"查找店铺信息成功",
				results,
			})
		}
	})
}
//根据ID查找店铺信息------------二级联动
module.exports.getShop=function(req,res){
	db.findShopTypeId("shopList",{
		whereObj:{shopTypeId:mongodb.ObjectId(req.query.id)}
	},function(err,results){
		
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"查找店铺信息成功",
				results,
			})
		}
	})
}
//根据ID修改店铺信息
module.exports.upShopList=function(req,res){
	upPic(req,"shopList",function(obj){
		if(obj.ok===2){
			res.json({
				ok:2,
				msg:obj.msg
			})
		}else{
			var upObj={
				$set:{
					shopListName:obj.params.shopListName,
				    shopTypeId:mongodb.ObjectId(obj.params.shopTypeId),
				    orderNum:obj.params.orderNum/1,
				}
			}
			if(obj.newPicName){//上传了图片
				upObj.$set.shopPic=obj.newPicName
			}
			db.updateOneById("shopList",obj.params.shopId,upObj,function(err,results){
				res.json({
					ok:1,
					msg:"成功！"
				})
			})
		}
	})
}


//获取店铺信息的接口
module.exports.getShopLists=function(req,res){
	var pageI=req.query.pageI;
	var pageNum=10;
	var pageSum=1;
	db.count("shopList",{},function(count){
		pageSum=Math.ceil(count/pageNum);
		if(pageSum<pageI){
			res.json({
				ok:3,
				msg:"我们也是有底线的"
			})
		}else{
			db.find("shopList",{
				skipNum:(pageI-1)*pageNum,
				limitNum:pageNum
			},function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"查找店铺信息成功",
						results,
					})
				}
			})
		}
	})
}


















