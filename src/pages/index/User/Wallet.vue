<template>
	<view class="wallet">
		<view class="top-box">
			<view class="item">
				<uni-icons custom-prefix="iconfont" type="icon-hongbao" size="8vw" color="white" />
				<p class="name">红包</p>
				<p>0.00元</p>
			</view>
			<view class="item">
				<uni-icons custom-prefix="iconfont" type="icon-taojinbi" size="8vw" color="white" />
				<p class="name">头条币</p>
				<p>0.00币</p>
			</view>
			<view class="item">
				<uni-icons custom-prefix="iconfont" type="icon-kabao" size="8vw" color="white" />
				<p class="name">卡包</p>
			</view>

		</view>
		<view class="server-box">
			<p class="title">头条服务</p>
			<view class="lattice">
				<uni-row class="row">
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-jiedai"></use>
							</svg>
							<p class="item-name">放心借</p>
						</view>
					</uni-col>
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xinyongkayinhangka"></use>
							</svg>
							<p class="item-name">头条信用卡</p>
						</view>
					</uni-col>
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shangcheng-2"></use>
							</svg>
							<p class="item-name">值点商城</p>
						</view>
					</uni-col>
				</uni-row>
				<uni-row class="row">
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-shoujichongzhi"></use>
							</svg>
							<p class="item-name">手机充值</p>
						</view>
					</uni-col>
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-_baoxianlipei"></use>
							</svg>
							<p class="item-name">保险</p>
						</view>
					</uni-col>
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-gupiao-select"></use>
							</svg>
							<p class="item-name">股票</p>
						</view>
					</uni-col>
				</uni-row>
				<uni-row class="row">
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xiaoshuo"></use>
							</svg>
							<p class="item-name">小说账户</p>
						</view>
					</uni-col>
				</uni-row>
			</view>
		</view>
		<view class="server-box">
			<p class="title">为你推荐</p>
			<view class="lattice">
				<uni-row class="row">
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-cai"></use>
							</svg>
							<p class="item-name">大盘猜涨跌</p>
						</view>
					</uni-col>
					<uni-col :span="8" class="col">
						<view class="lattice-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-chengshifuwu"></use>
							</svg>
							<p class="item-name">城市服务</p>
						</view>
					</uni-col>
					
				</uni-row>
			</view>
		</view>
		
	</view>
</template>

<script>
	import '@/static/iconfont.js'
	export default {
		name: 'Wallet', //钱包
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
	@import "@/src/styles/index.less";
	
	@borderStyle: 1px solid #f1f1f1;
	
	.wallet{
		background-color: @backgroundColor;
		height: 100%;
	}
	.top-box {
		background-color: rgb(58, 63, 75);
		display: flex;
		justify-content: space-around;
		padding: 20px 0;

		.item {
			text-align: center;
			color: white;
		}

		.name {
			margin-top: 5px;
		}
	}
	.server-box{
		background-color: white;
		margin-top: 10px;
		&:nth-child(2){
			margin-top: 0;
		}
		.title{
			padding: 10px;
			color: #707070;
		}
		.icon {
			width: 2em;
			height: 2em;
			vertical-align: -0.15em;
			fill: currentColor;
			overflow: hidden;
		}
		.item-name{
			margin-top: 5px;
		}
	}
	.lattice {
		.lattice-item {
			border-right: @borderStyle;
			padding: 25px 0;
			text-align: center;
		}
		.row {
			border-top: @borderStyle;
		}
	}
	.row .col:nth-child(3) {
		.lattice-item {
			border-right: 0;
		}
	}
	
</style>
