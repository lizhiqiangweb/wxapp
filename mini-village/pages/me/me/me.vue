<template>
	<view class="me">
		<view class="top">
			<view class="me-top flexs">
				<view class="me-top-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + memberInfo.member_head+ ')'}"></text>
					<!-- :style="{backgroundImage:'url(' + news+ ')'}" -->
					<view class="head-info">
						<view class="head-info-name" @tap="nameClick(memberInfo.member_nickname)">
							<text class="head-info-nike">{{memberInfo.member_nickname}}</text>
						</view>
						<text class="head-info-time" @tap='editClick(memberInfo.member_nickname,memberInfo.member_head)'>点击编辑个人信息</text>
					</view>
				</view>
				<view class="me-top-right background-cover" :style="{backgroundImage:'url(' + meMsg+ ')'}" v-if="memberInfo.has_UnMessage==1"
				 @tap="newsClick">
					<text class="me-top-right-in"></text>
				</view>
			</view>
			<view class="me-bottom flexs justify-between">
				<view class="me-bottom-in flexs" v-for="(item,index) in top" :key="index" @tap="friendClick(item.id)">
					<text>{{item.num}}</text>
					<text>{{item.p}}</text>
				</view>

			</view>
		</view>

		<view class="middle">
			<text class="middle-title">我的订单</text>
			<view class="me-bottom flexs justify-between">
				<view class="me-bottom-in flexs" v-for="(item,index) in order" :key="index" @tap="orderClick">
					<text class="background-cover first" :style="{backgroundImage:'url(' + item.img+ ')'}">
						<text class="first-in" v-show="item.id=='1'&&item.num>0||item.id=='2'&&item.num>0||item.id=='3'&&item.num>0">{{item.num}}</text>
					</text>
					<text class="second">{{item.p}}</text>
				</view>
			</view>
		</view>

		<view class="middle">
			<text class="middle-title">常用功能</text>
			<view class="me-bottom flexs justify-between">
				<view class="me-bottom-in flexs" v-for="(item, index) in funList" :key="index" @tap="funClick(item.id)">
					<text class="background-cover first" :style="{backgroundImage:'url(' + item.img + ')'}"></text>
					<text class="second">{{item.p}}</text>
				</view>
			</view>
		</view>
		<view class="middle middle-service">
			<text class="middle-title">更多服务</text>
			<view class="me-bottom flexs justify-between" v-if="memberInfo.is_admin_village=='1'">
				<!-- v-if="memberInfo.is_admin_village=='1'" -->
				<view class="me-bottom-in flexs" v-for="(item,index) in service" :key="index" @tap="moreClick(item.id)">
					<text class="background-cover first" :style="{backgroundImage:'url(' + item.img+ ')'}"></text>
					<text class="second">{{item.p}}</text>
					<view class="me-bottom-in-msg">
						{{item.msg}}
					</view>
				</view>
			</view>

				<view class="me-bottom flexs justify-between" v-if="memberInfo.is_admin_village =='0'">
				<view class="me-bottom-in flexs" v-for="(item,index) in serviceTwo" :key="index" @tap="moreClick(item.id)">
					<text class="background-cover first" :style="{backgroundImage:'url(' + item.img+ ')'}"></text>
					<text class="second">{{item.p}}</text>
					<view class="me-bottom-in-msg">
						{{item.msg}}
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
				meMsg: `${this.$env.img1}me-msg.png`,
				memberInfo: {},
				name: '',
				head: '',
				top: [{
						'p': '我的动态',
						'num': 0,
						'id': '1',
					},
					{
						'p': '我的关注',
						'num': 0,
						'id': '2',
					},
					{
						'p': ' 我的粉丝',
						'num': 0,
						'id': '3',
					}
				],
				order: [{
						'img': `${this.$env.img1}me-icon-1@2x.png`,
						'p': '待付款',
						'id': '1',
						'num': 0,
					},
					{
						'img': `${this.$env.img1}me-icon-2@2x.png`,
						'p': '待消费',
						'id': '2',
						'num': 0,
					},
					{
						'img': `${this.$env.img1}me-icon-3@2x.png`,
						'p': ' 待点评',
						'id': '3',
						'num': 0,
					},
					{
						'img': `${this.$env.img1}me-icon-4@2x.png`,
						'p': ' 退款/售后',
						'id': '4'
					}
				],
				funList: [{
						img: `${this.$env.img1}me-icon-01@2x.png`,
						p: '我的故里',
						id: '1'
					},
					{
						img: `${this.$env.img1}me-icon-02@2x.png`,
						p: '我的发布',
						id: '2'
					},
					{
						img: `${this.$env.img1}me-icon-03@2x.png`,
						p: ' 我的贡献值',
						id: '3'
					},
					{
						img: `${this.$env.img1}me-icon-04@2x.png`,
						p: ' 邀请好友',
						id: '4'
					}
				],
				service: [{
						'img': `${this.$env.img1}me-icon-05@2x.png`,
						'p': '信息管理',
						'id': '1',
						'msg': ''
					},
					{
						'img': `${this.$env.img1}me-icon-06@2x.png`,
						'p': '我是村管理',
						'id': '2',
						'msg': ''
					},
					{
						'img': `${this.$env.img1}me-icon-07@2x.png`,
						'p': ' 我是房主',
						'id': '3',
						'msg': '发布房源'

					},
					{
						'img': `${this.$env.img1}me-icon-08@2x.png`,
						'p': ' 我是商户',
						'id': '4',
						'msg': '发布景点农家乐',
						// 发布景点/农家乐

					},
					{
						'img': `${this.$env.img1}me-icon-09@2x.png`,
						'p': ' 联系客服',
						'id': '5',
						'msg': ''

					}
				],
				serviceTwo: [{
						'img': `${this.$env.img1}me-icon-05@2x.png`,
						'p': '信息管理',
						'id': '1',
						'msg': ''
					},
					{
						'img': `${this.$env.img1}me-icon-07@2x.png`,
						'p': ' 我是房主',
						'id': '3',
						'msg': '发布房源'

					},
					{
						'img': `${this.$env.img1}me-icon-08@2x.png`,
						'p': ' 我是商户',
						'id': '4',
						'msg': '发布景点农家乐',
						// 发布景点/农家乐

					},
					{
						'img': `${this.$env.img1}me-icon-09@2x.png`,
						'p': ' 联系客服',
						'id': '5',
						'msg': ''

					}
				],

			}
		},
		methods: {
			newsClick() {
				uni.navigateTo({
					url: '../../meInfo/newsList/newsList'
				})
			},
			nameClick(id) {
				uni.navigateTo({
					url: '../../meInfo/nikeName/nikeName?name=' + id
				})
			},
			memberInit() {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetMemberInfo, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.memberInfo = res.data.data
						that.head = that.memberInfo.member_head
						that.name = that.memberInfo.member_nickname
						// console.log('222', that.memberInfo)
						that.order[0].num = that.memberInfo.order_count_pay
						that.order[1].num = that.memberInfo.order_count_checkin
						that.order[2].num = that.memberInfo.order_count_end
					}
					console.log('人物信息', res)
					uni.setStorage({
						key: 'memberInfo',
						data: res.data.data
					})
				});

			},
			friendClick(id) {
				if (id == '1') {
					uni.navigateTo({
						url: '../../homePage/myHomePage?member_id=' + this.memberInfo.member_id + '&memberName=' + this.memberInfo.member_name
					})
				} else if (id == '2') {
					uni.navigateTo({
						url: '../../meInfo/attention/attention'
					})
				} else if (id == '3') {
					uni.navigateTo({
						url: '../../meInfo/fans/fans'
					})
				}

			},
			editClick(id, head) {
				uni.navigateTo({
					url: '../../meInfo/personInfo/personInfo?name=' + id + '&head=' + head
				})
			},
			fansInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getFansNum, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.top[0].num = res.data.data.my_dynamic_count
						that.top[1].num = res.data.data.attention_num
						that.top[2].num = res.data.data.fans_num
					}
				});

			},
			orderClick() {
				uni.navigateTo({
					url: '../../order/orderList/orderList'
				})

			},
			funClick(id) {
				if (id == '1') {
					let that = this
					if (that.memberInfo.is_villager == '1') {
						uni.navigateTo({
							url: '../../details/details?villageId=' + that.memberInfo.village_id
						})
					} else {
						uni.navigateTo({
							url: '../../serch/serch'
						})
					}
				} else if (id == '2') {
					uni.navigateTo({
						url: '../../homePage/myHomePage?member_id=' + this.memberInfo.member_id + '&memberName=' + this.memberInfo.member_name
					})
				} else if (id == '3') {
					uni.navigateTo({
						url: '../../ranking/ranking?villageId=' + this.memberInfo.village_id,

					})
				} else if (id == '4') {
					uni.navigateTo({
						url: '../../share/share?url='+'me/me/me',
					})
				}

			},
			moreClick(id) {
				let urls='https://m.ncweilv.com/h5/cooperation/publicity.html'
				if (id == '1') {
					uni.navigateTo({
						url: '../../meInfo/personInfo/personInfo?name=' + this.name + '&head=' + this.head
					})
				} else if (id == '2') {
					uni.navigateTo({
						url: '../../villageSet/villageManager/villageManager'
					})

				} else if (id == '3') {
				
					uni.navigateTo({
						url: '../../h5/h5?url=' + urls
					})
					

				}else if (id == '4') {
				
					uni.navigateTo({
						url: '../../h5/h5?url=' + urls
					})
					

				}else if (id == '5') {
					uni.makePhoneCall({
						phoneNumber: '0731-84788888' 
					});
				}
			}
		},

		onShow() {
			this.userInfo = uni.getStorageSync('userInfo');
			this.$api.Key = this.userInfo.key;
			console.log('key', this.$api.Key)
			if (this.$api.Key !== undefined) {
				this.memberInit();
				this.fansInit()
			} else {
				uni.navigateTo({
					url: '../../login/login'
				})
			}

		}

	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}
