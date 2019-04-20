//店铺列表的路由
//引入店铺列表的模板
import ShopList from "@/components/shop/ShopList.vue"


//店铺类别的路由
//引入店铺类别的模板
import ShopType from "@/components/shop/ShopType.vue"
export default[
	{
      	path: '/ShopList',
      	name: 'ShopList',
      	component: ShopList
    },
	{
      	path: '/ShopType',
      	name: 'ShopType',
      	component: ShopType
    },
]
