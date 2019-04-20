// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入axios
import axios from "axios"
//引入过滤器
import filters from "@/filters"
//引入首页的组件
import ShouYe from '@/components/shouye.vue'
import Login from "@/components/user/Login.vue"
import Reset from "@/components/user/Reset.vue"
Vue.config.productionTip = false

Vue.use(MintUI)


Vue.prototype.$bus=new Vue();
Vue.prototype.$ajax=axios;
for(var key in filters){
	Vue.filter(key,filters[key])
}

//发送请求拦截
axios.interceptors.request.use((config)=>{
    config.url="/ele"+config.url;
    return config;
})

//接收数据拦截
//axios.interceptors.response.use(({data})=>{
//  return data;
//})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { ShouYe,Login,Reset},
  template: '<ShouYe/>'
})
