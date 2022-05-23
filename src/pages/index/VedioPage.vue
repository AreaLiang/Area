<template>
	<view class="vedioPage">
		<view class="box-bg">
			<searchbox searchPlaceholder="TV9833航班大火被扑灭" /><!-- 搜索框 -->
		</view>
		<view class="vedio-item" v-for="(p,index) in vedioData" :key="index">
			<!-- <view class="vedio-img">
				<p class="title">{{p.videoinfo.title}}</p>
				<uni-icons custom-prefix="iconfont" type="icon-bofang" style="position: absolute;top:50%;left:50%; transform: translate(-50%, -50%);color: #5a5a5a;" size="50" ></uni-icons>
				<img :src="p.videoinfo.cover">
			</view>
			<view class="vedio-info">
				<uni-row :gutter="10">
					<uni-col :span="6">
						<img :src="p.videoinfo.cover">
					</uni-col>
					<uni-col :span="13">
						<view>
							<p class="title">{{p.videoinfo.title}}</p>
						</view>
					</uni-col>
					<uni-col :span="5" class="vd-link">
						<uni-icons custom-prefix="iconfont" type="icon-vertical_line"></uni-icons>
						<span>看正片</span>
					</uni-col>
				</uni-row>
			</view> -->
		</view>
	</view>
</template>

<script>
	import {getVedioApi} from '@/request/api.js'
	import searchbox from '@/components/searchBox'
	export default{
		name:'VedioPage',
		data(){
			return{
				vedioData:[]
			}
		},
		methods:{
		
		},
		components:{
			searchbox
		},
		onReady() {
			getVedioApi({
				page: 1,
				number: 15
			}).then((res) => {
				console.log(JSON.parse(JSON.stringify(res)));
				this.vedioData=res.data
			})
		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";
	.vedio-item{
		margin-bottom: 10px;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.vedio-img{
		height:215px;
		position: relative;
		.title{
			position: absolute;
			font-size: 5vw;
			padding: 10px;
		}
	}
	.vedio-info{
		height: 50px;
		line-height: 50px;
		padding: 10px;
		overflow: hidden;
		background-color: #f1f1f1;
		.title{
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
	.vd-link{
		color: #2cafe5;
	}
	.box-bg {
		background: #d04542;
	}
</style>