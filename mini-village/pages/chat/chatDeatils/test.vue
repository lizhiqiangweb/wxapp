<template>
	<div>

	</div>
</template>

<script>
import Vue from 'vue'
import md5 from '../../../js_sdk/js-md5/src/md5.js'
import JMessage from '../../../js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
	
export default {
	onLoad:function() {
		Vue.prototype.JIM = new JMessage({});
	},
	onShow:function() {
		// var appkey = 'd8ce7a8f28afaced6f89b5af';
		var appkey = '19c3ab81eb89dd856b051c03';
		// var key = this.$api.Key;
		var key = 'ca38096355b5b455f5a74c26';  //测试使用
		var timestamp = Date.parse(new Date());
		var signature = md5("appkey=19c3ab81eb89dd856b051c03&timestamp=" + timestamp +
			"&random_str=022cd9fd995849b66666&key="+key);
		console.log(signature);
		console.log(key);
		this.JIM.init({
			"appkey": appkey,
			"random_str": "022cd9fd995849b66666",
			"signature": signature,
			"timestamp": timestamp
		}).onSuccess(function(data) {
			console.log('initonSuccessdata', data)
        }).onFail(function(data) {
			console.log(data)
        });
	},
	onHide:function() {
		
	}
}
</script>

<style scoped>

</style>