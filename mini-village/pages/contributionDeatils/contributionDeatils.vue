<template>
	<view class="contribution">
		<!-- 贡献值明细 s -->
		<view class="invite">
			<view class="invite-title flexs">
				<view class="invite-title-in">
				</view>
				<text>贡献值明细</text>
			</view>
			<view class="invite-list flexs justify-between" v-for="(item,index) in myInfo.data_list" :key="index">

				<view class="invite-list-left">
					<text>{{item.remark}}</text>
					<text>{{item.add_time}}</text>
				</view>
				<view class="invite-list-right" :class="item.type==1?'':'red'">
					{{item.num}}贡献值
				</view>

			</view>

		</view>
		<!-- 贡献值明细 e -->

	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				contribution_bg: `${this.$env.img1}contribution_bg.png`,
				doubt: `${this.$env.img1}doubt@2x.png`,
				PageIndex: 1,
				PageSize: 10,
				myInfo: {}
			};
		},
		methods: {
			myContribution() {
				let that = this
				that.$request.httpTokenRequest(that.$api.myContribution, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					villageId:that.village_id
				}).then((res) => {
					if (res.data.flag === 200) {
						that.myInfo = res.data.data
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
			this.myContribution()
		}
	}
</script>

<style lang="less" scoped>
	.contribution {
		font-size: 30upx;
		font-weight: bold;
		color: #303030;

		.invite {
			padding: 0 30upx;
			margin-top: 40upx;

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
					// width: 160upx;
					// line-height: 60upx;
					// background: #F6695E;
					// color: #fff;
					// border-radius: 30upx;
					// text-align: center;
				}
			}

			.red {
				color: #F6695E
			}
		}
	}
</style>
