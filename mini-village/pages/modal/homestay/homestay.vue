<template>
	<view class="homestay">
		<view class="homestay-no" v-if="isHomestay">
			<view class="homestay-no-in background-cover" :style="{backgroundImage:'url(' + no_homestay+ ')'}">
			</view>
			<view class="login-btm">
				登录
			</view>
		</view>
		<view class="homestay-in">
			<!-- 顶部搜索 s -->
			<view class="box">
				<view class="cu-bar search bg-white">
					<view class="action">
						<text>广州</text>
						<text class="cuIcon-triangledownfill"></text>
					</view>
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="输入民宿名称、地区搜索"
						 confirm-type="search"></input>
					</view>
					<view class="search-p">搜索</view>
				</view>
			</view>
			<!-- 顶部搜索 e -->

			<!-- 条件筛选 s-->
			<view class="homestay-select flexs justify-between">
				<view class="homestay-select-in flexs">
					<picker @change="PickerChange" :value="index" :range="picker">
						<view>
							{{index>-1?picker[index]:'预定时间'}}
						</view>
					</picker>
					<view class="cuIcon-triangledownfill">
					</view>
				</view>
				<view class="homestay-select-in flexs">
					<picker @change="PickerChange" :value="index" :range="picker">
						<view>
							{{index>-1?picker[index]:'价格'}}
						</view>
					</picker>
					<view class="cuIcon-triangledownfill">
					</view>
				</view>
				<view class="homestay-select-in flexs">
					<picker @change="PickerChange" :value="index" :range="picker">
						<view>
							{{index>-1?picker[index]:'筛选'}}
						</view>
					</picker>
					<view class="cuIcon-triangledownfill">
					</view>
				</view>


			</view>
			<!-- 条件筛选 e-->

			<view class="homestay-list">
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


		</view>

	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				no_homestay: `${this.$env.img1}no_homestay@2x.png`,
				homestay_red: `${this.$env.img1}homestay_red.png`,
				homestay_gray: `${this.$env.img1}homestay_gray.png`,
				isHomestay: false,
				isCollect: false,
				InputBottom: 0,
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],

			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}
</style>

<style lang="less" scoped>
	.homestay {
		width: 100%;
		min-height: 100%;
		font-family: PingFang-SC-Medium;
		font-weight: 500;

		.homestay-no {
			.homestay-no-in {
				width: 436upx;
				height: 390upx;
				margin: 0 auto;
				margin-top: 150upx;
			}

			.login-btm {
				width: 85%;
				Line-height: 88upx;
				text-align: center;
				font-size: 34upx;
				margin: 0 auto;
				color: #F63333;
				border: 1upx solid #F63333;
				border-radius: 10upx;
				margin-top: 160upx;
				margin-bottom: 50upx;

			}


		}

		.homestay-in {
			padding-bottom: 30upx;
			.box {
				background-color: #fff;
				// margin: 20upx 0 46upx 0;
				padding: 0 40upx;

				.search-p {
					color: #F44336;
				}

				.cu-bar .action:first-child {
					margin-left: 0upx;
				}

			}

			.homestay-select {
				background-color: #fff;
				padding: 46upx 40upx 26upx 40upx;

				.homestay-select-in {
					justify-content: center;
					flex: 1;
					text-align: center;
					font-size: 26upx;

				}

				.homestay-select-in:nth-of-type(2) {
					border-right: 1upx solid #E6E6E6;
					border-left: 1upx solid #E6E6E6;
				}

				// .homestay-select-in:first-of-type{
				// 	justify-content: flex-start;
				// }
				// .homestay-select-in:last-of-type{
				// 	justify-content: flex-end;
				// }

			}

			.homestay-list {
				padding-top: 30upx;
				border-radius: 8upx 8upx 0upx 0upx;

				.homestay-list-in {
					background-color: #fff;
					margin: 0 40upx;
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
						font-size:28upx;
						.price{
							display: inline-block;
							color: #F44336;
							margin-right: 20upx;
							font-size:40upx;
						}
						.price-gray{
							font-weight:normal;
							text-decoration:line-through;

						}
						.homestay-list-price-right{
							margin-left: 47upx;
							font-size: 20upx;
							font-weight: normal;
							.price-right-left,.price-right-right{
								display: inline-block;
								padding: 6upx 10upx;
								background-color: #FFEAEA;
								color: #FF6666;
								margin-right: 10upx;
							}
							.price-right-right{
								background-color: #FFF5E0;
								color: #FF9645;
							}
							
						}

					}
				}
			}


		}

	}
</style>
