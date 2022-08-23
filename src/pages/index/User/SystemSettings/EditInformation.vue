<template>
	<view class="edit-information">
		<uni-list class="list-box">
			<uni-list-item link>
				<template v-slot:body>
					<text class="slot-box slot-text">头像</text>
				</template>
				<template v-slot:footer>
					<img src="/static/user/touxian.jpg" alt="" class="portrait">
				</template>
			</uni-list-item>
			<uni-list-item showArrow title="用户名" rightText="ShadowMe" />
			<uni-list-item showArrow title="介绍" rightText="分享生活,分享旅游" />

		</uni-list>
		<uni-list class="list-box">
			<uni-list-item showArrow title="性别" rightText="女" />
			<uni-list-item showArrow title="生日" rightText="待完善" />
			<uni-list-item showArrow title="地区" rightText="待完善" />
		</uni-list>
	</view>
</template>

<script>
	export default {
		name: 'EditInformation',
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
	@fontSize: 1rem;
	.edit-information{
		overflow: hidden;
		height: 100%;
		background-color: whitesmoke;
	}
	.list-box{
		margin-top: 10px;
	}
	.slot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.slot-image {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		margin-right: 10px;
		width: 30px;
		height: 30px;
	}

	.slot-text {
		flex: 1;
		font-size: 14px;
		margin-right: 10px;
	}

	.portrait {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}

	/deep/ .uni-list-item__content-title,
	/deep/ .uni-list-item__extra-text,
	.slot-text {
		font-size: @fontSize;
	}

	/deep/ .uni-icon-wrapper {
		font-size: @fontSize  !important;
	}
</style>
