<template>
	<view class="title-text">
		<img src="@/static/logo.png" class="logo x-md" alt="">
		<span class="x-md">{{titleText}}</span>
	</view>
</template>

<script>
	export default {
		name: "logoTitle",
		data() {
			return {

			};
		},
		props:['titleText']
	}
</script>

<style lang="less">
	.title-text {
		font-size: 6vw;
		font-weight: 500;
		display: block;
		letter-spacing: 2px;
	}
	.logo{
		width: 7.5vw;
		height: 7.5vw;
	}
	.x-md{
		vertical-align: middle;
		margin: 0 3px;
	}
</style>
