<template>
	<view class="loginType">
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-weixin"></use>
		</svg>
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-QQ"></use>
		</svg>
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-douyin"></use>
		</svg>
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-pingguo"></use>
		</svg>
	</view>
</template>

<script>
	import '@/static/iconfont.js'

	export default {
		name: "loginType",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
	@import "@/static/iconfont.css";

	.loginType {
		margin: 15px 0;
		.icon {
			width: 1.5em;
			height: 1.5em;
			border: 1px solid #dddddd;
			border-radius: 50%;
			padding: 5px;
			vertical-align: -0.15em;
			fill: currentColor;
			overflow: hidden;
			margin: 0 8px;
		}
	}
</style>
