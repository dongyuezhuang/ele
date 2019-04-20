//引入axios
import axios from "axios"
//引入添加店铺的表
import ShopType from "@/components/shop/ShopType.vue";
//暴露
export default{
	state:{//状态--相当于data值
		
	},
	mutations:{//相当于同步的方法
		
	},
	getters:{//相当于计算属性
		
	},
	actions:{//相当于异步的方法
		getShopType(state,{pageIndex,value,success,error}){
			axios.get("/getShopType",{
				params:{pageIndex,value}
			})
			.then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data)
				}
			})
		},
		deleteShopType(state,{id,success,error}){
			axios.delete("/deleteShopType",{
				params:{id}	
			})
			.then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data)
				}
			})
		},
	}
}
