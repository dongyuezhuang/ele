//商品列表的路由
//引入商品列表的模板
import GoodsList from "@/components/goods/GoodsList.vue"


//店铺类别的路由
//引入商品类别的模板
import GoodsTypeList from "@/components/goods/GoodsTypeList.vue"
export default[
	{
      	path: '/GoodsList',
      	name: 'GoodsList',
      	component: GoodsList
    },
	{
      	path: '/GoodsTypeList',
      	name: 'GoodsTypeList',
      	component: GoodsTypeList
    },
]
