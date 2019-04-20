<template>
	<div>
		<header>
			<div id="location">
				<i></i>
				<h2>北京</h2>
				<em></em>
			</div>
			
			
			<div class="wrap">
				<div id="seek">
					<i></i>
					<span>搜索饿了么商家、商品名称</span>
				</div>
			</div>
			
		</header>
	</div>
</template>

<script>
	export default{
		name:"Header",
		data(){
			return{
				
			}
		},
		methods:{
			scrollTop(){
	            var headNav=document.querySelector(".wrap");
	            window.onscroll=function(){
                var sTop=document.body.scrollTop || document.documentElement.scrollTop;
                if(sTop>0.36){
                      	headNav.style.position="fixed";
                      	headNav.style.top="0";
                  	}else{
                      	headNav.style.position="";
                  	}
              	}
          	}
		},
		mounted(){
			this.scrollTop()
		}
	}
</script>

<style scoped="scoped">
header{
	width: 100%;
	height:1.76rem;
	background:url(../../static/未标题-1.jpg) repeat-y center/cover;
	overflow: hidden;
}
header #location{
	width:2.5rem;
	min-height: 0.36rem;
	margin-top: 0.34rem ;
	margin-left:0.26rem;
	overflow: hidden;
}
header #location i{
	float: left;
	width: 0.24rem;
	height: 0.28rem;
	background: url(../../static/未标题-3.jpg) no-repeat center/cover;
	margin-top:0.02rem;
	margin-left: 0.07rem;
}
header #location h2{
	float: left;
	width: 1.4rem;
	min-height: 0.36rem;
	text-align: center;
	line-height: 0.32rem;
	color: #fff;
	font-weight: 900;
	font-size: 0.3rem;
}
header #location em{
	float: left;
	border-top:6px solid #fff;
	border-bottom: 6px solid #009fff;
	border-left: 6px solid #009fff;
	border-right: 6px solid #009fff;
	margin-top:0.12rem;
}
header .wrap{
	display: flex;
	top: 0.36rem;
	width: 100%;
	height:1.76rem;
	height:1rem;
	background:url(../../static/未标题-1.jpg) repeat-y center/cover;
	border-radius: 2px;
	overflow:hidden;
	z-index: 99;
}
header #seek{
	display: flex;
	top: 0.36rem;
	width: 6.22rem;
	height: 0.66rem;
	background: #fff;
	border-radius: 2px;
	margin-left:0.26rem;
	margin-top: 0.18rem;
	overflow:hidden;
}
header #seek i{
	float: left;
	width:0.26rem;
	height: 0.26rem;
	margin-left:1.43rem ;
	margin-top: 0.2rem;
	background: url(../../static/未标题-2.jpg) no-repeat center/cover;
}
header #seek span{
	float: left;
	width:3.2rem;
	height: 0.32rem;
	color: #adadad;
	font-size: 0.26rem;
	margin-top: 0.16rem;
	text-align:center;
	line-height: 0.32rem;
}
</style>