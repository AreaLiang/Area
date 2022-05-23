<template>
	<view class="history-record">
		<viewArticleSection Repost="64" Comment="5987" Like="14290">
			<view class="acticle-tyle">
				<view class="text">
					
				</view>
				<view class="cover">
					
				</view>
			</view>
		</viewArticleSection>
		<viewArticleSection ></viewArticleSection>
		<viewArticleSection ></viewArticleSection>
	</view>
</template>

<script>
	import viewArticleSection from '@/components/viewArticleSection.vue'
	export default{
		name:'HistoryRecord',//浏览历史
		data(){
			return{
				
			}
		},
		methods:{
		
		},
		components:{
			viewArticleSection
		},
		mounted(){
			
		}
	}
</script>

<style scoped lang="less">
	@import '@/src/styles/index';
	.history-record{
		height: 100%;
		background-color: @backgroundColor;
		overflow: hidden;
	}
</style>