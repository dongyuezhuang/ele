// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

//引入管理员信息表（AdminLogin）
import AdminLogin from "@/admin/AdminLogin.vue";
//引入注册管理员账号的表
import AdminReset from "@/admin/AdminReset.vue";
//饿了吗管理系统页面
import App from './App';

import router from './router';
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入Vuex
import store from "@/vuex"
//引入axios
import axios from "axios"
//引入过滤器
import filters from "@/filters"


Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI);

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










/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用vuex
  components: { App,AdminLogin,AdminReset },
  // template:'<components :is="this.$store.state.conArr[this.$store.state.index]"></components>',
	template:'<App/>',
})
