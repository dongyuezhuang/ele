const {upPic}=require("../modules/upPic")
const db=require("../modules/db");
const mongodb=require("mongodb")
//添加店铺类型的接口
module.exports.addGoodsTypeList=function(req,res){
	db.insertOne("goodsTypeList",{
		goodsTypeName:req.body.goodsTypeName,
		shopTypeId:mongodb.ObjectId(req.body.shopTypeId),
		shopId:mongodb.ObjectId(req.body.shopId),
		addTime:Date.now(),
	},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"添加商品类型成功",
			})
		}
	})
}
//获取商品类型的接口-------------进行了商品类型和店铺的多表联查
module.exports.getGoodsTypeList=function(req,res){
	var value=req.query.value;
	var whereObj={
		goodsTypeName:new RegExp(value)
	}
	var pageIndex=req.query.pageIndex/1;//传过来的当前页
	var pageSum=1;//初始化总页数
	var pageNum=5;//定义每页显示的条数
	db.count("goodsTypeList",whereObj,function(count){
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
			db.GoodsTypeListAndShopList(whereObj,(pageIndex-1)*pageNum,pageNum,function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"获取商品类型成功",
						results,
						pageSum
					})
				}
			})	
		}
		
	});		
}
//删除商品类型的接口
module.exports.deleteGoodsTypeList=function(req,res){
	db.find("goodsList",{
		whereObj:{
			goodTypeListId:mongodb.ObjectId(req.query.id)
		}
	},function(err,listInfo){
		if(listInfo.length>0){
			res.json({
				ok:3,
				msg:"请先删除该商品类别下的商品"
			})
		}else{
			db.deleteOneById("goodsTypeList",req.query.id,function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"删除商品类别成功",
					})
				}
			})
		}
	})
}
//根据ID查找商品类别信息------------三级联动
module.exports.getGoodsType=function(req,res){
	db.findGoodsTypeId("goodsTypeList",{
		whereObj:{shopId:mongodb.ObjectId(req.query.id)}
	},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"查找商品类型的信息成功",
				results,
			})
		}
	})
}
//获取商品的接口
module.exports.getGoodsList=function(req,res){
	var value=req.query.value;
	var whereObj={
		goodsName:new RegExp(value)
	}
	var pageIndex=req.query.pageIndex/1;//传过来的当前页
	var pageSum=1;//初始化总页数
	var pageNum=5;//定义每页显示的条数
	db.count("goodsList",whereObj,function(count){
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
			db.Goods(whereObj,(pageIndex-1)*pageNum,pageNum,function(err,results){
				if(err){
					res.json({
						ok:2,
						msg:"网络连接错误"
					})
				}else{
					res.json({
						ok:1,
						msg:"获取商品成功！",
						results,
						pageSum
					})
				}
			})	
		}
	});
}

//删除商品的接口
module.exports.deleteGoodsList=function(req,res){
	db.deleteOneById("goodsList",req.query.id,function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"删除商品成功！",
				results,
			})
		}
	});		
}



//添加商品的接口
module.exports.addGoodsList=function(req,res){
	upPic(req,"goodsPic",function(obj){
		if(obj.ok===1){
			db.insertOne("goodsList",{
				goodsName:obj.params.goodsName,
			    goodsPic:obj.newPicName,
			    shopTypeListId:mongodb.ObjectId(obj.params.shopTypeListId),
			    shopListId:mongodb.ObjectId(obj.params.shopListId),
			    goodTypeListId:mongodb.ObjectId(obj.params.goodTypeListId),
			    orderNum:obj.params.goodsNum/1,
			    goodsPrice:obj.params.goodsPrice/1,
			    isHot:obj.params.radio/1,//是否是热门的商品
			    goodsMain:obj.params.goodsMain,
				addTime:Date.now(),
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





//通过店铺类别ID来获取商品信息的接口-------------
module.exports.getGoodsLists=function(req,res){
	db.getGoodsLists({shopListId:mongodb.ObjectId(req.body.ShopListId)},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"获取商品成功！",
				results,
			})
		}
	})
}




//通过店铺类别ID来获取商品信息的接口-------------
module.exports.getGoodsTYPE=function(req,res){
	db.getGoodsTYPE({
		shopTypeId:mongodb.ObjectId(req.body.shopTypeId),
		shopId:mongodb.ObjectId(req.body.shopId)
	},function(err,results){
		if(err){
			res.json({
				ok:2,
				msg:"网络连接错误"
			})
		}else{
			res.json({
				ok:1,
				msg:"获取商品成功！",
				results,
			})
		}
	})
}




