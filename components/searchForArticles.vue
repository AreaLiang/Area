<template>
	<view class="searchForArticles">
		<scroll-view class="scroll-view_H" scroll-x="true" style="white-space: nowrap;border-bottom: 1px solid #e7e7e7;" scroll-left="0">
			<view class="top-title-box">
				<view class="top-title">
					<span class="active">综合</span>
					<span>资讯</span>
					<span>视频</span>
					<span>小视频</span>
					<span>图片</span>
					<span>用户</span>
					<span>音乐</span>
					<span>问答</span>
					<span>微头条</span>
					<span>话题</span>
					<span>直播</span>
				</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="scroll-Y" style="height: 100%;">
			<view class="wrap">
				<view class="latest-news">
					<view class="type tx">
						最新资讯
					</view>
					<view class="latest-title tx" v-html="acticelList[0].ltitle"></view>
					<p class="time">7小时前</p>
					<view class="content">
						{{acticelList[0].digest}}
					</view>
					<view class="detail">
						<span>{{acticelList[0].source}}</span>
						<view>
							<button class="mini-btn" type="warn" size="mini">查看全文</button>
						</view>
					</view>
					<view class="type tx">
						相关内容
					</view>
					<view class="related-Information">
						<uni-row :gutter="20">
							<uni-col :span="16">
								<span v-html="acticelList[1].ltitle"></span>
								<p style="margin-top:10px;">{{acticelList[1].source}}</p>
							</uni-col>
							<uni-col :span="8">
								<img :src="acticelList[2].imgsrc" class="ac-cover" style="width: 100%;">
							</uni-col>
						</uni-row>
					</view>
				</view>
				<view class="card" v-for="(p,index) in acticelList" :key="index">
					<view class="title" v-html="p.ltitle"></view>
					<view class="content">
						<uni-row :gutter="10">
							<uni-col :span="15">
								<view class="ct">
									{{p.digest}}
								</view>
							</uni-col>
							<uni-col :span="9">
								<view>
									<img :src="p.imgsrc" class="ac-cover">
								</view>
							</uni-col>
						</uni-row>
					</view>
					<view class="footer">
						<span>{{p.source}} {{p.ptime}}</span>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		searchApi
	} from '@/request/api.js'
	export default {
		name: 'searchForArticles',//搜索后显示文章
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				acticelList: []
			}
		},
		methods: {
			scroll: function(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			titleHighlight() { //搜索后，文章标题关键字高亮
				let rsg = RegExp('[' + this.searchText + ']{2,}', 'g'); //匹配所有搜索内容符合的文字 ，至少2个字相符
				let newActicelList = []; //保存新的数组

				for (let p of this.acticelList) { //先把每条数据的标题遍历出来
					let arr = p.ltitle.match(rsg); //根据搜索内容，把符合的文字组成数组

					let list = JSON.parse(JSON.stringify(p));

					if (arr) { //如果有符合的文章内容
						const s = new Set(arr); //去除相同的元素
						s.forEach((item) => {
							let res = RegExp(item, 'g'); //匹配相同的字
							list.ltitle = list.ltitle.replace(res,
							`<span class="red">${item}</span>`); //重构标题的html,相同的加一个span标签
						});
						newActicelList.push(list);
					}
				}
				this.acticelList = newActicelList;
			},
			getSearchData(){//搜索请求
				searchApi({
					page: 1,
					number: 15
				}).then((res) => {
				
					if (res.code == "200") {
						let data = Object.values(res.data); //对象转数组
						data = JSON.parse(JSON.stringify(data));
						data = data.filter((p) => {
							return p.boardid == 'dy_wemedia_bbs'
						});
						this.acticelList = data;
						this.titleHighlight(); //搜索后，文章标题关键字高亮
						
					} else {
						uni.showToast({
							title: '获取数据异常',
							icon: 'none',
							duration: 2000
						});
					}
				})
			}
		},
		props: ['searchText'],
		mounted() {
			this.getSearchData();//初始化查询事件
			
			this.$bus.$on('searchChange',(txt)=>{//绑定事件，改变搜索内容，重新触发查询事件
				this.getSearchData();
			})
		},
		beforeDestroy(){
			this.$bus.$off('searchChange')
		}
	}
</script>

<style lang="less">
	.item_style (){
		margin: 2vw 1vw;
		border: 1px solid #DCDCDC;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 3px 1px;
		border-radius: 4px;
		padding: 0px 10px;
		color: #6a6a6a;
	}
	.searchForArticles {
		flex: 1;
		overflow: hidden;
		
		.latest-news{
			background: linear-gradient(180deg,rgba(176,196,222,.3) 10.76%,rgba(242,245,247,0))!important;
			.item_style;
			.tx{
				color: #242424;
				font-weight: 600;
				font-size: 5vw;
				margin: 5px 0;
			}
			.latest-title,
			.time,
			.detail{
				margin: 10px 0;
			}
			.detail{
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
		.top-title-box{
			
			.top-title span {
				margin: 5px 10px;
				display: inline-block;
				padding-bottom:2px;
			}
			.active{
				border-bottom: 2px solid #ff3e3e;
			}
		}
		
		.card {
			.item_style;

			.title {
				padding: 8px 0;
				color: #3a3a3a;
				font-weight: bold;
				font-size: 4.5vw;
			}

			.ct {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 5;
				-webkit-box-orient: vertical;
			}

			.footer {
				font-size: 3vw;
				padding: 8px 0;
			}

			.ac-cover {
				width: 100%;
				border-radius: 5px;
			}

			/deep/ .red {
				color: #d35151;
			}
		}

		.wrap {
			padding-bottom: 50px;
		}
		
	}
</style>
