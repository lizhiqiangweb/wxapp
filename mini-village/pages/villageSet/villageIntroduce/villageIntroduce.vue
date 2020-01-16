<template>
	<view class="village-introduce">
		<view class="cu-form-group margin-top">
			<textarea maxlength="255" :disabled="modalName!=null" @input="textareaAInput" placeholder="请输入本村简介..." ></textarea>
		</view>
		
		<view class="padding flex flex-direction submit" @tap="introduce">
			<button class="cu-btn bg-red margin-tb-sm lg">提交</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				textareaAValue: '',
			};
		},
		methods:{
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			introduce() {
				let that = this
				that.$request.httpTokenRequest(that.$api.villageEdit, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId,
					villageIntro:that.textareaAValue
				}).then((res) => {
					if (res.data.flag === 200) {
							uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
						uni.navigateBack()
			
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.villageId = option.villageId;
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}
</style>

<style lang="less" scoped>
	.village-introduce{
		.cu-form-group textarea{
			padding-top:30upx;
			margin:0;
			height: 330upx;
		}
		.submit{
			margin-top: 120upx;
		}
	}
</style>