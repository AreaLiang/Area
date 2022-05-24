<template>
	<view class="mutual-box">
		<view class="item">
			<view><uni-icons custom-prefix="iconfont" type="icon-zhuanfa" size="4vw" color="black" /></view>
			<view>{{repost}}</view>
		</view>
		<view class="item">
			<view><uni-icons custom-prefix="iconfont" type="icon-pinglun1" size="4vw" color="black" /></view>
			<view>{{comment}}</view>
		</view>
		<view class="item">
			<view><uni-icons custom-prefix="iconfont" type="icon-dianzan" size="4vw" :color=" red ? '#d90707' : 'black' " /></view>
			<view :class="{red:red}">{{like}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'mutual',//交互模块，点赞，转发，评论
		data(){
			return{
				
			}
		},
		props:{
			repost:{
				default:"转发"
			},
			comment:{
				default:"评论"
			},
			like:{
				default:"点赞"
			},
			red:{
				default:false
			}
		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";
	.mutual-box{
		display: flex;
		width: 100%;
		justify-content: space-around;
		background-color: white;
		.item{
			flex-direction: column;
			padding: 10px 0;
			align-items: center;
			view{
				display: inline-block;
				margin: 0 5px;
			}
			&:nth-child(1){
				.iconfont{
					font-weight: 600;
				}
			}
		}
	}
	.red{
		color: #d90707;
	}
</style>