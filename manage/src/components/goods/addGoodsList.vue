 <template>
 	<el-dialog title="添加商品" 
 		:visible="goodsVisible" 
 		@update:visible="quxiao">
	  	<el-form>
	  		<el-form-item label="店铺类别的名称（ID）">
	      		<el-select placeholder="请选择" v-model="stlist" @change="changeSTL">
			    	<el-option
			      		v-for="item in ShopTypeList"
			      		:key="item._id"
			      		:label="item.shopTypeName"
			      		:value="item._id">
			    	</el-option>
			  	</el-select>
	    	</el-form-item>
	    	<el-form-item label="店铺的名称（ID）">
	      		<el-select placeholder="请选择" v-model="slist" @change="changeSL">
			    	<el-option
			      		v-for="item in ShopList"
			      		:key="item._id"
			      		:label="item.shopListName"
			      		:value="item._id">
			    	</el-option>
			  	</el-select>
	    	</el-form-item>
	    	<el-form-item label="商品类别的名称（ID）">
	      		<el-select placeholder="请选择" v-model="gtlist">
			    	<el-option
			      		v-for="item in GoodsTypeList"
			      		:key="item._id"
			      		:label="item.goodsTypeName"
			      		:value="item._id">
			    	</el-option>
			  	</el-select>
	    	</el-form-item>
	    	<el-form-item label="商品的名称">
	      		<el-input ref="goodsName" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="商品的排序">
	      		<el-input ref="goodsNum" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="商品的价格">
	      		<el-input ref="goodsPrice" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="商品的描述">
	      		<el-input ref="goodsMain" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="商品是否是热销">
	      		<el-radio v-model="radio" label="1">是热销</el-radio>
  				<el-radio v-model="radio" label="2">不是热销</el-radio>
	    	</el-form-item>
	    	<el-form-item label="商品的图片">
		      	<el-upload class="upload-demo" 
		      		ref="upload" 
		      		action="" 
		      		:on-exceed="exceed"
		      		:on-change="upChange"
		      		:limit="1" 
		      		:auto-upload="false">
				  	<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
				  	<div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过500kb</div>
				</el-upload>
				<img v-if="goodsPic.length>0"  width="100" :src="goodsPic"/>
	    	</el-form-item>
	  	</el-form>
		<div slot="footer" class="dialog-footer">
		    <el-button @click="quxiao">取 消</el-button>
		    <el-button type="primary" @click="addGoodsList">提 交</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default{
		name:"addGoodsTypeList",
		props:["goodsVisible","ShopTypeList","pageI","getGoodsList"],
		data(){
			return {
				radio:"1",
				stlist:'',
				slist:"",
				gtlist:"",
				ShopList:[],
				GoodsTypeList:[],
				id:"",
				goodsPic:"",
				goodsMain:"",
			}
		},
		methods:{
			changeSTL(){
				var id=this.stlist
				this.slist=null;
				this.gtlist=null;
				this.$ajax.get("/getShop",
				{
					params:{id}
				}).then(({data})=>{
					this.ShopList=data.results
				})
			},
			changeSL(){
				var id=this.slist
				this.gtlist=null;
				this.$ajax.get("/getGoodsType",
				{
					params:{id}
				}).then(({data})=>{
					this.GoodsTypeList=data.results
				})
			},
			addGoodsList(){
				var formdata=new FormData();
				formdata.set("shopTypeListId",this.stlist)
				formdata.set("shopListId",this.slist)
				formdata.set("goodTypeListId",this.gtlist)
				formdata.set("goodsName",this.$refs.goodsName.$data.currentValue)
				formdata.set("goodsNum",this.$refs.goodsNum.$data.currentValue)
				formdata.set("goodsPrice",this.$refs.goodsPrice.$data.currentValue)
				formdata.set("radio",this.radio)
				formdata.set("goodsMain",this.$refs.goodsMain.$data.currentValue)
				formdata.set("goodsPic",document.querySelector(".el-upload__input").files[0])
				if(this.stlist!==""&&this.slist!==""&&this.gtlist!==""&&this.$refs.goodsName.$data.currentValue!==""&&this.$refs.goodsNum.$data.currentValue!==""&&this.$refs.goodsPrice.$data.currentValue!==""){
					var _this=this;
					this.$ajax.post("/addGoodsList",formdata)
					.then(({data})=>{
						if(data.ok===1){
							this.$message({
								message:data.msg,
								type:"success"
							});
							this.$emit('update:goodsVisible',false)
							this.stlist=null;
							this.slist=null;
							this.gtlist=null;
							this.$refs.goodsName.clear();
							this.$refs.goodsNum.clear();
							this.$refs.goodsPrice.clear();
							this.radio="1";
							this.$refs.upload.clearFiles();
							this.goodsPic="";
							this.$refs.goodsMain.clear();
		//						if(this.getShopList){
								_this.getGoodsList(this.pageI);
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
			exceed(){
				this.$message.error("你已经上传了图片");
			},
			quxiao(){
				this.$emit('update:goodsVisible',false)
				this.stlist=null;
				this.slist=null;
				this.gtlist=null;
				this.$refs.goodsName.clear();
				this.$refs.goodsNum.clear();
				this.$refs.goodsPrice.clear();
				this.radio="1";
				this.$refs.upload.clearFiles();
				this.goodsPic="";
				$refs.goodsMain.clear();
			},
			upChange(file){
				this.$refs.upload.clearFiles();
				//转为base64
				var _this=this;
				var reader=new FileReader();
				reader.readAsDataURL(file.raw)
				reader.onload=function(){
					_this.goodsPic=this.result
				}
			}
		}
	}
</script>

<style>
</style>