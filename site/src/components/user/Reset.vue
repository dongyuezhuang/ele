<template>
	<div>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="验证码" v-model="captcha">
		  	<!--<img src="../assets/100x100.png" height="45px" width="100px"/>-->
		</mt-field>
		<!--<form>
			<p>姓名：<input type="text" value="" placeholder="请输入用户名"/></p>
			<p>手机号：<input type="text" value="" placeholder="请输入手机号" max-length="11"/></p>
			<p>密码：<input type="text" value="" placeholder="请输入密码"/></p>
			<p>确认密码：<input type="text" value="" placeholder="请再次输入密码"/></p>
			<p>验证码：<input type="text" value="" placeholder="请输入验证码"/></p>
			<p></p>
			<p>
				<input type="button" value="注册"/>
				<input type="button" value="已有账号？去登录"/>
			</p>
		</form>-->
	</div>
</template>

<script>
	export default{
		name:'Reset',
		
	}
</script>

<style>
</style>