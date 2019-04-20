const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const Admin=require("./Router/Admin.js");
const Shop=require("./Router/Shop.js");
const Goods=require("./Router/Goods.js");
const User=require("./Router/User.js");
const Car=require("./Router/Car.js");
app.use(bodyParser.json());
app.use(express.static("./upload"))
//解决跨域问题
//app.all("*",function(req,res,next){
//	res.header("Access-Control-Allow-Origin","*");
//	res.header("Access-Control-Allow-Headers","content-type");
//	res.header("Access-Control-Allow-Methods","*");
//	next();
//})
//***************************与管理员有关的接口***********
//添加管理员信息的接口
app.post("/addAdminList",Admin.addAdminList);
//登录管理员的接口
app.post("/loginAdmin",Admin.loginAdmin);
//获得管理员日志列表的接口
app.get("/getAdminLogList",Admin.getAdminLogList);
//删除管理员日志列表的接口
app.post("/deleteAdminLog",Admin.deleteAdminLog);
//查看管理员列表的接口
app.get("/getAdminList",Admin.getAdminList);
//修改密码-----------先获取管理员的ID
app.post("/upPwd1",Admin.upPwd1)
//修改密码-------通过ID修改密码
app.post("/upPwd2",Admin.upPwd2)
//删除管理员账号
app.post("/deleteAdmin",Admin.deleteAdmin)

//**************************与店铺有关的接口**************
//添加店铺类别的接口
app.post("/addShopType",Shop.addShopType);
//获取店铺类型的接口-----------------------------进行了模糊查询和分页
app.get("/getShopType",Shop.getShopType);
//删除店铺类别的接口
app.delete("/deleteShopType",Shop.deleteShopType)
//获取店铺类型的接口---------进行模糊搜索和分页
app.get("/getshopTypeList",Shop.getshopTypeList)
//获取店铺类型的接口
app.get("/getsShopTypeList",Shop.getsShopTypeList)
//添加店铺的接口
app.post("/addShopList",Shop.addShopList);
//通过商品类型ID------获取指定的店铺信息的接口-----------进行二级联动
app.get("/getShopList",Shop.getShopList);
//删除店铺的接口
app.delete("/deleteShopList",Shop.deleteShopList)
//店铺和店铺类型的表的信息
app.get("/getShopAndTypeList",Shop.getShopAndTypeList)
//通过ID获取店铺信息
app.get("/getShopInfo",Shop.getShopInfo)
//通过ID修改店铺信息
app.put("/addShopList",Shop.upShopList)
//通过ID获取店铺信息---------二级联动
app.get("/getShop",Shop.getShop)
//获取店铺信息的接口
app.get("/getShopLists",Shop.getShopLists)
//获得店铺类型的接口------来确定店铺类型名称
app.get("/sureShopType",Shop.sureShopType)




//*************************************与商品有关的借口*********************
//添加商品类型的接口
app.post("/addGoodsTypeList",Goods.addGoodsTypeList)
//获取商品类型的接口-------进行了商品类型和店铺的多表联查
app.get("/getGoodsTypeList",Goods.getGoodsTypeList)
//删除商品类型的接口
app.delete("/getGoodsTypeList",Goods.deleteGoodsTypeList)
//添加商品的接口
app.post("/addGoodsList",Goods.addGoodsList)
//获取商品的接口
app.get("/getGoodsList",Goods.getGoodsList)
//删除商品的接口
app.delete("/getGoodsList",Goods.deleteGoodsList)
//通过ID获取店铺信息---------三级联动
app.get("/getGoodsType",Goods.getGoodsType)
//通过店铺ID来获取商品信息的接口-------------获取出所有的信息
app.post("/getGoodsLists",Goods.getGoodsLists)

//通过店铺类别ID来获取商品信息的接口-------------
app.post("/getGoodsTYPE",Goods.getGoodsTYPE)



/*=========================================与购物车有关的接口====================================*/
//通过商品ID来获取商品的购买数量的接口
app.post("/getGoodsNum",Car.getGoodsNum)


/*=========================================与用户有关的接口====================================*/
//添加验证码的接口
app.post("/addYZM",User.addYZM)
//添加用户的接口-------手机号和验证码
app.post("/addUser",User.addUser)
//获取用户信息的接口
app.post("/getUser",User.getUser)




app.listen(80,"127.0.0.1",function(){
	console.log("饿了吗服务开启success")
})
