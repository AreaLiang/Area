<template>
	<view class="notice-page">
		<titleNav :currentTabIndex="currentTabIndex" ></titleNav> <!-- 头部导航 -->	
		<component :is='currentTabComponent'></component>   
	</view>
</template>

<script>
	import titleNav from '@/components/titleNav.vue'
	
	export default{
		name:'NoticePage',//多个通知页面的组成
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
			'Comment': () => import('@/src/pages/index/User/Comment'),
			'HistoryRecord': () => import('@/src/pages/index/User/HistoryRecord')
		},
		onLoad() {
			this.$bus.$on('currentComponent', p =>{//绑定点击标题加载对应的组件
				this.currentTabComponent=p;
			})
			//传参 用户所点击的功能的索引，指定显示哪部分界面
			this.currentTabIndex=this.$Route.query.index;
		},
		beforeDestroy() {
			this.$bus.$off('currentComponent');
		}
	}
</script>

<style scoped lang="less">
	.notice-page{
		height: 100%;
	}
</style>