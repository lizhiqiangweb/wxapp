<template>
	<view>
		<view>
			<view>
				<view class='header'>
					<image :src='logo'></image>
				</view>
				<view class='content'>
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>
				<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
					授权登录
				</button>
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
				iv: '',
				encryptedData: ''
			};
		},
		methods: {

			//第一授权获取用户信息===》按钮触发
			wxGetUserInfo() {
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {
						_this.iv = infoRes.iv
						_this.encryptedData = infoRes.encryptedData
						_this.login()
					},
					fail(res) {}
				});
			},

			login() {
				let _this = this;
				uni.showLoading({
					title: '登录中...'
				});

				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						//2.将用户登录code传递到后台置换用户SessionKey、OpenId,unid等信息
						_this.$request.phpTokenRequest(_this.$api.GetWxMobile, _this.$api.get, {
							Client: _this.$api.CLIENT,
							Version: _this.$api.VERSION,
							code: code,
							Iv: _this.iv,
							EncryptedData: _this.encryptedData
						}).then((res) => {
							let dataInfo = JSON.parse(res.data.data)
							if (res.data.flag === 200) {
								_this.ThirdLogin(dataInfo.unionId)
								uni.setStorageSync('dataInfo', dataInfo);
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: 'none'
								});
							}
						});

					},
				});
			},

			// 向后台更新信息调用第三方登录
			ThirdLogin(unionId) {
				let _this = this;
				_this.$request.phpTokenRequest(_this.$api.ThirdLogin, _this.$api.get, {
					Client: _this.$api.CLIENT,
					Version: _this.$api.VERSION,
					ThirdType: 3,
					ThirdToken: unionId
				}).then((res) => {
					if (res.data.flag === 200) {
						uni.setStorageSync('userInfo', res.data.data);
						uni.switchTab({
							url: "../index/index"
						})
					} else if (res.data.flag === 430) {
						uni.switchTab({
							url: "../me/me/me"
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
		onShow() {
			if (this.$api.Key !== undefined) {
				uni.switchTab({
					url: "../index/index",
					success: function(e) {
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					}
				})
			}

		},
	}
</script>

<style lang="less" scoped>
	.header {
		margin: 90upx 0 90upx 50upx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650upx;
		height: 300upx;
		line-height: 450upx;
	}

	.header image {
		width: 200upx;
		height: 200upx;
	}

	.content {
		margin-left: 50upx;
		margin-bottom: 90upx;
	}

	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40upx;
	}

	.bottom {
		border-radius: 80upx;
		margin: 70upx 50upx;
		font-size: 35upx;
	}
</style>
