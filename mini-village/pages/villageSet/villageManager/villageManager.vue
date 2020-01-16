<template>
	<view class="chatLine">
		<view class="cu-form-group margin-top" @tap="villageLabel">
				<view class="title">乡村标签</view>
				<text class="lg text-gray cuIcon-right"></text>
		</view>
		
		<view class="cu-form-group margin-top solid-bottom" @tap="villageIntroduce">
				<view class="title">乡村简介</view>
				<text class="lg text-gray cuIcon-right"></text>
		</view>
		<view class="cu-form-group solid-bottom" @tap="villageVideo">
				<view class="title">村头视频</view>
				<text class="lg text-gray cuIcon-right"></text>
		</view>
		<view class="cu-form-group solid-bottom" @tap="villagePic">
				<view class="title">家乡封面</view>
				<text class="lg text-gray cuIcon-right"></text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			villageIntroduce(){
				uni.navigateTo({
					url:'../villageIntroduce/villageIntroduce?villageId='+this.villageId 
				})
			},
			villageVideo(){
					uni.navigateTo({
					url:'../villageVideo/villageVideo?villageId='+this.villageId 
				})
			},
			villageLabel(){
				uni.navigateTo({
					url:'../villageLabel/villageLabel?villageId='+this.villageId 
				})
			},
			villagePic(){
				uni.navigateTo({
					url:'../villagePic/villagePic?villageId='+this.villageId 
				})
			}
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.villageId = option.villageId;
			console.log(this.villageId)
		},
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}
</style>


