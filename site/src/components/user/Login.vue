<template>
	<div>
		<form>
			<p>手机号：<input type="text" value="" placeholder="请输入手机号" max-length="11"/></p>
			<p>密码：<input type="text" value="" placeholder="请输入密码"/></p>
			<p>
				<input type="button" value="登录"/>
				<input type="button" value="没有账号？去注册"/>
			</p>
		</form>
	</div>
</template>

<script>
	export default{
		name:'Login',
		
	}
</script>

<style>
</style>