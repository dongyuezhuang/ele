<template>
	<div>
		<div class="toolbar">
			<el-form :inline="true" class="demo-form-inline">
			  	<el-form-item label="商品的名称">
			    	<el-input placeholder="商品的名称" v-model="value"></el-input>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="getGoodsList(1)">查询</el-button>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-button type="primary" @click="openGoodsList">
			    		添加商品
			    	</el-button>
			  	</el-form-item>
			</el-form>
		</div>
		
		
		<el-table :data="GoodsList" style="width: 100%" border>
		    <el-table-column label="商品的ID" width="220">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row._id }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
		          	<p>商品的名称: {{ scope.row.goodsName }}</p>
		          	<p>商品的id: {{ scope.row._id }}</p>
		          	<p>商品的图片: <img width="20" :src="scope.row.goodsPic | imgUrl" alt="" /></p>
		          	<p>商品的价格: {{ scope.row.goodsPrice | currency }}</p>
		          	<p>商品的排序: {{ scope.row.orderNum }}</p>
		          	<p>商品是否热销: {{ scope.row.isHot }}</p>
		          	<p>商品的添加时间: {{ scope.row.addTime | date}}</p>
		          	<div slot="reference" class="name-wrapper">
		            	<el-tag size="medium">{{ scope.row.goodsName }}</el-tag>
		          	</div>
		        	</el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺类型的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
			          	<p>商品类型的名称:{{ scope.row.shopTypeInfo[0].shopTypeName}}</p>
			          	<p>商品类型的ID:{{ scope.row.shopTypeInfo[0]._id }}</p>
			          	<p>商品类型的图片:<img width="20" :src="scope.row.shopTypeInfo[0].shopTypePic | imgUrl" alt="" /></p>
			          	<p>商品类型的排序:{{ scope.row.shopTypeInfo[0].orderNum }}</p>
			          	<p>商品类型的添加时间:{{ scope.row.shopTypeInfo[0].addTime | date }}</p>
			          	<div slot="reference" class="name-wrapper">
			          		<el-tag size="medium">{{ scope.row.shopTypeInfo[0].shopTypeName }}</el-tag>
			          	</div>
			        </el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="店铺的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
			          	<p>店铺的名称:{{ scope.row.shopInfo[0].shopListName }}</p>
			          	<p>店铺的ID:{{ scope.row.shopInfo[0]._id }}</p>
			          	<p>店铺的图片:<img width="20" :src="scope.row.shopInfo[0].shopListPic | imgUrl" alt="" /></p>
			          	<p>店铺的排序:{{ scope.row.shopInfo[0].orderNum }}</p>
			          	<p>店铺的添加时间:{{ scope.row.shopInfo[0].addTime | date }}</p>
			          	<p>店铺类型的ID:{{ scope.row.shopInfo[0].shopTypeId }}</p>
			          	<div slot="reference" class="name-wrapper">
			          		<el-tag size="medium">{{ scope.row.shopInfo[0].shopListName }}</el-tag>
			          	</div>
			        </el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品类型的名称（ID）" width="200">
		      	<template slot-scope="scope">
		        	<el-popover trigger="hover" placement="top">
			          	<p>商品类型的名称:{{ scope.row.goodsTypeInfo[0].goodsTypeName }}</p>
			          	<p>商品类型的ID:{{ scope.row.goodsTypeInfo[0]._id }}</p>
			          	<p>商品类型的添加时间:{{ scope.row.goodsTypeInfo[0].addTime | date }}</p>
			          	<p>店铺类型的ID:{{ scope.row.goodsTypeInfo[0].shopTypeId }}</p>
			          	<p>店铺的ID:{{ scope.row.goodsTypeInfo[0].shopId }}</p>
			          	<div slot="reference" class="name-wrapper">
			          		<el-tag size="medium">{{ scope.row.goodsTypeInfo[0].goodsTypeName }}</el-tag>
			          	</div>
			        </el-popover>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品的图片" width="100">
		      	<template slot-scope="scope">
		        	<img width="50" :src="scope.row.goodsPic | imgUrl" alt="" />
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品的价格" width="100">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.goodsPrice | currency}}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品的排序" width="100">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.orderNum}}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品的描述" width="200">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.goodsMain}}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品是否热销" width="80">
		      	<template slot-scope="scope">
		        	<span>{{ scope.row.isHot}}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="商品的添加时间" width="180">
		      	<template slot-scope="scope">
		      		<i class="el-icon-time"></i>
		        	<span>{{ scope.row.addTime | date }}</span>
		      	</template>
		    </el-table-column>
		    <el-table-column label="操作" width="270">
		      	<template slot-scope="scope">
			        <el-button size="mini" type="danger" @click="deleteGoodsList(scope.row._id)">
			        	删除
			        </el-button>
			        <el-button size="mini" type="info">
			        	修改
			        </el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		
		<div class="block toolbar">
	    	<el-pagination
	      	@current-change="getGoodsList"
	      	:page-size="100"
	      	layout="prev, pager, next, jumper"
	      	:total=pageSum>
	   	 	</el-pagination>
	  	</div>

    	<addGoodsList
    		:ShopTypeList="ShopTypeList"
    		:getGoodsList="getGoodsList"
    		:pageI="pageI"
    		:goodsVisible.sync="goodsVisible">
    	</addGoodsList>
    
	</div>
</template>

<script>
	//引入添加商品的弹框组件
	import addGoodsList from "@/components/goods/addGoodsList"
	export default{
		name:"GoodsList",
		data(){
			return{
				ShopTypeList:[],
				GoodsList:[],
				goodsVisible:false,
				pageI:1,
				pageSum:100,
				value:"",
			}
		},
		methods:{
			deleteGoodsList(id){
				this.$ajax.delete("/getGoodsList",{
					params:{id}
				}).then(({data})=>{
					if(data.ok===1){
						this.getGoodsList(this.pageI)
					}else{
						this.$message.error(data.msg);
					}
				})
			},
			openGoodsList(){
				this.goodsVisible=true
			},
			openSTL(){
				this.$ajax.get("/sureShopType")
				.then(({data})=>{
					this.ShopTypeList=data.results;
				})
			},
			getGoodsList(pageIndex){
				this.pageI=pageIndex||this.pageI;
				this.$ajax.get("/getGoodsList",{
					params:{
						pageIndex:this.pageI,
						value:this.value,
					}
				}).then(({data})=>{
					console.log(2323232,data.results)
					if(data.ok===1){
						this.GoodsList=data.results
						this.pageSum=(data.pageSum)*100
					}else{
						this.$message.error(data.msg);
					}
				})
			}
		},
		mounted(){
			this.openSTL();
			this.getGoodsList(1);
		},
		components:{
			addGoodsList
		}
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