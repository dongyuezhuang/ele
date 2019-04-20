<template>
	<el-form id="AdminLogin" ref="loginForm" :rules="rules" :model="loginForm">
		<h3>登录后台管理员系统</h3>
		<el-form-item label="管理员账号：" prop="adminName">
			<el-input type="txet" ref="adminName" v-model="loginForm.adminName" placeholder="请输入账号"></el-input>
		</el-form-item>
		<el-form-item label="管理员密码：" prop="adminPwd">
			<el-input type="password" ref="adminPwd" v-model="loginForm.adminPwd" placeholder="请输入密码"></el-input>
		</el-form-item>
		<el-form-item class="btn">
			<el-button type="primary" :loading="isLoading" @click="submitForm('loginForm')">登录</el-button>
			<el-button type="success" @click="$store.commit('GORESET',2)">去注册</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default{
		name:"AdminLogin",
		props:["index"],
		data(){
			return{
				isLoading:false,
				rules:{
					adminName:[
						{ required: true, message: '请输入管理员账号', trigger: 'blur' },
            			{ min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
					],
					adminPwd:[
						{ required: true, message: '请输入管理员密码', trigger: 'blur' },
            			{ min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }
					]
				},
				loginForm:{
					adminName:"",
					adminPwd:""
				}
			}
		},
		methods:{
			//点击登录的方法
		    submitForm(formName){
		        this.$refs[formName].validate((valid)=>{
		        	if(valid){
		        		this.isLoading=true;
		        		var _this=this;
						this.$store.dispatch("login",{
							adminName:this.loginForm.adminName,
							adminPwd:this.loginForm.adminPwd,
							success(msg){
                                _this.$message({
                                    message: msg,
                                    type: 'success'
                                });
                                _this.isLoading=false;
                            },
                            error(msg){
                                _this.$message.error(msg);
                                _this.isLoading=false;
                            }
						});
		        	}else{
			            alert('内容不正确');
			            return false;
		        	};
		        });
		    },
		},
	};
</script>

<style scoped="scoped">
	#AdminLogin{
		width: 400px;
		height: 300px;
		border: 1px solid black;
		margin: 0 auto;
	}
	#AdminLogin h3{
		height: 30px;
		text-align: center;
		margin: 0 auto;
	}
	#AdminLogin .btn{
		text-align: center;
	}
</style>