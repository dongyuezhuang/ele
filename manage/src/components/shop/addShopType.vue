 <template>
 	<el-dialog title="添加店铺类别" 
 		:visible="dialogFormVisible" 
 		@update:visible="v=>$emit('update:dialogFormVisible',v)">
	  	<el-form>
	    	<el-form-item label="店铺类别名称">
	      		<el-input ref="shopTypeName" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="店铺类别排序">
	      		<el-input ref="orderNum" autocomplete="off"></el-input>
	    	</el-form-item>
	    	<el-form-item label="店铺类别图片">
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
		    <el-button @click="$emit('update:dialogFormVisible',false)">取 消</el-button>
		    <el-button type="primary" @click="addShopType">提 交</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default{
		name:"addShopType",
		props:["dialogFormVisible","getShopType","pageI"],
		data(){
			return {
				shopPic:""
			}
		},
		methods:{
			addShopType(){
				if(this.$refs.shopTypeName.$data.currentValue!==""&&this.$refs.orderNum.$data.currentValue!==""){
					var formdata=new FormData();
					formdata.set("shopTypeName",this.$refs.shopTypeName.$data.currentValue)
					formdata.set("shopTypePic",document.querySelector(".el-upload__input").files[0])
					formdata.set("orderNum",this.$refs.orderNum.$data.currentValue)
					this.$ajax.post("/addShopType",formdata)
					.then(({data})=>{
						if(data.ok===1){
							this.$message({
								message:data.msg,
								type:"success"
							});
							this.getShopType(this.pageI);
							this.$refs.shopTypeName.clear();
							this.$refs.orderNum.clear();
							this.$refs.upload.clearFiles();
							this.shopPic="";
							this.$emit("update:dialogFormVisible",false)
						}else{
							this.$message.error(data.msg);
						}
					})
				}else{
					this.$message.error("请将内容填写完全");
				}
				
			},
			exceed(){
				this.$message.error("你已经上传了图片");
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
		}
	}
</script>

<style>
</style>