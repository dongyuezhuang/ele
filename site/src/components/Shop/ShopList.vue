<!--<template>
	<div>
		
		<div class="mains" v-for="item in ShopList">
			
			<div class="Main">
				<div class="left">
						<img :src="item.shopListPic | imgUrl"/>
				</div>
				
				<div class="right">
					<div class="top">
						<h2>
							<span>{{item.shopListName}}</span>
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
		
		
	</div>
</template>

<script>
	export default{
		name:"ShopList",
		props:["ShopList"],
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">	
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
</style>-->