<template>
	<view class="login">
		<view class="login-pic background-cover" :style="{backgroundImage:'url(' + logo+ ')'}">
		</view>
		<view class="login-p background-cover" :style="{backgroundImage:'url(' + font+ ')'}">
		</view>
		<button class='login-btm' type='primary' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">

			手机登录
		</button>
		<view class="login-msg" @tap="showModal" data-target="DialogModal1">
			<text>点击登录即代表您同意<text class="user">《农城微旅用户协议》</text></text>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{msgInfo.doc_name}}</view>
				</view>
				<view class="padding-xl" v-html="msgInfo.doc_content">
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-green" @tap="hideModal">知道了</button>

					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				logo: `${this.$env.img1}beauty_icon@2x.png`,
				font: `${this.$env.img1}village_beauty@2x.png`,
				isCanUse: uni.getStorageSync('isCanUse') || true, //默认为true
				modalName: null,
				msgInfo: {},
				openid: '',
				session_key: '',
				userInfo:{},
				loginInfo:{},
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			msgInit() {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetDocument, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					Type: 37
				}).then((res) => {
					if (res.data.flag === 200) {
						that.msgInfo = res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},

			//第一授权获取用户信息===》按钮触发
			getPhoneNumber(e) {
				let _this = this;
				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {} else {
					uni.showLoading({
						title: '登录中...'
					});
					// 1.wx获取登录用户code
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							let code = loginRes.code;
							//2.将用户登录code传递到后台置换用户解密手机号码
							_this.$request.phpTokenRequest(_this.$api.GetWxMobile, _this.$api.get, {
								Client: _this.$api.CLIENT,
								Version: _this.$api.VERSION,
								EncryptedData: e.detail.encryptedData,
								Iv: e.detail.iv,
								code: code
							}).then((res) => {
								uni.hideLoading();
								if (res.data.flag === 200) {
									let data = JSON.parse(res.data.data)
									_this.updateUserInfo(data.phoneNumber)
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									});
								}
							});
						},
					});
				}

			},

			// 向后台更新信息调用
			updateUserInfo(phone) {
				let _this = this;
				_this.$request.phpTokenRequest(_this.$api.WxBindMobile, _this.$api.get, {
					Client: _this.$api.CLIENT,
					Version: _this.$api.VERSION,
					ThirdType: 2,
					ThirdToken:_this.userInfo.unionId,
					MemberPhone:phone,
					MemberNickName:_this.userInfo.nickName,
					MemberHead:_this.userInfo.avatarUrl,
				}).then((res) => {
					if (res.data.flag === 200) {
						uni.setStorageSync('userInfo',res.data.data);
						uni.switchTab({
							url: "../index/index"
						})	
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			}


		},
		onLoad() {
			// this.msgInit()
			// this.login()
			console.log(this.$api.Getopenid)
			this.userInfo=uni.getStorageSync('dataInfo')
		}
	}
</script>

<style lang="less" scoped>
	.login {
		padding-top: 80upx;
		font-size: 34upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;

		.login-pic {
			width: 180upx;
			height: 180upx;
			margin: 0 auto;
		}

		.login-p {
			width: 188upx;
			height: 35upx;
			margin: 0 auto;
			margin-top: 30upx;
		}

		.login-btm {
			width: 85%;
			LINE-height: 88upx;
			text-align: center;
			margin: 0 auto;
			background-color: #1AAD19;
			color: #FFFFFF;
			border-radius: 10upx;
			margin-top: 160upx;
			margin-bottom: 50upx;

		}

		.login-msg {
			margin: 0 auto;
			text-align: center;
			font-size: 28upx;

			.user {
				color: #576B95;
			}
		}
	}
</style>
