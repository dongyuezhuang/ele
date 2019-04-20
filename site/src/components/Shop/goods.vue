<template>
	<div class="wrap">
		<div class="mint-header"  v-if="pic" :style="{background:'url('+ ('http://127.0.0.1/'+pic)+') no-repeat center/cover'}">
			<p @click="$router.go(-1)">&lt;</p>
		</div>


		<img v-if="pic" :src="pic|imgUrl" alt="" id="img">
		<header>
			<h2>{{shopListName}}</h2>
			<h3>{{goodsMain}}</h3>
			<h4></h4>
			<h5>满88减42，满118减58，满188减70</h5>
			<ul>
				<li>
					<span>点餐</span>
				</li>
				<li>
					<span>评价</span>
				</li>
				<li>
					<span>商家</span>
				</li>
			</ul>
		</header>
		
		<div class="main">
			<div class="left">
				<p v-for="(item,i) in goodsTypeInfo" :key="i">
					<span>{{item.goodsTypeName}}</span>
				</p>
				
			</div>


			<div class="right">
				<div class="pic" v-for="(item,i) in goodsList" :key="i">
					<img :src="item.goodsPic | imgUrl" alt="">
					<div class="box">
						<h3>{{item.goodsName}}</h3>
						<h4>{{item.goodsMain}}</h4>
						<h5>
							<span>{{item.goodsPrice | currency}}</span>
							<strong @click="add(item._id,-1)">-</strong>
							<em>{{item.buyNum}}</em>
							<i @click="add(item._id,1)">+</i>
						</h5>
					</div>
				</div>
			</div>
		</div>
		
		<div id="p">
			我们也是有底线的~~~
		</div>

		<car></car>


	</div>
</template>

<script>
	import car from "@/components/Shop/car.vue"
	export default{
		name:"goods",
		data(){
			return{
				goodsList:[],
				ShopListId:"",
				goodsTypeInfo:[],
				shopTypeId:'',
				shopId:"",
				pic:"",
				shopListName:'',
				goodsMain:"",
			}
		},
		methods:{
			GetGoodsList(){
				this.$ajax.post("/getGoodsLists",{
					ShopListId:this.$route.query.ShopListId
				}).then(({data})=>{
					this.goodsList=data.results;
					this.shopTypeId=data.results[0].shopTypeInfo[0]._id
					this.shopId=data.results[0].shopInfo[0]._id
					this.pic=data.results[0].shopInfo[0].shopListPic;
					this.shopListName=data.results[0].shopInfo[0].shopListName;
					this.goodsMain=data.results[0].goodsMain;
					this.GetGoodsTypeList()
				})
			},
			GetGoodsTypeList(){
				this.$ajax.post("/getGoodsTYPE",{
					shopTypeId:this.shopTypeId,
					shopId:this.shopId
				}).then(({data})=>{
					this.goodsTypeInfo=data.results;
				})
			},
			scrollTop(){
				var headNav=document.querySelector(".main .left");
	            window.onscroll=function(){
				var sTop=document.body.scrollTop || document.documentElement.scrollTop;
                if(sTop>610){
                      	headNav.style.position="fixed";
                      	headNav.style.top="0";
                  	}else{
                      	headNav.style.position="";
                  	}
              	}
			},
			add(id,type){
				  var em=document.querySelector(".main .right .pic .box h5 em");
				  var strong=document.querySelector(".main .right .pic .box h5 strong");
				  this.$ajax.post("/getGoodsNum",{
					  id,
					  type
				  }).then(({data})=>{
					  	console.log(767676767676,data.goodsInfo.buyNum)
					if(data.ok===1&&data.goodsInfo.buyNum>1){
						strong.style.display="black"
						em.style.display="black"
						this.GetGoodsList()
					}else{
						strong.style.display="none"
						em.style.display="none"
						this.GetGoodsList()
					}
				})
			}
		},
		mounted(){
			this.GetGoodsList()
			this.scrollTop()
			
		},
		components:{
			car
		}
	}
</script>

