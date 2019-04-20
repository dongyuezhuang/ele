<template>
	<div>
		<Footer v-if="$route.meta.isShow" @changeIsShow="fn"></Footer>
    	<router-view></router-view>
	</div>
</template>

<script>
	//引入底部的组件
	import Footer from '@/components/Footer.vue'
	export default {
		  name: 'shouye',
		  data(){
		  	return {
		  		
		  	}
		  },
		  components:{
		  	Footer
		  },
		  methods:{
		  	fn(v){
		  		console.log(v)
		  	}
		  },
		  mounted(){
		  	
		  }
		}
</script>

<style>
html{font-size:14.81vw;}
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,div,hr,header,footer,nav,input{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0; }
img{display:block;}
a{text-decoration:none; color:#333;}
h1,h2,h3,h4,h5,h6{font-weight:100;}
body{ font-family:"微软雅黑";}
input,a{outline:none;}
@font-face {
	font-family: 'iconfont';
	src: url("../assets/font/iconfont.eot");
	src: url("../assets/font/iconfont.eot"),
	url("../assets/font/iconfont.woff"),
	url("../assets/font/iconfont.ttf"),
	url("../assets/font/iconfont.svg");
}





</style>