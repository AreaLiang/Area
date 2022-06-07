<template>
	<view class="like-page">
		<scroll-view scroll-y="true" class="scroll-Y" style="height: 100%;">
			<view class="pu-wrap">
				<viewArticleSection Comment="7" Like="90" avatar="/static/user/touxian08.jpg" note="2022 年 10 月 19 日"
					userName="灵静欣蓉" :red="true">
					<view class="acticle-tyle">
						<uni-row>
							<uni-col :span="14">
								<view class="text pd">
									了不起的朋友们丨打卡国家植物园 神奇物种和“神秘朋友”上线
								</view>
							</uni-col>
							<uni-col :span="10">
								<view class="cover pd">
									<img src="/static/likePage/likePage01.jpg" alt="">
								</view>
							</uni-col>
						</uni-row>
					</view>
				</viewArticleSection>

				<viewArticleSection Repost="6669" Comment="98417" Like="264290" avatar="/static/user/touxian09.jpg"
					note="2022 年 10 月 19 日" userName="谷丝" :red="true">
					<view class="acticle-tyle">
						<uni-row>
							<uni-col :span="14">
								<view class="text pd">
									全球连线｜“火眼”识病毒，中国实验室助力非洲抗疫
								</view>
							</uni-col>
							<uni-col :span="10">
								<view class="cover pd">
									<img src="/static/likePage/likePage02.jpg" alt="">
								</view>
							</uni-col>
						</uni-row>
					</view>
				</viewArticleSection>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import viewArticleSection from '@/components/viewArticleSection.vue'
	export default {
		name: 'LikePage', //点赞
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			viewArticleSection
		}
	}
</script>

<style scoped lang="less">
	@import '@/src/styles/index';

	.like-page {
		.pu-acticle
	}
</style>
