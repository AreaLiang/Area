<template>
	<view class="history-record">
		<scroll-view scroll-y="true" class="scroll-Y" style="height: 98%;">
			<viewArticleSection Repost="64" Comment="5987" Like="14290" avatar="/static/user/touxian03.jpg" note="2022 年 3 月 1 日" userName="赖少">
				<view class="acticle-tyle">
					<uni-row>
						<uni-col :span="14">
							<view class="text pd">
								上海金山政务服务场所逐步恢复服务。
							</view>
						</uni-col>
						<uni-col :span="10">
							<view class="cover pd">
								<img src="/static/history/history01.jpg" alt="">
							</view>
						</uni-col>
					</uni-row>
				</view>
			</viewArticleSection>
			<viewArticleSection Repost="116" Comment="1687" Like="23110" avatar="/static/user/touxian02.jpg" note="2022 年 1 月 29 日" userName="黄春燕">
				<view class="acticle-tyle" >
					<uni-row>
						<uni-col :span="14">
							<view class="text pd">
								美方频频将手伸向亚洲，究竟有着怎样的盘算？作为重要地区组织的东盟，需要的又是什么样的合作？作为重要地区组织的东盟，需要的又是什么样的合作
							</view>
						</uni-col>
						<uni-col :span="10">
							<view class="cover pd">
								<img src="/static/history/history02.jpg" alt="">
							</view>
						</uni-col>
					</uni-row>
				</view>
			</viewArticleSection>
			<viewArticleSection Repost="4" Comment="87" Like="1690" avatar="/static/user/touxian01.jpg" note="2021 年 3 月 18 日" userName="赖小麦">
				<view class="vedio-tyle">
					<uni-row>
						<uni-col>
							<view class="text pd">
								Uzi无限火力50杀玩到嗨，6分钟15个头对面被杀崩溃。
							</view>
							<view class="vedio-cover pd">
								<img src="/static/history/history03.jpg" class="cover">
								<img src="/static/start.png" class="start-img">
							</view>
						</uni-col>
					</uni-row>
				</view>
			</viewArticleSection>
		</scroll-view>
	</view>

</template>

<script>
	import viewArticleSection from '@/components/viewArticleSection.vue'
	export default {
		name: 'HistoryRecord', //浏览历史
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			viewArticleSection
		},
		mounted() {

		}
	}
</script>

<style scoped lang="less">
	@import '@/src/styles/index';

	.history-record{
		.pu-acticle
	}
	
</style>
