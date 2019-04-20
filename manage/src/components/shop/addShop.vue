<template>
	<el-dialog title="添加店铺" 
 		:visible="shopVisible" 
 		@update:visible="v=>$emit('update:shopVisible',v)">
	  	<el-form>
	    	<el-form-item label="店铺的名称">
	      		<el-input ref="shopListName" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="店铺的排序">
	      		<el-input ref="orderNum" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="店铺类型的名称（ID）">
	      		<el-select placeholder="请选择" v-model="shopTypeId">
			    	<el-option
			      		v-for="item in shopTypeList"
			      		:key="item._id"
			      		:label="item.shopTypeName"
			      		:value="item._id">
			    	</el-option>
			  	</el-select>
	    	</el-form-item>	
	    	<el-form-item label="店铺的图片">
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
				<img v-if="shopPic.length>0"  width="100" :src="shopPic"/>
	    	</el-form-item>
	  	</el-form>
		<div slot="footer" class="dialog-footer">
		    <el-button @click="cancle">取 消</el-button>
		    <el-button type="primary" @click="addShopList">提 交</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default{
		name:"addShop",
		props:["shopVisible","typeId","getShopList","pageI","shopId"],
		data(){
			return{
				shopTypeId:"5bf61e339cd1992f589e56fa",
				shopTypeList:[],
				shopPic:"",
			}
		},
		methods:{
			addShopList(){//添加店铺的信息
				console.log(1111111111111)
				if(this.$refs.shopListName.$data.currentValue!==""&&this.$refs.orderNum.$data.currentValue!==""&&this.shopTypeId!==""){
					var formdata=new FormData();
					formdata.set("shopListName",this.$refs.shopListName.$data.currentValue)
					formdata.set("shopListPic",document.querySelector(".el-upload__input").files[0])
					formdata.set("orderNum",this.$refs.orderNum.$data.currentValue)
					formdata.set("shopTypeId",this.shopTypeId)
					if(this.shopId.length>0){//修改
						//修改的依据----点击按钮的id
						formdata.set("shopId",this.shopId)
						this.$ajax.put("/addShopList",formdata)
						.then(({data})=>{
							if(data.ok===1){
								this.$message({
									message:data.msg,
									type:"success"
								});
								this.$refs.shopListName.clear();
								this.$refs.orderNum.clear();
								this.$refs.upload.clearFiles();
								this.shopTypeId=null;
								this.shopPic="";
								this.$emit("update:shopVisible",false)
								if(this.getShopList){
									this.getShopList(this.pageI);
								}else{
									this.$router.push("/ShopList")
								}
							}else{
								this.$message.error(data.msg);
							}
						})
					}else{//添加
						this.$ajax.post("/addShopList",formdata)
						.then(({data})=>{
							if(data.ok===1){
								this.$message({
									message:data.msg,
									type:"success"
								});
								this.$refs.shopListName.clear();
								this.$refs.orderNum.clear();
								this.$refs.upload.clearFiles();
								this.shopTypeId=null;
								this.$emit("update:shopVisible",false)
								if(this.getShopList){
									this.getShopList(this.pageI);
								}else{
									this.$router.push("/ShopList")
								}
							}else{
								this.$message.error(data.msg);
							}
						})
					}
					
					
					
				}else{
					this.$message.error("请将内容填写完全");
				}
			},
			exceed(){
				this.$message.error("你已经上传了图片");
			},
			getshopTypeList(){
				this.$ajax.get("/sureShopType")
				.then(({data})=>{
					this.shopTypeList=data.results;
				})
			},
			getShopInfo(){
				var _this=this;
				this.$store.dispatch("getShopInfo",{
					id:this.shopId,
					success(data){
						_this.$message({
	                        message: data.msg,
	                        type: 'success'
	                  	});
	                  	_this.$refs.shopListName.$data.currentValue=data.results.shopListName
	                  	_this.$refs.orderNum.$data.currentValue=data.results.orderNum
	                  	_this.$refs.upload=data.results.shopListPic
	                  	_this.shopTypeId=data.results.shopTypeId
	                  	_this.shopPic="http://127.0.0.1/"+data.results.shopListPic
					},
					error(msg){
	                    _this.$message.error(msg);
	                }
				})
			},
			cancle(){
				this.$emit('update:shopVisible',false)
				this.$refs.shopListName.clear();
				this.$refs.orderNum.clear();
				this.$refs.upload.clearFiles();
				this.shopTypeId=null;
			},
			upChange(file){
				this.$refs.upload.clearFiles();
				//转为base64
				var _this=this;
				var reader=new FileReader();
				reader.readAsDataURL(file.raw)
				reader.onload=function(){
					_this.shopPic=this.result
				}
			}
		},
		mounted(){
			this.getshopTypeList();
			this.shopTypeId=this.typeId;
			if(this.shopId.length>0){//确认是点击的修改
				this.getShopInfo()
			}
		}
		
	}
</script>

<style>
</style>