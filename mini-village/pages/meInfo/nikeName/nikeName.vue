<template>
	<view class="name-input">
		<view class="cu-form-group margin-top">
			<input type="type" value="" name="input" @input="setUserRealName" v-model="wordChange" placeholder="请输入您的姓名"/>
			<text class='cuIcon-roundclose text-gray' @click="canelClick"></text>
		</view>
		<view class="login-btm" @tap="nameClick">
			提交
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				user: {},
				wordChange: '',
				nikeName:'',
				
			};
		},
		
		methods: {
			setUserRealName(e) {
				this.user.real_name = e.detail.value;
			},
			canelClick() {
				this.wordChange = "";
			},
			nameClick() {
				let that = this;
				that.$request.phpTokenRequest(that.$api.editMember, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					MemberNickName:that.user.real_name
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
						uni.navigateBack()
					}
				});
			},
			
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key;
			this.nikeName = option.name;
			this.wordChange=this.nikeName;
			// console.log(this.nikeName);
		}
	}
</script>
<style>
	page {
		background-color: #F5F5F5 !important;
	}
</style>

<style lang="less" scoped>
	.name-input {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: #999;
		// padding-top: 30upx;

		.cu-form-group {
			background-color: #fff;
		}

		.login-btm {
			width: 85%;
			LINE-height: 88upx;
			text-align: center;
			margin: 0 auto;
			background-color: #F63333;
			color: #FFFFFF;
			border-radius: 10upx;
			margin-top: 148upx;
			margin-bottom: 50upx;
			font-size: 34upx;

		}

	}
</style>
