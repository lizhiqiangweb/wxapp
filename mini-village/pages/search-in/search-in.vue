<template>
	<view class="search-in">
		<view class="search-in-pic background-cover" :style="{backgroundImage:'url(' + no_house+ ')'}">
		</view>
		<view class="padding flex flex-direction" @tap="addSumbit">
			<button class="cu-btn margin-tb-sm lg">添加我的家乡</button>
		</view>
	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				no_house: `${this.$env.img1}no_house@2x.png`,

			};
		},
		methods:{
			addSumbit(){
				uni.navigateTo({
					url: "../addHometown/addHometown" 
				})
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}
</style>

<style lang="less" scoped>
	.search-in {
		padding-top: 150upx;

		.search-in-pic {
			width: 436upx;
			height: 390upx;
			margin: 0 auto;
			margin-bottom: 150upx;
		}

		.margin-tb-sm {
			border: 1upx solid rgba(246, 51, 51, 1);
			color:rgba(246, 51, 51, 1);
			border-radius: 10upx;
			background-color: #Fff;
		}
	}
</style>
