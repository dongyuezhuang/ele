//引入axios
import axios from "axios"
//引入登录管理员账号的表（AdminLogin）
import AdminLogin from "@/admin/AdminLogin.vue";
//暴露
export default{
	state:{//状态--相当于data值
		adminName:localStorage.adminName || null,
		adminId:localStorage.adminId || null
	},
	mutations:{//相当于同步的方法
		
	},
	getters:{//相当于计算属性
		
	},
	actions:{//相当于异步的方法
		login({state,commit},obj){
			axios.post("/loginAdmin",{
				adminName:obj.adminName,
				adminPwd:obj.adminPwd
			}).then(({data})=>{
				if(data.ok===1){
					state.adminName=localStorage.adminName=data.adminInfo.adminName;
					state.adminId=localStorage.adminId=data.adminInfo._id;
					commit("GORESET",0)
					obj.success(data.msg);
				}else if(data.ok===2){
					obj.error(data.msg)
				}else{
					obj.error(data.msg)
				}
			})
		}
	}
}
