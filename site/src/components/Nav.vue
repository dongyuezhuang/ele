<template>
	<div>
		<div id="Nav">
				<mt-swipe :auto="0">
				  	<mt-swipe-item v-for="(item,i) in shopTypeList" :key="i">
				  		<dl v-for="info in item" @click="showShopList(info._id)" :key="info._id">
							<img :src="info.shopTypePic | imgUrl"  alt="" />
							<span>{{info.shopTypeName}}</span>
						</dl>
						
				  	</mt-swipe-item>
				</mt-swipe>
		</div>
	</div>
</template>


<script>
	export default{
		name:"Nav",
		data(){
			return{
				shopTypeList:[],
			}
		},
		methods:{
			getshopTypeList(){
				this.$ajax.get("/getshopTypeList")
				.then(({data})=>{
					this.shopTypeList=data.shopTypeList
				})
			},
			showShopList(id){
				this.$router.push("/shopNew?id="+id)
				this.$bus.$emit("changeIsShow",false)
			}
			
		},
		mounted(){
			this.getshopTypeList()
		},
	}
</script>

<style scoped="scoped">
#Nav{
	width: 6.38rem;
	height: 3.24rem;
	margin: 0 auto;
	overflow: hidden;
}
#Nav  .mint-swipe{
	width: 6.38rem;
	height: 3rem;
	margin-top: 0.24rem;
}
#Nav .mint-swipe .mint-swipe-item{
	width:100%;
	height:100%;
	overflow: hidden;
}

#Nav .mint-swipe .mint-swipe-item dl{
	float: left;
	width:1.15rem;
	height:1.15rem;
	overflow: hidden;
	margin-left:0.1rem;
	margin-top:0.1rem;
}
#Nav .mint-swipe .mint-swipe-item dl img{
	width:0.7rem;
	height:0.66rem;
	margin: 0 auto;
	margin-bottom: 0.15rem;
}
#Nav .mint-swipe .mint-swipe-item dl span{
	display: block;
	height:0.26rem;
	font-size:0.24rem;
	margin: 0 auto;
	color: #666;
	text-align:center;
}
</style>