<template>
	<view class="chat-list">
		<view class="chat-top flexs weixin-add" v-for="(item,index) in chatInfo" :key="index">
			<view class="evaluate-msg-head-left flexs">
				<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
				<view class="head-info">
					<view class="head-info-name">
						<text class="head-info-nike">{{item.member_name}}</text>
						<image v-if="item.is_village_admin==1" src="../../../static/img/admin_icon.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="chat-right background-cover" :style="{backgroundImage:'url(' + chat_p+ ')'}" @tap="getConversation">
			</view>
		</view>
		<view class="village-bottom" @tap="shareSumbit">
			邀请
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
				chatInfo: [],
				villageId: ''
			};
		},
		methods: {
			// 聊天回话
			getConversation() {
				uni.navigateTo({
					url: "../chatDialogue/chatDialogue"
				})
			},
			// 聊天列表
			getChatroomVillagerList() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getChatroomVillagerList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					villageId: that.villageId
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.chatInfo = res.data.data.data_list
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			shareSumbit(){
				uni.navigateTo({
					url: '../../share/share?url=index/index'
				})
			}

		},
		onLoad(option) {
			this.villageId = option.villageId
			this.userInfo = uni.getStorageSync('userInfo');
			this.$api.Key = this.userInfo.key
			this.getChatroomVillagerList()
		},

	}
</script>

<style lang="less" scoped>
	.chat-list {
		// padding: 30upx;
		position: relative;
		margin: 0 0 88upx 0;
		.nav {
			padding: 0 30upx;
		}

		.chat-top {
			margin: 0 30upx;
			padding-bottom: 30upx;
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
					display: flex;
					align-items: center;
					image {
						width: 92upx;
						height: 40upx;
						margin: 0 0 0 15upx;
					}
					.head-info-nike {
						color: #303030;
						font-size: 32upx;
						font-weight: 700;
						position: relative;
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
		.village-bottom{
			width: 100%;
			line-height: 88upx;
			color:#fff;
			font-size: 34upx;
			text-align: center;
			background-color: #F63333;
			position:fixed;
			left:0;
			bottom:0;
		}
	}
</style>
