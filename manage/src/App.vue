<template>
	<el-container>
		<!--顶栏容器-->
		<el-header>
			<el-row>
				<el-col :span="8" class="logo" :style="{width:isCollapse?'64px':'240px'}">
					<div>
						{{isCollapse?"外卖":"外卖后台管理系统"}}
					</div>
				</el-col>
				<el-col :span="8" class="handle">
					<i @click="isCollapse=!isCollapse" :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i>
				</el-col>
				<el-col :span="8" class="admin">
					<div>
						<img src="./assets/9.jpg" alt="" />
						<el-dropdown class="new">
							<span class="el-dropdown-link">
								<strong>{{$store.state.Login.adminName}}</strong><i class="el-icon-arrow-down el-icon--right"></i>
						  	</span>
						  	<el-dropdown-menu slot="dropdown">
						    	<el-dropdown-item>
						    		<span @click="upPwd1">修改密码</span>
						    	</el-dropdown-item>
						    	<el-dropdown-item>
						    		<span @click="deleteAdmin">删除账户</span>
						    	</el-dropdown-item>
						    	<el-dropdown-item>
						    		<span @click="$store.commit('OUT_LOGIN',1)">退出登陆</span>
						    	</el-dropdown-item>
						  	</el-dropdown-menu>
						</el-dropdown>
					</div>
				</el-col>
			</el-row>
		</el-header>
		<!--底栏容器-->
		<el-container>
			<!--侧边栏容器-->
			<el-aside>
				<el-menu :collapse="isCollapse" :collapse-transition="false" :style="{width:isCollapse?'64px':'240px'}">
				  	<el-submenu index="1">
				    	<template slot="title">
				      		<i class="el-icon-location"></i>
				      		<span slot="title">管理员信息</span>
				    	</template>
					    <el-menu-item-group>
					      	<el-menu-item index="1-1" @click="$router.push('/LookAdmin')">查看管理员信息</el-menu-item>
					      	<el-menu-item index="1-2" @click="$router.push('/AdminLog')">查看管理员日志</el-menu-item>
					    </el-menu-item-group>
				  	</el-submenu>
				  	
				  	<!-- <el-submenu index="2">
				    	<template slot="title">
				      		<i class="el-icon-location"></i>
				      		<span slot="title">广告信息</span>
				    	</template>
					    <el-menu-item-group>
					      	<el-menu-item index="2-1" @click="$router.push('/advTypeList')">广告的类别管理</el-menu-item>
					      	<el-menu-item index="2-2" @click="$router.push('/advList')">广告的管理</el-menu-item>
					    </el-menu-item-group>
				  	</el-submenu> -->
				  	
				  	<el-submenu index="3">
				    	<template slot="title">
				      		<i class="el-icon-location"></i>
				      		<span slot="title">商品信息</span>
				    	</template>
					    <el-menu-item-group>
					      	<el-menu-item index="3-1" @click="$router.push('/GoodsTypeList')">商品的类别管理</el-menu-item>
					      	<el-menu-item index="3-2" @click="$router.push('/GoodsList')">商品的管理</el-menu-item>
					    </el-menu-item-group>
				  	</el-submenu>
				  	
				  	<el-submenu index="4">
				    	<template slot="title">
				      		<i class="el-icon-location"></i>
				      		<span slot="title">店铺管理</span>
				    	</template>
					    <el-menu-item-group>
					    	<el-menu-item index="4-1" @click="$router.push('/ShopType')">店铺的类别管理</el-menu-item>
					    	<el-menu-item index="4-2" @click="$router.push('/ShopList')">店铺的管理</el-menu-item>
					    </el-menu-item-group>
				  	</el-submenu>
				</el-menu>
			</el-aside>
			<!--主要区域容器-->
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
		
		
		
		
		<el-dialog title="修改密码" :visible.sync="dialogFormVisible">	
			<el-form id="AdminReset" ref="loginForm" :rules="rules" :model="loginForm">
				<el-form-item label="管理员账号："  prop="adminName">
					<el-input type="txet" v-model="loginForm.adminName" placeholder="用户名不可修改"></el-input>
				</el-form-item>
				<el-form-item label="旧密码：" prop="adminPwd">
					<el-input type="password" v-model="loginForm.adminPwd" placeholder="请输入旧密码"></el-input>
				</el-form-item>
				<el-form-item label="新密码：" prop="adminPwd1">
					<el-input type="password" v-model="loginForm.adminPwd1" placeholder="请输入新密码"></el-input>
				</el-form-item>
				<el-form-item label="确认新密码：" prop="adminPwd2">
					<el-input type="password" v-model="loginForm.adminPwd2" placeholder="再次输入新密码"></el-input>
				</el-form-item>
				<el-form-item class="btn">
					<el-button type="primary" @click="submitForm('loginForm')">确认</el-button>
					<el-button type="success" @click="dialogFormVisible=false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		

	</el-container>
