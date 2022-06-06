<template>
	<view class="system-settings">
		<uni-list class="list-box">
			<uni-list-item showArrow title="编辑资料" />
			<uni-list-item showArrow title="账号和隐私设置" />
			<uni-list-item showArrow title="黑名单" />
		</uni-list>

		<uni-list class="list-box">
			<uni-list-item title="夜间模式" showSwitch></uni-list-item>
			<uni-list-item title="清除缓存" rightText="113.54MB" />
			<uni-list-item title="字体大小" rightText="中" />
			<uni-list-item title="非WiFi网络流量" rightText="最佳效果(下载大图)" />
			<uni-list-item title="非WiFi网络播放提醒" rightText="提醒一次" />
			<uni-list-item title="推送通知" showSwitch></uni-list-item>
			<uni-list-item title="提示语音开关" showSwitch switchChecked></uni-list-item>
			<uni-list-item title="H5广告过滤" showSwitch switchChecked></uni-list-item>
		</uni-list>

		<uni-list class="list-box">
			<uni-list-item showArrow title="广告设置" />
			<uni-list-item showArrow title="头条封面" />
		</uni-list>

		<view class="exit">
			<navigator url="/src/pages/Login">退出登录</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'systemSettings',
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
	@import '@/src/styles/index.less';

	.system-settings {
		background-color: @backgroundColor;
		overflow: hidden
	}

	.list-box {
		margin-top: 10px;
	}

	.exit {
		padding: 12px 15px;
		padding-left: 15px;
		background-color: white;
		margin: 20px 0;
		color: #e94646;
		text-align: center;
	}
</style>
