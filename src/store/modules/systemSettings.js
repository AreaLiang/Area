export default {
	namespaced: true,
	actions: {

	},
	mutations: {
		setGlobalFontSize(state, value) { //设置全局的字体大小
			state.globalFontSize = value;
		}
	},
	state: {
		globalFontSize: '中'
	},
	getters: {
		getGlobalFontCHList: state => sizeTable.map((p) => p.CH ),
		getGlobalFontSize: state => fontSizeTransform(state.globalFontSize)//返回page-meta 字体设置的大小
	}
}

//全局字体大小数组
const sizeTable = [{
	CH: "小",
	size: 3
}, {
	CH: "中",
	size: 4
}, {
	CH: "大",
	size: 5
}, {
	CH: "特大",
	size: 6
}];

/**
 * 字体大小转换，返回 以 vw 为单位的字体大小，1vw=屏幕宽度的 1%
 * @param {String} CH [中文字体大小名称] 
 */
function fontSizeTransform(CH) {

	const sizeUnit = "vw"; //字体大小单位

	for (let p of sizeTable) {
		if (p.CH == CH)  return p.size + sizeUnit;
	}
}
