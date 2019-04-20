<template>
	<div>
		<div id="Adv">
			<div class="pic">
				<i></i>
				<h2>超级会员·</h2>
				<h3>每月领红包</h3>
				<span>立即开通&gt;</span>
			</div>
			
			<div class="photo">
				<img src="../../static/未标题-15.jpg" alt="品质套餐"/>
				<img src="../../static/未标题-16.jpg" alt="限时抢购"/>
			</div>
			
			<div class="slideshow">
				<mt-swipe :show-indicators="false">
				  	<mt-swipe-item>
				  		<img src="../../static/未标题-25.jpg" alt="" />
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<img src="../../static/未标题-24.jpg" alt="" />
				  	</mt-swipe-item>
				  	
				</mt-swipe>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Adv",
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
#Adv{
	width:100%;
	height:5.06rem;
	overflow: hidden;
}
#Adv .pic{
	width:100%;
	height: 0.74rem;
	margin: 0 auto;
	border-radius: 2px;
	overflow: hidden;
	background:url(../../static/未标题-27.jpg) repeat-y center/cover;
}
#Adv .pic i{
	float: left;
	width:0.35rem;
	height: 0.35rem;
	margin-left: 0.26rem;
	margin-top: 0.2rem;
	background: url(../../static/未标题-26.jpg) no-repeat center/cover;
}
#Adv .pic h2{
	float: left;
	width:1.33rem;
	height: 0.35rem;
	font-size: 0.24rem;
	margin-top: 0.2rem;
	text-align: center;
	line-height: 0.35rem;
	color: #644f1b;
	font-weight: 900;
}
#Adv .pic h3{
	float: left;
	width:1.51rem;
	height: 0.35rem;
	font-size: 0.2rem;
	margin-top: 0.2rem;
	line-height: 0.35rem;
	color: #644f1b;
}
#Adv .pic span{
	float: right;
	width:1rem;
	height: 0.35rem;
	font-size:0.2rem;
	margin-top: 0.2rem;
	line-height: 0.35rem;
	color: #644f1b;
	margin-right: 0.12rem;
}
#Adv .photo{
	width: 6.37rem;
	height:2.58rem;
	margin: 0 auto;
	margin-top: 0.08rem;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.1rem;
}
#Adv .photo img{
	width:3.16rem;
	height:2.58rem;
}
#Adv .slideshow{
	width: 6.37rem;
	height:1.6rem;
	margin: 0 auto;
}
#Adv .slideshow img{
	width: 6.37rem;
	height:1.6rem;
	margin: 0 auto;
}
</style>