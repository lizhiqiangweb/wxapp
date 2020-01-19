<template>
	<view class="chat-list">
		<view style="width: 100%;margin-top: 30px;"  v-for="(item,index) in commentList" :key="index">
			<view class="chat-top flexs">
				<view class="evaluate-msg-head-left flexs">
					<!-- <text class="head-pic background-cover"></text> -->
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike"><text class="circle" v-show="item.message_is_read"></text>{{item.message_title}}</text>
							<text class="head-info-nike-in"></text>
						</view>
						<text class="head-info-time">{{item.message_content}}</text>
					</view>
				</view>
				<view class="chat-right">
					{{item.date_desc}}
				</view>
			</view>
		</view>
		<!-- no-data -->
		<view class="no-data" v-if="commentList.length == 0">
			<image src="../../../static/img/no_data.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css';


	export default {

		data() {
			return {
				PageIndex: 1,
				PageSize: 10,
				commentList:[]
			};
		},
		methods: {
			newsInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getSpMessageByType, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					type: 5,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.commentList=res.data.data.data.data_list
						console.log(that.commentList)
					}
				});


			},
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.newsInit()
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
		// padding: 30upx;
		position: relative;
		padding-top: 20upx;

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
						position: relative;

						.circle {
							display: inline-block;
							margin-right: 10upx;
							width: 20upx;
							height: 20upx;
							background: #F96C6C;
							border-radius: 50%;
						}

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
