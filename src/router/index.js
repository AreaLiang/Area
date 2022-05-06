// router.js
import {
	RouterMount,
	createRouter
} from 'uni-simple-router';
import store from '../store';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
	
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to)

	if(to.meta.needLogin){//判断是否需要权限
		
		let token =localStorage.getItem('token')
		if(token){
			let userData=store.state.userData;
			if(userData){
				next();
			}else{
				
				// let userinfo=store.state;
				(async function(){
					await store.dispatch('checkInfo',token).then(()=>{
						console.log("6",JSON.parse(JSON.stringify(store.state.userData)))
					})
					
				})()
				
				// setTimeout(()=>{
				// 	console.log("6",JSON.parse(JSON.stringify(store.state.userData)))
				// },1000)
				// if(userinfo){
					
				// }else{
				// 	router.replace('/src/pages/Login')
				// }
				next();
			}
		}else{
			router.replace('/src/pages/Login')
		}
	}else{
		next();
	}
	
});

// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('跳转结束')
})

export {
	router,
	RouterMount
}
