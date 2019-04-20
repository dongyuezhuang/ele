<template>
	<div>
		<div class="bg">
			<mt-header title="订单">
			  	<router-link to="/order" slot="left">
			    	<mt-button icon="back"></mt-button>
			  	</router-link>
			</mt-header>
			
			<div class="box" v-if="phone">
				<dl>
					<img src="../../assets/未标题-97.jpg"/>
					<dd>登陆后查看外卖订单</dd>
					<input type="button" @click="Login" value="立即登录" />
				</dl>
			</div>
			
		</div>
		
		
	</div>
</template>

<script>
	export default{
		name:"Order",
		data(){
			return{
				phone:!localStorage.phone
			}
		},
		methods:{
			Login(e){
				e.preventDefault();
				this.$router.push("/login")
			}
		}
	}
</script>

<style scoped="scoped">
.bg{
	width: 100%;
	height:12rem;
	background: #f5f5f5;
}	
.bg .mint-header{
	height: 1rem;
	font-size: 0.35rem;
}
.bg .box{
	width: 100%;
	height:5.4rem;
	overflow:hidden;
}
.bg .box dl{
	width:3rem;
	height:4rem;
	margin:1rem auto;
}
.bg .box dl img{
	width:2rem;
	height:2rem;
	margin:0 auto 0.3rem
}
.bg .box dl dd{
	width:100%;
	height:0.5rem;
	font-size: 0.3rem;
	text-align: center;
	color: #666;
	line-height: 0.5rem;
}
.bg .box dl input{
	display: block;
	width:80%;
	height:0.8rem;
	background: #56d176;
	font-size: 0.3rem;
	text-align: center;
	color: #fff;
	border-radius: 5px;
	margin:0 auto;
}
</style>