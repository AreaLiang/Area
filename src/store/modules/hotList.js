export default {
	namespaced: true,
	actions: {

	},
	mutations: {
		saveArticleList(state, value) { //热榜 => 保存当前文章的集合
			state.currentArticleList = value;
		}
	},
	state: {
		currentArticleList: []
	},
	getters: {

	}
}
