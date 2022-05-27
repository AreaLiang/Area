<template>
	<view class="">
		<view class="title-list">
			<view class="title-item" v-for="(p,index) in titleList" :key="index">
				<navigator :url="p.url">
					<span :class="{active:actIndex==index ? true:false }" @click="activeFun(index,p.componentName)">{{p.name}}</span>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'titleNav',
		data(){
			return{
				titleList:[{
					name:'收藏',
					componentName:'CollectPage',
					url:'src/pages/index/User/GatherPage?index=0&&name=CollectPage'
				},
				{
					name:'评论',
					componentName:'Comment',
					url:'src/pages/index/User/GatherPage?index=1&&name=Comment'
				},
				{
					name:'点赞',
					componentName:'LikePage',
					url:'src/pages/index/User/GatherPage?index=2&&name=LikePage'
				},
				{
					name:'历史',
					componentName:'HistoryRecord',
					url:'src/pages/index/User/GatherPage?index=3&&name=HistoryRecord'
				},
				{
					name:'推送',
					componentName:'PushPage',
					url:'src/pages/index/User/GatherPage?index=4&&name=PushPage'
				},
				{
					name:'举报',
					componentName:'ReportPage',
					url:'src/pages/index/User/GatherPage?index=5&&name=ReportPage'
				}],
				actIndex:1
			}
		},
		methods:{
			activeFun(i,component){
				this.actIndex=i;
				this.$bus.$emit('currentComponent',component)
			}
		},
		props:['currentTabIndex'],
		mounted(){
			this.actIndex=this.currentTabIndex;
		}
	}
</script>

<style scoped lang="less">
	@import '@/src/styles/index';
	.title-list{
		display: flex;
		.title-item{
			flex-direction: column;
			flex:1;
			text-align: center;
			border-bottom:@standardBorderStyle;
			padding-bottom: 5px;
			.active{
				border-bottom: 2px solid red;
				padding-bottom: 4px;
			}
		}
	}
</style>