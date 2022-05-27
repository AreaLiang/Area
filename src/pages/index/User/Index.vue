<template>
	<view class="userPage">
		<!-- <view class="not-login-box login-status">
			<img src="/static/login.png" alt="" @click="login()">
		</view> -->
		<uni-row class="logged-box login-status">
			<uni-col :span="6">
				<view class="portrait-box">
					<img src="/static/user/touxian.jpg" alt="" class="portrait">
				</view>
			</uni-col>
			<uni-col :span="18">
				<view class="userInfo-box">
					<view class="user-name">
						<view class="">
							AreaLiang
							<uni-icons type="right" size="15"></uni-icons>
						</view>
						<view class="apply-certification">
							申请认证
						</view>
					</view>
					<view class="notice-box">
						<view class="toutiao notice-item">
							<span class="title">头条</span>
							<span class="num">2</span>
						</view>
						<view class="guanzhu notice-item">
							<span class="title">关注</span>
							<span class="num">0</span>
						</view>
						<view class="fenshi notice-item">
							<span class="title">粉丝</span>
							<span class="num">20470</span>
						</view>
					</view>
				</view>
			</uni-col>
		</uni-row>
		<view class="item-box">
			<scroll-view  scroll-y="true" class="scroll-Y" style="height: 100%;">
				<uni-card title="常用功能" margin="10px 0 10px 0" :border="false">
					<uni-grid :column="4" :highlight="true" :showBorder="false">
						<uni-grid-item v-for="(item, index) in commonFunctions" :index="index" :key="index">
							<navigator :url="item.url">
								<view class="grid-item-box" style="background-color: #fff;">
									<uni-icons custom-prefix="iconfont" :type="item.icon" :size="25" color="#777" />
									<text class="text">{{item.name}}</text>
								</view>
							</navigator>
						</uni-grid-item>
					</uni-grid>
				</uni-card>
			
				<uni-card title="更多功能" margin="10px 0 10px 0" :border="false">
					<uni-grid :column="4" :highlight="true" :showBorder="false">
						<uni-grid-item v-for="(item, index) in moreFunctions" :index="index" :key="index">
							<navigator :url="item.url">
								<view class="grid-item-box" style="background-color: #fff;">
									<uni-icons custom-prefix="iconfont" :type="item.icon" :size="25" color="#777" />
									<text class="text">{{item.name}}</text>
								</view>
							</navigator>
						</uni-grid-item>
					</uni-grid>
				</uni-card>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'User',
		data() {
			return {
				commonFunctions: [{
						name: "关注",
						icon: "icon-guanzhu",
						url: "src/pages/index/User/Follow",
					},
					{
						name: "消息通知",
						icon: "icon-xiaoxitongzhi",
						url: "src/pages/index/User/Notification",
					},
					{
						name: "收藏",
						icon: "icon-shoucang",
						url: "src/pages/index/User/GatherPage?index=0&&name=CollectPage",
					},
					{
						name: "浏览历史",
						icon: "icon-liulanlishi",
						url: "src/pages/index/User/GatherPage?index=3&&name=HistoryRecord",
					},
					{
						name: "钱包",
						icon: "icon-qianbao",
						url: "src/pages/index/User/Wallet",
					},
					{
						name: "用户反馈",
						icon: "icon-feedback",
						url: "",
					},
					{
						name: "免流量服务",
						icon: "icon-wode-faxian-mianliuliang",
						url: "src/pages/index/User/FreeStreamingService",
					},
					{
						name: "系统设置",
						icon: "icon-xitong",
						url: "src/pages/index/User/SystemSettings"
					}
				],
				moreFunctions: [{
						name: "订单",
						icon: "icon-dingdan",
						url: "",
					},
					{
						name: "夜间模式",
						icon: "icon-yejianmoshi",
						url: "",
					},
					{
						name: "评论",
						icon: "icon-pinglun",
						url: "src/pages/index/User/GatherPage?index=1&&name=Comment",
					},
					{
						name: "点赞",
						icon: "icon-dianzan",
						url: "src/pages/index/User/GatherPage?index=2&&name=LikePage",
					},
					{
						name: "扫一扫",
						icon: "icon-saoyisao",
						url: "",
					},
					{
						name: "购物车",
						icon: "icon-gouwuche",
						url: "",
					}
					
				]
			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '/src/pages/Login'
				})
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";
	@import '@/src/styles/index.less';
	
	.userPage {
		overflow: auto;
		background: #ebebeb;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.item-box{
		flex: 1;
		overflow: hidden;
	}

	.logged-box {
		padding-left: 15px;
		display: flex;
		align-items: center;
		color: #2c2c2c;

		.portrait-box {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			border: 1px solid #e1dfdf;
		}

		.portrait {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}

		.user-name {
			font-size: 5vw;
			font-weight: 600;
			display: flex;
			justify-content: space-between;
		}

		.apply-certification {
			background: #fdeaea;
			border-radius: 10px 0 0 10px;
			width: 75px;
			height: 25px;
			font-size: 14px;
			text-align: center;
			line-height: 25px;
			color: #fb6161;
			font-weight: 500;
		}
	}

	.notice-box {
		display: flex;
		flex-direction: row;
		margin-top: 3px;

		.notice-item {
			margin-right: 5px;

			span {
				margin-right: 2px;
			}
		}
	}

	.login-status {
		background-color: white;
		height: 120px;
	}


	.not-login-box {
		text-align: center;
	}

	.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 450px) {
		.logged-box {
			.user-name {
				font-size: 20px;
			}

			.notice-box {
				font-size: 18px;
			}
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */
</style>
