export default {
	namespaced: true,
	actions: {

	},
	mutations: {
		LoginInfo(state, value) {
			state.userData=value
		}
	},
	state: {
		currentArticleList: []
	},
	getters: {

	}
}
