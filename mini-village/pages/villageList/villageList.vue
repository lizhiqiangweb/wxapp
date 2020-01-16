<template>
	<view class="index">
		<view class="index-first index-second index-third">
			<view class="index-third-pic">
				<view class="flexs justify-between feature-in">
					<view class="feature-box radius font-28" v-for="(item,index) in indexInfo.sp_village_view_list" :key="index" @tap="villageClick(item.village_id, item.village_name)">
						<view class="feature-in-pic background-cover" :style="{backgroundImage:'url(' + item.img_url+ ')'}">
							<view class="feature-lable" :style="{'background':item.color_value}">
								<!-- :style="{'background':aqua}" 动态背景颜色值-->
								{{item.label}}
							</view>
						</view>
						<text class="feature-p">{{item.village_name}}</text>
						<text class="cuIcon-locationfill location-name">{{item.address}}</text>
					</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				area_id: '',
				indexInfo: []
			}
		},
		methods: {
			getVillageList() {
				let that = this;
				that.$request.httpTokenRequest(that.$api.getSmallProceduresIndex, that.$api.get, {
					areaId: that.area_id,
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.indexInfo = res.data.data
						console.log('首页信息', that.indexInfo)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			villageClick(id) {
				uni.navigateTo({
					url: "../details/details?villageId=" + id
				})
			}
		},
		onLoad(option) {
			this.area_id = option.area_id
			uni.setNavigationBarTitle({
				title: option.village_name
			})
		},
		onShow() {
			this.getVillageList()
		}
	}
</script>

<style lang="less" scoped>
	.index {
		.index-banner {
			height: 420upx;
		}
		.flexs {
			display: flex;
			flex-wrap: wrap;
			margin: 20upx 0 0 0;
		}
		.index-search {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
			border-radius: 40upx;
			height: 80upx;
			margin: -40upx 30upx 80upx 30upx;
			box-sizing: border-box;

			.cuIcon-search {
				margin-left: 170upx;
			}

			.search-form {
				height: 100%;
				margin: 0;
				background-color: #fff;

				input {
					height: 80upx;
					line-height: 80upx;
				}
			}
		}

		.index-first {
			.cu-form-group {
				.index-first-top-left {
					font-size: 34upx;
					font-family: PingFang-SC-Heavy;
					font-weight: 800;
					color: #2EA994;

					.image-first,
					.image-second {
						display: inline-block;
					}

					.image-first {
						width: 36upx;
						height: 36upx;
						margin-right: 8upx;
					}

					.image-second {
						width: 226upx;
						height: 28upx;
						margin-left: 15upx;
					}
				}
			}

			.index-first-banner {
				// width: 100%;
				height: 150upx;
				// background-color: #2EA994;
				margin: 40upx 30upx 86upx 30upx;
				padding: 0 30upx 0 48upx;
				border-radius: 8upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.index-first-left {
					text {
						font-size: 48upx;
						color: #FFFFFF;
						margin: 0 0 19upx 0;
					}
					view {
						font-size: 22upx;
						color: #FFFFFF;
					}
				}
				.index-first-right {
					text {
						display: block;
						width:160upx;
						height:50upx;
						background:rgba(255,255,255,1);
						border:1px solid rgba(255,255,255,1);
						border-radius:25upx;
						color:rgba(40,153,133,1);
						font-size:22upx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
				
			}
		}

		.index-second {
			margin-bottom: 78upx;


			.cu-form-group {
				font-size: 34upx;
				font-family: PingFang-SC-Heavy;
				font-weight: 800;
				color: #303030;


				.index-first-top-right {
					color: #F44336;
					font-size: 28upx;
					font-weight: normal;
				}

			}

			.index-second-banner {
				.scroll-view_H {
					/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
					white-space: nowrap;
					width: 100%;
					margin: 0 auto;


					.scroll-view-item_H {
						display: inline-block;
						width: 280upx;
						height: 347upx;
						background: rgba(255, 255, 255, 1);
						box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
						border-radius: 8upx;
						margin: 2% 1% 2% 30upx;
						position: relative;
						// text-align: center;


						.scroll-view-item_image {
							width: 100%;
							height: 160upx;
							margin-bottom: 20upx;

							image {
								width: 100%;
								height: 100%;
								overflow: hidden;
							}
						}

						.scroll-view-item_title {
							width: 245upx;
							color: #303030;
							font-size: 28upx;
							margin: 0 auto;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;

						}

						.scroll-view-item_ranking {
							margin: 16upx 0 30upx 17upx;
							text-align: left;
						}

						.scroll-view-item_btm {
							width: 116upx;
							line-height: 48upx;
							text-align: center;
							color: #fff;
							background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
							border-radius: 24upx;
							margin: 0 auto;
						}

						.isgray {
							width: 116upx;
							line-height: 48upx;
							color: #fff !important;
							background: #ABABAB !important;
						}


						.index-second-tips {
							width: 78upx;
							line-height: 36upx;
							background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
							border-radius: 18upx 4upx 18upx 4upx;
							font-size: 23upx;
							font-family: DIN-Bold;
							font-weight: bold;
							color: #fff;
							text-align: center;
							position: absolute;
							top: -14upx;
							left: -10upx;
						}

					}
				}



			}



		}

		.index-third {
			.feature-in {
				flex-wrap: wrap;
				padding: 0 30upx;

				.feature-box {
					width: 330upx;
					// height: 320upx;
					box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
					border-radius: 4upx;
					margin-bottom: 30upx;
					padding-bottom: 30upx;

					.feature-in-pic {
						width: 100%;
						height: 190upx;

						.feature-lable {
							width: 96upx;
							line-height: 34upx;
							color: #fff;
							font-size: 20upx;
							text-align: center;
							background-color: pink;
						}
					}

					.feature-p {
						display: block;
						margin: 20upx 0 0 30upx;
					}

					.location-name {
						display: block;
						margin: 20upx 0 0 30upx;
						color: #999999;
					}
				}



			}
		}

		.index-four {
			padding: 0 30upx;

			.index-four-title {
				font-size: 34upx;
				font-family: PingFang-SC-Heavy;
				font-weight: 800;
				color: rgba(48, 48, 48, 1);

				text {
					display: block;
				}

				text:last-of-type {
					color: #999999;
					font-size: 24upx;
					font-weight: 500;
					margin-top: 15upx;
					margin-bottom: 40upx;

				}
			}

			// 			.mescroll-uni .mescroll-uni-fixed{
			// 				position: static;
			// 			}


			// 
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
					font-size: 34upx;
					color: #303030;
				}

				.information-second {
					display: inline-block;
					width: 621upx;
					// height: 26upx;
					font-size: 26upx !important;
					color: #666;
					font-weight: 500;
					margin-top: 20upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.information-some {
				margin-top: 30upx;
				.information-some-left {
					.some-left-p {
						display: inline-block;
						// width: 60upx;
						padding: 10upx;
						// line-height: 32upx;
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
		}

		.details-list {
			padding: 0 30upx;
			margin-bottom: 79upx;
			display: flex;
			justify-content: center;
			align-items: center;

			.details-list-in {
				width: 33.33%;
				margin-top: 50upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;


				.details-list-icon {
					width: 60upx;
					height: 60upx;
					margin-bottom: 25upx;
					position: relative;

					.details-num {
						width: 34upx;
						line-height: 34upx;
						text-align: center;
						background: #F63333;
						border-radius: 50%;
						color: #fff;
						position: absolute;
						right: -5upx;
						top: -5upx;
					}
				}


			}

			// .details-list-in:nth-of-type(1){
			// 	align-items: flex-start;
			// 	justify-content: center;
			// }
			// .details-list-in:nth-of-type(3){
			// 	align-items: center;
			// 	justify-content: center;
			// }
		}
	}
</style>
