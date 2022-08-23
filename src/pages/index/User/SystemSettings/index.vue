<template>
	<view class="system-settings" :class="isDark?'dark':''">
			<page-meta :root-font-size="getGlobalFontSize"></page-meta>
		<uni-list class="list-box">
			<uni-list-item showArrow title="编辑资料" to="./EditInformation" />
			<uni-list-item showArrow title="账号和隐私设置" />
			<uni-list-item showArrow title="黑名单" to="./Blacklist" />
		</uni-list>

		<uni-list class="list-box">
			<uni-list-item title="夜间模式" showSwitch :switchChecked="isDark" @switchChange="switchDark"></uni-list-item>
			<uni-list-item title="清除缓存" rightText="113.54MB" />
			<picker @change="bindPickerChange" :value="index" :range="getGlobalFontCHList">
				<uni-list-item title="字体大小" :rightText="fontSizeCh" />
			</picker>
			<uni-list-item title="非WiFi网络流量" rightText="最佳效果(下载大图)" />
			<uni-list-item title="非WiFi网络播放提醒" rightText="提醒一次" />
			<uni-list-item title="推送通知" showSwitch></uni-list-item>
			<uni-list-item title="提示语音开关" showSwitch switchChecked ></uni-list-item>
			<uni-list-item title="H5广告过滤" showSwitch switchChecked></uni-list-item>
		</uni-list>

		<uni-list class="list-box">
			<uni-list-item showArrow title="广告设置" />
			<uni-list-item showArrow title="头条封面" />
		</uni-list>

		<view class="exit">
			<navigator url="/src/pages/Login">退出登录</navigator>
		</view>
		
	</view>
</template>

<script>
	import {globalFontSize} from '@/mixin.js'
	import {mapGetters,mapState} from 'vuex'
	import {settingApi} from '@/request/api'
	export default {
		name: 'systemSettings',
		data() {
			return {
				index: 1,
				fontSizeCh:""
			}
		},
		computed:{
			...mapGetters('systemSettings',['getGlobalFontCHList']),
			...mapState({
				getFontSizeCh:state =>{//更新字体大小设置显示
					return state?.userData?.data?.setting?.fontsize || "中"
				},
				isDark:state=> state.isDark
			})
		},
		methods: {
			bindPickerChange: function(e) {
				const map =new Map();
				this.getGlobalFontCHList.forEach((value,index)=>{//循环添加到map数组
					map.set(index,value)
				});
				
				settingApi({
					size:map.get(e.detail.value)
				}).then((res)=>{
					if(res.code="200"){
						this.$store.commit('systemSettings/setGlobalFontSize',map.get(e.detail.value));//查找索引返回对应的中文字体大小设置
						this.$store.dispatch('checkUserInfo',localStorage.getItem('token'));//更新 vuex里的用户信息
						this.index = e.detail.value;
						this.fontSizeCh=map.get(e.detail.value);
						uni.showToast({title:"设置成功"})
					}else{uni.showToast({title:"设置失败"})}
				});		
			},
			switchDark(e){
				this.$store.commit('switchDark',e.value);
			}
		},
		mounted() {
				this.index=this.getGlobalFontCHList.indexOf(this.getFontSizeCh);
			this.fontSizeCh=this.getFontSizeCh;
		},
		mixins:[globalFontSize]
	}
</script>

<style scoped lang="less">
	@import '@/src/styles/index.less';
	@fontSize: 1rem;

	.system-settings {
		background-color: @backgroundColor;
		overflow: hidden;
		font-size: @fontSize;

		/deep/ .uni-list-item__content-title,
		/deep/ .uni-list-item__extra-text {
			font-size: @fontSize;
		}

		/deep/ .uni-icon-wrapper {
			font-size: @fontSize  !important;
		}
	}
	

	.list-box {
		margin-top: 10px;
	}

	.exit {
		padding: 12px 15px;
		padding-left: 15px;
		background-color: white;
		margin: 20px 0;
		color: #e94646;
		text-align: center;
	}
</style>
