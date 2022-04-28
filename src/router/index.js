// 定义路由菜单,自定义needLogin判断该路由是否需要登录
const routes=[
	{
		path: '/pages/home/home',
		needLogin: false
	},
	{
		path: '/pages/cart/cart',
		needLogin: true		
	}
]
// to是要去的页面，type是跳转方式 默认 navigateTo,与uniapp跳转方式一致
const nav=(to,type='navigateTo')=>{
	//在路由菜单中找到要去的页面
	const route=routes.find(item=>item.path===to)
	// 进行判断 如果可以直接跳转 不可以就跳转到其他页面
	if(!route.needLogin){
		uni[type]({
			url: to
		})
	}else{
		uni[type]({
			url: '/pages/home/home'
		})
	}
}
// 到处 nav方法
export {
	nav
}
