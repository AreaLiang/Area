<template>
	<view class="userPage" :class="isDark?'dark':''">
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
						<view>
							AreaLiang
							<uni-icons type="right" size="1rem"></uni-icons>
						</view>
						<view class="apply-certification" @click="applyCertification">
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
			<scroll-view scroll-y="true" class="scroll-Y" style="height: 100%;">
				<uni-card title="常用功能" margin="10px 0 10px 0" :border="false">
					<uni-grid :column="4" :highlight="true" :showBorder="false">
						<uni-grid-item v-for="(item, index) in commonFunctions" :index="index" :key="index">
							<navigator :url="item.url">
								<view class="grid-item-box">
									<uni-icons custom-prefix="iconfont" :type="item.icon" size="1.5rem" color="#777" />
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
								<view class="grid-item-box">
									<uni-icons custom-prefix="iconfont" :type="item.icon" size="1.5rem" color="#777" />
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
	import {mapGetters,mapState} from 'vuex'
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
						url: "src/pages/index/User/SystemSettings/index"
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
		computed:{
			...mapState(['isDark'])
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '/src/pages/Login'
				})
			},
			applyCertification(){//申请认证
				uni.navigateTo({
					url: '/src/pages/index/User/ApplyForCertification'
				})
			}
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

	.item-box {
		flex: 1;
		overflow: hidden;
	}

	.logged-box {
		padding-left: 15px;
		display: flex;
		align-items: center;
		color: #2c2c2c;

		.portrait-box {
			width: 4.5rem;
			height: 4.5rem;
			border-radius: 50%;
			border: 1px solid #e1dfdf;
		}

		.portrait {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}

		.user-name {
			font-weight: 600;
			display: flex;
			justify-content: space-between;
		}

		.apply-certification {
			background: #fdeaea;
			border-radius: 10px 0 0 10px;
			width: 5rem;
			height: 2rem;
			font-size: 1rem;
			text-align: center;
			line-height: 2rem;
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
		height: 6.25rem;
	}


	.not-login-box {
		text-align: center;
	}

	.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 1rem;
		margin-top: 1rem;
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
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.uni-grid-item {
		align-items: center;
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
	// @media screen and (max-width: 450px) {
	// 	.logged-box {
	// 		.user-name {
	// 			font-size: 20px;
	// 		}

	// 		.notice-box {
	// 			font-size: 14px;
	// 		}
	// 	}
	// }

	// @media screen and (min-width: 768px) and (max-width: 1425px) {
	// 	.swiper {
	// 		height: 630px;
	// 	}
	// }

	// @media screen and (min-width: 1425px) {
	// 	.swiper {
	// 		height: 830px;
	// 	}
	// }

	/* #endif */
</style>
