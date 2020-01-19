<template>
	<view>
		<view class="cu-chat" id="msglistview">
			<view class="cu-item" v-for="(item, index) in chatData" :key="index" :class="item.content.from_id==news.username ? 'left':'self'">
				<view v-if="item.content.from_id==news.username" class="cu-avatar radius" :style="{backgroundImage:'url(' + avatarImgUrl + ')'}"></view>
				<view class="main">
					<view class="content shadow" :class="item.content.from_id==news.username?'bg-orange':'bg-white' ">
						<text> <!-- @longtap="withdraw()" -->
							{{item.content.msg_body.text}}
						</text>
					</view>
					<!-- <view v-show="withdrawShow==1" class="fn_withdraw">撤回消息</view> -->
				</view>
				<view v-if="item.content.from_id!==news.username" class="cu-avatar radius" :style="{backgroundImage:'url(' + headInfo.member_head + ')'}"></view>
				<view class="date">{{item.content.create_time | formatDate}}</view>
			</view>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" ref='inputs' :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" @focus="InputFocus"
			 @blur="InputBlur" v-model="inputValue"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-orange shadow" @click="sendMsg(inputValue)">发送</button>
		</view>
 
	</view>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data() {
			return {
				InputBottom: 0,
				chatData: [],
				news: [],
				content: [],
				headInfo: [],
				inputValue: '',
				withdrawShow: 0,
				scrollTop: 0,
				avatarImgUrl: ''
			};
		},
		methods: {
			InputFocus(e) {
				this.inputValue = '';
			},
			InputBlur(e) {
				this.InputBottom = 0
				this.inputValue = e.target.value;
			},
			// 聊天消息监听 
			onMsgReceive() {
				var that = this;
				that.JIM.onMsgReceive(function(data) {
					console.log('聊天消息监听', data.messages)
					// if(data.messages[0].from_username==that.news.username) {
					// 	that.chatData.push({
					// 		msg_body: {
					// 			text: data.messages[0].content.msg_body.text,
					// 		},
					// 		create_time: data.messages[0].content.create_time
					// 	})
					// }
				});
			},
			sendMsg(text) {
				var that = this;
				that.JIM.sendSingleMsg({
					'target_username' : that.news.username,
					'target_nickname' : that.news.nickName,
					'content' : text,
					'appkey' : that.news.appkey
				}).onSuccess(function(data, msg) {
					console.log('发送成功', data);
					that.chatData.push({
						content: {
							msg_body: {
								text: msg.content.msg_body.text,
							},
							create_time: data.ctime_ms
						}
					});
					that.InputFocus();
					// 更新回话消息
					that.JIM.updateConversation({
						'appkey' : that.news.appkey,
						'username' : that.news.username
					});
					uni.setStorageSync('newChatData', that.chatData)
				}).onFail(function(data) {
					console.log('发送失败', data)
				});
			},
			getChatData() {
				var that = this;
				uni.getStorage({
				    key: 'chatData',
				    success: function (res) {
				        for(let i = 0; i < res.data.length; i++) {
							if(res.data[i].from_username===that.news.username) {
								if(that.news.username) {
									that.chatData = res.data[i].msgs;
									// console.log(res.data[i]);
								}
							} else {
							}
						}
				    }
				});
				that.JIM.onMsgReceive(function(data) {
					console.log("实时聊天消息", data)
					that.chatData.push({
						content: data.messages[0].content
					});
					uni.setStorage({
						'newChatData': that.chatData
					})
					
				});
			},
			// withdraw() {
			// 	var that = this;
			// 	that.withdraw = 1;
			// }
			// 滚动至聊天底部
			scrollToBottom() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.select('#msglistview').boundingClientRect();
				query.exec((res) => {
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 9999
					});
				});
			},
			avatarUrl() {
				var that = this;
				if(that.news.avatar.indexOf('https')!==-1) { //判断头像是否是微信获取还是极光IM设置
					that.avatarImgUrl = that.news.avatar
				} else {
					that.JIM.getResource({
						'media_id' : that.news.avatar,
					}).onSuccess(function(res) {
						that.avatarImgUrl = res.url
					}).onFail(function(res) {
						
					})
				}
				
			},
			getUserInfo() {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetMemberInfo, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.headInfo = res.data.data
					}
				});
			}
		},
		mounted() {
			this.getChatData();
			// this.getHositoryNews();
			this.avatarUrl();
 		},

		onLoad(options) {
			this.news = options;
			// 重置回话未读
			this.JIM.resetUnreadCount({
				'username' : this.news.username
		    });
			//动态设置标题
			uni.setNavigationBarTitle({
			    title: this.news.nickName
			});
			this.getUserInfo();
			this.scrollToBottom();
		},
		onShow() {
			this.onMsgReceive();
		},
		filters: {
		  formatDate: function (value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? ('0' + MM) : MM;
			let d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			let h = date.getHours();
			h = h < 10 ? ('0' + h) : h;
			let m = date.getMinutes();
			m = m < 10 ? ('0' + m) : m;
			let s = date.getSeconds();
			s = s < 10 ? ('0' + s) : s;
			// return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
			return h + ':' + m
		  }
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding-bottom: 100upx;
	}
	.fn_withdraw {
		position: absolute;
		bottom: 20upx;
		width: 142upx;
		z-index: 99;
		padding: 6upx 12upx;
		background: #FFFFFF;
		box-shadow: 1upx 1upx 1upx 4upx #ddd;
		border-radius: 2upx;
	}
	.content {
		text {
			width: 430upx;
			height: auto;
		}
	}
</style>