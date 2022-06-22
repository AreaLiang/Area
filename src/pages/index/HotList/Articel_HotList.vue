<template>
	<view class="articel_HotList">
		<view class="title">
			<h2>{{title}}</h2>
		</view>
		<view class="content">
			<!-- <span style="color: blue;font-size: 5vw;font-weight: 600;">6月5日11时01分消息</span><br>
			<span style="color: #0d9fcb;font-size: 4.5vw;">神州十四号载人飞船发射取得圆满成功</span><br>
			<img src="/static/hotList/hotList01.jpg" class="pic">
			据中国载人航天工程办公室消息，北京时间2022年6月5日10时44分，搭载神舟十四号载人飞船的长征二号F遥十四运载火箭在酒泉卫星发射中心点火发射，约577秒后，神舟十四号载人飞船与火箭成功分离，进入预定轨道，飞行乘组状态良好，发射取得圆满成功。<br>
			<img src="/static/hotList/hotList02.jpg" class="pic">
			南充新闻网讯（南充日报社全媒体记者 李奎 韩顺顺 见习记者 李笑阳 郑锐）北京时间6月5日10时44分，搭载神舟十四号载人飞船的长征二号F遥十四运载火箭在酒泉卫星发射中心成功点火发射。随后，酒泉卫星发射中心主任、发射场区指挥部指挥长邹利鹏宣布“神舟十四号载人飞船发射任务取得圆满成功”。
		 -->
			<div v-html="content"></div>
		</view>
	</view>
</template>

<script>
	import searchbox from '@/components/searchBox'
	import {getTestApi} from '@/request/api.js'
	// import {mapState} from 'vuex'
	export default {
		name: 'Articel_HotList', //热榜二级页面
		data() {
			return {
				content: '',
				title:''
			}
		},
		methods: {

		},
		computed: {
			// ...mapState('module_hotList', ['currentArticleList'])
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			
			let articleList=JSON.parse(sessionStorage.getItem('saveArticleList'));
			
			this.content=articleList[option.id].content;
			this.title=articleList[option.id].title;
			
		}
	}
</script>

<style scoped lang="less">
	.articel_HotList {
		padding: 8px;

		// line-height: 30px;
		.pic {
			width: 100%;
		}

		.title {
			margin-bottom: 10px;
		}

		.content {
			/deep/img {
				width: 100% !important;
				margin: 10px 0;
			}
		}
	}
</style>
