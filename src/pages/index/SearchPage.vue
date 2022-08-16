<template>
	<view class="search-box">
		<uni-search-bar radius="5" placeholder="汶川地震那天你干什么" clearButton="always" cancelButton="always" @confirm="search"
			@cancel="popupSwitch" v-model="searchText" />
			
		<view v-show="!Searched">
			<view class="row-box h_top">
				<uni-row>
					<uni-col :span="12">
						<span>人民币对美元汇率</span>
					</uni-col>
					<uni-col :span="12">
						<span>广东今夜雨势将明显</span>
					</uni-col>
				</uni-row>
			</view>
			
			<!-- 历史记录和热门推荐 -->
			<view class="row-box" v-for="(p,index) in recordData" :key="index" >
				<uni-row>
					<uni-col :span="24">
						<p class="title">{{p.title}}</p>
					</uni-col>
				</uni-row>
				<uni-row>
					<template v-for="item in p.data">
						<uni-col :span="11" class="item">
							<uni-col :span="item.status?20:24">
								<span @click="QuickSearch(item.name)">{{item.name}}</span>
							</uni-col>
							<uni-col :span="4" v-if="item.status" style="text-align: right;">
								<uni-icons custom-prefix="iconfont" type="icon-remen" size="4vw" color="red"></uni-icons>
							</uni-col>
						</uni-col>
						<uni-col :span="2" v-if="item.icon" class="item item-icon">
							<uni-icons custom-prefix="iconfont" type="icon-vertical_line" size="4vw"></uni-icons>
						</uni-col>
					</template>
				</uni-row>
			</view>
		</view>
		
		<component :is="Searched?'searchForArticles':''" :searchText='searchText' />
		
	</view>
</template>

<script>
	export default {
		name: 'SearchPage',
		data() {
			return {
				searchText: '',
				Searched:false,
				record: [{
						title: "历史记录",
						data: [{
								name: "央行进行100亿7天逆转未来",
							},
							{
								name: "茅台集团被强制执行",
								status: "hot"
							},
							{
								name: "热血高校2",
							},
							{
								name: "狂战",
								status: "hot"
							},
							{
								name: "苹果呼吸灯怎么设置",
							}
						]
					},
					{
						title: "猜你想搜",
						data: [{
								name: "乌克兰最新局势",
							},
							{
								name: "95号汽油今日价格",
							},
							{
								name: "肇庆招聘信息",
							},
							{
								name: "小米12SPro被曝",
								status: "hot"
							},
							{
								name: "退役和退伍的区别",
								status: "hot"
							},
							{
								name: "上海防疫情况",
							},
							{
								name: "豆沙冰棍正宗做法",
							},
							{
								name: "古代言情小说推荐",
							}
						]
					}
				]
			}
		},
		methods: {
			search(res) {
				
				let data = JSON.parse(JSON.stringify(this.record));
				let value = {
					name: res.value
				};

				let arr = JSON.parse(JSON.stringify(data[0].data));
				let isHas = false; //存储搜索内容是否与历史记录相同状态

				for (let p of data[0].data) { //判断是否已经存在相同的搜索历史
					if (p.name == res.value) {
						isHas = true;
						break
					}
				}

				if (!isHas) { //如果不存在相同，则向数组头部添加数据
					data[0].data.unshift(value);
				}

				if (arr.length > 6) { //限制显示多少条历史记录
					data[0].data.pop();
				}
				this.record = data;
				this.Searched=true;
				this.searchText = res.value;
				this.$bus.$emit('searchChange',this.searchText);
			},
			QuickSearch(val) {
				this.searchText = val;
			},
		},
		computed: {
			//重组数据结构，为了遍历记录的时候，中间多添加一个 icon | ,
			recordData() {
				let data = JSON.parse(JSON.stringify(this.record));
				for (let i = 0; i < data.length; i++) {
					for (let j = 0; j < data[i].data.length; j++) {
						if (j % 2 == 0) { //双数后面添加icon
							data[i].data[j].icon = true;
						} else {
							data[i].data[j].icon = false;
						}
					}
				}

				return data
			}
		},
		components:{
			'searchForArticles':()=> import('@/components/searchForArticles')
		},
		props: ['popupSwitch']
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";
	@import "@/src/styles/index.less";
	
	.search-box{
		height: 100%;
		display: flex;
		flex-direction: column;
		.placeholderFontSize();
		/deep/ .uni-searchbar__cancel{
			font-size: 4vw;
			line-height: initial;
			
		}
		.uni-searchbar{
			align-items: center;
		}
	}
	.row-box {
		border-top: 1px solid #dfdfdf;
		margin: 20px !important;

		.title {
			padding: 10px 0;
			color: #7a7979;
		}

		.item-icon {
			text-align: center;
		}

		.item {
			margin: 3px 0;
			overflow: hidden;
			letter-spacing: 1px;
			color: #161616;

			span {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				width: 100%;
				display: inline-block;
			}
		}
	}

	.h_top {
		border-top: 0;
	}
</style>
