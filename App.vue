<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import '@/uni_modules/uni-less/index.less';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	/*夜间模式*/
	@import '@/src/styles/darkStyle.less';
	
	// 设置整个项目的背景色
	page {
		// background-color: #f5f5f5;
		font-size: 1.1rem;
		height: 100%;
	}
	
	html{
		font-size:4vw;
	}
	
	
	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		background-color: transparent;
	}
	
	// @media screen and (min-width:321px) and (max-width:375px){font-size:11px;}
	// @media screen and (min-width:376px) and (max-width:414px){font-size:11px;}
	// @media screen and (min-width:415) and (max-width:639px){font-size:11px;}
	// @media screen and (min-width:640) and (max-width:719px){font-size:11px;}
	// @media screen and (min-width:720px) and (max-width:749px){font-size:11px;}
	// @media screen and (min-width:750px) and (max-width:799px){font-size:11px;}
</style>
