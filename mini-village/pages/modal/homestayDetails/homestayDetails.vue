<template>
	<view class="homestay-details">
		<view class="homestay-details-top">
			<view class="homestay-details-top-banner background-cover">
				<!-- :style="{backgroundImage:'url(' + no_homestay+ ')'}" -->
			</view>
			<view class="homestay-details-top-msg">
				<view class="details-top-msg-title">
					<text>养老房</text>
					<text>华源村特色乡村别墅</text>
				</view>
				<view class="details-top-msg-location">
					<text>养老房</text>
					<text>华源村</text>
				</view>
				<view class="details-top-msg-evelatue flexs justify-between">
					<view class="top-msg-evelatue-left flexs justify-start">
						<view class="score">
							<!--循序生成五星，原理是通过给span绑定类名设置星星背景图-->
							<text class="star-item background-cover" v-for="star in starScore" :class="star" :key='star'> </text>
						</view>
						<text>101条点评</text>
					</view>
					<view class="top-msg-evelatue-right">
						<image :src="isCollect?homestay_red:homestay_gray" mode=""></image>
					</view>
				</view>
				<view class="details-top-msg-room flexs">
					<view class="top-msg-room-in flexs" v-for="(item,index) in roomList" :key="index">
						<view class="top-msg-room-msg background-cover" :style="{backgroundImage:'url(' + item.icon+ ')'}">
						</view>
						<text>{{item.p}}</text>
					</view>
				</view>
				<view class="details-top-msg-introduce flexs justify-between">
					<view class="top-msg-introduce-left flexs justify-start">
						<view class="introduce-icon background-cover" :style="{backgroundImage:'url(' + village_icon+ ')'}">
						</view>
						<text>田西村</text>
					</view>
					<view class="top-msg-introduce-right">
						<text>详情介绍</text>
						<text class="lg text-gray cuIcon-right"></text>
					</view>

				</view>


			</view>


		</view>

		<view class="homestay-details-mid">
			<view class="details-mid-msg-introduce flexs justify-between">
				<view class="mid-msg-introduce-left flexs justify-start">
					<view class="introduce-icon background-cover">
						<!-- :style="{backgroundImage:'url(' + village_icon+ ')'}"-->
					</view>
					<view class="introduce-name">
						<view class="introduce-name-top flexs ">
							<text>斯文</text>
							<view class="roomer background-cover" :style="{backgroundImage:'url(' + owner+ ')'}"></view>
						</view>
						<view class="introduce-name-btm flexs">
							<view class="introduce-name-btm-left flexs">
								<view class="phone background-cover" :style="{backgroundImage:'url(' + eve_5+ ')'}"></view>
								<text>手机认证</text>
							</view>
							<view class="introduce-name-btm-left flexs">
								<view class="phone background-cover" :style="{backgroundImage:'url(' + eve_4+ ')'}"></view>
								<text>实名认证</text>
							</view>
						</view>

					</view>
				</view>
				<view class="mid-msg-introduce-right">
					<text class="lg text-gray cuIcon-right"></text>
				</view>

			</view>

			<!-- 房东其他房源 s -->
			<view class="details-mid-list">
				<text class="mid-list-title">房东的其他房源</text>
				<!-- 开始只展示两条，点击更多在当前页面展开 -->
				<view class="mid-list-msg">
					<view class="mid-list-msg-top flexs justify-between">
						<view class="mid-list-msg-top-left">
							<text>华源村特色乡村别墅</text>
							<view class="mid-list-msg-top-left-mag">
								<text>三人间</text>
								<text>可住2人</text>
								<text>数量1</text>
							</view>
						</view>
						<view class="mid-list-msg-top-right">
							立即预定
						</view>

					</view>

					<view class="mid-list-msg-btm">
						¥308
					</view>
				</view>

				<view class="mid-list-more">
					<text>查看更多</text>
					<text class="lg  cuIcon-right"></text>
				</view>

			</view>
			<!-- 房东其他房源 e -->

			<!-- 房屋介绍 s -->
			<view class="details-mid-list details-mid-introduce">
				<text class="mid-list-title">房屋介绍</text>
				<view class="details-mid-introduce-p">
					2222
				</view>
			</view>
			<!-- 房屋介绍 e -->

			<!-- 设施服务 s -->
			<view class="details-mid-list details-mid-introduce details-mid-service">
				<text class="mid-list-title">设施服务</text>
				<view class="details-top-msg-room flexs">
					<view class="top-msg-room-in flexs" v-for="(item,index) in serviceList" :key="index">
						<view class="top-msg-room-msg background-cover" :style="{backgroundImage:'url(' + item.icon+ ')'}">
						</view>
						<text>{{item.p}}</text>
					</view>
				</view>
			</view>
			<!-- 设施服务 e -->

			<!-- 房屋地址 s -->
			<view class="details-mid-list details-mid-introduce details-mid-adress">
				<text class="mid-list-title">房屋地址</text>
				<view class="adress">
					<view class="details-top-msg-introduce flexs justify-between">
						<view class="top-msg-introduce-left flexs justify-start">
							<text class="lg text-gray cuIcon-locationfill"></text>
							<text class="locationfill-font">田西村田西村田西村田西村田田</text>
						</view>
						<view class="top-msg-introduce-right">
							<text>地图导航</text>
							<text class="lg text-gray cuIcon-right"></text>
						</view>

					</view>
				</view>
			</view>
			<!-- 房屋地址 e -->

			<!-- 客房评价 s -->
			<view class="details-mid-list details-mid-introduce details-mid-evelate">
				<view class="top flexs justify-between">
					<text class="title">客房评价</text>
					<view class="title-right">
						<text class="">xx评论</text>
						<text class="lg cuIcon-right"></text>
					</view>
				</view>

				<!-- 热门评论s -->
				<view class="evaluate-msg-in">


					<view class="evaluate-msg-head-left flexs">
						<text class="head-pic background-cover"></text>
						<view class="head-info">
							<view class="head-info-name">
								<text class="head-info-nike">本村最帅的</text>
							</view>
							<text class="head-info-time">2019-06-27入住</text>
						</view>
					</view>
					<view class="evaluate-msg-btm">
						<view class="evaluate-msg-btm-p">
							北正街是洪江市一个行政村、毗连南正街、水源山村、兰花村物产丰富，风景宜人，历史悠久，民风淳朴。
						</view>
						<view class="evaluate-msg-btm-pic flexs">
							<view class="evaluate-msg-btm-pic-in" v-for="item in 4" :key="item">
							</view>
						</view>
						<view class="evaluate-msg-btm-select">
							<view class="details-top-msg-introduce flexs justify-between">
								<view class="top-msg-introduce-left flexs justify-start">
									<view class="introduce-icon background-cover" :style="{backgroundImage:'url(' + eve_1+ ')'}">
									</view>
									<text>养老服务说明</text>
								</view>
								<view class="top-msg-introduce-right">
									<text class="lg text-gray cuIcon-right"></text>
								</view>
							</view>
							<view class="details-top-msg-introduce flexs justify-between">
								<view class="top-msg-introduce-left flexs justify-start">
									<view class="introduce-icon background-cover" :style="{backgroundImage:'url(' + eve_2+ ')'}">
									</view>
									<text>可定状态</text>
								</view>
								<view class="top-msg-introduce-right">
									<text class="lg text-gray cuIcon-right"></text>
								</view>
							</view>
							<view class="details-top-msg-introduce flexs justify-between">
								<view class="top-msg-introduce-left flexs justify-start">
									<view class="introduce-icon background-cover" :style="{backgroundImage:'url(' + eve_3+ ')'}">
									</view>
									<text>交易规则</text>
								</view>
								<view class="top-msg-introduce-right">
									<text class="lg cuIcon-right"></text>
								</view>
							</view>
						</view>

					</view>

				</view>
			</view>
			<!-- 客房评价 e -->

			<!-- 我家土货 s -->
			<view class="details-mid-list details-mid-introduce details-mid-evelate details-mid-goods">
				<view class="top flexs justify-between">
					<text class="title">我家土货</text>
					<view class="title-right">
						<text class="">全部</text>
						<text class="lg cuIcon-right"></text>
					</view>
				</view>

				<view class="goods-list flexs">
					<view class="goods-list-left">

					</view>
					<view class="goods-list-right flexs">
						<view class="goods-list-right-top">
							<text class="title">武汉乡村土鸡蛋</text>
							<view class="title-msg">
								<text>武汉乡村</text>
								<text>数量村</text>
							</view>
						</view>
						<view class="goods-list-right-btm flexs justify-between">
							<view class="red">
								<text>￥</text>
								<text>130</text>
							</view>
							<view>浙江杭州</view>
						</view>

					</view>

				</view>



			</view>
			<!-- 我家土货 e -->

			<!--相邻房源 s -->
			<view class="details-mid-list details-mid-introduce details-mid-house">
				<text class="mid-list-title">相邻房源</text>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="homestay-list" v-for="(item,index) in 2" :key="index">
						<view class="homestay-list-in">
							<view class="homestay-list-in-pic background-cover" :style="{backgroundImage:'url(' + no_homestay+ ')'}">
								<view class="homestay-list-collect flexs justify-between">
									<view class="collect-left">
										<text class="text">4.7分</text>
										<text>超赞</text>
									</view>
									<view class="collect-right">
										<image :src="isCollect?homestay_red:homestay_gray" mode=""></image>
									</view>

								</view>
								<view class="homestay-head background-cover">
								</view>
							</view>
							<view class="homestay-list-p">
								<text class="homestay-list-title">长沙浏阳市大峡谷大河山庄</text>
								<view class="homestay-list-msg">
									<text>独立双人间</text>
									<text class="people">可住2人</text>
									<text>距离你127.6km</text>
								</view>
							</view>
							<view class="homestay-list-price flexs">
								<view class="homestay-list-price-left">
									<text class="price">¥366</text>
									<text class="price-gray">¥366</text>
								</view>
								<view class="homestay-list-price-right">
									<text class="price-right-left">几点几分的手机放入</text>
									<text class="price-right-right">养老房</text>
								</view>

							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 相邻房源 e -->



		</view>
		<!-- 底部 s -->
		<view class="homestay-details-fixed flexs justify-between">

			<view class="homestay-details-fixed-left flexs">
				<view class="details-fixed-left-left flexs">
					<view class="phone flexs">
						<view class="tel background-cover" :style="{backgroundImage:'url(' + tel+ ')'}">
						</view>
						<text>通话</text>
					</view>
					<view class="news flexs">
						<view class="tel background-cover" :style="{backgroundImage:'url(' + news+ ')'}">
						</view>
						<text>通话</text>
					</view>
				</view>
				<view class="price">
					<text>¥</text>
					<text>298</text>
				</view>
			</view>
			<view class="homestay-details-fixed-right">
				立即预订
			</view>


		</view>




		<!-- 底部 e -->

	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				// star_light: `${this.$env.img1}service_star_light.png`,
				// star_gray: `${this.$env.img1}service_star_gray.png`,
				no_homestay: `${this.$env.img1}no_homestay@2x.png`,
				homestay_red: `${this.$env.img1}love_add@2x.png`,
				homestay_gray: `${this.$env.img1}love_unadd@2x.png`,
				village_icon: `${this.$env.img1}village_icon@2x.png`,
				eve_1: `${this.$env.img1}eve_1@2x.png`,
				eve_2: `${this.$env.img1}eve_2@2x.png`,
				eve_3: `${this.$env.img1}eve_3@2x.png`,
				owner: `${this.$env.img1}owner.png`,
				eve_5: `${this.$env.img1}eve_5@2x.png`,
				eve_4: `${this.$env.img1}eve_4@2x.png`,
				tel: `${this.$env.img1}dianhua@2x.png`,
				news: `${this.$env.img1}xiaoxi@2x.png`,



				star: 0,
				isCollect: false,
				roomList: [{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
				],
				serviceList: [{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					}, {
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
					{
						'icon': `${this.$env.img1}room_1@2x.png`,
						'p': '独立单间',
						'id': 1
					},
				]



			};
		},
		computed: {
			starScore() {
				let stars = []; //定义一个空数组来存储类名
				let score = Math.floor(this.star * 2) / 2; //把评分转成整数或整数+0.5（如：4.7转成4.5，4.2转成4.0）
				// let decimalScore = score % 1 !== 0; //取1的余数不等于0，说明有小数（显示半星）
				let integerScore = Math.floor(score); //取整数分数（显示全星）
				for (let i = 0; i < integerScore; i++) {
					stars.push('on') //整数分数为多少，就添加多少个全星
				}
				// if (decimalScore) {
				// 	stars.push('half') //存在小数分数，添加一个半星
				// }
				while (stars.length < 5) {
					stars.push('off') //如果星星数不满5颗，空星星填充
				}
				return stars
			}
		},
		onLoad() {
			this.star = 4
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
		// #F5F5F5
	}
