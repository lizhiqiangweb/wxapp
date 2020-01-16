<template>
	<view class="chat-list">


		<view class="chat-top flexs weixin-add" v-for="(item,index) in listInfo" :key="index">
			<view class="evaluate-msg-head-left flexs">
				<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
				<view class="head-info">
					<view class="head-info-name">
						<text class="head-info-nike">{{item.member_nick_name}}</text>
						<text class="head-info-manage">{{item. village_name}}</text>
					</view>
				</view>
			</view>
			<view class="chat-right background-cover" :style="{backgroundImage:'url(' + chat_p+ ')'}">
			</view>
		</view>


	</view>
</template>

<script>
	import '../../../static/common.css';


	export default {

		data() {
			return {
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
				listInfo: []


			};
		},
		methods: {
			listInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getFriendList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					friendType: 2

				}).then((res) => {
					
					if (res.data.flag === 200) {
						that.listInfo = res.data.data.data_list
					}
				});


			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.listInit()
		}
	}
</script>
<style>
	page {
		background-color: #F5F5F5 !important;
	}
</style>
<style lang="less" scoped>
	.chat-list {
		padding-top: 20upx;
		position: relative;

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
					background-color: pink;
					border-radius: 50%;
					margin-right: 20upx;

				}

				.head-info-name {


					.head-info-nike {
						color: #303030;
						font-size: 32upx;
						font-weight: 700;
						margin-right: 10upx;
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
							right: -20upx;
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
