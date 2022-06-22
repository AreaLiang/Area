import Vuex from "vuex"
import Vue from 'vue'
import axios from 'axios'

import module_hotList from './module/hotList'
const actions = {
	
}
const mutations = {
	LoginInfo(state, value) {
		state.userData=value
	},
	
}

const state = {
	userData : ''
}

const getters = {

}

const modules={
	module_hotList
}

Vue.use(Vuex)
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
	modules
})
