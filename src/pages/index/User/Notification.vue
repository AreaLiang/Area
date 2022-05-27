<template>
	<view class="notification">
		<view class="list">
			<uni-row>
				<uni-col :span="14">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/user/touxian01.jpg" alt="">
						</view>
						<view class="info">
							<p class="mr name">萌萌的小灰灰呢</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw" color="black" />
							<p class="mr">2022-4-26</p>
							<p class="like">还有13个人点赞></p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4">
					<view class="comment">
						<p>[我的评论]猫：我属于那种文科背不会，理科学不会的那种</p>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="list">
			<uni-row>
				<uni-col :span="14">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/user/touxian05.jpg" alt="">
						</view>
						<view class="info">
							<p class="mr name">单曲循环!</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw" color="black" />
							<p class="mr">2022-4-18</p>
							<p class="like">还有13个人点赞></p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4">
					<view class="comment">
						<p>[我的评论]每次玩手机玩到特别困了，放下手机后又瞬间精神满满了</p>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="list">
			<uni-row>
				<uni-col :span="24">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/notice.png" alt="">
						</view>
						<view class="info">
							<p class="mr name">系统通知</p>
							<p>你提交的头条号信息修改申请已通过审核。</p>
							<p class="mr">2022-4-16</p>
						</view>
					</view>
				</uni-col>
			</uni-row>
		</view>
		
		<view class="list">
			<uni-row>
				<uni-col :span="14">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/user/touxian07.jpg" alt="">
						</view>
						<view class="info">
							<p class="mr name">青春是套旧校服</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw" color="black" />
							<p class="mr">2021-3-06</p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4">
					<view class="comment">
						<p>[我的评论]在家吹着空调，听着歌，看着到处挤成一团的人，怎一个爽字得了</p>
					</view>
				</uni-col>
			</uni-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Notification', //通知
		data() {
			return {

			}
		},
		methods: {

		},
		components: {

		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";

	.notification {
		.portrait {
			img {
				width: 13vw;
				height: 13vw;
				border-radius: 50%;
			}
		}
		.list{
			margin: 5px 0;
			padding-top: 10px;
			border-top: 1px solid #e7e7e7;
			color: #303030;
		}
		.user-info {
			display: flex;

			view {
				margin: 5px;
			}
			.mr{
				display: block;
				margin: 3px 0;
				text-align: left;
			}
		}

		.comment {
			height: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 4;
		}

		.like {
			color: #4886c7;
			border-radius: 10px;
			padding: 5px 10px;
			background-color: #f7f7f7;
			margin-top: 8px;
		}
		.name{
			font-weight: 600;
		}
	}
</style>