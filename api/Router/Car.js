const {upPic}=require("../modules/upPic")
const db=require("../modules/db");
const mongodb=require("mongodb")
//通过商品ID来获取商品的购买数量的接口-------------购物车
module.exports.getGoodsNum=function(req,res){
	console.log(req.body.id,req.body.type)



	// db.findOneById("goodsList",req.body.id,function(err,goodsInfo){
	// 	console.log(1111111111,goodsInfo.buyNum)
	// 	if(goodsInfo.buyNum<=1&&req.body.type/1===-1){
	// 		db.updateOneById("goodsList",req.body.id,{
	// 			$inc:{
	// 				buyNum:req.body.type/1
	// 			}
	// 		},function(err,results){
	// 			if(err){
	// 				res.json({
	// 					ok:2,
	// 					msg:"网络连接错误"
	// 				})
	// 			}else{
	// 				res.json({
	// 					ok:1,
	// 					msg:"获取商品成功！",
	// 					goodsInfo,
	// 				})
	// 			}
	// 		})
	// 	}else{
	// 		res.json({
	// 			ok:2,
	// 			msg:"网络连接错误",
	// 		})
	// 	}
	// })
}