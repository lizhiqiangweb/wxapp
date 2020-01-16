<template>
	<view class="order-list">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>

		<view class="order-list-list" v-for="(item,index) in orderInfo" :key="index">
			<view class="order-list-top flexs justify-between">
				<view class="flexs order-list-top-left">
					<text class="lg text-gray cuIcon-timefill"></text>
					<text class="time">{{item.order_time}}</text>
				</view>
				<text class="flexs order-list-top-right" :class="item.order_state==40?'change':''">{{item.order_state==10?payFont:item.order_state==20?'已付款':item.order_state==40?'已完成':'已取消'}}</text>
			</view>
			<view class="order-list-mid flexs">
				<view class="order-list-mid-left background-cover" :style="{backgroundImage:'url(' + item.product_image+ ')'}">
				</view>
				<view class="order-list-mid-right">
					<text class="order-list-mid-title">{{item.product_name}}</text>
					<view class="order-list-mid-msg">
						<view class="order-list-mid-msg-top">
							<text class="lg text-gray cuIcon-location"></text>
							<text class="location">{{item.location}}</text>
						</view>
						<view class="order-list-mid-msg-top">
							<text class="lg text-gray cuIcon-calendar"></text>
							<text class="location">{{item.use_time}}</text>
						</view>
						<view class="order-list-mid-msg-total">
							<text>{{item.product_info}}</text>
							<text class="total">实付款:<text class="total-in">¥{{item.pay_money}}</text></text>
						</view>
						<view class="order-list-mid-msg-btm flexs">
							<view class="btm" @tap="modalClick(item.order_type,item.order_id,item.order_state)" v-if="item.order_state==10||item.order_state==20">
								取消订单
							</view>
							<view class="btm btn-discuss" v-if="item.order_state==40" >
								点评
							</view>
							<view class="btm btn-discuss" v-if="item.order_state==30" @tap="modalClick(item.order_type,item.order_id,item.order_state)">
								删除
							</view>
							<view class="btm btm-apply" v-if="item.order_state==10">
								立即支付
							</view>
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
				TabCur: 0,
				scrollLeft: 0,
				value: '0',
				nav: [{
						name: '待付款'
					},
					{
						name: '待消费'
					},
					{
						name: '待点评'
					}, {
						name: '退款/售后'
					},
				],
				PageIndex: 1,
				PageSize: 10,
				OrderState: 0,
				orderInfo: [],
				payFont: '待付款'
			};
		},
		methods: {
			modalClick(orderType, orderId,order_state) {
				uni.showModal({
					// title: '提示',
					content: '确定需要取消吗?',
					success: res => {
						if (res.confirm) {
							if(order_state==10||order_state==20){
								this.cancelOrder(orderType, orderId)
							}else if(order_state==30){
								this.deleteOrder(orderType, orderId)
							}
							
						} else if (res.cancel) {
							console.log('用户点击取消');

						}
					}
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if (e.currentTarget.dataset.id == "1") {
					this.value = '1'

				} else if (e.currentTarget.dataset.id == "0") {
					this.value = '0'
					this.OrderState = 10,
					this.orderInit(this.OrderState)
				} else if (e.currentTarget.dataset.id == "2") {
					this.value = '2'
				}
			},
			orderInit(OrderState) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getOrderList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					// OrderState:OrderState
				}).then((res) => {
					if (res.data.flag === 200) {
						that.orderInfo = res.data.data.data_list
						// console.log(that.orderInfo)
					}
				});
			},
			cancelOrder(orderType, orderId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.cancelOrder, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					orderType: orderType,
					orderId: orderId,
				}).then((res) => {
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
			deleteOrder(orderType, orderId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.deleteOrder, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
					orderType: orderType,
					orderId: orderId,
				}).then((res) => {
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.orderInit(10)
		}
	}
</script>

<style lang="less" scoped>
	.order-list {
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;

		.order-list-list {
			margin: 30upx;
			padding: 25upx;
			background-color: #fff;

			.order-list-top {
				padding-bottom: 30upx;
				border-bottom: 1upx solid #EEEEEE;
				color: #ABABAB;

				.order-list-top-left {
					justify-content: center;
					align-items: center;

					.text-gray,
					.line-gray,
					.lines-gray {
						color: #DADADA;
					}

					.time {
						display: inline-block;
						margin-left: 17upx;
					}
				}

				.order-list-top-right {
					color: #FD784A;
				}

				.change {
					color: #ABABAB
				}

			}

			.order-list-mid {
				margin: 35upx 0;
				margin-bottom: 20upx;
				border-radius: 20upx;
				justify-content: space-between;

				.order-list-mid-left {
					width: 100upx;
					height: 100upx;
					margin-right: 20upx;
					border-radius: 4upx;
					// background-color: pink;
				}

				.order-list-mid-right {
					width: 498upx;
					flex: 1;
					font-size: 30upx;
					color: #333333;
					font-weight: bold;

					.order-list-mid-title {
						height: 70upx;
						display: block;

					}

					.order-list-mid-msg {
						margin-top: 35upx;
						border-top: 1upx solid #EEEEEE;

						.order-list-mid-msg-top {
							margin-top: 40upx;
							color: #999;

							.location {
								margin-left: 17upx;
							}
						}

						.order-list-mid-msg-total {
							text-align: right;
							margin: 40upx 0;

							.total {
								margin-left: 20upx;

								.total-in {
									display: inline-block;
									margin-left: 10upx;
								}
							}
						}

						.order-list-mid-msg-btm {
							justify-content: flex-end;

							.btm {
								width: 180upx;
								line-height: 68upx;
								text-align: center;
								border: 1upx solid #ABABAB;
								border-radius: 34upx;
								color: #666;
							}

							.btn-discuss {
								color: #F5554A;
								border: 1upx solid #F5554A;
							}

							.btm-apply {
								background-color: #F5554A;
								color: #FFF;
								margin-left: 20upx;
								border: none;
							}
						}

					}

				}
			}
		}
	}
</style>
<style>
	page {
		background-color: #F5F5F5 !important;
	}
</style>
