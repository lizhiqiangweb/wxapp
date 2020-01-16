<template>
	<view class="contribution">
		<view class="contribution-banner background-cover" :style="{backgroundImage:'url(' + contribution_bg+ ')'}">
			<view class="contribution-banner-in">
				<text class="p">{{contributionInfo.coin_num}}</text>
				<view class="msg flexs" @tap="showModal" data-target="DialogModal1">
					<text>我的贡献值</text>
					<text class="question background-cover" :style="{backgroundImage:'url(' + doubt+ ')'}"></text>
				</view>
			</view>
			<view class="detail" @tap="contributionDeatils">
				贡献值明细
			</view>

		</view>

		<view class="" v-for="(item,index) in contributionInfo.applet_task_list" :key="index">
			<view class="invite">
				<view class="invite-title flexs">
					<view class="invite-title-in">
					</view>
					<text>{{item.type_name}}</text>
				</view>
				<view class="invite-list flexs justify-between" v-for="(item2,index2) in item.task_list" :key="index2">
					<view class="invite-list-left">
						<text>{{item2.task_name}}</text>
						<text>{{item2.coin_num}}</text>
					</view>
					<view class="invite-list-right">
						{{item2.status_desc}}
					</view>

				</view>
			</view>
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
				contribution_bg: `${this.$env.img1}contribution_bg.png`,
				doubt: `${this.$env.img1}doubt@2x.png`,
				contributionInfo: {},
				modalName: null,
				radio: 'radio1',
				msgInfo:{}


			};
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
			contributionDeatils() {
				uni.navigateTo({
					url: '../contributionDeatils/contributionDeatils?villageId='+this.village_id
				})
			},
			contributionInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.dayliTask, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.contributionInfo = res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			myContributionInit() {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetDocument, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					Type:38
				}).then((res) => {
					if (res.data.flag === 200) {
						that.msgInfo=res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.village_id=option.villageId
			this.contributionInit()
			this.myContributionInit()
		}
	}
</script>

<style lang="less" scoped>
	.contribution {
		font-size: 30upx;
		font-weight: bold;
		color: #303030;

		.contribution-banner {
			height: 200upx;
			padding-top: 50upx;
			color: #fff;
			position: relative;
			// margin-bottom: 36upx;

			.contribution-banner-in {
				margin: 0 auto;
				text-align: center;
				font-size: 26upx;

				.p {
					display: block;
					margin-bottom: 20upx;
					font-size: 60upx;
				}

				.msg {
					font-weight: normal;
					align-items: center;
					justify-content: center;

					.question {
						display: inline-block;
						width: 30upx;
						height: 30upx;
						margin-left: 10upx;
					}
				}
			}

			.detail {
				width: 180upx;
				line-height: 50upx;
				text-align: center;
				background: rgba(255, 255, 255, .3);
				border-radius: 25upx 0upx 0upx 25upx;
				position: absolute;
				right: 0;
				top: 50upx;
				font-weight: normal;
			}
		}

		.invite {
			padding: 0 30upx;
			margin-top: 80upx;

			.invite-title {
				padding-bottom: 37upx;
				border-bottom: 1upx solid #EDEDED;
				font-size: 28upx;

				.invite-title-in {
					width: 6upx;
					height: 28upx;
					margin-right: 17upx;
					background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
				}
			}

			.invite-list {
				margin: 40upx 0;

				.invite-list-left {
					text {
						display: block;
					}

					text:last-of-type {
						color: #ABABAB;
						font-size: 28upx;
						margin-top: 23upx;
					}
				}

				.invite-list-right {
					width: 160upx;
					line-height: 60upx;
					background: #F6695E;
					color: #fff;
					border-radius: 30upx;
					text-align: center;
				}
			}
		}
	}
</style>
