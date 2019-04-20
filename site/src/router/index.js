import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
//引入发现的组件
import Find from '@/components/Find/Find.vue'
//引入订单的组件
import Order from '@/components/Order/Order.vue'
//引入我的的组件
import My from '@/components/My/My.vue'
import ShopNew from "@/components/Shop/ShopNew.vue"
import Login from "@/components/Login/Login.vue"
import Goods from "@/components/Shop/goods.vue"
Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
	    {
	      path: '/',
	      name: 'App',
	      component: App,
	      meta:{
	      		isShow:true,
	      		isActive:1
	      	}
	    },
	    {
	      	path: '/find',
	      	name: 'Find',
	      	component: Find,
	      	meta:{
	      		isShow:true,
	      		isActive:2
	      	}
	   	},
	   	{
	      	path: '/order',
	      	name: 'Order',
	      	component: Order,
	      	meta:{
	      		isShow:true,
	      		isActive:3
	      	}
	   	},
	   	{
	      	path: '/my',
	      	name: 'My',
	      	component: My,
	      	meta:{
	      		isShow:true,
	      		isActive:4
	      	}
	   	},
	   	{
	      	path: '/shopNew',
	      	name: 'ShopNew',
	      	component: ShopNew,
	      	meta:{
	      		isShow:false
	      	}
	   	},
	   	{
	      	path: '/login',
	      	name: 'Login',
	      	component: Login,
	      	meta:{
	      		isShow:false
	      	}
	   	},
	   	{
	      	path: '/goods',
	      	name: 'Goods',
	      	component: Goods,
	      	meta:{
	      		isShow:false,
	      	}
	   	},
	 ]
})
