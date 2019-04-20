<template>
	<div>
		<div class="toolbar">
			<el-form :inline="true" class="demo-form-inline">
			  	<el-form-item label="管理员的日志">
			    	<el-input v-model="value" placeholder="管理员的姓名"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="getAdminLog(1)">查询</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		
		
		
		
		<el-table :data="adminLogList" style="width: 100%" border>
		    <el-table-column label="管理员的ID" width="220">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row._id }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="管理员的姓名" width="120">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          	<p>管理员的姓名: {{ scope.row.adminName }}</p>
		          	<p>管理员姓名的ID: {{ scope.row._id }}</p>
		          	<div slot="reference" class="name-wrapper">
		            	<el-tag size="medium">{{ scope.row.adminName }}</el-tag>
		          	</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="类型" width="120">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.logInfo[0].typeName}}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="管理员的日志" width="260">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.detail }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="管理员日志的添加时间" width="180">
		      	<template slot-scope="scope">
		      		<i class="el-icon-time"></i>
		        	<span>{{ scope.row.addTime | date }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="操作">
		      	<template slot-scope="scope">
			        <el-button size="mini" type="danger" @click="deleteAdminLog(scope.row._id)">
			        	删除
			        </el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		<div class="block toolbar">
	    	<el-pagination
	      	@current-change="getAdminLog"
	      	:page-size="100"
	      	layout="prev, pager, next, jumper"
	      	:total=pageSum>
	   	 	</el-pagination>
	  </div>
	</div>
</template>


<script>
	export default{
		name:"AdminLog",
		data(){
			return {
				adminLogList:[],
        		pageSum:1,
        		pageI:1,
        		value:"",
			}
		},
		mounted(){
			this.getAdminLog(1);
		},
		methods:{
			getAdminLog(pageIndex){
				this.pageI=pageIndex||this.pageI;
				var _this=this;
				this.$store.dispatch("getAdminLogs",{
					pageIndex,
					value:this.value,
					success(data){
						_this.adminLogList=data.adminLogList;
						_this.pageSum=(data.pageSum)*100;
					},
					error(msg){
						_this.$message.error(msg);
					}
				})
			},
			deleteAdminLog(id){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			type: 'warning'
        		}).then(()=>{
        			var _this=this;
					this.$store.dispatch("deleteAdminLog",{
						id,
						success(data){
							_this.$message({
		                        message: data.msg,
		                        type: 'success'
		                    });
		                    _this.getAdminLog(_this.pageI);
						},
						error(msg){
		                    _this.$message.error(msg);
		                }
					})
        		}).catch(()=>{
          			this.$message({
            			type: 'info',
            			message: '已取消删除'
          			});          
        		});	
			},
		}
	}
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
	.toolbar{
		background: #f4f4f4;
		margin: 10px 0 10px 0;
		padding: 10px;
	}
	.toolbar .el-form-item{
		margin-bottom: 0;
	}
</style>