</style>
<style lang="less" scoped>
	.me {
		font-size: 26upx;
		font-family: PingFang-SC-Regular;
		color: #666;

		.top {
			padding: 62upx 30upx 40upx 30upx;
			background-color: #fff;
			margin-bottom: 20upx;

			.me-top {
				justify-content: space-between;
				align-items: flex-start;
				margin-bottom: 60upx;

				.me-top-left {
					justify-content: flex-start;
					align-items: center;

					.head-pic {
						display: block;
						width: 150upx;
						height: 150upx;
						border-radius: 50%;
						margin-right: 20upx;

					}

					.head-info-nike {
						color: #303030;
						font-size: 42upx;
						font-weight: 700;

					}

					.head-info-time {
						display: block;
						margin-top: 20upx;
					}
				}

				.me-top-right {
					width: 40upx;
					height: 40upx;
					margin-top: 30upx;
					position: relative;

					.me-top-right-in {
						display: block;
						width: 12upx;
						height: 12upx;
						background: #F44336;
						border-radius: 50%;
						position: absolute;
						top: -5upx;
						right: -3upx;
					}

				}
			}

			.me-bottom {
				.me-bottom-in {
					width: 33.33%;
					flex-direction: column;
					align-items: center;

					text {
						display: block;
					}

					text:first-of-type {
						margin-bottom: 20upx;
						font-size: 42upx;
						color: #303030;
					}
				}
			}
		}

		.middle {
			background-color: #fff;
			padding: 87upx 30upx 0 30upx;

			.middle-title {
				display: block;
				font-size: 34upx;
				color: #303030;
				font-weight: 700;
				margin-bottom: 50upx;
			}

			.me-bottom {
				flex-wrap: wrap;

				.me-bottom-in {
					width: 25%;
					flex-direction: column;
					align-items: center;
					margin-bottom: 80upx;
					position: relative;

					.first,
					.second {
						display: block;
					}

					.first {
						width: 60upx;
						height: 60upx;
						margin-bottom: 25upx;
						font-size: 42upx;
						color: #303030;
						position: relative;

						.first-in {
							padding: 7upx 10upx;
							border-radius: 50%;
							font-size: 26upx;
							color: #fff;
							background-color: #F44336;
							position: absolute;
							right: -15upx;
							top: -17upx;
						}
					}

					// .second{
					// 	// margin-bottom: 26upx;
					// }
					.me-bottom-in-msg {
						padding: 10upx 20upx;
						text-align: center;
						border-radius: 20upx;
						color: #F29612;
						position: absolute;
						bottom: -76upx;
						right: 22upx;
					}
				}
			}
		}

		.middle-service {}



	}
</style>
