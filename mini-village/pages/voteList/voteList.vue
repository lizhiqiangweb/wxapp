<template>
	<view class="index">
		<!-- image s -->
		<view class="index-banner background-cover" :style="{backgroundImage:'url(' + voteInfo.top_img_url+ ')'}">
		</view>
		<!-- image e -->

		<!-- 搜索框 s -->
		<view class="cu-bar bg-white search index-search">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="搜一搜你自己的美丽家乡" confirm-type="search" @input="search" @focus="nameSearch"></input>
			</view>
		</view>
		<!-- 搜索框 e -->

		<!-- 乡村魅力榜 s-->
		<view class="index-first">
			<view class="cu-form-group flexs justify-between">
				<view class="index-first-top-left flexs justify-start ">
					<text class="image-first background-cover" :style="{backgroundImage:'url(' + village_2+ ')'}"></text>
					<text>乡村魅力榜</text>

				</view>
				<view class="index-first-top-right" @tap="showModal" data-target="DialogModal1">
					<text>查看魅力值说明</text>
				</view>

			</view>

			<view class="index-first-list" v-for="(item,index) in voteInfo.sp_village_ranking_view_list" :key="index">
				<view class="index-first-list-top">
					<text class="list-top-num">第{{item.rank}}名</text>
					<text class="list-top-title">{{item.address}}</text>
				</view>
				<view class="index-first-list-btm flexs index-first-list-btm">
					<view class="list-btm-banner background-cover" :style="{backgroundImage:'url(' + item.img_url + ')'}">
						<view class="msg">
							TOP {{item.rank}}
						</view>
					</view>
					<view class="list-btm-right flexs">
						<view class="list-btm-right-top flexs justify-center">
							<view class="enter" @tap="enterVillage(item.village_id)">进入本村</view>
							<view class="vote" @tap="voteClick(item.village_id)" :class="item.is_vote=='1'?'.gray':'' ">{{item.is_vote=='1'?'已投票':'投票'}}</view>
						</view>
						<view class="list-btm-right-btm">
							<view class="">
								<text class="name">村庄魅力值：</text>
								<text>{{item.village_charm_value}}</text>
							</view>
							<view class="list-btm-right-btm-in">
								<text class="name">总投票数：</text>
								<text>{{item.vote_num}}</text>
							</view>
						</view>
					</view>
				</view>

			</view>



		</view>
		<!-- 乡村魅力榜 e-->
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

	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				village_2: `${this.$env.img1}village_2.png`,
				longitude: '',
				latitude: '',
				pageIndex: 1,
				pageSize: 10,
				voteInfo: {},
				modalName: null,
				radio: 'radio1',
				cuIcon: [{
					name: 'appreciate',
					isShow: true
				}, {
					name: 'check',
					isShow: true
				}],
				bannerPic: "",
				indexInfo: {},
				msgInfo: {}
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			villageClick() {
				console.log('他乡')
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			nameSearch(){
				uni.navigateTo({
					url: "../serch/serch"
				})
			},

			// 查看魅力值说明
			msgInit() {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetDocument, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					Type: 37
				}).then((res) => {
					if (res.data.flag === 200) {
						that.msgInfo = res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			//搜索框
			searchIcon(e) {
				let key = e.detail.value.toLowerCase();
				let list = this.cuIcon;
				for (let i = 0; i < list.length; i++) {
					let a = key;
					let b = list[i].name.toLowerCase();
					if (b.search(a) != -1) {
						list[i].isShow = true
					} else {
						list[i].isShow = false
					}
				}
				this.cuIcon = list
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			//获取经纬度 ，获取区域id
			getLocation(e) {
				let that = this;
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						that.latitude = res.latitude;
						that.longitude = res.longitude;
						that.$request.httpTokenRequest(that.$api.currentCity, that.$api.get, {
							latitude: that.latitude,
							longitude: that.longitude,
							key: that.$api.Key,
							Client: that.$api.CLIENT,
							Version: that.$api.VERSION,
							searchType: 1,
						}).then((res) => {
							if (res.data.flag === 200) {
								that.getVoteList(that.latitude, that.longitude)
							} else {}
						});
					}
				});
			},
			//投票列表接口
			getVoteList(latitude, longitude) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getSmallProceduresIndex, that.$api.get, {
					latitude: latitude,
					longitude: longitude,
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					pageIndex: that.pageIndex,
					pageSize: that.pageSize,
				}).then((res) => {
					console.log(res.data.data)
					if (res.data.flag === 200) {
						that.voteInfo = res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			//进入本村
			enterVillage(id){
				uni.navigateTo({
					url: "../details/details?villageId=" + id + "&longitude=" + this.longitude + "&latitude=" + this.latitude
				})
			},
			//投票
			voteClick(id) {
				// uni.showModal({
				// 	// title: '提示',
				// 	content: '请确认是否给该村投票',
				// 	success: function(res) {
				// 		if (res.confirm) {
				// 			this.votes(id)
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消');
				// 		}
				// 	}
				// });
				this.votes(id)

			},
			//点击投票
			votes(id) {
				this.$request.httpTokenRequest(this.$api.addVillageVoteNum, this.$api.get, {
					Key: this.$api.Key,
					Client: this.$api.CLIENT,
					Version: this.$api.VERSION,
					latitude: this.latitude,
					longitude: this.longitude,
					areaId: id,
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
						this.getLocation()
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},

		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.getLocation()
			this.msgInit()
		},

	}
</script>

<style lang="less" scoped>
	.index {
		.index-banner {
			height: 420upx;
			// background-color: pink;
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
					// color: #2EA994;
					margin-bottom: 50upx;

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

				.index-first-top-right {
					color: #F44336;
					font-size: 28upx;
					font-weight: normal;
				}
			}

			.index-first-list {
				padding: 0 30upx;
				margin-bottom: 40upx;

				.index-first-list-top {
					font-size: 36upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: #303030;
					margin-bottom: 40upx;

					.list-top-num {
						display: inline-block;
						margin-right: 32upx;

					}

					.list-top-title {
						font-size: 28upx;
					}
				}

				.index-first-list-btm {

					.list-btm-banner {
						width: 280upx;
						height: 186upx;
						position: relative;
						flex: 1;
						margin-right: 30upx;

						.msg {
							width: 78upx;
							line-height: 36upx;
							text-align: center;
							color: #fff;
							font-size: 23upx;
							background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
							border-radius: 18upx 4upx 18upx 4upx;
							position: absolute;
							top: -5%;
							left: 0;
						}

						.active {
							background: #ABABAB;
						}

					}

				}

				.list-btm-right {
					flex-direction: column;
					justify-content: space-between;

					.list-btm-right-top {
						.enter {
							width: 240upx;
							line-height: 60upx;
							text-align: center;
							background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
							border-radius: 4upx;
							margin-right: 20upx;
							color: #FFF;
						}

						.vote {
							width: 120upx;
							line-height: 60upx;
							text-align: center;
							background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
							border-radius: 4upx;
							color: #FFF;
						}
						
						.gray {
							background: #ABABAB;
						}
					}

					.list-btm-right-btm {
						color: #303030;
						font-weight: 700;

						.name {
							display: inline-block;
							margin-right: 10upx;
							color: #666;
						}

						.list-btm-right-btm-in {
							margin-top: 27upx;
						}
					}
				}

			}


		}

	}
</style>