<style scoped="scoped">
.wrap{
	width: 100%;
	height: 100;
	margin-bottom: 0.8rem;
}
.mint-header{
	width: 100%;
	height:2rem;
	overflow: hidden;
}
.mint-header p{
	width: 0.4rem;
	height: 0.6rem;
	margin-top:-0.8rem;
	font-size:0.6rem;
	color:fff;
}
#img{
	width:1.6rem;
	height:1.6rem;
	position: absolute;
	top:0.9rem;
	left:38%;
}
header{
	width:100%;
	height: 4rem ;
	overflow: hidden;
}

header h2{
	width:4rem;
	height:0.8rem;
	margin:0.6rem auto 0;
	text-align: center;
	font-size: 0.45rem;
	line-height: 0.8rem;
	font-weight: 900;
}
header h3{
	width:5rem;
	height:0.6rem;
	margin:0rem auto;
	text-align: center;
	font-size: 0.3rem;
	line-height: 0.6rem;
	color: #8a7a7a;
}
header h4{
	width:3rem;
	height:0.4rem;
	margin:0rem auto;
	background: url(../../assets/未标题-1.jpg) no-repeat center/cover;
}
header h5{
	width:6rem;
	height:0.6rem;
	margin:0rem auto;
	text-align: center;
	font-size: 0.3rem;
	line-height: 0.6rem;
	color: #7d93b8;
}
header ul{
	width:100%;
	height:0.6rem;
	border-bottom: 4px solid #ebebeb;
	background: #fff;
}
header ul li{
	float: left;
	width:33%;
	height:0.6rem;
	font-size: 0.4rem;
	color: #666666;
	text-align: center;
	line-height: 0.6rem;
}
header ul li span:hover{
	font-weight: 900;
	color: #000;
	border-bottom: 1px solid blue;
}
.main{
	width:100%;
	min-height:3rem;
	overflow: hidden;
}
.main .left{
	float: left;
	width:1.8rem;
	min-height:3rem;
}
.main .left p{
	display: block;
	width:1.8rem;
	height:1.2rem;
	background: #f8f8f8;
	font-size: 0.3rem;
	line-height: 1.2rem;
	text-align: center;
}
.main .left p:hover{
	background: #fff;
}
.main .right{
	float: right;
	width:4.7rem;
	min-height:2.3rem;
	overflow: hidden;
}
.main .right .pic{
	float: right;
	width:4.7rem;
	height:2.3rem;
	overflow: hidden;
	margin-top: 0.1rem;
}
.main .right .pic img{
	float: left;
	width:1.6rem;
	height:1.6rem;
	margin-top: 0.4rem;
}
.main .right .pic .box{
	float: right;
	width:2.7rem;
	height:2rem;
	margin-top: 0.2rem;
}
.main .right .pic .box h3{
	width:2.7rem;
	height:0.5rem;
	font-size: 0.3rem;
	line-height: 0.5rem;
	font-weight: 900;
}
.main .right .pic .box h4{
	width:2.7rem;
	height:0.5rem;
	font-size: 0.2rem;
	line-height: 0.5rem;
}
.main .right .pic .box h5{
	width:2.7rem;
	height:0.5rem;
	font-size: 0.3rem;
	line-height: 0.5rem;
}
.main .right .pic .box h5 span{
	float: left;
	width:1rem;
	height:0.5rem;
	font-size: 0.3rem;
	line-height: 0.5rem;
}

.main .right .pic .box h5 strong{
	border: 1px solid red;
	float: left;
	width:0.5rem;
	height:0.5rem;
	background: #ccc;
	font-size: 0.5rem;
	line-height: 0.5rem;
	font-style: normal;
	color: #fff;
	font-weight: 900;
	text-align: center;
	border-radius: 50%;
	margin-left: 0.2rem;
}
.main .right .pic .box h5 em{
	border: 1px solid red;
	float: left;
	width:0.4rem;
	height:0.5rem;
	font-size: 0.3rem;
	line-height: 0.5rem;
	text-align: center;
	color: blue;
	font-style: normal;
}
.main .right .pic .box h5 i{
	border: 1px solid red;
	float: right;
	width:0.5rem;
	height:0.5rem;
	background: #ccc;
	font-size: 0.5rem;
	line-height: 0.5rem;
	font-style: normal;
	color: #fff;
	font-weight: 900;
	text-align: center;
	border-radius: 50%;
}
#p{
	width: 100%;
	height:0.6rem;
	font-size: 0.3rem;
	color: #666666;
	line-height: 0.6rem;
	text-align: center;
}
</style>