import Vuex from "vuex"
import Vue from 'vue'
import axios from 'axios'


const actions = {
	
}
const mutations = {
	LoginInfo(state, value) {
		state.userData=value
	}
}

const state = {
	userData : ''
}

const getters = {

}

Vue.use(Vuex)
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})
