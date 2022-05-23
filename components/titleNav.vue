<template>
	<view class="">
		<view class="title-list">
			<view class="title-item" v-for="(p,index) in titleList" :key="index">
				<span :class="{active:actIndex==index ? true:false }" @click="activeFun(index,p.componentName)">{{p.name}}</span>
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
					componentName:''
				},
				{
					name:'评论',
					componentName:'Comment'
				},
				{
					name:'点赞',
					componentName:''
				},
				{
					name:'历史',
					componentName:'HistoryRecord'
				},
				{
					name:'推送',
					componentName:''
				},
				{
					name:'举报',
					componentName:''
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