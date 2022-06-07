<template>
	<view class="push-page">
		<scroll-view scroll-y="true" class="scroll-Y" style="height: 100%;">
			<view class="pu-wrap">
				<viewArticleSection Repost="474" Comment="287" Like="4690" avatar="/static/user/touxian02.jpg"
					note="2022 年 5 月 18 日" userName="醒不来的梦">
					<view class="vedio-tyle">
						<uni-row>
							<uni-col>
								<view class="text pd">
									四川皇泽寺，存有女皇帝唯一的真容像，看看武则天到底长什么样子
								</view>
								<view class="vedio-cover pd">
									<img src="/static/collectPage/collectPage01.jpg" class="cover">
									<img src="/static/start.png" class="start-img">
								</view>
							</uni-col>
						</uni-row>
					</view>
				</viewArticleSection>
				<viewArticleSection Repost="6" Comment="987" Like="4290" avatar="/static/user/touxian08.jpg"
					note="2022 年 10 月 19 日" userName="凌晨的末班车">
					<view class="acticle-tyle">
						<uni-row>
							<uni-col :span="14">
								<view class="text pd">
									108岁病人顺利出院，瑞金医院卢湾分院已收治10位百岁老人
								</view>
							</uni-col>
							<uni-col :span="10">
								<view class="cover pd">
									<img src="/static/collectPage/collectPage03.jpg" alt="">
								</view>
							</uni-col>
						</uni-row>
					</view>
				</viewArticleSection>
				<viewArticleSection Repost="94" Comment="857" Like="17690" avatar="/static/user/touxian01.jpg"
					note="2021 年 1 月 11 日" userName="遮住星星的窗">
					<view class="vedio-tyle">
						<uni-row>
							<uni-col>
								<view class="text pd">
									毛主席纪念堂为何建在天安门广场？为何正门朝北？有何寓意？
								</view>
								<view class="vedio-cover pd">
									<img src="/static/collectPage/collectPage02.jpg" class="cover">
									<img src="/static/start.png" class="start-img">
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
		name: 'PushPage', //推送
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

	.push-page {
		.pu-acticle
	}
</style>
