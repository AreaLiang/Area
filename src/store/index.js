import Vuex from "vuex"
import Vue from 'vue'
import axios from 'axios'
import {checkInfoApi } from '@/request/api'

const actions = {
	checkUserInfo(context,token){
		return checkInfoApi({
			token:token
		}).then((res)=>{
			if(res.code=="200"){
				context.commit('LoginInfo',res);
				return Promise.resolve(true);
			}else{//如果返回数据不成功，则登录超时
				return Promise.reject(false);
			}
		});
	}
}
const mutations = {
	LoginInfo(state, value) {//设置用户信息
		state.userData=value;
	},
	switchDark(state, value){
		state.isDark=value;
	}
}

const state = {
	userData : '',
	isDark:false
}

const getters = {

}

const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})


Vue.use(Vuex)
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
	modules
})
