<template>
	<view >
		<uni-search-bar class="search-input" radius="5" :placeholder="searchPlaceholder" clearButton="auto"
			cancelButton="none" @focus="focus" />
		<uni-popup ref="searchPopup" background-color="white" style="z-index: 999;">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<SearchPage :popupSwitch="popupClose" />
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import SearchPage from '@/src/pages/index/SearchPage'
	export default {
		name: 'searchbox',
		data() {
			return {
				type: 'right',
			}
		},
		methods: {
			//搜索框聚焦事件
			focus() {
				this.$refs.searchPopup.open(this.type)
			},
			popupClose() {
				this.$refs.searchPopup.close()
			}
		},
		components: {
			SearchPage
		},
		props:['searchPlaceholder']
	}
</script>

<style scoped lang="less">
	
	.popup-content {
		width: 100vw;
		height: 100%;
	}

	.search-input {
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
