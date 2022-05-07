// router.js
import {
	RouterMount,
	createRouter
} from 'uni-simple-router';
import store from '../store';
import { checkInfoApi } from '../../request/api'

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
				checkInfoApi({
					token:token
				}).then((res)=>{
					if(res.code=="200"){
						store.commit('LoginInfo',res);
					}else{
						uni.showToast({
							title: '登录超时',
							duration: 1000
						});
						setTimeout(()=>{
							localStorage.removeItem('token')
							// router.replace('/src/pages/Login');
						},1000)
					}
				})
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
