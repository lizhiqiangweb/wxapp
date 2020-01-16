<template>
	<view class="chat-list">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view v-show="value=='0'" style="width: 100%;margin-top: 30px;">
			<!-- 群聊天 -->
			<view class="chat-top flexs" v-for="(item,gidIndex) in gidChatInfo" :key="gidIndex" @click="goTo('../chatDialogue/chatDialogue_q?gid='+item.gid+'&name=?'+item.name+'&myName='+item.myName)">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.avatar+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">
								{{item.name}}
							</text>
							<text class="head-info-nike-in">({{item.memberNum}}位村民)</text>
						</view>
						<text class="head-info-time">{{item.lastTit}}</text>
					</view>
				</view>
				<view class="chat-right">
					{{item.mtime | formatDate1}}
					<!-- 2019-12-20 -->
				</view>
			</view>
			<!-- 个人聊天 -->
			<view class="chat-top flexs" v-if="item.type==3" v-for="(item,index) in chatInfo" :key="index" @click="goTo('../chatDialogue/chatDialogue?username='+item.username+'&nickName='+item.nickName+'&appkey='+item.appkey+'&avatar='+item.avatar)">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.imgUrl + ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">
								{{item.name}}
								<text v-show="!item.unread_msg_count==0" class="news">{{item.unread_msg_count}}</text>
							</text>
							<!-- <text class="head-info-nike-in">(108位村民)</text> -->
						</view>
						<text class="head-info-time"></text>
					</view>
				</view>
				<view class="chat-right">
					{{item.mtime | formatDate}}
				</view>
			</view>
		</view>
		<view v-show="value=='1'" style="width: 100%;margin-top: 30px;" @tap="shareClick">
			<view class="chat-top flexs weixin-add">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + weixin_icon+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">邀请你的左邻右舍吧</text></text>
						</view>
					</view>
				</view>
				<view class="chat-add background-cover" :style="{backgroundImage:'url(' + add+ ')'}">
				</view>
			</view>
			<view class="chat-top flexs weixin-add" v-for="(item,index) in friendInfo" :key="index">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">{{item.member_nick_name}}</text></text>
						</view>
					</view>
				</view>
				<view class="chat-right background-cover" :style="{backgroundImage:'url(' + chat_p+ ')'}">
				</view>
			</view>
		</view>
		<view v-show="value=='2'" style="width: 100%">
			<view class="chat-top flexs weixin-add" v-for="(item,index) in friendInfo" :key="index">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">{{item.member_nick_name}}</text></text>
						</view>
					</view>
				</view>
				<view class="chat-right background-cover" :style="{backgroundImage:'url(' + chat_p+ ')'}">
				</view>
			</view>
		</view>
		<view v-show="value=='3'" style="width: 100%">
			<view class="chat-top flexs weixin-add" v-for="(item,index) in friendInfo" :key="index">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">{{item.member_nick_name}}</text></text>
						</view>
					</view>
				</view>
				<view class="chat-right background-cover" :style="{backgroundImage:'url(' + chat_p+ ')'}" @tap="getConversation">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css';
	import md5 from '../../../js_sdk/js-md5/src/md5.js'
	
	export default {

		data() {
			return {
				Conversation: null,
				TabCur: 0,
				scrollLeft: 0,
				value: '0',
				relateBg: `${this.$env.img1}ranking.png`,
				publish: `${this.$env.img1}publish@2x.png`,
				share: `${this.$env.img1}relay@2x.png`,
				msg: `${this.$env.img1}comment@2x.png`,
				click: `${this.$env.img1}help@2x.png`,
				add: `${this.$env.img1}weixin_add@2x.png`,
				weixin_icon: `${this.$env.img1}weixin_icon@2x.png`,
				chat_p: `${this.$env.img1}chat_p@2x.png`,
				PageIndex: 1,
				PageSize: 10,
				chatInfo: [], //聊天信息
				friendInfo: [], //好友信息
				gidChatInfo: [], //群聊天信息
				gidMemberList: [],
				appkey: [],
				username: [],
				loginStatus: 0,
				nav: [{
						name: '聊天'
					},
					{
						name: '好友'
					},
					{
						name: '关注'
					},
					{ 
						name: '粉丝'
					},
				],
			};
		},
		methods: {
			// 获取会话信息
			getConversation() {
				var that = this;
				let userInfo=uni.getStorageSync('userInfo');
				console.log("userInfo",userInfo);
				// 获取会话列表
				that.JIM.getConversation().onSuccess(function(data) {
					console.log('消息列表：', data);
					that.$data.Conversation=data.conversations.reverse();
					uni.hideLoading();
					
					that.JIM.onMsgReceive(function(data) {
						console.log("实时聊天消息", data)
					});
					
					for (let i = 0; i < data.conversations.length; i++) {
						that.JIM.getResource({
							'media_id' : data.conversations[i].avatar,
						}).onSuccess(function(res) {
							that.chatInfo.push({
								name: data.conversations[i].nickName,
								unread_msg_count: data.conversations[i].unread_msg_count,
								mtime: data.conversations[i].mtime,
								imgUrl: res.url,
								type: data.conversations[i].type,
								appkey: data.conversations[i].appkey,
								nickName: data.conversations[i].nickName,
								username: data.conversations[i].username,
								avatar: data.conversations[i].avatar
							})
					    }).onFail(function(res) {
							that.chatInfo.push({
								name: data.conversations[i].nickName,
								unread_msg_count: data.conversations[i].unread_msg_count,
								mtime: data.conversations[i].mtime,
								type: data.conversations[i].type,
								imgUrl: data.conversations[i].avatar,
								appkey: data.conversations[i].appkey,
								nickName: data.conversations[i].nickName,
								username: data.conversations[i].username,
								avatar: data.conversations[i].avatar
							})
					    });
					}
					
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
					uni.hideLoading()
				});
				// 获取群列表
				that.JIM.getGroups().onSuccess(function(data) {
					// 获取群信息
					for(let i = 0; i <　data.group_list.length; i++) {
						uni.getStorage({
						    key: 'chatData',
						    success: function (res1) {
						        for(let a = 0; a < res1.data.length; a++) {
									if(res1.data[a].from_gid==data.group_list[i].gid) {
										return res1.data[a]
									} else {
									}
								}
						    }
						});
						that.JIM.getGroupMembers({
							'gid' : data.group_list[i].gid
						}).onSuccess(function(res) {
							// 动态添加数据 给与标识
							console.log('群信息', res);
							that.gidChatInfo.unshift({
								memberNum: res.member_list.length, //获取群人数
								name: data.group_list[i].name,
								mtime: data.group_list[i].mtime,
								gid: data.group_list[i].gid,
								name: data.group_list[i].name,
								avatar: data.group_list[i].avatar,
								myName: userInfo.member_mobile
								// lastTit: res1.data[a].msgs[res1.data[a].msgs.length-1].content.msg_body.text //最新消息
							})
							console.log('群列表', data)
						}).onFail(function(data) {
							console.log(data)
						});
						console.log('群聊信息', that.gidChatInfo)
					}
				}).onFail(function(data) {
				  
				});
			},
			// tab切换
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if (e.currentTarget.dataset.id == "1") {
					this.value = '1'
					this.listInfo(1)
				} else if (e.currentTarget.dataset.id == "0") {
					this.value = '0'
				} else if (e.currentTarget.dataset.id == "2") {
					this.value = '2'
					this.listInfo(2)
				} else if (e.currentTarget.dataset.id == "3") {
					this.value = '3'
					this.listInfo(3)
				}
			},
			goUpload(e) {
				uni.navigateTo({
					url: '../addPic/addPic'
				})
			},
			listInfo(friendType) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getFriendList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					friendType: friendType,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.friendInfo = res.data.data.data_list
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			shareClick(){
				uni.navigateTo({
					url: '../../share/share'
				})
			},
			// 通用跳转可返回
			goTo(path) {
				uni.navigateTo({
					url: path
				})
			},
			// 下拉刷新
			// startPullDownRefresh() {
			// 	uni.startPullDownRefresh({
			// 		success(res){
			// 			console.log(res);  //success 返回参数说明
			// 			setTimeout(function () {
			// 				uni.stopPullDownRefresh();  //停止下拉刷新动画
			// 			}, 1000);
			// 		}
			// 	});
			// }
		},
		mounted() {
			// this.startPullDownRefresh();
		},
		onShow() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key;
 		},
		onLoad() {
			this.getConversation();
		},
		filters: {
		  formatDate1: function (value) {
			let val = JSON.parse(value)
			let date = new Date(val*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
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
			return y + '-' + MM + '-' + d;
		  },
		  formatDate: function (value) {
			let val = JSON.parse(value);
			let date = new Date(val);
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
			return y + '-' + MM + '-' + d;
		  }
		}
	}
