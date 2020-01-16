<template>
	<view class="apply-villager">
		<view class="apply-top">
			<view class="apply-top-header background-cover" :style="{backgroundImage:'url(' + info.avatarUrl+ ')'}">
				<!-- :style="{backgroundImage:'url(' + villager_cover+ ')'}" -->
			</view>
			<text>{{info.nickName}}</text>
			<text @tap="watchClick" v-if="msgInfo.doc_jump_type=='1'">查看申请说明</text>
			<text @tap="showModal" data-target="DialogModal1" v-if="msgInfo.doc_jump_type!=='1'">查看申请说明</text>

		</view>
		<view class="apply-mid"></view>


		<view class="cu-form-group margin-top solid-bottom apply-area" @tap="popup_bottom()">
			<view class="title">选择地区</view>
			<view>{{address}}</view>
			<text class="lg text-gray cuIcon-right"></text>
		</view>

		<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback()">
		</linkAddress>

		<view class="padding flex flex-direction " @tap="btmSumbit">
			<button class="cu-btn bg-gray margin-tb-sm lg apply-btm" :class="unbtm?'':'bg-red'">提交申请村管理员</button>
		</view>

		<view class="apply-bom flexs justify-center">
			<view class="apply-bom-check" @tap="uncheck=!uncheck">
				<image :src="uncheck?apply_uncheck:apply_check" mode=""></image>
			</view>
			<view class="">
				<text>我已阅读并同意</text>
				<text class="msg" @tap="showMsg" data-target="DialogModal2">《村管理员协议》</text>
			</view>

		</view>

		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{msgInfo.doc_name}}</view>
				</view>
				<view class="padding-xl" v-html="msgInfo.doc_content">
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-green" @tap="hideModal">知道了</button>

					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{msgInfo.doc_name}}</view>
				</view>
				<view class="padding-xl" v-html="msgInfo.doc_content">
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-green" @tap="hideModal">知道了</button>

					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import '../../../static/common.css'
	import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
	export default {
		components: {
			linkAddress
		},
		data() {
			return {
				uncheck: true,
				apply_check: `${this.$env.img1}apply_check.png`,
				apply_uncheck: `${this.$env.img1}apply_uncheck.png`,
				modalName: null,
				msgInfo: {},
				height: '500px',
				address: '',
				ads: {},
				unbtm: true,
				info: {}
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			showMsg(e) {
				this.modalName = e.currentTarget.dataset.target
				this.msgInit(13)
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			watchClick() {

				uni.navigateTo({
					url: '../../h5/h5?url=' + this.msgInfo.doc_content
				})


			},
			// 查看魅力值说明
			msgInit(type) {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetDocument, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					Type: type
				}).then((res) => {
					if (res.data.flag === 200) {
						that.msgInfo = res.data.data
						console.log(that.msgInfo.doc_content + that.msgInfo.doc_contentdoc_jump_type)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			//点击弹出弹窗
			popup_bottom: function() {
				this.height = '550rpx';
				//显示
				this.show_popup();

			},
			//显示弹窗
			show_popup: function() {
				this.$refs.linkAddress.show();
			},
			//回掉
			confirmCallback: function() {
				this.ads = uni.getStorageSync('commit_address');
				this.address = this.ads.province + this.ads.city + this.ads.district + this.ads.town + this.ads.city + this.ads.village;

			},
			btmSumbit() {
				if (this.address == '') {
					uni.showToast({
						title: '请选择地区',
						icon: 'none'
					});
					return
				} else if (this.uncheck) {
					uni.showToast({
						title: '请勾选村管理员协议',
						icon: 'none'
					});
					return
				} else {
					this.unbtm = false
					let that = this
					that.$request.phpTokenRequest(that.$api.AskforAdmin, that.$api.get, {
						Key: that.$api.Key,
						Client: that.$api.CLIENT,
						Version: that.$api.VERSION,
						VillageID: that.villageId,
						Provice_id: that.ads.Provice_id,
						City_id: that.ads.City_id,
						Area_id: that.ads.Area_id,
						Town_id: that.ads.Town_id,
					}).then((res) => {
						if (res.data.flag === 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
							uni.navigateBack()

						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					});
				}


			}

		},
		onLoad(option) {
			this.userInfo = uni.getStorageSync('userInfo');
			this.$api.Key = this.userInfo.key
			this.villageId = option.villageId;
			this.info = uni.getStorageSync('dataInfo')
			this.msgInit(12)
		}
	}
</script>

<style lang="less" scoped>
	.apply-villager {
		font-size: 32upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #303030;

		.apply-top {
			padding-top: 62upx;

			.apply-top-header {
				width: 150upx;
				height: 150upx;
				border-radius: 50%;
				background-color: pink;
				margin: 0 auto;
			}

			text {
				display: block;
				text-align: center;
				font-weight: bold;
				font-size: 42upx;
				margin: 40upx 0 60upx 0;
			}

			text:last-child {
				color: #F63333;
				font-size: 32upx;
				font-weight: normal;
				margin: 0;
			}

		}

		.apply-mid {
			height: 30upx;
			background: #F5F5F5;
			margin-top: 60upx;
		}

		.apply-area {
			.title {
				min-width: 136upx;
				padding-right: 0;
				position: static;
				height: 0;
				line-height: 0;

			}

		}

		.apply-btm {
			color: #fff;
		}

		.apply-bom {

			// margin: 0 auto;
			// text-align: center;
			.apply-bom-check {
				width: 26upx;
				height: 26upx;
				margin-right: 1upx;

				image {
					width: 100%;
					height: 100%;

				}
			}

			.msg {
				color: #576B95;
			}
		}

	}
</style>
