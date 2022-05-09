<template>
	<view class="home-page">
		<view class="box-bg">
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="none"
				@focus="focus" />
		</view>
		<uni-row class="scroll-box">
			<uni-col :span="23">
				<scroll-view class="scroll-view_H" scroll-x="true" style="white-space: nowrap;" @scroll="scroll"
					scroll-left="120">
					<view class="top-title-box">
						<view class="top-title">
							<span>关注</span>
							<span>推荐</span>
							<span>肇庆</span>
							<span>视频</span>
							<span>小说</span>
							<span>小视频</span>
							<span>抗疫</span>
							<span>问答</span>
						</view>
					</view>
				</scroll-view>
			</uni-col>
			<uni-col :span="2"
				style="position: absolute;right: 0; background-color: rgb(245 245 245 / 85%);text-align:center;top:50%;transform: translateY(-50%);">
				<view class="more-box">
					<uni-icons type="bars" size="1.5em"></uni-icons>
				</view>
			</uni-col>
		</uni-row>
		<view class="content">
			<view class="item">
				<h3 class="title">疫情防不住，经济社会发展就无从谈起</h3>
				<view class="article-info">
					<span>光明网</span>
					<span>6941 评论</span>
					<span>5小时前</span>
				</view>
			</view>
			<view class="item">
				<h3 class="title">坐月子无聊破译顶级密码？真相来了</h3>
				<view class="article-info">
					<span>北青网</span>
					<span>6236 评论</span>
					<span>11小时前</span>
				</view>
			</view>
			<view class="item">
				<h3 class="title">“无论我走到哪，永远是黄土地的儿子”</h3>
				<view class="article-info">
					<span>新华社</span>
					<span>9237 评论</span>
					<span>1周前</span>
				</view>
			</view>
			<view class="item">
				<h3 class="title">2012年上海富豪包养女大学生，7年生3娃花2000万，却没一个是他的</h3>
				<view class="article-img">
					<img src="/static/c1.png" alt="">
					<img src="/static/c2.png" alt="">
					<img src="/static/c3.png" alt="">
				</view>
				<view class="article-info">
					<span>新华社</span>
					<span>9237 评论</span>
					<span>1周前</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'HomePage',
		data() {
			return {

			}
		},
		methods: {
			//搜索框聚焦事件
			focus() {

			},
			scroll: function(e) {
				console.log(e)

			},
		},
		computed: {
			...mapState(["userData"])
		},
		components: {

		},
		onReady() {
			let token = localStorage.getItem('token');
		}
	}
</script>

<style lang="less">
	.box-bg {
		background: #d04542;
	}

	.scroll-box {
		border-bottom: 1px solid #cbcaca;
	}

	.top-title span {
		margin: 5px 10px;
		display: inline-block;
	}

	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		background-color: transparent;
	}
	.content{
		.item{
			border-bottom:1px solid #d9d9d9;
			padding: 10px;
			color: #343434;
		}
		.title{
			width: 100%;
			overflow: hidden;
			white-space:nowrap;
			text-overflow:ellipsis;
		}
		.article-img img{
			width: 80px;
			height: 80px;
			margin: 3px;
		}
		.article-info{
			margin-top: 3px;
		}
		.article-info span{
			margin-right: 5px;
			color:#919191;
		}
	}
</style>
