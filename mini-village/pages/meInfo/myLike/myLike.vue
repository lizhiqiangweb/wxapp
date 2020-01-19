<template>
	<view class="chat-list">

		<view class="chat-list-in" v-for="(item,index) in likeList" :key="index">
			<view class="chat-top flexs">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' +item.avatar+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">{{item.member_name}}</text>
						</view>
						<text class="head-info-time">{{item.date_desc}}</text>
					</view>
				</view>
			</view>
			<text class="content">这里风景真美~</text>
			<view class="content-num flexs justify-between">
				<view class="background-cover content-num-left" :style="{backgroundImage:'url(' + item.dynami_image+ ')'}">
				</view>
				<view class="content-num-right flexs">
					<view class="content-num-right-in">
						{{item.dynami_content}}
					</view>
				</view>
			</view>
		</view>
		<!-- no-data -->
		<view class="no-data" v-if="likeList.length == 0">
			<image src="../../../static/img/no_data.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css';

	export default {

		data() {
			return {
				PageIndex:1,
				PageSize:10,
				likeList:[]
			};
		},
		methods: {
			newsInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getSpMessageByType, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					type: 7,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.likeList=res.data.data.data.data_list
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

		.chat-list-in {
			// background-color: red;
			margin-bottom: 20upx;
			padding-bottom: 20upx;

			.chat-top {
				padding: 30upx;
				// padding-bottom: 30upx;
				justify-content: space-between;
				align-items: flex-start;


				.evaluate-msg-head-left {
					justify-content: flex-start;
					align-items: center;

					.head-pic {
						display: block;
						width: 90upx;
						height: 90upx;
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

			.content {
				padding: 40upx 30upx 20upx 30upx;
				color: #303030;
				font-size: 32upx;
				font-weight: 500;
			}

			.content-num {
				// padding: 0 30upx 20upx 30upx;
				margin: 0 30upx;
				margin-right: 30upx;

				.content-num-left {
					min-width: 152upx;
					height: 152upx;
					flex: 1;

				}

				.content-num-right {
					justify-content: center;
					align-items: center;
					height: 152upx;
					padding-left: 20upx;
					padding-right: 40upx;
					background-color: #F5F5F5;
					overflow: hidden;
					/*超出部分隐藏*/
					text-overflow: ellipsis;
					/* 超出部分显示省略号 */
					white-space: wrap;

					/*规定段落中的文本不进行换行 */
					.content-num-right-in {
						width: 478upx;
						height: 50upx;

					}
				}
			}
		}


	}
</style>
