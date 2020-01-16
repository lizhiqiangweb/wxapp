<template>
	<view class="information">
		<view class="information-in">
			<view class="info-pic background-cover">
				<!-- :style="{backgroundImage:'url(' + relateBg+ ')'}" -->
			</view>
			<view class="info-btm">
				<text class="information-first font-28">住进海边的家，乐享惬意假日</text>
				<text class="information-second font-28">住进海边的家，乐享惬意假日</text>
				<view class="information-some font-24 flexs justify-between">
					<view class="information-some-left">
						<text class="some-left-p">新闻</text>
						<text>
							2019-06-28
						</text>
					</view>
					<view class="information-some-right">
						<text class="some-right-p color">111</text><text>浏览</text>
						<text class="some-right-p child color">111</text><text>回复</text>
					</view>

				</view>
			</view>

		</view>
		<!-- 悬浮按钮s -->
		<view v-show='isShow' class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goUpload"
		 data-target="bottomModal"></view>
		<!-- 悬浮按钮e-->
	</view>
</template>

<script>
	import "../../static/common.css";

	export default {
		name: "information",
		data() {
			return {
				publish: `${this.$env.img1}publish@2x.png`,
				isShow: false
			};
		},
		methods: {
			infoInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageInformatioinList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						// that.picInfo=res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			}
		},
		onShow(option) {
			this.villageId = option.villageId || '430223204212';
			this.infoInit()
			
		}
	};
</script>

<style lang="less" scoped>
	.information {
		background-color: #fff;
		margin: 60upx 30upx 0 30upx;
		position: relative;

		.information-in {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
			border-radius: 8upx;
			padding-bottom: 27upx;
			margin-bottom: 30upx;
		}

		.info-pic {
			width: 100%;
			height: 280upx;
			background-color: aquamarine;
		}

		.info-btm {
			margin: 25upx 20upx;

			.information-first,
			.information-second {
				display: block;
				font-size: 34upx;
				color: #303030;
			}

			.information-second {
				font-size: 26upx;
				color: #666;
				font-weight: 500;
				margin: 20px 0 25upx 0;
			}
		}

		.information-some {
			.information-some-left {
				.some-left-p {
					display: inline-block;
					width: 60upx;
					line-height: 32upx;
					color: #f44336;
					text-align: center;
					border: 1upx solid #f44336;
					border-radius: 4upx;
					margin-right: 14upx;
				}
			}

			.some-right-p {
				display: inline-block;
				font-size: 26upx;
				font-weight: 700;
				margin-right: 10upx;
			}

			.child {
				margin-left: 16upx;
			}
		}

		.fix {
			width: 110upx;
			height: 110upx;
			position: fixed;
			bottom: 134upx;
			right: 10px;
		}
	}
</style>
