//引入axios
import axios from "axios"
//引入添加店铺的表
import ShopList from "@/components/shop/ShopList.vue";
//暴露
export default{
	state:{//状态--相当于data值
		
	},
	mutations:{//相当于同步的方法
		
	},
	getters:{//相当于计算属性
		
	},
	actions:{//相当于异步的方法
		getShopList(state,{pageIndex,shopName,success,error}){

			axios.get("/getShopAndTypeList",{
				params:{
					pageIndex,
					shopName
				}
			}).then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data)
				}
			})
		},
		deleteShopList(state,{id,success,error}){
			axios.delete("/deleteShopList",{
				params:{id}	
			}).then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data)
				}
			})
		},
		getShopInfo(state,{id,shopName,success,error}){
			axios.get("/getShopInfo",{
				params:{
					id,
					shopName
				}
			}).then(({data})=>{
				if(data.ok===1){
					success(data)
				}else{
					error(data)
				}
			})
		}
	}
}
