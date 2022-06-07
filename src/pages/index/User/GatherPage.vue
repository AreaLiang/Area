<template>
	<view class="notice-page">
		<titleNav :currentTabIndex="currentTabIndex" ></titleNav> <!-- 头部导航 -->	
		<component :is='currentTabComponent'></component>   
	</view>
</template>

<script>
	import titleNav from '@/components/titleNav.vue'
	
	export default{
		name:'GatherPage',//多个通知页面的组成
		data(){
			return{
				currentTabComponent:'HistoryRecord',
				currentTabIndex:0
			}
		},
		methods:{
		
		},
		components:{
			titleNav,
			//异步组件名称要和 公共组件 =》titleNav 中的组件名称一致，否则无法加载
			'Comment':() => import('@/src/pages/index/User/Comment'),
			'HistoryRecord':() => import('@/src/pages/index/User/HistoryRecord'),
			'CollectPage':() => import('@/src/pages/index/User/CollectPage'),
			'LikePage':() => import('@/src/pages/index/User/LikePage'),
			'PushPage':() => import('@/src/pages/index/User/PushPage'),
			'ReportPage':() => import('@/src/pages/index/User/ReportPage')
		},
		onLoad() {
			this.$bus.$on('currentComponent', p =>{//绑定点击标题加载对应的组件
				this.currentTabComponent=p;
			})
			console.log(this.$Route.query)
			//传参 用户所点击的功能的索引，默认头部标签选择
			this.currentTabIndex=this.$Route.query.index;
			//传参 用户所点击的功能的组件名称，指定显示哪部分界面
			this.currentTabComponent=this.$Route.query.name;
		},
		beforeDestroy() {
			this.$bus.$off('currentComponent');//解绑动态组件事件
		}
	}
</script>

<style scoped lang="less">
	.notice-page{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>