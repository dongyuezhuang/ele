<template>
	<div>
		<div class="toolbar">
			<el-form :inline="true" class="demo-form-inline">
			  	<el-form-item label="店铺的名称">
			    	<el-input placeholder="店铺的名称" v-model="shopName"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="getShopList(1)">查询</el-button>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="shopVisible=true">添加店铺</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		

		<el-table :data="ShopList" style="width: 100%" border>
		    <el-table-column label="店铺的ID" width="220">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row._id }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          	<p>店铺的名称: {{ scope.row.shopListName }}</p>
		          	<p>店铺的ID: {{ scope.row._id }}</p>
		          	<p>店铺的图片: <img width="20" :src="scope.row.shopListPic | imgUrl" alt="" /></p>
		          	<p>店铺的排序: {{ scope.row.orderNum }}</p>
		          	<p>店铺的添加时间: {{ scope.row.addTime | date }}</p>
		          	<div slot="reference" class="name-wrapper">
		            	<el-tag size="medium">{{ scope.row.shopListName }}</el-tag>
		          	</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺类型的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          	<p>店铺类型的名称: {{ scope.row.shopInfo[0].shopTypeName }}</p>
		          	<p>店铺类型的ID: {{ scope.row.shopInfo[0]._id }}</p>
		          	<p>店铺类型的图片:<img width="20" :src="scope.row.shopInfo[0].shopTypePic | imgUrl" alt="" /></p>
		          	<p>店铺类型的排序: {{ scope.row.shopInfo[0].orderNum }}</p>
		          	<p>店铺类型的添加时间: {{ scope.row.shopInfo[0].addTime | date }}</p>
		          	<div slot="reference" class="name-wrapper">
		            	<el-tag size="medium">{{ scope.row.shopInfo[0].shopTypeName }}</el-tag>
		          	</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺的图片" width="100">
		      	<template slot-scope="scope">
		        	<img width="50" :src="scope.row.shopListPic | imgUrl" alt="" />
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺的排序" width="100">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.orderNum }}</span>
		      	</template>
		    </el-table-column>
		    
		    <el-table-column label="店铺的添加时间" width="180">
		      	<template slot-scope="scope">
		      		<i class="el-icon-time"></i>
		        	<span>{{ scope.row.addTime | date }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="操作" width="300">
		      	<template slot-scope="scope">
			        <el-button size="mini" type="danger" @click="deleteShopList(scope.row._id)">
			        	删除
			        </el-button>
			        <el-button size="mini" type="info" @click="openShopVisible(scope.row._id)">
			        	修改
			        </el-button>
			        <el-button size="mini" type="primary">
			        	添加商品类型
			        </el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		
		<!--添加店铺的弹框-->
		<addShop v-if="shopVisible" :shopId="shopId" :pageI="pageI" :shopVisible.sync="shopVisible" :shopTypeList="shopTypeList" :getShopList="getShopList"></addShop>
		
		
		<div class="block toolbar">
	    	<el-pagination
	      	@current-change="getShopList"
	      	:page-size="100"
	      	layout="prev, pager, next, jumper"
	      	:total=pageSum>
	   	 	</el-pagination>
	  	</div>
		
	</div>
</template>

<script>
	//引入添加商品的弹框组件
	import addShop from "@/components/shop/addShop"
	export default{
		name:"ShopList",
		data(){
			return {
				ShopList:[],
				shopVisible:false,
				shopTypeId:"",
				shopTypeList:[],
				pageSum:1,
				pageI:1,
				shopId:"",
				shopName:''
			}
		},
		components:{
			addShop
		},
		methods:{
//			getshopTypeList(){
//				this.shopVisible=true;
//				this.$ajax.get("http://127.0.0.1/getshopTypeList")
//				.then(({data})=>{
//					this.shopTypeList=data.results
//				})
//			},
			getShopList(pageIndex){//获得店铺的信息-------并进行模糊搜索和分页
				this.pageI=pageIndex||this.pageI;
				var _this=this;
				this.$store.dispatch("getShopList",{
					pageIndex:this.pageI,
					shopName:this.shopName,
					success(data){
	                   	_this.ShopList=data.stopListInfo;
	                   	_this.pageSum=(data.pageSum)*100;
					},
					error(data){
	                    _this.$message.error(data.msg);
	                }
				})
			},
			deleteShopList(id){//根据店铺的ID删除-------店铺的信息
				var _this=this;
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			type: 'warning'
        		}).then(()=>{
					this.$store.dispatch("deleteShopList",{
						id,
						success(data){
							_this.$message({
		                        message: data.msg,
		                        type: 'success'
		                   	});
		                  	_this.getShopList(_this.pageI);
						},
						error(data){
		                    _this.$message.error(data.msg);
		                    _this.getShopList(_this.pageI);
		                }
					})
        		}).catch(()=>{
          			this.$message({
            			type: 'info',
            			message: '已取消删除'
          			});          
        		});	
			},
			openShopVisible(id){
				this.shopVisible=true;
				this.shopId=id;
			},
		},
		mounted(){
			this.getShopList(1)
//			this.getshopTypeList()
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