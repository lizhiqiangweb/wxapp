<script>
	import Vue from 'vue'
	import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
	// import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.2/jmessage-wxapplet-sdk-1.4.2.min.js'
	import md5 from 'js_sdk/js-md5/src/md5.js'
	export default {
		created:function() {
			var that = this;
			Vue.prototype.JIM = new JMessage({});
			// var appkey = 'd8ce7a8f28afaced6f89b5af';
			var appkey = '19c3ab81eb89dd856b051c03';
			// var key = this.$api.Key;
			var key = 'ca38096355b5b455f5a74c26';  //测试使用
			var timestamp = Date.parse(new Date());
			var signature = md5("appkey=19c3ab81eb89dd856b051c03&timestamp=" + timestamp +
				"&random_str=022cd9fd995849b66666&key="+key);
			console.log(signature);
			that.JIM.init({
				"appkey": appkey,
				"random_str": "022cd9fd995849b66666",
				"signature": signature,
				"timestamp": timestamp,
				"flag": 1
			}).onSuccess(function(data) {
				let userInfo=uni.getStorageSync('userInfo');
				let username = userInfo.member_mobile;
				let password = userInfo.member_mobile + '1';
				console.log(userInfo)
				that.JIM.register({
					'username' : username,
					'password' : password,
					'is_md5' : false,
					// 'extras' : {'username': username,'password': password},
					'address' : '深圳'
				}).onSuccess(function(data) {
					console.log('注册成功', data)
					that.JIM.login({
						'username': userInfo.member_mobile,
						'password': userInfo.member_mobile + '1'
					}).onSuccess(function(data){
						console.log("%c%s","color: red; font-size: 24px;","登录成功");
						uni.setStorage({
							key:'username',
							data:that.$data.username,
							success() {
								uni.reLaunch({ 
									url:'../index/index'
								})
							}
						});
					}).onFail(function(data){
						console.log('JIM -登录失败', data)
					});
				}).onFail(function(data) {
					if(data.code == 882002) {
						that.JIM.login({
							'username': userInfo.member_mobile,
							'password': userInfo.member_mobile + '1'
						}).onSuccess(function(data){
							console.log("%c%s","color: red; font-size: 24px;","登录成功");
							uni.setStorage({
								key:'username',
								data:that.$data.username,
								success() {
									uni.reLaunch({ 
										url:'../index/index'
									})
								}
							});
							that.JIM.onSyncConversation(function(data) { //离线消息同步监听
								console.log('离线消息:', data);
								uni.setStorageSync('chatData', data)
							});
							that.JIM.onEventNotification(function(data) {
								console.log(data)
							});
							
							that.JIM.onUserInfUpdate(function(data) {
								console.log('onUserInfUpdate : ')
								console.log(data);
							});
						}).onFail(function(data){
							console.log('JIM -登录失败', data)
						});
					}
				});
		    }).onFail(function(data) {
				console.log(data)
		    });
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					Vue.prototype.winHeight = e.windowHeight;
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
			
			// Vue.prototype.JIM = new JMessage({});
			// console.log('App Launch');
			// var appkey = 'd8ce7a8f28afaced6f89b5af';
			// var key = this.$api.Key;
			// var timestamp = (new Date()).getTime();
			// var signature = md5("appkey=d8ce7a8f28afaced6f89b5af&timestamp=" + timestamp +
			// 	"&random_str=022cd9fd995849b66666&key="+key);
			// console.log(signature);
			// this.JIM.init({
			// 	"appkey": appkey,
			// 	"random_str": "022cd9fd995849b66666",
			// 	"signature": signature,
			// 	"timestamp": timestamp,
			// 	"flag": 1
			// }).onSuccess(function(data) {
			// 	console.log(data);
			// }).onFail(function(data) {
			// 	//TODO
			// });
			// //
			// this.JIM.onDisconnect(function() {
			// 	console.log('JIM断开链接')
			// });

			// this.JIM.onMsgReceive(function(data) {
			// 	// 接受在线消息
			// 	console.log('在线接受消息')
			// 	console.log(data)
			// 	uni.$emit('msg_ol', data.messages[0].content)
			// });

			// this.JIM.isInit();// 无回调函数，调用则成功
			
			Vue.prototype.onSyncConversation = null
			uni.$once('onSyncConversation', function(data) {
				this.onSyncConversation = data
				console.log('离线传递：')
				console.log(data)
				uni.$off()
			})

		},
		// onShow: function() {
		// 	console.log('App Show')
		// },
		onHide: function() {
			console.log('App Hide');
			this.JIM.loginOut()
		}
	}
</script>

<style>
	@import 'static/colorui/main.css';
	@import 'static/colorui/icon.css';

	/*每个页面公共css */
	page {
		background: #fff;
	}

	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		font-size: 30upx;
	}

	.row-container {
		display: flex;
		flex-direction: row;
	}

	.column-container {
		display: flex;
		flex-direction: column;
	}
</style>
