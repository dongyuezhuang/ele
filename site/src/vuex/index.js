//引入vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
import App from "@/App";





//使用Vuex
Vue.use(Vuex);
var vue=new Vue();
//暴露
export default new Vuex.Store({
	state:{//状态--相当于data值
		conArr:["App"],
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
		
	}
})
