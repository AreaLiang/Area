<template>
	<view class="follow">
		<view class="list">
			<uni-row>
				<uni-col :span="14">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/user/touxian10.jpg" alt="">
						</view>
						<view class="info">
							<p class="mr name">青春是套旧校服</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw"
								color="black" />
							<p class="mr">粉丝数: 178</p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4" class="status_box">
					<view class="status">
						<p>已关注</p>
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
							<p class="mr name">实盘监控</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw"
								color="black" />
							<p class="mr">粉丝数: 9178</p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4" class="status_box">
					<view class="status">
						<p>已关注</p>
					</view>
				</uni-col>
			</uni-row>
		</view>

		<view class="list">
			<uni-row>
				<uni-col :span="14">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/user/touxian08.jpg" alt="">
						</view>
						<view class="info">
							<p class="mr name">乐享艺术数字</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw"
								color="black" />
							<p class="mr">粉丝数: 12178</p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4" class="status_box">
					<view class="status">
						<p>已关注</p>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="list">
			<uni-row>
				<uni-col :span="14">
					<view class="user-info">
						<view class="portrait">
							<img src="/static/user/touxian09.jpg" alt="">
						</view>
						<view class="info">
							<p class="mr name">永劫无间</p>
							<uni-icons custom-prefix="iconfont" class="mr" type="icon-dianzan" size="5vw"
								color="black" />
							<p class="mr">粉丝数: 178</p>
						</view>
					</view>
				</uni-col>
				<uni-col :span="6" :offset="4" class="status_box">
					<view class="status">
						<p>已关注</p>
					</view>
				</uni-col>
			</uni-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Follow', //关注
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
	.portrait {
		img {
			width: 13vw;
			height: 13vw;
			border-radius: 50%;
		}
	}

	.list {
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

		.mr {
			display: block;
			margin: 3px 0;
			text-align: left;
		}
	}

	.status_box {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}

	.user-info,
	.status {
		display: flex;
		align-items: center;
	}

	.status {
		p {
			border: 1px solid #cdc8c8;
			padding: 3px 5px;
			color: #afaeae;
			border-radius: 8px;
		}
	}

	.name {
		font-weight: 600;
	}
</style>
