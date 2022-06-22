<template>
	<view class="home-page">
		<view class="box-bg">
			<searchbox :searchPlaceholder="searchPlaceholder" /><!-- 搜索框 -->
		</view>
		<uni-row class="scroll-box">
			<uni-col :span="23">
				<scroll-view class="scroll-view_H" scroll-x="true" style="white-space: nowrap;" scroll-left="0">
					<view class="top-title-box">
						<view class="top-title">
							<span @click="currentType(1)" :class="{active:articelType==1}">关注</span>
							<span @click="currentType(2)" :class="{active:articelType==2}">推荐</span>
							<span @click="currentType(3)" :class="{active:articelType==3}">肇庆</span>
							<span @click="currentType(4)" :class="{active:articelType==4}">视频</span>
							<span @click="currentType(5)" :class="{active:articelType==5}">小说</span>
							<span @click="currentType(6)" :class="{active:articelType==6}">小视频</span>
							<span @click="currentType(7)" :class="{active:articelType==7}">抗疫</span>
							<span @click="currentType(8)" :class="{active:articelType==8}">问答</span>
						</view>
					</view>
				</scroll-view>
			</uni-col>
			<uni-col :span="2"
				style="position: absolute;right: 0; background-color: rgb(245 245 245 / 85%);text-align:center;top:50%;transform: translateY(-50%);">
				<view class="more-box">
					<uni-icons type="bars" size="1.5em"></uni-icons>
				</view>
			</uni-col>
		</uni-row>
		<view class="content">
			<view class="wrap">
				<scroll-view scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower"  style="height: 100%;">
					<view class="item" v-for="(p,index) in article" :key="index">
						<navigator url="/src/pages/index/HotList/Articel_HotList?id=1">
							<h3 class="title">{{p.title}}</h3>
							<view class="article-img" v-if="p.ads?true:false">
								<uni-row :gutter="10">
									<uni-col v-for="imgItem in p.ads.slice(0,3)" :span="8">
										<img :src="imgItem.imgsrc" alt="imgItem.title">
									</uni-col>
								</uni-row>
							</view>
							<view class="acticle-video" v-if="p.boardid=='video_bbs'">
								<uni-row>
									<uni-col :span="24">
										<video controls :src="p.videoinfo.mp4_url"
											style="width: 100%;margin: 10px 0;"></video>
									</uni-col>
								</uni-row>
							</view>
							<view class="article-info">
								<span v-show="p.top?true :false" class="top-span">置顶</span>
								<span>{{p.source}}</span>
								<span>{{p.replyCount}} 评论</span>
								<span v-show="p.top?false :true">{{p.downTimes}}小时前</span>
							</view>
						</navigator>
					</view>
					
					<uni-load-more iconType="circle" :status="status" />
					
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import {getArticleApi} from '@/request/api.js'
	import searchbox from '@/components/searchBox'

	export default {
		name: 'HomePage',
		data() {
			return {
				article: [],
				status: 'more',
				page:1,
				showNumber:10 ,//一页显示多少条数据
				articelType:2
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
			console.log(this.article)
				if(this.status=="more"){
					this.page += 1;
					this.status="loading";
					getArticleApi({
						page: this.page,
						number: this.showNumber
					}).then((res) => {
						let data = Object.values( JSON.parse(JSON.stringify(res)).data );
						
						if(data.length>0){
							this.article.push(...data)
							this.status="more"
						}else{
							this.status="no-more"
						}
						
					})
				}
			},
			currentType(i){
				this.articelType=i;
				this.page=i-1;
				this.getData();
			},
			getData(){
				getArticleApi({
					page: this.page,
					number: this.showNumber
				}).then((res) => {
					console.log(JSON.parse(JSON.stringify(res.data)));
					let deepRes = Object.values(JSON.parse(JSON.stringify(res.data))); //把对象变成一个数组
				
					let top = deepRes.filter((p) => { //筛选需要置顶的数组
						return p.top
					})
				
					let common = deepRes.filter((p) => { //筛选没有置顶的数组
						return !p.top
					})
					if (top.length > 0) { //重新排序，把需要置顶的数据放在头部
						for (let i = 0; i < top.length; i++) {
							common.unshift(top[i])
						}
					}
					this.article = common;
				});
			}
			
		},
		computed: {
			...mapState(["userData"]),
			searchPlaceholder() {
				return {
					...this.article[0]
				}.title
			}
		},
		components: {
			searchbox
		},
		onReady() {
			let token = localStorage.getItem('token');
			this.getData();
		}
	}
</script>

<style scoped lang="less">
	.home-page {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.box-bg {
		background: #d04542;
	}

	.scroll-box {
		border-bottom: 1px solid #cbcaca;
	}
	
	.top-title-box{
		.active{
			color: #dd0000;
			font-weight: 600;
		}
	}
	.top-title span {
		margin: 5px 10px;
		display: inline-block;
	}

	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		background-color: transparent;
	}

	.content {
		flex: 1;
		overflow: hidden;
		.wrap {
			height: 100%;
		}

		.item {
			border-bottom: 1px solid #d9d9d9;
			padding: 12px 10px;
			color: #424242;

			&:nth-last-child(1) {
				border-bottom: 0;
			}

			background-color: white;
		}

		.title {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.article-img img {
			width: 100%;
			height: 5em;
			margin: 3px;
		}

		.article-info {
			margin-top: 3px;

			.top-span {
				color: #ff5454;
			}
		}

		.article-info span {
			margin-right: 10px;
			color: #919191;
		}

	}
</style>