</script>

<style lang="less" scoped>
	.chat-list {
		// padding: 30upx;
		position: relative;

		.nav {
			padding: 0 30upx;
		}

		.chat-top {
			margin: 0 30upx;
			padding: 30upx 0;
			justify-content: space-between;
			align-items: flex-start;
			border-bottom: 1upx solid #EDEDED;

			.evaluate-msg-head-left {
				justify-content: flex-start;
				align-items: center;

				.head-pic {
					display: block;
					width: 90upx;
					height: 90upx;
					// background-color: pink;
					border-radius: 50%;
					margin-right: 20upx;

				}

				.head-info-name {


					.head-info-nike {
						color: #303030;
						font-size: 32upx;
						font-weight: 700;
						position: relative;

						.news {
							padding: 7upx 10upx;
							background: #F63333;
							border-radius: 50%;
							font-size: 26upx;
							font-weight: normal;
							color: #fff;
							position: absolute;
							top: -20upx;
							right: -58upx;
							width: 34upx;
							height: 34upx;
							text-align: center;
						}
					}

					.head-info-nike-in {
						display: inline-block;
						margin-left: 10upx;
						color: #999;
						font-size: 26upx;
						font-weight: normal;
					}



				}

				.head-info-time {
					display: block;
					margin-top: 20upx;
				}


			}

			.chat-add {
				width: 40upx;
				height: 40upx;
			}

		}

		.weixin-add {
			padding-top: 26upx;
			justify-content: space-between;
			align-items: center;

			.chat-right {
				width: 110upx;
				height: 50upx;
			}
		}
	}
</style>
