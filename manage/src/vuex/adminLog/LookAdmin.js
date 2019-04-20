//引入axios
import axios from "axios"
//引入查看管理员列表的组件
import LookAdmin from "@/components/admin/LookAdmin.vue"
//暴露
export default{
	state:{//状态--相当于data值
		
	},
	mutations:{//相当于同步的方法
		
	},
	getters:{//相当于计算属性
		
	},
	actions:{//相当于异步的方法
		getAdminList(state,{success,error}){
			axios.get("/getAdminList")
			.then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data.msg)
				}
			})
		}	
	}
}
