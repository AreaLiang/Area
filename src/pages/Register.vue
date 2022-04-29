<template>
	<view class="register">
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#f5f5f5" @change="change">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<view class="title">
					<text>常用</text>	
				</view>
				<uni-card :isFull="true" class="area-box">
					<view class="area">
						<text>中国大陆</text>
						<text class="area-number">+86</text>
					</view>
					<view class="area">
						<text>中国香港</text>
						<text class="area-number">+852</text>
					</view>
					<view class="area">
						<text>中国澳门</text>
						<text class="area-number">+853</text>
					</view>
					<view class="area">
						<text>中国台湾</text>
						<text class="area-number">+886</text>
					</view>
				</uni-card>
				
				<view class="title">
					<text>A</text>	
				</view>
				<uni-card :isFull="true">
					<view class="area">
						<text>阿尔巴尼亚</text>
						<text class="area-number">+355</text>
					</view>
					<view class="area">
						<text>阿尔及利亚</text>
						<text class="area-number">+213</text>
					</view>
					<view class="area">
						<text>阿富汗</text>
						<text class="area-number">+93</text>
					</view>
					<view class="area">
						<text>阿根廷</text>
						<text class="area-number">+54</text>
					</view>
					<view class="area">
						<text>爱尔兰</text>
						<text class="area-number">+353</text>
					</view>
					<view class="area">
						<text>埃及</text>
						<text class="area-number">+20</text>
					</view>
					<view class="area">
						<text>埃塞俄比亚</text>
						<text class="area-number">+251</text>
					</view>
					<view class="area">
						<text>爱沙尼亚</text>
						<text class="area-number">+372</text>
					</view>
					<view class="area">
						<text>阿拉伯联合酋长国</text>
						<text class="area-number">+971</text>
					</view>
				</uni-card>
				
				<view class="title">
					<text>B</text>	
				</view>
				<uni-card :isFull="true">
					<view class="area">
						<text>巴巴多斯</text>
						<text class="area-number">+1246</text>
					</view>
					<view class="area">
						<text>巴布亚新几内亚</text>
						<text class="area-number">+675</text>
					</view>
					<view class="area">
						<text>巴哈马</text>
						<text class="area-number">+1242</text>
					</view>
				</uni-card>
				<view class="title">
					<text>C</text>	
				</view>
				<uni-card :isFull="true">
					<view class="area">
						<text>朝鲜</text>
						<text class="area-number">+850</text>
					</view>
				</uni-card>
			</view>
		</uni-popup>
		<button class="button" type="primary" @click="toggle('right')">
			<text class="button-text">右侧</text>
		</button>
	</view>
</template>

<script>
	export default {
		name: 'Register',
		data() {
			return {
				type: 'center',
			}
		},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
		},
		components: {

		}
	}
</script>

<style scoped lang="less">
	.register {
		.popup-content {
			width: 80vw;
		}
		.title {
			height: 30px;
			line-height: 30px;
			text{
				margin-left: 10px;
			}
		}
		.area{
			border-bottom: 1px solid #f3f3f3;
			padding: 10px 0;
			color: #383838;
		}
		.area-number{
			margin-left: 8px;
			color: #a3a3a3;
		}
		.area-box .area{
			&:last-child{
				border: 0;
			}
		}

	}
</style>
