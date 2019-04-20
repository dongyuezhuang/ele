<template>
	<div>
		<Header></Header>
	    <Nav></Nav>
	    <Adv></Adv>
	    <Tab></Tab>
	    <Main></Main>
	</div>
</template>

<script>
	//引入头部的组件
	import Header from '@/components/Header.vue'
	//引入轮播图的组件
	import Nav from '@/components/Nav.vue'
	//引入广告的组件
	import Adv from '@/components/Adv.vue'
	//引入选项卡的组件
	import Tab from '@/components/Tab.vue'
	//引入主要内容的组件
	import Main from '@/components/Main.vue'
	export default{
		name:"find",
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted(){
			
		},
		components:{
		  	Header,
		  	Nav,
		  	Adv,
		  	Tab,
		  	Main
		}
	}
</script>

<style>

</style>