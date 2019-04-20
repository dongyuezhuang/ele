<template>
	<el-form id="AdminReset" ref="loginForm" :rules="rules" :model="loginForm">
		<h3>注册后台管理员系统</h3>
		<el-form-item label="管理员账号：" prop="adminName">
			<el-input type="txet" v-model="loginForm.adminName" placeholder="请输入账号"></el-input>
		</el-form-item>
		<el-form-item label="管理员密码：" prop="adminPwd1">
			<el-input type="password" v-model="loginForm.adminPwd1" placeholder="请输入密码"></el-input>
		</el-form-item>
		<el-form-item label="确认密码：" prop="adminPwd2">
			<el-input type="password" v-model="loginForm.adminPwd2" placeholder="再次输入密码"></el-input>
		</el-form-item>
		<el-form-item class="btn">
			<el-button type="primary" :loading="isreseting" @click="submitForm('loginForm')">注册</el-button>
			<el-button type="success" :loading="isLoading" @click="$store.commit('GORESET',1)">去登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	//引入axios
	import axios from "axios"
	export default{
		name:"AdminReset",
		data(){
	    	var validatePass2=(rule, value, callback)=>{
	        	if(value===''){
	        		callback(new Error('请再次输入密码'));
	        	}else if(value !== this.loginForm.adminPwd1){
	        		callback(new Error('两次输入密码不一致!'));
	        	}else{
	        		callback();
	        	}
	    	};
			return{
				isLoading:false,
				isreseting:false,
				rules:{
					adminName:[
						{ required: true, message: '请输入管理员账号', trigger: 'blur' },
            			{ min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
					],
					adminPwd1:[
						{ required: true, message: '请输入管理员密码', trigger: 'blur' },
            			{ min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }
					],
					adminPwd2:[
						{ required: true, message: '请再次输入密码', trigger: 'blur' },
            			{ min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' },
            			{ validator: validatePass2, trigger: 'blur' }
					]
				},
				loginForm:{
					adminName:"",
					adminPwd1:"",
					adminPwd2:""
				}
			}
		},
		methods:{
			//点击注册----注册账号
		    submitForm(formName){
		        this.$refs[formName].validate((valid)=>{
		        	if(valid){
		        		this.isreseting=true;
		        		var _this=this;
		        		this.$store.dispatch("reset",{
							adminName:this.loginForm.adminName,
							adminPwd:this.loginForm.adminPwd1,
							success(msg){
                                _this.$message({
                                    message: msg,
                                    type: 'success'
                                });
                                _this.isreseting=false;
                            },
                            error(msg){
                                _this.$message.error(msg);
                                _this.isreseting=false;
                            }
						});
		        	}else{
			            alert('内容不正确');
			            return false;
		        	};
		        });
		    },
		},
	}
</script>

<style scoped="scoped">
	#AdminReset{
		width: 400px;
		height: 400px;
		border: 1px solid black;
		margin: 0 auto;
	}
	#AdminReset h3{
		height: 30px;
		text-align: center;
		margin: 0 auto;
	}
	#AdminReset .btn{
		text-align: center;
	}
</style>