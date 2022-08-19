<template>
	<view class="login">
		<view class="title">
			<logoTitle titleText="账号登录"></logoTitle>
			<view class="tip">登录表示同意“<navigator url="#">用户协议</navigator>”和“<navigator url="#">隐私政策</navigator>”</view>
		</view>
		<view class="login-form">
			<uni-forms ref="loginForm" :rules="rules" :modelValue="loginFormData">
				<uni-forms-item name="userId">
					<uni-easyinput prefixIcon="phone-filled" v-model="loginFormData.userId" trim="all"
						placeholder="手机/邮箱"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="password">
					<uni-easyinput prefixIcon="locked" v-model="loginFormData.passWord" type="password" trim="all" placeholder="密码">
					</uni-easyinput>
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="login-btn">
			<button type="primary" @click="login('loginForm')">登录</button>
		</view>
		<view class="bottom">
			<loginType></loginType>		
			<navigator animation-duration="300" url="./Register" >注册</navigator>
			<uni-icons custom-prefix="iconfont" type="icon-dian" class="dian" size="15"></uni-icons>
			<navigator url="#">隐私设置</navigator>
			<uni-icons custom-prefix="iconfont" type="icon-dian" class="dian" size="15"></uni-icons>
			<navigator url="#">遇到问题</navigator>
			<uni-icons custom-prefix="iconfont" type="icon-dian" class="dian" size="15"></uni-icons>
			<navigator url="#">找回密码</navigator>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="error" message="登录失败" :duration="2000"></uni-popup-message>
		</uni-popup>
	
	</view>
</template>

<script>
	import loginType from '@/components/loginType'
	import logoTitle from '@/components/logoTitle'
	import {nav} from '../router'
	import {loginApi} from '@/request/api'
	
	export default {
		name: 'Login',
		data() {
			return {
				// 基础表单数据
				loginFormData: {
					userId: 'user001',
					passWord: 'ab12345',
				},
				rules: {
					userId: {
						rules: [{
							required: true,
							errorMessage: '账号不能为空'
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '密码不能为空'
						}]
					},
				}
			}
		},
		methods: {
			login(ref) {
				this.$refs['loginForm'].validate().then(res => {//登录验证通过
					loginApi(this.loginFormData).then((res)=>{//校验登录数据
						if(res.code=="200"){//登录成功
							localStorage.setItem('token',res.token);
							this.$store.commit('LoginInfo',res);
							uni.navigateTo({
								url: '../pages/index/HomePage/index'
							});
							
							// setTimeout(()=>{//登录超时
							// 	uni.showToast({
							// 		title: '登录超时',
							// 		duration: 1000
							// 	});
							// 	setTimeout(()=>{
							// 		localStorage.removeItem('token')
							// 		uni.redirectTo({
							// 			url: '/src/pages/Login'
							// 		});
							// 	},1000)
							// },1200000)
						}else{
							this.$refs.popup.open('top');
						}
					})
				}).catch(err => false)
			}
		},
		components:{
			loginType,
			logoTitle
		}
	}
</script>

<style scoped lang="less">
	@import "@/static/iconfont.css";

	.login {
		margin: 25px;
		height: 95%;
		position: relative;
		
		.tip {
			color: #9b9999;
			margin-top: 3px;
		}

		uni-navigator {
			display: inline-block;
			color: #767373;
		}

		uni-input {
			font-size: 25px
		}

		form {
			overflow: hidden;
		}

		.login-form {
			margin-top: 40px;
		}
		.login-btn{
			margin-top: 10px;
		}
		.bottom{
			letter-spacing: 1px;
			position: absolute;
			bottom: 10px;
			width: 100%;
			text-align: center;
			font-size: 3.5vw;
			uni-navigator{
				color: #282828;
			}
			.dian{
				margin: 0 8px;
			}
		}
	}
</style>
