<template>
	<view class="container">
		<Login></Login>
	</view>
</template>

<script>
	import Login from '../Login'
	export default {
		name: 'index',
		data() {
			return {

			}
		},
		components: {
			Login	
		}
	}
</script>

<style scoped lang="less">
.container{
	height: 100%;
}
</style>
