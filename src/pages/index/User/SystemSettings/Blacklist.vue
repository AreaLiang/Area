<template>
	<view class="blacklist">
		<view class="tips">
			<view>
				<uni-icons custom-prefix="iconfont" type="icon-prison" color="#b5b5b5" size="2rem"></uni-icons>
			</view>
			<view >
				黑名单为空
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'Blacklist',//黑名单
		data(){
			return{
				
			}
		},
		methods:{
		
		},
		components:{
			
		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";
	.tips{
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #b5b5b5;
		text-align: center;
	}
</style>