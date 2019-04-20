<template>
	<div>
		<div class="toolbar">
			<el-form :inline="true" class="demo-form-inline">
			  	<el-form-item label="店铺类别的名称">
			    	<el-input placeholder="店铺类别的名称" v-model="value"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="getShopType(1)">查询</el-button>
			  	</el-form-item>
			  	<el-form-item>
			    	<!--<el-button type="primary" @click="$refs.shopType.$data.dialogFormVisible=true">
			    		添加店铺类别
			    	</el-button>-->
			    	<el-button type="primary" @click="dialogFormVisible=true">
			    		添加店铺类别
			    	</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		

		<el-table :data="ShopType" style="width: 100%" border>
		    <el-table-column label="店铺类别的ID" width="220">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row._id }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺类别的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          	<p>店铺类别的名称: {{ scope.row.shopTypeName }}</p>
		          	<p>店铺类别的ID: {{ scope.row._id }}</p>
		          	<p>店铺类别的图片: <img width="20" :src="scope.row.shopTypePic | imgUrl" alt="" /></p>
		          	<p>店铺类别的排序: {{ scope.row.orderNum }}</p>
		          	<p>店铺类别的添加时间: {{ scope.row.addTime | date  }}</p>
		          	<div slot="reference" class="name-wrapper">
		            	<el-tag size="medium">{{ scope.row.shopTypeName }}</el-tag>
		          	</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺类别的图片" width="120">
		      	<template slot-scope="scope">
		        	<img width="50" :src="scope.row.shopTypePic | imgUrl" alt="" />
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺类别的排序" width="130">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.orderNum }}</span>
		      	</template>
		    </el-table-column>
		    
		    <el-table-column label="添加的时间" width="180">
		      	<template slot-scope="scope">
		      		<i class="el-icon-time"></i>
		        	<span>{{ scope.row.addTime | date }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="操作" width="258">
		      	<template slot-scope="scope">
			        <el-button size="mini" type="danger" @click="deleteShopType(scope.row._id)">
			        	删除
			        </el-button>
			        <el-button size="mini" type="info" @click="upShopType(scope.row._id)">
			        	修改
			        </el-button>
			        <el-button size="mini" type="primary" @click="openShop(scope.row._id)">
			        	添加店铺
			        </el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		<!--<addShopType ref="shopType"></addShopType>-->
		<!--添加商品类别的弹框-->
		<addShopType :pageI="pageI" :getShopType="getShopType" :dialogFormVisible.sync="dialogFormVisible"></addShopType>
		<!--添加商品的弹框-->
		<addShop :shopId="''" v-if="shopVisible" :typeId ="typeId" :shopVisible.sync="shopVisible"></addShop>
		
		<div class="block toolbar">
	    	<el-pagination
	      	@current-change="getShopType"
	      	:page-size="100"
	      	layout="prev, pager, next, jumper"
	      	:total=pageSum>
	   	 	</el-pagination>
	  	</div>
		
	</div>
</template>

<script>
	//引入添加店铺类别的弹框组件
	import addShopType from "@/components/shop/addShopType"
	//引入添加店铺的弹框组件
	import addShop from "@/components/shop/addShop"
	export default{
		name:"ShopType",
		data(){
			return {
				ShopType:[],
				dialogFormVisible:false,
				shopVisible:false,
				typeId:"",
				pageSum:1,
				pageI:1,
				value:"",
			}
		},
		components:{
			addShopType,
			addShop
		},
		methods:{
			upShopType(id){//根据店铺类别的ID进行修改------店铺类别信息
//				this.$ajax.post("")
			},
			getShopType(pageIndex){//获得店铺类别的信息-------并进行模糊搜索和分页
				this.pageI=pageIndex||this.pageI;
				var _this=this;
				this.$store.dispatch("getShopType",{
					pageIndex,
					value:this.value,
					success(data){
	                   	_this.ShopType=data.results;
	                   	_this.pageSum=(data.pageSum)*100;
					},
					error(data){
						_this.$message.error(data.msg);
	                }
				})
			},
			deleteShopType(id){//根据店铺类别的ID进行删除------店铺类别信息
				var _this=this;
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			type: 'warning'
        	}).then(()=>{
					this.$store.dispatch("deleteShopType",{
						id,
						success(data){
							_this.$message({
		                        message: data.msg,
		                        type: 'success'
		                   });
		                   _this.getShopType(_this.pageI);
						},
						error(data){
							_this.$message.error(data.msg);
		                }
					})
        		}).catch(()=>{
          			this.$message({
            			type: 'info',
            			message: '已取消删除'
          			});          
        		});	
			},
			openShop(id){
				this.typeId=id;
				this.shopVisible=true;
			}
		},
		mounted(){
			this.getShopType(1)
		},
	}
</script>

<style scoped="scoped">
	.toolbar{
		background: #f4f4f4;
		margin: 10px 0 10px 0;
		padding: 10px;
	}
	.toolbar .el-form-item{
		margin-bottom: 0;
	}
</style>