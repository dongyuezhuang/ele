<template>
	<div>
		<div class="toolbar">
			<el-form :inline="true" class="demo-form-inline">
			  	<el-form-item label="商品类别的名称">
			    	<el-input placeholder="商品类别的名称" v-model="value"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="getGoodsTypeList(1)">查询</el-button>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="openShopList">
			    		添加商品类别
			    	</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		
		
		<el-table :data="GoodsTypeList" style="width: 100%" border>
		    <el-table-column label="商品类别的ID" width="220">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row._id }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品类别的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          	<p>商品类别的名称: {{ scope.row.goodsTypeName }}</p>
		          	<p>商品类别的ID: {{ scope.row._id }}</p>
		          	<p>商品类别的添加时间: {{ scope.row.addTime | date  }}</p>
		          	<div slot="reference" class="name-wrapper">
		            	<el-tag size="medium">{{ scope.row.goodsTypeName }}</el-tag>
		          	</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺类别的名称（ID）" width="220">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
			          	<p>店铺类别的名称:{{ scope.row.goodsTypeInfo[0].shopTypeName }}</p>
			          	<p>商品类别的ID:{{ scope.row.goodsTypeInfo[0]._id }}</p>
			          	<p>店铺类别的图片:<img width="20" :src="scope.row.goodsTypeInfo[0].shopTypePic | imgUrl" alt="" /></p>
			          	<p>店铺类别的排序:{{ scope.row.goodsTypeInfo[0].orderNum }}</p>
			          	<p>商品类别的添加时间:{{ scope.row.goodsTypeInfo[0].addTime | date }}</p>
			          	<div slot="reference" class="name-wrapper">
			          		<el-tag size="medium">{{ scope.row.goodsTypeInfo[0].shopTypeName }}</el-tag>
			          	</div>
			        </el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺的名称（ID）" width="220">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
			          	<p>店铺的名称:{{ scope.row.goodsInfo[0].shopListName }}</p>
			          	<p>店铺的ID:{{ scope.row.goodsInfo[0]._id}}</p>
			          	<p>店铺的图片:<img width="20" :src="scope.row.goodsInfo[0].shopListPic | imgUrl" alt="" /></p>
			          	<p>店铺的排序:{{ scope.row.goodsInfo[0].orderNum }}</p>
			          	<p>店铺的添加时间:{{ scope.row.goodsInfo[0].addTime | date}}</p>
			          	<p>店铺类别的ID:{{ scope.row.goodsInfo[0].shopTypeId}}</p>
			          	<div slot="reference" class="name-wrapper">
			          		<el-tag size="medium">{{ scope.row.goodsInfo[0].shopListName }}</el-tag>
			          	</div>
			        </el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品类别的添加时间" width="180">
		      	<template slot-scope="scope">
		      		<i class="el-icon-time"></i>
		        	<span>{{ scope.row.addTime | date }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="操作" width="285">
		      	<template slot-scope="scope">
			        <el-button size="mini" type="danger" @click="deleteGoodsTypeList(scope.row._id)">
			        	删除
			        </el-button>
			        <el-button size="mini" type="info">
			        	修改
			        </el-button>
			        <el-button size="mini" type="primary">
			        	添加商品
			        </el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		
		<div class="block toolbar">
	    	<el-pagination
	      	@current-change="getGoodsTypeList"
	      	:page-size="100"
	      	layout="prev, pager, next, jumper"
	      	:total=pageSum>
	   	 	</el-pagination>
	  	</div>
	  	
	  	
	  	
		<addGoodsTypeList 
			:pageI="pageI"
			:ShopTypeList="ShopTypeList"
			:getGoodsTypeList="getGoodsTypeList"
			:dialogFormVisible.sync="dialogFormVisible">
		</addGoodsTypeList>
	</div>
</template>

<script>
	//引入添加商品类别的弹框组件
	import addGoodsTypeList from "@/components/goods/addGoodsTypeList"
	export default{
		name:"GoodsTypeList",
		data(){
			return{
				GoodsTypeList:[],
				dialogFormVisible:false,
				ShopTypeList:[],
				pageSum:100,
				pageI:1,
				value:"",
			}
		},
		methods:{
			deleteGoodsTypeList(id){//根据ID删除商品类别信息
				this.$ajax.delete("/getGoodsTypeList",{
					params:{id}
				}).then(({data})=>{
					console.log(76767676,data)
					if(data.ok===1){
						this.getGoodsTypeList(this.pageI)
						this.$message.success(data.msg);
					}else{
						this.$message.error(data.msg);
					}
				})
			},
			getGoodsTypeList(pageIndex){//获取商品类别的信息-----------并进行模糊搜索和分页
				this.pageI=pageIndex||this.pageI;
				this.$ajax.get("/getGoodsTypeList",{
					params:{
						pageIndex:this.pageI,
						value:this.value,
					}
				}).then(({data})=>{
					if(data.ok===1){
						this.GoodsTypeList=data.results
						this.pageSum=(data.pageSum)*100
					}else{
						this.$message.error(data.msg);
					}
				})
			},
			openShopList(){//点击添加商品类别--------获取店铺类别的信息
				this.dialogFormVisible=true
				this.$ajax.get("/getsShopTypeList")
				.then(({data})=>{
					this.ShopTypeList=data.results;
				})
			},
		},
		mounted(){
			this.getGoodsTypeList(1)
		},
		components:{
			addGoodsTypeList
		}
	}
</script>

<style scoped="scoped">
	.toolbar{
		background: #f4f4f4;
		padding: 10px;
		margin: 10px 0 10px 0;
	}
	.toolbar .el-form-item{
		margin-bottom: 0;
	}
</style>