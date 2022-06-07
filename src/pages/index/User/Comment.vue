<template>
	<view class="comment-wrap">
		<scroll-view scroll-y="true" class="scroll-Y" style="height: 100%;">
			<view class="item-box">
				<uni-list-chat title="赖少个趁仔" :avatar-circle="true" avatar="/static/user/touxian01.jpg"
					note="2020 年 3 月 19 日" thumbSize="lg">
				</uni-list-chat>
				<view class="comment-text pd">
					猫：给你加点料
				</view>
				<view class="target-article">
					<view class="bor">
						<view class="pd">
							<view class="author-info">
								<view class="portrait pu-info">
									<img src="/static/user/touxian.jpg" alt="">
								</view>
								<span class="name pu-info">不正常人类研究中心</span>
							</view>
							<view class="article-text">
								发布了小视频：双倍快乐#搞笑#
							</view>
						</view>
						<view class="vedio-img">
							<img src="@/static/comment/cover01.jpg" class="cover">
							<img src="/static/start.png" class="start-img">
							<span class="vedio-time">0:25</span>
						</view>
					</view>
					<p class="reader">3969 阅读</p>
					<!-- 转发、评论、点赞 -->
					<mutual :like="0" />
				</view>
			</view>

			<view class="item-box">
				<uni-list-chat title="爆笑安检" :avatar-circle="true" avatar="/static/user/touxian02.jpg"
					note="2020 年 3 月 15 日">
				</uni-list-chat>
				<view class="comment-text pd">
					王宝强过安检这段，看一次笑一次，至今还无人可以超越！爆笑安检
				</view>
				<view class="target-article">
					<view class="bor">
						<view class="pd">
							<view class="author-info">
								<view class="portrait pu-info">
									<img src="/static/user/touxian.jpg" alt="">
								</view>
								<span class="name pu-info">不正常人类研究中心</span>
							</view>
							<view class="article-text">
								发布了小视频：双倍快乐#搞笑#
							</view>
						</view>
						<view class="vedio-img">
							<img src="@/static/comment/cover02.jpg" class="cover">
							<img src="/static/start.png" class="start-img">
							<span class="vedio-time">1:01</span>
						</view>
					</view>
					<p class="reader">15969 阅读</p>
					<!-- 转发、评论、点赞 -->
					<mutual :repost="4" :comment="187" :like="1240" />
				</view>
			</view>

			<view class="item-box">
				<uni-list-chat title="深化王企鹅" :avatar-circle="true" avatar="/static/user/touxian03.jpg"
					note="2020 年 3 月 15 日" thumbSize="lg">
				</uni-list-chat>
				<view class="comment-text pd">
					手机电量剩一半就充比较好，还是应该等快没电了再充？
				</view>
				<view class="target-article">
					<view class="bor">
						<view class="pd">
							<view class="author-info">
								<view class="portrait pu-info">
									<img src="/static/user/touxian.jpg" alt="">
								</view>
								<span class="name pu-info">不正常人类研究中心</span>
							</view>
							<view class="article-text">
								发布了小视频：双倍快乐#搞笑#
							</view>
						</view>
						<view class="vedio-img">
							<img src="@/static/comment/cover03.jpg" class="cover">
							<img src="/static/start.png" class="start-img">
							<span class="vedio-time">0:55</span>
						</view>
					</view>
					<p class="reader">69 阅读</p>
					<!-- 转发、评论、点赞 -->
					<mutual :repost="64" :comment="5987" :like="14290" />
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import mutual from '@/components/mutual.vue'
	export default {
		name: 'Comment', //评论
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			mutual
		},
		mounted() {

		}
	}
</script>

<style scoped lang="less">
	@import '@/src/styles/index';

	.comment-wrap {
		background-color: @backgroundColor;
		overflow: hidden;
	}

	.item-box {
		margin: 5px 0;
		background-color: white;
	}

	.pd {
		padding: 5px 15px;
	}

	.target-article {
		margin: 0 15px;

		.bor {
			border: @standardBorderStyle;
		}
	}

	.author-info {
		display: flex;
		align-items: center;

		.name {
			margin-left: 10px;
			font-weight: 600
		}
	}

	.portrait {
		width: 30px;
		height: 30px;

		img {
			width: 100%;
			border-radius: 50%;
		}
	}

	.pu-info {
		flex-direction: column;
	}

	.vedio-img {
		position: relative;

		.cover {
			width: 100%;
			display: block;
		}

		.start-img {
			position: absolute;
			width: 50px;
			height: 50px;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		.vedio-time {
			position: absolute;
			bottom: 3px;
			right: 3px;
			display: inline-block;
			background-color: rgba(86, 86, 86, 0.8);
			color: #e3e3e3;
			border-radius: 8px;
			padding: 1px 8px;
		}
	}

	.reader {
		color: #999;
		font-size: 3vw;
	}
</style>
