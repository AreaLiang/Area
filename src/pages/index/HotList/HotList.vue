<template>
	<view class="hostlist">
		<searchbox searchPlaceholder="TV9833航班大火被扑灭" /><!-- 搜索框 -->
		<view class="top-img">
			<img src="/static/hotList/hotListTop.jpg" alt="">
		</view>
		<view class="tip">每10分钟更新一次</view>
		<view class="news-list">
			<scroll-view scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				style="height: 100%;">
				<view class="item" v-for="(p,index) in NewsList" :key="index">
					<navigator url="/src/pages/index/HotList/Articel_HotList" >
						<uni-row :gutter="10">
							<uni-col :span="2">
								<view class="sp-item num">
									<span>{{parseInt(index)+1}}</span>
								</view>
							</uni-col>
							<uni-col :span="18">
								<view class="sp-item title-box">
									<span class="title">{{p.title}}</span>
								</view>
							</uni-col>
							<uni-col :span="4" style="text-align: right;">
								<view class="sp-item" v-if="p.status=='hot'?true:false">
									<uni-icons class="status" custom-prefix="iconfont" type="icon-remen" size="4vw"
										color="red"></uni-icons>
								</view>
								<view class="sp-item">
									<uni-icons class="icon-box" type="right" size="15"></uni-icons>
								</view>
							</uni-col>
						</uni-row>
					</navigator>
				</view>
				<uni-load-more iconType="circle" :status="status" />
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import searchbox from '@/components/searchBox'
	import {
		getArticleApi
	} from '@/request/api.js'
	export default {
		name: 'HotList',
		data() {
			return {
				NewsList: [],
				status: 'more',
				page: 1,
				showNumber: 15 //一页显示多少条数据
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				this.page += 1;
				this.status = "loading";
				getArticleApi({
					page: this.page,
					number: this.showNumber
				}).then((res) => {

					let data = Object.values(JSON.parse(JSON.stringify(res)).data);
					let array = Object.values(JSON.parse(JSON.stringify(this.NewsList)));

					if (data.length > 0) {
						array.push(...data);
						this.NewsList = array;
						this.status = "more"
					} else {
						this.status = "no-more"
					}

				})
			}
		},
		components: {
			searchbox
		},
		onReady() {
			getArticleApi({
				page: this.page,
				number: this.showNumber
			}).then((res) => {
				console.log(JSON.parse(JSON.stringify(res)));
				this.NewsList = res.data
			})
		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";

	.hostlist {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.top-img {
		img {
			display: inherit;
			width: 100%;
		}
	}

	.tip {
		background-color: rgb(245, 245, 245);
		height: 25px;
		line-height: 25px;
		font-size: 10px;
		color: #ababab;
		padding-left: 10px;
	}

	.sp-item {
		padding: 10px 5px;
		display: inline-block;
		height: 7vw;
		line-height: 7vw;
	}

	.news-list {
		flex: 1;
		overflow: hidden;

		.item {
			border-bottom: 1px solid #dddddd;

			&:nth-child(-n+3) .num {
				font-size: 6vw;
				color: red;
			}
		}

		.title {
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100%;
			overflow: hidden;
			display: block;
		}

		.title-box {
			width: 100%;
		}

		.num {
			width: 100%;
			text-align: center;
			font-size: 4vw;
			color: #ababab;
		}
	}
</style>
