<template>
	<view class="register">
		<logoTitle titleText="用户注册"></logoTitle>
		<view class="register-form">
			<uni-forms ref="registerFormData" :rules="rules" :modelValue="registerFormData">
				<uni-forms-item name="phone">
					<uni-row class="combo-box" v-show="!registerPage">
						<uni-col :span="4" class="area-num-show" >
							<view @click="toggle('right')">
								+86
								<uni-icons class="bottom-icon" type="bottom" size="10"></uni-icons>
							</view>
						</uni-col>
						<uni-col :span="20" class="phone-box">
							<input placeholder="请输入手机号码" v-model="registerFormData.phone" />
						</uni-col>
					</uni-row>
				</uni-forms-item>
				
				<uni-row class="combo-box" v-show="registerPage">
					<uni-col :span="16" class="phone-box">
						<input placeholder="请输入验证码" type="number" v-model="registerFormData.code" />
					</uni-col>
					<uni-col :span="8" class="area-num-show">
						<view @click="getcode()" style="text-align: center;">{{codeStatusShow}}</view>
					</uni-col>
				</uni-row>
			</uni-forms>
			
			<button class="button" type="primary" @click="goRegister()">
				<text class="button-text">注册</text>
			</button>
		</view>

		<!-- 普通弹窗 国际手机区号-->
		<uni-popup ref="popup" background-color="#f5f5f5">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<view v-for="(p,key,index) in areaList" :key="index">
					<view class="title">
						<text>{{key== "common" ? "常用" : key}}</text>
					</view>
					<uni-card :isFull="true" class="area-box">
						<view class="area" v-for="(item,id) in p" :key="id">
							<text>{{item.name}}</text>
							<text class="area-number">{{item.number}}</text>
						</view>
					</uni-card>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import logoTitle from '@/components/logoTitle'
	import {areaListApi,checkInfoApi} from '@/request/api'
	import {nav} from '../router'
	
	export default {
		name: 'Register',
		data() {
			return {
				type: 'center',
				// 基础表单数据
				registerFormData: {
					phone: '',
					code:'2684'
				},
				rules: {
					phone: {
						rules: [{
							required: true,
							errorMessage: '电话不能为空'
						}]
					}
				},
				areaList:[],
				registerPage:false,//是否显示验证码发送页面
				sendingCode:false,//是否正在发送验证码
				timeOut:30 //设置重新发送验证码时间限制
			}
		},
		methods: {
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			goRegister(){//注册按钮触发事件
				this.$refs['registerFormData'].validate().then(res => {
					console.log(res)
					if(res){
						this.registerPage=true;
						this.getcode();
					}
				}).catch(err => false)
				
				if(this.registerPage){
					//如果是输入验证码页面
					if(this.registerFormData.code=="2684"){
						uni.navigateTo({
							url: '../pages/Login'
						});
					}
				}
			},
			getcode(){//重新发送验证码触发事件
				if(!this.sendingCode){
					this.sendingCode=true;
					let second=this.timeOut;
					let codeTime=setInterval(()=>{
						this.timeOut-= 1;
						if(this.timeOut==0){
							clearInterval(codeTime);
							this.timeOut = second;
							this.sendingCode=false;
						}
					},1000);
				}
			}
		},
		computed:{
			codeStatusShow(){//显示验证码状态
				if(!this.sendingCode){
					return '重新发送'
				}else{
					return '重新发送 ('+this.timeOut+")S";
				}
			}
		},
		components: {
			logoTitle
		},
		onReady(){
			areaListApi().then((data)=>{
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
