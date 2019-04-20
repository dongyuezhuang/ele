//引入axios
import axios from "axios"
//引入注册管理员账号的表（AdminReset）
import AdminReset from "@/admin/AdminReset.vue";
//暴露
export default{
	state:{//状态--相当于data值
		isLoading:false,
		isreseting:false,
	},
	mutations:{//相当于同步的方法
		
	},
	getters:{//相当于计算属性
		
	},
	actions:{//相当于异步的方法
		reset({state,commit},obj){
			state.isreseting=true
			axios.post("/addAdminList",{
				adminName:obj.adminName,
				adminPwd:obj.adminPwd
			}).then(({data})=>{
				state.isreseting=false
				if(data.ok===1){
					obj.success(data.msg);
					commit("GORESET",1)
				}else{
					obj.error(data.msg)
				}
			})
		}
	}
}
