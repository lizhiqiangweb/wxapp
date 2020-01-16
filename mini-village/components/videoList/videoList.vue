<<<<<<< HEAD
=======

>>>>>>> 4f0f23d9d3a65e287d50481fc817cd7049c83080
<template>
	<view class="video-information">
		<view class="information-in">
			<view class="info-pic background-cover">
				<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
				 @error="videoErrorCallback" enable-danmu danmu-btn controls poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"></video>
				<view class="feature-lable">
					人物传记
				</view>
			</view>
			<view class="info-btm">
				<text class="information-first font-28">住进海边的家，乐享惬意假日</text>
				<view class="details-info details-info-some">
					<view class="details-info-people">
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + play+ ')'}">
						</view>
						<text>1</text>
					</view>
					<view class="details-info-people">
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + msg+ ')'}">
						</view>
						<text>2</text>
					</view>
					<view class="details-info-people">
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + click+ ')'}">
						</view>
						<text>3</text>
					</view>
				</view>
			</view>

		</view>
		<!-- 悬浮按钮s -->
		<view class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goVideo" data-target="bottomModal"></view>
		<!-- 悬浮按钮e-->
	</view>
</template>

<script>
	import '../../static/common.css'

	export default {
		name: 'information',
		data() {
			return {
				publish: `${this.$env.img1}publish@2x.png`,
				share: `${this.$env.img1}relay@2x.png`,
				msg: `${this.$env.img1}comment@2x.png`,
				click: `${this.$env.img1}help@2x.png`,
				play: `${this.$env.img1}play@2x.png`,

			};
		},
		methods: {
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			goVideo(e){
					uni.navigateTo({
					url: '../uploadVideo/uploadVideo'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.video-information {
		background-color: #fff;
		margin: 60upx 30upx 0 30upx;
		position: relative;

		.information-in {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
			border-radius: 8upx;
			padding-bottom: 27upx;
			// margin-bottom: 30upx;
		}

		.info-pic {
			width: 100%;
			height: 280upx;
			position: relative;

			video {
				width: 100%;
				height: 100%;
			}

			.feature-lable {
				width: 96upx;
				line-height: 34upx;
				color: #fff;
				font-size: 20upx;
				text-align: center;
				background-color: pink;
				position: absolute;
				top:0;
				left:0;
			}
		}


		.info-btm {
			margin: 25upx 20upx 0 20upx;

			.information-first,
				{
				display: block;
				font-size: 34upx;
				color: #303030;
			}

		}

		.details-info {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 35upx;

			.details-info-people {
				width: 33.33%;
				height: 80upx;
				margin: 0 10upx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #666;
				font-size: 28upx;

				.details-info-icon {
					width: 30upx;
					height: 30upx;
					margin-right: 13upx;
				}

				.text {
					margin: 0 5upx;
				}

			}

			.details-info-people:nth-of-type(1) {
				justify-content: start;
			}

			.details-info-people:nth-of-type(3) {

				justify-content: flex-end;
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
