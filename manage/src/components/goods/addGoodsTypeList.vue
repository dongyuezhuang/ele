 <template>
 	<el-dialog title="添加商品类别" 
 		:visible="dialogFormVisible" 
 		@update:visible="quxiao">
	  	<el-form>
	    	<el-form-item label="商品类别名称">
	      		<el-input ref="goodsTypeName" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="店铺类型的名称（ID）">
	      		<el-select placeholder="请选择" v-model="shopTypeId" @change="changeShopType">
			    	<el-option
			      		v-for="item in ShopTypeList"
			      		:key="item._id"
			      		:label="item.shopTypeName"
			      		:value="item._id">
			    	</el-option>
			  	</el-select>
	    	</el-form-item>
	    	<el-form-item label="店铺的名称（ID）">
	      		<el-select placeholder="请选择" v-model="shopId">
			    	<el-option
			      		v-for="item in ShopList"
			      		:key="item._id"
			      		:label="item.shopListName"
			      		:value="item._id">
			    	</el-option>
			  	</el-select>
	    	</el-form-item>
	  	</el-form>
		<div slot="footer" class="dialog-footer">
		    <el-button @click="quxiao">取 消</el-button>
		    <el-button type="primary" @click="addGoodsTypeList">提 交</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default{
		name:"addGoodsTypeList",
		props:["dialogFormVisible","ShopTypeList","getGoodsTypeList","pageI"],
		data(){
			return {
				radio:"1",
				shopTypeId:"",
				shopId:"",
				ShopList:[],
			}
		},
		methods:{
			addGoodsTypeList(){//添加商品类别的信息
				if(this.shopTypeId!==""&&this.shopId!==""&&this.$refs.goodsTypeName.$data.currentValue!==""){
					this.$ajax.post("/addGoodsTypeList",{
						goodsTypeName:this.$refs.goodsTypeName.$data.currentValue,
						shopTypeId:this.shopTypeId,
						shopId:this.shopId,
					}).then(({data})=>{
						if(data.ok===1){
							this.$message({
								message:data.msg,
								type:"success"
							});
							this.$refs.goodsTypeName.clear();
							this.shopTypeId=null
							this.shopId=null;
							this.$emit('update:dialogFormVisible',false)
							this.getGoodsTypeList(this.pageI);
	//						if(this.getShopList){
	//							this.getShopList(this.pageI);
	//						}else{
	//							this.$router.push("/ShopList")
	//						}
						}else{
							this.$message.error(data.msg);
						}
					})
				}else{
					this.$message.error("以上内容不能为空");
				}
			},
			changeShopType(){//通过改变商品类别的下拉框------来获取商品类别ID------进行二级联动
				this.shopId=null;
				this.$ajax.get("/getShopList",{
					params:{shopTypeId:this.shopTypeId}
				}).then(({data})=>{
					this.ShopList=data.results;
				})
			},
			quxiao(){
				this.$emit('update:dialogFormVisible',false)
				this.shopTypeId=null
				this.shopId=null;
			}
		}
	}
</script>

<style>
</style>