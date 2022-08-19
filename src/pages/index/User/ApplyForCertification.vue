<template>
	<view class="apply-certification">
		<view class="top">
			<view class="left">
				<img src="/static/user/touxian.jpg" class="portrait">
				<span class="name">AreaLiang</span>
			</view>
			<view class="right">
				<uni-icons custom-prefix="iconfont" type="icon-shenfenzheng" size="6vw" color="#ff3a3a" />
				<span style="color: #ff3a3a;margin: 0 10px;">实名认证未完成 ></span>
			</view>
		</view>
		<view class="main">
			<view class="item-box">
				<p class="title">个人加V认证</p>
				<uni-card :isFull="true" class="cd-card">
					<template v-slot:title>
						<view class="cd-card-title">
							<span class="little-title">职业认证</span>
							<view class="tag-view"><uni-tag :inverted="true" text="去认证" type="error" /></view>
						</view>
					</template>
					<text class="uni-body">适用于有正当职业或附加身份的作者，如医生等</text>
				</uni-card>
				<uni-card :isFull="true" class="cd-card">
					<template v-slot:title>
						<view class="cd-card-title">
							<span class="little-title">兴趣认证</span>
							<view class="tag-view"><uni-tag :inverted="true" text="去认证" type="error" /></view>
						</view>
					</template>
					<text class="uni-body">适用于在某个领域持续贡献优质内容的作者</text>
				</uni-card>
			</view>
			
			<view class="item-box">
				<p class="title">组织加V认证</p>
				<uni-card :isFull="true" class="cd-card">
					<template v-slot:title>
						<view class="cd-card-title">
							<span class="little-title">机构认证</span>
							<view class="tag-view"><uni-tag :inverted="true" text="去认证" type="error" /></view>
						</view>
					</template>
					<text class="uni-body">适用于类型为国家机构、新闻媒体、其他组织的作者</text>
				</uni-card>
				<uni-card :isFull="true" class="cd-card">
					<template v-slot:title>
						<view class="cd-card-title">
							<span class="little-title">企业认证</span>
							<view class="tag-view"><uni-tag :inverted="true" text="去认证" type="error" /></view>
						</view>
					</template>
					<text class="uni-body">适用于类型为企业、群媒体的作者</text>
				</uni-card>
			</view>
			
			<view class="item-box">
				<p class="title">其他认证</p>
				<uni-card :isFull="true" class="cd-card">
					<template v-slot:title>
						<view class="cd-card-title">
							<span class="little-title">创作能力证明</span>
							<view class="tag-view"><uni-tag :inverted="true" text="去认证" type="error" /></view>
						</view>
					</template>
					<text class="uni-body">关联其他平台自媒体信号，提升通过率</text>
				</uni-card>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ApplyForCertification', //申请认证
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

	.apply-certification {
		margin: 0 10px;

		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left,
			.right {
				display: flex;
				align-items: center;
			}

			.name {
				font-weight: 600;
				margin-left: 10px;
			}
		}
		
		.main{
			padding-bottom: 15px;
		}
		.portrait {
			border-radius: 50%;
			height: 15vw;
			width: 15vw;
		}

		.item-box {
			margin: 40px 0;
			.title {
				color: #909399;
				margin-bottom: 5px;
			}
			.little-title{
				font-weight: 600;
			}
		}
		.cd-card{
			margin-top: 5px !important;
		}
		.cd-card-title{
			display: flex;
			justify-content: space-between;
			margin: 8px 0;
			font-size: 4vw;
			.uni-tag{
				font-size: 2.5vw;
			}
		}
	}
</style>