</template>

<script>
	export default {
		name: 'App',
		props:["index"],
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
				isCollapse:false,
				rules:{
					adminName:[
						{ required: true, message: '管理员账号不可修改', trigger: 'blur' },
            			{ min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
					],
					adminPwd:[
						{ required: true, message: '请输入管理员密码', trigger: 'blur' },
            			{ min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }
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
					adminPwd:"",
					adminPwd1:"",
					adminPwd2:"",
				},
		        dialogFormVisible:false,
		        id:"",
			}
		},
		methods:{
			upPwd1(){
				this.dialogFormVisible=true;
				this.$ajax.post("http://127.0.0.1/upPwd1",{
					adminId:localStorage.adminId,
					adminName:localStorage.adminName
				}).then(({data})=>{
					this.loginForm.adminName=data.results[0].adminName
					this.id=data.results[0]._id
				})
			},
			submitForm(formName){
		        this.$refs[formName].validate((valid)=>{
		        	if(valid){
						var _this=this;
		        		this.$ajax.post("http://127.0.0.1/upPwd2",{
		        			id:this.id,
		        			adminPwd:this.loginForm.adminPwd,
		        			adminPwd1:this.loginForm.adminPwd1,
						}).then(({data})=>{
							if(data.ok===1){
								this.dialogFormVisible=false;
								this.$message.success(data.msg);
								var times=setTimeout(function(){
									_this.$store.commit('OUT_LOGIN',1)
								},5000)
							}else{
								this.$message.error(data.msg);
							}
						})
		        	}else{
			            this.$message.error("内容不正确");
			            return false;
		        	};
		       });
		    },
		    deleteAdmin(){
		    	this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			type: 'warning'
        		}).then(()=>{
        			var _this=this;
					this.$ajax.post("http://127.0.0.1/deleteAdmin",{
						id:localStorage.adminId
					}).then(({data})=>{
						if(data.ok===1){
							this.$message.success(data.msg);
							var times=setTimeout(function(){
								_this.$store.commit('OUT_LOGIN',1)
							},5000)
						}else{
							this.$message.error(data.msg);
						}
					})
        		}).catch(()=>{
          			this.$message({
            			type: 'info',
            			message: '已取消删除'
          			});          
        		});
		    }
		},
		mounted(){
			
		}
	}
</script>

<style>
	*{padding: 0;margin: 0;}
	.el-header{
		padding: 0;
		background:royalblue;
	}
	.el-header .logo{
		color: #fff;
		width:240px;
		text-align: center;
		font-size: 20px;
		line-height: 60px;
		/*border-right:1px solid #ccc;*/
	}
	.el-header .handle{
		width:200px;
		height: 60px;
	}
	.el-header .handle i{
		color: #fff;
		font-size: 20px;
		line-height: 60px;
	}
	.el-header .admin{
		float: right;
		height: 60px;
		line-height: 60px;
		text-align: right;
	}
	.el-header .admin img{
		width:40px;
		height: 40px;
		border-radius: 50%;
		vertical-align: middle;
	}
	.el-header .admin .new{
		padding: 0 24px 0 0;
	}
	.el-footer .el-aside{
		padding: 0;
		background:gray;
	}
	.el-footer .el-main{
		padding: 0;
		background:cornflowerblue;
	}
	.el-table th,.el-table td{
		text-align:center;
	}
	strong{
		font-size:16spx;
		color: #fff;
		padding:10px;
	}
</style>