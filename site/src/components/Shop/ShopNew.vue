<template>
	<div>
		<header>
			<div id="location">
				<i @click="out"></i>
				<h2>北京</h2>
			</div>
			
			<div id="seek">
				<i></i>
				<span>搜索饿了么商家、商品名称</span>
			</div>
		</header>
		
		
		
		<div class="mains" v-for="(item,i) in shopList" :key="i">
			
			<div class="Main">
				<div class="left">
						<img :src="item.shopListPic | imgUrl"/>
				</div>
				
				<div class="right">
					<div class="top">
						<h2>
							<span>{{i}}</span>
							<i>···</i>
						</h2>
						<h3>
							<i>★</i>
							<i>★</i>
							<i>★</i>
							<i>★</i>
							<i>☆</i>
							<span>4.6月售146单</span>
						</h3>
						<h4>
							<div class="let">
								<span>￥48起送</span>
								<i>|</i>
								<span>配送费￥9</span>
							</div>
							
							<div class="rgt">
								<span>617m</span>
								<i>|</i>
								<span>20分钟</span>
							</div>
						</h4>
						<h5>
							<span>品质联盟</span>
						</h5>
					</div>
					
					
					
					<div class="bottom">
						<h3>
							<img src="../../../static/未标题-43.jpg" alt="" />
							<span>满25减8，满50减20</span>
						</h3>
						<h4>
							<img src="../../../static/未标题-44.jpg" alt="" />
							<span>单品定价（限10:00-21:00）</span>
						</h4>
					</div>
				</div>
			</div>
		</div>
		
		
		
		<div id="p">
			我们也是有底线的~~~
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		name:"ShopNew",
		data(){
			return{
				shopList:[],
				ShopTypeList:[],
				id:'',
			}
		},
		methods:{
			getShop(){
				this.$ajax.get("/getShop",{
					params:{id:this.id}
				}).then(({data})=>{
					this.shopList=data.results
				})
			},
			out(){
				this.$router.go("-1")
			}
		},
		mounted(){
			this.id=this.$route.query.id
			this.getShop()
		}
	}
</script>

<style scoped="scoped">

header{
	width: 100%;
	height:1.76rem;
	background:url(../../../static/未标题-1.jpg) repeat-y center/cover;
	overflow: hidden;
}
header #location{
	min-height: 0.36rem;
	margin-top: 0.34rem ;
	margin-left:0.26rem;
	overflow: hidden;
}
header #location i{
	float: left;
	border-top:0.2rem solid #009fff;
	border-bottom: 0.2rem solid #009fff;
	border-left: 0.2rem solid #009fff;
	border-right: 0.2rem solid #fff;
	margin-top:0.02rem;
	margin-left:-0.15rem;
}
header #location h2{
	float: left;
	width:5.8rem;
	min-height: 0.36rem;
	text-align: center;
	line-height: 0.32rem;
	color: #fff;
	font-weight: 900;
	font-size: 0.3rem;
}

header #seek{
	width: 6.22rem;
	height: 0.66rem;
	background: #fff;
	border-radius: 2px;
	margin-left:0.26rem;
	margin-top: 0.24rem;
	overflow:hidden;
}
header #seek i{
	float: left;
	width:0.26rem;
	height: 0.26rem;
	margin-left:1.43rem ;
	margin-top: 0.2rem;
	background: url(../../../static/未标题-2.jpg) no-repeat center/cover;
}
header #seek span{
	float: left;
	width:3.2rem;
	height: 0.32rem;
	color: #adadad;
	font-size: 0.26rem;
	margin-top: 0.16rem;
	text-align:center;
	line-height: 0.32rem;
}
.mains{
	height:3.22rem;
	border-bottom: 1px solid #E9E9E9;
}
.Main{
	width: 6.37rem;
	height:3.22rem;
	margin: 0 auto;
}
.Main .left{
	float: left;
	width:1.38rem;
	height: 2.17rem;
	overflow: hidden;
}
.Main .left img{
	width:1.2rem;
	height:1.2rem;
	margin-top: 0.27rem;
}
.Main .right{
	float: right;
	width:4.97rem;
	height:3.22rem;
	overflow: hidden;
}
.Main .right .top{
	width:4.97rem;
	height: 2.17rem;
	border-bottom: 1px dotted #e9e9e9;
	overflow: hidden;
}
.Main .right .top h2{
	height:0.5rem;
	margin-top: 0.22rem;
}
.Main .right .top h2 span{
	float: left;
	height:0.5rem;
	font-size:0.28rem;
	line-height: 0.5rem;
	font-weight: 900;
}
.Main .right .top h2 i{
	float: right;
	width:0.44rem;
	height:0.5rem;
	font-size:0.28rem;
	line-height: 0.5rem;
	color: #ccc;
	text-align: center;
}
.Main .right .top h3{
	height:0.41rem;
	overflow: hidden;
}
.Main .right .top h3 i{
	float: left;
	width:0.18rem;
	height:0.18rem;
	font-style: normal;
	font-size: 0.2rem;
	margin-left: 0.02rem;
	line-height: 0.18rem;
	/*background: red;*/
	margin-top:0.11rem;
}
.Main .right .top h3 span{
	float: left;
	width:1.5rem;
	height:0.22rem;
	margin-left: 0.09rem;
	margin-top:0.08rem;
	font-size:0.16rem;
	line-height: 0.22rem;
}
.Main .right .top h4{
	height:0.45rem;
}
.Main .right .top h4 .let{
	float: left;
	width:2.17rem;
	height:0.45rem;
}
.Main .right .top h4 .let span{
	float: left;
	width:1rem;
	height:0.45rem;
	font-size:0.2rem;
	line-height: 0.45rem;
}
.Main .right .top h4 .let i{
	float: left;
	font-style: normal;
	width: 0.15rem;
	height:0.45rem;
	font-size:0.2rem;
	line-height: 0.45rem;
	color: #E9E9E9;
}
.Main .right .top h4 .rgt{
	float: right;
	width: 1.6rem;
	height:0.45rem;
}
.Main .right .top h4 .rgt span{
	float: left;
	width:0.7rem;
	height:0.45rem;
	font-size:0.2rem;
	line-height: 0.45rem;
}
.Main .right .top h4 .rgt i{
	float: left;
	font-style: normal;
	width: 0.15rem;
	height:0.45rem;
	font-size:0.2rem;
	line-height: 0.45rem;
	color: #E9E9E9;
}
.Main .right .top h5{
	height:0.58rem;
	overflow: hidden;
}
.Main .right .top h5 span{
	display: block;
	width: 0.9rem;
	height: 0.24rem;
	border: 1px solid #CCCCCC;
	border-radius: 2px;
	margin-top: 0.08rem;
	font-size: 0.16rem;
	text-align: center;
}

.Main .right .bottom{
	width:4.97rem;
	height:1.04rem;
	overflow: hidden;
}
.Main .right .bottom h3{
	height:0.22rem;
	margin-top: 0.1rem;
}
.Main .right .bottom h3 img{
	float: left;
	width: 0.22rem;
	height:0.22rem;
}
.Main .right .bottom h3 span{
	float: left;
	height:0.16rem;
	margin-left: 0.11rem;
	font-size: 0.12rem;
	
}
.Main .right .bottom h4{
	height:0.22rem;
	margin-top: 0.15rem;
}
.Main .right .bottom h4 img{
	float: left;
	width: 0.22rem;
	height:0.22rem;
}
.Main .right .bottom h4 span{
	float: left;
	height:0.16rem;
	margin-left: 0.11rem;
	font-size: 0.12rem;
	
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