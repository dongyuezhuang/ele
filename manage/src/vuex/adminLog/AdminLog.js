//引入axios
import axios from "axios"
//引入管理员日志列表的模板
import AdminLog from "@/components/admin/AdminLog.vue"
//暴露
export default{
	state:{//状态--相当于data值
		
	},
	mutations:{//相当于同步的方法
		
	},
	getters:{//相当于计算属性
		
	},
	actions:{//相当于异步的方法
		getAdminLogs(state,{pageIndex,value,success,error}){
			axios.get("/getAdminLogList",{
				params:{
					pageIndex,
					value
				}
			}).then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data.msg)
				}
			})
		},
		deleteAdminLog(state,{id,success,error}){
			axios.post("/deleteAdminLog",{id})
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
