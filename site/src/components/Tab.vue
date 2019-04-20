<template>
	<div>
		<div id="Tab">
			<div class="top">
				<div class="box">
					<i></i>
					<span>推荐商家</span>
					<em></em>
				</div>
			</div>
			
			
			<div class="bottom">
				<li>
					<span>总和排序</span>
				</li>
				<li>
					<span>距离最近</span>
				</li>
				<li>
					<span>品质联盟</span>
				</li>
				<li>
					<span>筛选</span>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Tab",
		data(){
			return{
				
			}
		},
		methods:{
			ScrollTop(){
              var headNav=document.querySelector(".bottom");
              window.onscroll=function(){
                  var sTop=document.body.scrollTop || document.documentElement.scrollTop;
                  if(sTop>5){
                      	headNav.style.position="fixed";
                      	headNav.style.top="5";
                  	}else{
                      	headNav.style.position="";
                  	}
              	}
          	}
		},
		mounted(){
//			this.ScrollTop()
		}
	}
</script>

<style scoped="scoped">
#Tab{
	width: 100%;
	height: 1.57rem;
}
#Tab .top{
	width:100%;
	height: 0.84rem;
	overflow: hidden;
}
#Tab .top .box{
	width:2.32rem;
	height: 0.63rem;	
	margin: 0.2rem auto 0;
	overflow: hidden;
}
#Tab .top .box i{
	float: left;
	width:0.36rem;
	height: 0.02rem;
	background: #999;
	margin-top: 0.29rem;
}
#Tab .top .box span{
	float: left;
	width:1.59rem;
	height: 0.63rem;
	text-align: center;
	font-size:0.26rem;
	line-height: 0.63rem;
}
#Tab .top .box em{
	float: left;
	width:0.36rem;
	height: 0.02rem;
	background: #999;
	margin-top: 0.29rem;
}
#Tab .bottom{
	width:100%;
	height: 0.75rem;
	display: flex;
	justify-content: space-between;
	/*z-index: 99;*/
}
#Tab .bottom li{
	width:25%;
	height: 0.75rem;
}
#Tab .bottom li span{ 
	display: block;
	width:0.96rem;
	font-size: 0.24rem;
	color: #666;
	text-align: center;
	margin: 0.24rem auto 0;
}
</style>