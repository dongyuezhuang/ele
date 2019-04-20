<template>
	<div>
		<h1>
			<img src="../../assets/logo.jpg" alt="" />
		</h1>
		
		<div class="form">
			<form action="">
				<p>
					<input class="txt" type="text" maxlength="11" placeholder="手机号" @keyup="fn" value=""/>
					<span class="button">获取验证码</span>
					<i>X</i>
				</p>
				<p><input class="yzm" type="text" placeholder="验证码"/></p>
				<section>
      				新用户登录即自动注册，并表示已同意
      				<a href="javascript:;" style="color: blue;">《用户服务协议》</a>
				</section>
				<p>
					<input type="button" @click="Login" value="登录" />
				</p>
			</form>
			
			
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'Login',
		data(){
			return{
				
			}
		},
		methods:{
			fn(){
				var phone=document.querySelector(".txt")
				var btn=document.querySelector(".button")
				var i=document.querySelector("i")
				var yzm=document.querySelector(".yzm")
				if(phone.value.length>0&&phone.value.length<11){
					i.style.display="block"
					btn.style.color="#CCCCCC"
				}else if(phone.value.length===0){
					i.style.display="none"
				}else if(phone.value.length===11){
					var _this=this;
					btn.style.color="#2395ff"
					i.style.display="block"
					btn.onclick=function(){
						var res=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
	  					if(res.test(phone.value)){
	  						_this.$ajax.post("/addYZM",{
								phone:phone.value
							}).then(({data})=>{
								yzm.value=data.code||null
								if(data.ok===3){
									Toast("距离验证码过期时间还有"+Math.floor(data.time)+"秒");
								}
							})
	  					}else{
	  						Toast("手机号输入不正确");
	  					}
					}
				}
				i.onclick=function(){
					btn.style.color="#CCCCCC"
					phone.value=null;
					i.style.display="none"
				}
				
			},
			Login(){
				var phone=document.querySelector(".txt")
				var yzm=document.querySelector(".yzm")
				if(phone.value===""&&yzm.value===""){
					Toast("请将以上内容填写完整");
				}else{
					localStorage.clear();
					this.$ajax.post("/addUser",{
						phone:phone.value,
						yzm:yzm.value
					}).then(({data})=>{
						if(data.ok===1){
							Toast(data.msg);
							this.$router.go(-1);
							localStorage.phone=data.yzmInfo.phone;
						}else{
							Toast(data.msg);
						}
					})
				}
			},	
		},
		mounted(){
			this.fn();
		}
	}
</script>

<style scoped="scoped">
h1{
	width: 100%;
	height: 2rem;
	overflow: hidden;
}
h1 img{
	width:2.4rem;
	height:1rem;
	margin:0.5rem auto 0;
}
.form{
	width: 100%;
	height:4rem;
	overflow: hidden;
}
.form p{
	width: 100%;
	height:1rem;
	overflow: hidden;
	position: relative;
}
.form p input[type="text"]{
	display: block;
	width:6rem;
	height:0.8rem;
	margin: 0rem auto;
	font-size:0.3rem;
	
	border-radius: 5px;
	text-indent:0.2rem;
}
.form p span{
	display: block;
	width:1.6rem;
	height:0.4rem;
	position: absolute;
	top:0.24rem;
	right:0.4rem;
	background: #fff;
	color: #CCCCCC;
	font-size: 0.25rem;
	border:0;
	z-index: 10;
}
.form p i{
	display: none;
	width:0.4rem;
	height:0.4rem;
	position: absolute;
	top:0.24rem;
	right:0.5rem;
	color: #CCCCCC;
	font-size: 0.4rem;
	z-index:20;
	font-style: normal;
	text-align: center;
	line-height: 0.4rem;
}
.form section{
	display: block;
	width:90%;
	height:0.8rem;
	color: #CCCCCC;
	font-size: 0.28rem;
	margin: 0.1rem auto 0;
}
.form p input[type="button"]{
	display: block;
	width:90%;
	height:0.8rem;
	margin: 0 auto;
	background:#4cd96f;
	font-size: 0.3rem;
	color: #fff;
}
</style>