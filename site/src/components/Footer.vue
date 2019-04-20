<template>
	<div>
		<footer>
			<dl>
				<dt @click="shouye">
					<img :src="$route.meta.isActive===1?'../../static/未标题-17.jpg':'../../static/未标题-90.jpg'"/>
				</dt>
				<dd @click="shouye" :style="$route.meta.isActive===1?'color:blue;':'color:black;'">首页</dd>
			</dl>
			<dl>
				<dt @click="find">
					<img :src="$route.meta.isActive===2?'../../static/未标题-21.jpg':'../../static/未标题-18.jpg'"/>
				</dt>
				<dd @click="find" :style="$route.meta.isActive===2?'color:blue;':'color:black;'">发现</dd>
			</dl>
			<dl>
				<dt @click="order">
					<img :src="$route.meta.isActive===3?'../../static/未标题-22.jpg':'../../static/未标题-19.jpg'"/>
				</dt>
				<dd @click="order" :style="$route.meta.isActive===3?'color:blue;':'color:black;'">订单</dd>
			</dl>
			<dl>
				<dt @click="my">
					<img :src="$route.meta.isActive===4?'../../static/未标题-23.jpg':'../../static/未标题-20.jpg'"/>
				</dt>
				<dd @click="my" :style="$route.meta.isActive===4?'color:blue;':'color:black;'">我的</dd>
			</dl>
		</footer>
	</div>
</template>

<script>
	export default{
		name:"Footer",
		data(){
			return{
				
			}
		},
		methods:{
			shouye(){
				this.$router.push('/');
			},
			find(){
				this.$router.push('/find');	
			},
			order(){
				this.$router.push('/order');
			},
			my(){
				this.$router.push('/my');
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">
footer{
	width: 6.73rem;
	height:0.94rem;
	background: #fff;
	border-top: 1px solid #ADADAD;
	box-shadow: 0 -0.02rem 0.2rem #DDDDDD;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	z-index:99;
}
footer dl{
	width:25%;
	height:0.94rem;
	overflow: hidden;
}
footer dl dt{
	width: 0.36rem;
	height: 0.36rem;
	margin: 0.2rem auto 0;
}
footer dl dt img{
	width: 0.36rem;
	height: 0.36rem;
}
footer dl dd{
	height:0.3rem;
	font-size:0.18rem;
	line-height:0.3rem;
	text-align: center;
}
</style>