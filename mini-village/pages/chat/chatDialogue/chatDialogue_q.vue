<template>
	<view style="padding-bottom: 140upx;">
		<view class="cu-chat" id="msglistview">
			<view class="cu-item" v-for="(item, index) in chatData" :key="index" :class="item.content.from_id==userInfo.member_mobile ? 'self':'left'">
				<view v-if="item.content.from_id!==userInfo.member_mobile" class="cu-avatar radius" :style="{backgroundImage:'url(' + item.imgUrl + ')'}"></view>
				<view class="main">
					<view class="content shadow" :class="item.content.from_id==userInfo.member_mobile?'bg-orange':'bg-white' ">
						<text>{{item.content.msg_body.text}}</text>
					</view>
				</view>
				<view v-if="item.content.from_id==userInfo.member_mobile" class="cu-avatar radius" :style="{backgroundImage:'url(' + headInfo.member_head + ')'}"></view>
				<view class="date">{{item.content.create_time | formatDate}}</view>
			</view>
		</view>
		
		<view class="chatMember" @click="goTo('../chatDeatils/chatDeatils?gid='+news_q.gid+'&chatTit='+chatTit)">
			<image src="../../../static/img/gidMember.png" mode=""></image>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" @focus="InputFocus"
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
				chatTit: '',
				news: [],
				news_q: [],   //目前用的
				content: [],
				memberInfo: [],
				headInfo: [],
				inputValue: '',
				noShow: false,
				title: '' ,//标题
				userInfo: []
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
			//聊天消息实时监听
			getMsgReceive() {
				let that = this;
				let userInfo = uni.getStorageSync('userInfo');
				that.JIM.onMsgReceive(function(data) {
					console.log('聊天消息', data.messages)
					that.chatData.push({
						msg_body: {
							text: data.messages[0].content.msg_body.text
						},
						create_time: data.messages[0].content.create_time,
						from_id: userInfo.member_mobile
					})
				});
			},
			sendMsg(text) {
				var that = this;
				let userInfo = uni.getStorageSync('userInfo');
				console.log(userInfo);
				that.JIM.sendGroupMsg({
					'target_gid' : that.news_q.gid,
					'content' : text,
					'target_gname' : userInfo.member_mobile,
					'at_list' : [] //at all
				}).onSuccess(function(data, msg) {
					console.log('发送成功', msg)
					that.chatData.push({
						content: {
							msg_body: {
								text: msg.content.msg_body.text,
							},
							create_time: data.ctime_ms,
							from_id: userInfo.member_mobile
						}
					});
					that.InputFocus();
				}).onFail(function(data) {
					console.log('发送失败', data)
				});
			},
			getGroupInfo() {
				var that = this;
				that.JIM.getGroupInfo({
				  'gid' : that.news_q.gid
			    }).onSuccess(function(data) {
					console.log('聊天室信息', data);
					that.chatTit = data.group_info.name;
					// 得到聊天室人员信息
					that.JIM.getGroupMembers({
						'gid' :	that.news_q.gid
					}).onSuccess(function(data) {
						for(let i = 0; i < data.member_list.length; i++) {
							that.JIM.getResource({
								'media_id' : data.member_list[i].avatar,
							}).onSuccess(function(res) {
								that.memberInfo.push({
									imgUrl: res.url,
									username: data.member_list[i].username
								})
							}).onFail(function(res) {
								that.memberInfo.push({
									imgUrl: data.member_list[i].avatar,
									username: data.member_list[i].username
								})
							});
						}
						console.log(data)
					}).onFail(function(data) {
						console.log(data);
					});
					that.JIM.onRoomMsg(function(data) {
						console.log('聊天室消息监听', data)
					});
					uni.setNavigationBarTitle({
						title: data.group_info.name
					});
			    }).onFail(function(data) {
					console.log(data)
			    });
			},
			// 得到消息数据
			getChatData() {
				var that = this;
				uni.getStorage({
				    key: 'chatData',
				    success: function (res) {
				        for(let i = 0; i < res.data.length; i++) {
							if(res.data[i].from_gid==that.news_q.gid) {
								that.chatData = res.data[i].msgs;
								console.log(that.chatData)
							} else {
								
							}
						}
				    }
				});
			},
			goTo(path) {
				uni.navigateTo({
					url: path
				})
			},
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
		updated() {
			this.scrollToBottom();
		},
		mounted() {
			this.getChatData();
		},
		onLoad(options) {
			this.news_q = options;
			this.userInfo=uni.getStorageSync('userInfo');
			this.getMsgReceive();
			this.getGroupInfo();
			this.getUserInfo();
			//动态设置标题
			uni.setNavigationBarTitle({
			    title: this.chatTit
			});
		},
		onShow() {
			this.getMsgReceive();
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
	.chatMember {
		position: fixed;
		right: 22upx;
		bottom: 120upx;
		image {
			width: 94upx;
			height: 94upx;
			display: block;
		}
	}
</style>