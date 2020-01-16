import Vue from 'vue'
import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
// import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.2/jmessage-wxapplet-sdk-1.4.2.min.js'
import md5 from 'js_sdk/js-md5/src/md5.js'

function JIMinit() {
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
		console.log('initonSuccessdata', data);
		console.log(userInfo.member_mobile)
		that.JIM.register({
			'username' : username,
			'password' : password,
			'is_md5' : false,
			'address' : '深圳'
		}).onSuccess(function(data) {
			console.log('注册', data)
		}).onFail(function(data) {
			console.log('注册', data)
		});
	}).onFail(function(data) {
		console.log(data)
	});
}