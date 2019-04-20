//广告列表的路由
//引入广告列表的模板
import advList from "@/components/adv/advList.vue"


//广告类别的路由
//引入广告类别的模板
import advTypeList from "@/components/adv/advTypeList.vue"
export default[
	{
      	path: '/advList',
      	name: 'advList',
      	component: advList
    },
	{
      	path: '/advTypeList',
      	name: 'advTypeList',
      	component: advTypeList
    },
]
