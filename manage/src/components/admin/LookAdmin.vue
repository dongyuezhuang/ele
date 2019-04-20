<template>
	<div>
		<el-button type="text" @click="dialogFormVisible=true">添加管理员</el-button>	
		<el-dialog title="添加管理员" :visible.sync="dialogFormVisible">	
			<el-form id="AdminReset" ref="loginForm" :rules="rules" :model="loginForm">
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
					<el-button type="success" @click="dialogFormVisible=false">取消</el-button>
				</el-form-item>
			</el-form>	
		</el-dialog>
		
		
		
		<el-table :data="LookAdmin" style="width: 100%" border>
		    <el-table-column fixed label="管理员的ID" width="300">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row._id }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="管理员的姓名" width="300">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          		<p>管理员的姓名: {{ scope.row.adminName }}</p>
		          		<p>管理员的姓ID: {{ scope.row._id }}</p>
		          		<div slot="reference" class="name-wrapper">
		            		<el-tag size="medium">{{ scope.row.adminName }}</el-tag>
		          		</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="管理员账号的添加时间" width="407">
		      	<template slot-scope="scope">
		        	<i class="el-icon-time"></i>
		        	<span>{{ scope.row.addTime}}</span>
		      	</template>
		    </el-table-column>
	  	</el-table>
	</div>
</template>

<script>
	export default{
		name:"LookAdmin",
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
				},
				LookAdmin:[],
		        dialogFormVisible:false,
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
                                _this.dialogFormVisible=false;
                                _this.lookAdmin();
                                
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
		 	lookAdmin(){
		 		var _this=this;
			 	this.$store.dispatch("getAdminList",{
					success(data){
						_this.LookAdmin=data.results;
	                },
	                error(msg){
	                    _this.$message.error(msg);
	                }
				});
		 	}	
		},
		mounted(){
			this.lookAdmin()
		}
	}
</script>

<style scoped="scoped">
	#AdminLog{
		width: 400px;
		height: 300px;
		border: 1px solid black;
		margin: 0 auto;
	}
	#AdminLog h3{
		height: 30px;
		text-align: center;
		margin: 0 auto;
	}
	#AdminLog .btn{
		text-align: center;
	}
</style>