</style>
<style lang="less" scoped>
	.homestay-details {
		font-size: 26upx;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: #000;
		position: relative;

		.homestay-details-top {
			background-color: #fff;
			margin-bottom: 20upx;

			.homestay-details-top-banner {
				width: 100%;
				height: 420upx;
				background-color: pink;
			}

			.homestay-details-top-msg {
				padding: 35upx 30upx;

				.details-top-msg-title {
					text:first-of-type {
						display: inline-block;
						padding: 8upx 12upx;
						background: #F44336;
						border-radius: 4upx;
						color: #FFF;
						text-align: center;
						margin-right: 20upx;

					}

					text:last-of-type {
						font-size: 38upx;
						color: #303030;
						font-weight: 700;
						letter-spacing: 2upx;

					}
				}

				.details-top-msg-location {
					margin-top: 17upx;
					color: #999;

					text {
						display: inline-block;
						margin-right: 10upx;
					}
				}

				.details-top-msg-evelatue {
					margin-top: 43upx;
					margin-bottom: 30upx;
					color: #666;
					font-size: 24upx;
					align-items: center;

					.top-msg-evelatue-left {
						.score {
							display: flex;
							align-items: center;
							justify-content: flex-start;
							margin-right: 30upx;

							.star-item {
								width: 22upx;
								height: 20upx;
								margin-right: 10upx;
							}

							.star-item.on {
								background: url("../../../static/img/service_star_light.png"); //全星
								background-repeat: no-repeat;
								background-position: center center;
								background-size: cover;

							}

							.star-item.off {
								background: url("../../../static/img/service_star_gray.png"); //空星星
								background-repeat: no-repeat;
								background-position: center center;
								background-size: cover;
							}
						}
					}

					.top-msg-evelatue-right {
						width: 42upx;
						height: 42upx;

						image {
							width: 100%;
							height: 100%;
							overflow: hidden;
						}
					}

				}

				.details-top-msg-room {
					padding: 35upx 0;
					flex: 4;
					border-top: 1upx solid #EDEDED;
					border-bottom: 1upx solid #EDEDED;

					.top-msg-room-in {
						flex: 1;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						.top-msg-room-msg {
							width: 60upx;
							height: 60upx;
							margin-bottom: 15upx;
						}
					}
				}

				.details-top-msg-introduce {
					padding-top: 30upx;

					.top-msg-introduce-left {
						font-size: 34upx;

						.introduce-icon {
							width: 40upx;
							height: 40upx;
							margin-right: 32upx;
						}
					}

					.top-msg-introduce-right {
						font-size: 24upx;
						color: #999;
					}

				}

			}
		}

		.homestay-details-mid {
			// padding: 0 30upx;
			background-color: #FFF;

			.details-mid-msg-introduce {
				margin: 0 30upx;
				padding-top: 30upx;

				.mid-msg-introduce-left {
					font-size: 34upx;

					.introduce-icon {
						width: 90upx;
						height: 90upx;
						border-radius: 50%;
						background-color: pink;
						margin-right: 32upx;
					}

					.introduce-name {
						.introduce-name-top {
							align-items: center;

							.roomer {
								width: 56upx;
								height: 26upx;
								margin-left: 10upx;

							}
						}

						.introduce-name-btm {
							margin-top: 20upx;
							align-items: center;

							.introduce-name-btm-left {
								font-size: 22upx;
								color: #666;
								align-items: center;
								letter-spacing: 4upx;
								margin-right: 38upx;

								.phone {
									width: 24upx;
									height: 24upx;
									margin-right: 7upx;

								}
							}
						}
					}

				}

				.mid-msg-introduce-right {
					font-size: 24upx;
					color: #999;
				}

			}

			.details-mid-list {
				margin: 0 30upx;
				padding: 0 30upx;
				font-size: 24upx;
				font-weight: bold;
				color: #999;
				margin-top: 30upx;
				padding: 80upx 0;


				.mid-list-title {
					display: block;
					font-size: 34upx;
					color: #303030;
					margin-bottom: 50upx;
				}

				.mid-list-msg {
					padding: 30upx 0;
					border-bottom: 1upx solid #EDEDED;

					.mid-list-msg-top-left {
						font-size: 32upx;
						color: #303030;

						.mid-list-msg-top-left-mag {
							color: #999;
							font-size: 24upx;
							font-weight: normal;
							margin-top: 15upx;

							text:nth-of-type(2n) {
								display: inline-block;
								margin: 0 10upx;
								padding: 0 20upx;
								border-left: 1upx solid #EDEDED;
								border-right: 1upx solid #EDEDED;


							}
						}
					}

					.mid-list-msg-top-right {
						width: 160upx;
						line-height: 60upx;
						color: #fff;
						text-align: center;
						background: #F44336;
						border-radius: 30upx;
						font-weight: normal;
						letter-spacing: 2upx;
					}

					.mid-list-msg-btm {
						color: #F44336;
						font-size: 28upx;
						margin-top: 40upx;
					}
				}

				.mid-list-more {
					text-align: center;
					color: #F44336;
					margin-top: 50upx;

					text {
						font-size: 28upx;
						display: inline-block;
						margin-right: 10upx;
						color: #F44336;
					}
				}
			}

			.details-mid-introduce {
				margin-top: 0;
				padding-top: 0;

				.details-mid-introduce-p {
					background-color: #F6F7F9;
					padding: 47upx 30upx;
					font-size: 26upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: #666;

				}

			}

			.details-mid-service {
				.details-top-msg-room {
					padding: 35upx 0;
					flex: 5;
					flex-wrap: wrap;

					.top-msg-room-in {
						width: 20%;
						// flex: 1;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-bottom: 40upx;

						.top-msg-room-msg {
							width: 60upx;
							height: 60upx;
							margin-bottom: 15upx;
						}
					}
				}
			}

			.details-mid-adress {
				margin: 0;

				.mid-list-title {
					margin: 0 30upx;
				}

				.adress {
					margin: 0;
					margin-top: 30upx;
					padding-top: 30upx;
					height: 400upx;
					background-color: pink;

					.details-top-msg-introduce {
						align-items: flex-start;
						margin: 0 30upx;
						padding: 20upx;
						background-color: #FFF;

						.top-msg-introduce-left {
							align-items: flex-start;
							font-size: 28upx;

							.locationfill-font {
								width: 370upx;
								margin-left: 10upx;

							}

						}

						.top-msg-introduce-right {
							font-size: 24upx;
							color: #4D97FF;
						}

					}

				}
			}

			.details-mid-evelate {
				.top {
					color: #303030;
					font-size: 34upx;
					margin-bottom: 50upx;

					.title-right {
						color: #666;
						font-size: 26upx;
						font-weight: normal;
					}
				}

				.evaluate-msg-in {
					// padding: 30upx;
					font-size: 26upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: #666666;



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

						.head-info-nike {
							color: #303030;
							font-size: 32upx;
							font-weight: 700;

						}

						.head-info-time {
							display: block;
							margin-top: 20upx;
						}
					}

					.evaluate-msg-btm {
						.evaluate-msg-btm-p {
							margin: 40upx 0upx;
							font-size: 26upx;
							letter-spacing: 2upx;
							line-height: 40upx;
							margin-bottom: 20upx;
						}

						.evaluate-msg-btm-pic {
							flex: 4;
							flex-wrap: wrap;

							.evaluate-msg-btm-pic-in {
								width: 22%;
								height: 152upx;
								border-radius: 8upx;
								background-color: red;
								margin-right: 20upx;
							}

							.evaluate-msg-btm-pic-in:nth-of-type(4n) {
								margin-right: 0;
							}
						}

						.evaluate-msg-btm-select {
							margin-top: 60upx;
							color: #333333;

							.details-top-msg-introduce {
								padding: 30upx 0;
								border-top: 1upx solid #EDEDED;

								.top-msg-introduce-left {
									font-size: 34upx;

									.introduce-icon {
										width: 40upx;
										height: 40upx;
										margin-right: 32upx;
									}
								}

								.top-msg-introduce-right {
									font-size: 24upx;
									color: #999;
								}

							}
						}
					}

				}
			}

			.details-mid-goods {

				.goods-list-left {
					width: 180upx;
					height: 180upx;
					border-radius: 4upx;
					background-color: red;
					margin-right: 24upx;
				}

				.goods-list-right {
					// width: 100%;
					flex-direction: column;
					justify-content: space-between;

					// align-items: center;
					.goods-list-right-top {
						.title {
							color: #010101;
							font-size: 30upx;

						}

						.title-msg {
							margin-top: 12upx;

							text {
								display: inline-block;
							}

							text:first-of-type {
								padding: 7upx 10upx;
								color: #F99D0C;
								margin-right: 20upx;
								border: 1upx solid #F99D0C;
							}
						}
					}

					.goods-list-right-btm {
						.red text:last-of-type {
							font-size: 42upx;
						}

					}

				}
			}

			.details-mid-house {
				.scroll-view_H {
					white-space: nowrap;
					width: 100%;
					margin: 0 auto;

					.homestay-list {
						width: 90%;
						display: inline-block;
						border-radius: 8upx 8upx 0upx 0upx;



						.homestay-list-in {
							background-color: #fff;
							// margin: 0 40upx;
							margin-bottom: 30upx;

							.homestay-list-in-pic {
								width: 100%;
								height: 386upx;
								position: relative;

								.homestay-head {
									width: 98upx;
									height: 98upx;
									border-radius: 50%;
									background-color: red;
									position: absolute;
									bottom: -40upx;
									right: 10upx;
									border: 5upx solid #fff;
									box-sizing: border-box;
								}

								.homestay-list-collect {
									padding: 20upx;

									.collect-left {
										width: 160upx;
										line-height: 50upx;
										color: #fff;
										background: #F86A5B;
										border-radius: 25upx;
										text-align: center;

										.text {
											display: inline-block;
											margin-right: 10upx;
										}
									}

									.collect-right {
										width: 54upx;
										height: 54upx;

										image {
											width: 100%;
											height: 100%;
											overflow: hidden;
										}
									}
								}
							}

							.homestay-list-p {
								margin-top: 30upx;
								padding: 0 30upx;

								.homestay-list-title {
									font-size: 34upx;
									color: #303030;
									font-weight: bold;
								}

								.homestay-list-msg {
									margin: 20upx 0 30upx 0;
									font-size: 24upx;
									color: #666;

									.people {
										display: inline-block;
										margin: 0 20upx;
										padding: 0 20upx;
										border-right: 1upx solid #E6E6E6;
										border-left: 1upx solid #E6E6E6;
									}
								}
							}

							.homestay-list-price {
								margin: 0 20upx;
								padding: 0 20upx;
								justify-content: flex-start;
								align-items: center;
								font-weight: bold;
								font-size: 28upx;

								.price {
									display: inline-block;
									color: #F44336;
									margin-right: 20upx;
									font-size: 40upx;
								}

								.price-gray {
									font-weight: normal;
									text-decoration: line-through;

								}

								.homestay-list-price-right {
									margin-left: 47upx;
									font-size: 20upx;
									font-weight: normal;

									.price-right-left,
									.price-right-right {
										display: inline-block;
										padding: 6upx 10upx;
										background-color: #FFEAEA;
										color: #FF6666;
										margin-right: 10upx;
									}

									.price-right-right {
										background-color: #FFF5E0;
										color: #FF9645;
									}

								}

							}
						}
					}



				}

			}
		}

		.homestay-details-fixed {
			width: 100%;
			border-top: 1upx solid #EDEDED;
			height: 96upx;
			position: fixed;
			bottom: 0;
			left: 0;
			color: #666;
			font-size: 22upx;
			background-color: #fff;

			.homestay-details-fixed-left {
				width: 100%;

				.details-fixed-left-left {

					.phone,
					.news {
						margin-top: 10upx;
						flex-direction: column;
						align-items: center;
						margin-right: 60upx;
						margin-left: 32upx;

						.tel {
							width: 40upx;
							height: 40upx;
							margin-bottom: 10upx;
						}
					}

					.news {
						padding-right: 40upx;
						margin-left: 0;
						margin-right: 0;
						
					}
				}

				.price {
					width: 100%;
					flex: 1;
					line-height: 96upx;
					margin: 0 auto;
					text-align: center;
					border-left: 1upx solid #E2E2E2;

					text {
						display: inline-block;
						font-size: 28upx;
						color: #FF575C;
					}
					text:last-of-type{
						font-size:40upx;
					}

				}
			}

			.homestay-details-fixed-right {
				// flex: 1;
				width: 240upx;
				line-height: 96upx;
				color: #fff;
				background-color: #F44336;
				font-size: 30upx;
				text-align: center;

			}
		}



	}
</style>
