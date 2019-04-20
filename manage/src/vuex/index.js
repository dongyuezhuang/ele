//引入vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//引入饿了吗后台管理系统
import App from "@/App";
//引入登录管理员账号的表的vuex
import Login from "@/vuex/admin/Login.js";
//引入注册管理员账号的表的vuex
import Reset from "@/vuex/admin/Reset.js";
//引入查看管理员信息的表的vuex
import LookAdmin from "@/vuex/adminLog/LookAdmin.js"
//引入查看管理员日志的表的vuex
import AdminLog from "@/vuex/adminLog/AdminLog.js"
//引入添加店铺类别的表的vuex
import ShopType from "@/vuex/shop/ShopType.js";
//引入添加店铺的表
import ShopList from "@/vuex/shop/ShopList.js";



//使用Vuex
Vue.use(Vuex);
var vue=new Vue();
//暴露
export default new Vuex.Store({
	state:{//状态--相当于data值
		conArr:["App","AdminLogin","AdminReset"],
		index:1,
	},
	mutations:{//相当于同步的方法
		//点击注册跳转到注册的页面的方法
	    GORESET(state,i){
	    	state.index=i
	    },
	    // 退出登陆
        OUT_LOGIN(state,i){
        	localStorage.clear()
        	state.localStorage=null;
        	state.index=i
            vue.$message({
                message: "退出成功",
                type: 'success'
            });
        }
	},
	modules:{//模块
		Login,
		Reset,
		LookAdmin,
		AdminLog,
		ShopType,
		ShopList
	}
})
