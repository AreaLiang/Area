<template>
	<view class="view-article-section">
		<view class="header">
			<uni-list-chat
			title="赖少个趁仔1"
			:avatar-circle="true" 
			avatar="/static/user/touxian01.jpg" 
			note="2020 年 3 月 19 日" 
			thumbSize="lg">
			</uni-list-chat>
		</view>
		<view class="body">
			<slot></slot>
		</view>
		<view class="footer">
			<mutual :repost="Repost" :comment="Comment" :like="Like"/>
		</view>
	</view>
</template>

<script>
	import mutual from '@/components/mutual.vue'
	export default{
		name:'viewArticleSection',//评论、历史、推送等等基础布局板块
		data(){
			return{
				
			}
		},
		methods:{
		
		},
		components:{
			mutual
		},
		props:['Like','Comment','Repost']
	}
</script>

<style scoped lang="less">
	.view-article-section{
		margin-top:5px;
		background-color: white;
	}
</style>