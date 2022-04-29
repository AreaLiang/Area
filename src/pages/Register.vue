<template>
	<view class="register">
		<logoTitle titleText="用户注册"></logoTitle>
		<view class="register-form">
			<uni-forms ref="register" :rules="rules" :modelValue="registerFormData">
				<uni-forms-item name="account">
					<uni-row class="combo-box">
						<uni-col :span="4" class="area-num-show" >
							<view @click="toggle('right')">
								+86
								<uni-icons class="bottom-icon" type="bottom" size="10"></uni-icons>
							</view>
						</uni-col>
						<uni-col :span="20" class="phone-box">
							<input placeholder="请输入手机号码" v-model="registerFormData.phnoe" />
						</uni-col>
					</uni-row>
				</uni-forms-item>
			</uni-forms>
			<button class="button" type="primary">
				<text class="button-text">注册</text>
			</button>
			
		</view>

		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#f5f5f5" @change="change">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<view v-for="(p,key,index) in areaList" >
					<view class="title">
						<text>常用{{key}}</text>
					</view>
					<uni-card :isFull="true" class="area-box">
						<view class="area">
							<text>中国大陆</text>
							<text class="area-number">+86</text>
						</view>
					</uni-card>
				</view>
			<!-- 	<view class="title">
					<text>常用</text>
				</view>
				<uni-card :isFull="true" class="area-box">
					<view class="area">
						<text>中国大陆</text>
						<text class="area-number">+86</text>
					</view>
					<view class="area">
						<text>中国香港</text>
						<text class="area-number">+852</text>
					</view>
					<view class="area">
						<text>中国澳门</text>
						<text class="area-number">+853</text>
					</view>
					<view class="area">
						<text>中国台湾</text>
						<text class="area-number">+886</text>
					</view>
				</uni-card>
				

				<view class="title">
					<text>A</text>
				</view>
				<uni-card :isFull="true">
					<view class="area">
						<text>阿尔巴尼亚</text>
						<text class="area-number">+355</text>
					</view>
					<view class="area">
						<text>阿尔及利亚</text>
						<text class="area-number">+213</text>
					</view>
					<view class="area">
						<text>阿富汗</text>
						<text class="area-number">+93</text>
					</view>
					<view class="area">
						<text>阿根廷</text>
						<text class="area-number">+54</text>
					</view>
					<view class="area">
						<text>爱尔兰</text>
						<text class="area-number">+353</text>
					</view>
					<view class="area">
						<text>埃及</text>
						<text class="area-number">+20</text>
					</view>
					<view class="area">
						<text>埃塞俄比亚</text>
						<text class="area-number">+251</text>
					</view>
					<view class="area">
						<text>爱沙尼亚</text>
						<text class="area-number">+372</text>
					</view>
					<view class="area">
						<text>阿拉伯联合酋长国</text>
						<text class="area-number">+971</text>
					</view>
				</uni-card>

				<view class="title">
					<text>B</text>
				</view>
				<uni-card :isFull="true">
					<view class="area">
						<text>巴巴多斯</text>
						<text class="area-number">+1246</text>
					</view>
					<view class="area">
						<text>巴布亚新几内亚</text>
						<text class="area-number">+675</text>
					</view>
					<view class="area">
						<text>巴哈马</text>
						<text class="area-number">+1242</text>
					</view>
				</uni-card>
				<view class="title">
					<text>C</text>
				</view>
				<uni-card :isFull="true">
					<view class="area">
						<text>朝鲜</text>
						<text class="area-number">+850</text>
					</view>
				</uni-card>
 -->
			</view>
		</uni-popup>
		<!-- <button class="button" type="primary" @click="toggle('right')">
			<text class="button-text">右侧</text>
		</button> -->
	</view>
</template>

<script>
	import logoTitle from '@/components/logoTitle'
	import {areaListApi} from '@/request/api'

	export default {
		name: 'Register',
		data() {
			return {
				type: 'center',
				// 基础表单数据
				registerFormData: {
					phnoe: '',
				},
				rules: {
					phone: {
						rules: [{
							required: true,
							errorMessage: '电话不能为空'
						}]
					}
				},
				areaList:[]
			}
		},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			bb(num){
				console.log(num+6)
			}
		},
		components: {
			logoTitle
		},
		onReady(){
			areaListApi().then((data)=>{
				console.log(data)
				if(data.code="200"){
					this.areaList=data.data;
				}
			})
		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";

	.register {
		margin: 25px;

		.popup-content {
			width: 80vw;
		}

		.title {
			height: 30px;
			line-height: 30px;

			text {
				margin-left: 10px;
			}
		}

		.area {
			border-bottom: 1px solid #f3f3f3;
			padding: 10px 0;
			color: #383838;
		}

		.area-number {
			margin-left: 8px;
			color: #a3a3a3;
		}

		.area-box .area {
			&:last-child {
				border: 0;
			}
		}

		.area-num-show,
		.phone-box {
			line-height: 35px;
		}

		.bottom-icon {
			margin-left: 4px;
		}

		uni-input {
			font-size: 25px;
		}

		.uni-input-placeholder {
			font-size: 20px;
		}

		.combo-box {
			margin: 20px 0 10px 0;
			border-bottom: 1px solid #d9d9d9;
			padding: 5px 0;
		}
	}
</style>
