import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
//引入查看管理员信息组件的路由
import LookAdmin from '@/components/admin/LookAdmin.vue'
//引入查看管理员日志组件的路由
import AdminLog from '@/components/admin/AdminLog.vue'
//引入店铺相关的路由
import Shop from "@/router/shop/ShopList.js"
//引入商品相关的路由
import Goods from "@/router/goods/goodsList.js"
//引入广告相关的路由
import adv from "@/router/adv/adv.js"
Vue.use(Router)

export default new Router({
	mode:"history",
  	routes: [
	    {
	      path: '/',
	      name: 'HelloWorld',
	      component: HelloWorld
	    },
	    {
	      path: '/LookAdmin',
	      name: 'LookAdmin',
	      component: LookAdmin
	    },
	    {
	      path: '/AdminLog',
	      name: 'AdminLog',
	      component: AdminLog
	    }
  	].concat(Shop,Goods,adv)
})
