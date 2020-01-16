<template>
	<view class="index">
		<!-- image s -->
		<view class="index-banner background-cover" :style="{backgroundImage:'url(' + bannerPic+ ')'}">
		</view>
		<!-- image e -->

		<!-- 搜索框 s -->
		<view class="cu-bar bg-white search index-search">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="搜一搜你自己的美丽家乡" confirm-type="search" @focus="search"></input>
			</view>
		</view>
		<!-- 搜索框 e -->

		<!-- 归故里 s-->
		<view class="index-first">
			<view class="cu-form-group flexs justify-between">
				<view class="index-first-top-left flexs justify-start ">
					<text class="image-first background-cover" :style="{backgroundImage:'url(' + village_1+ ')'}"></text>
					<text>归故里</text>
					<text class="image-second background-cover" :style="{backgroundImage:'url(' + village_font2+ ')'}"></text>
				</view>
				<!-- <view class="index-first-top-right">
					<text>111</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view> -->
			</view>
			<view class="index-first-banner background-cover" :style="{backgroundImage:'url(' + villager + ')'}" v-if="indexInfo.my_village==0" @tap="search">
			</view>
			<view class="index-first-banner background-cover" :style="{backgroundImage:'url(' + villagerBg + ')'}" v-if="indexInfo.my_village!==0"
			 @tap="detailsClick">
				<view class="index-first-left">
					<text>{{indexInfo.village_name}}</text>
					<view class="">{{indexInfo.village_address}}</view>
				</view>
				<view class="index-first-right">
					<text>点击回村</text>
				</view>
			</view>

		</view>
		<!-- 归故里 e-->
		
		<view class="details-list" v-if="indexInfo.my_village!==0">
			<view class="details-list-in" v-for="(item,index) in indexInfo.menu_view_list" :key="index" @tap="listClick(item.id)">
				<view class="details-list-icon background-cover" :style="{backgroundImage:'url(' + item.icon+ ')'}">
					<view class="details-num" v-if="item.un_read_number!==0">
						{{item.un_read_number}}
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 乡村魅力榜 s -->
		<view class="index-first index-second">
			<view class="cu-form-group flexs justify-between">
				<view class="index-first-top-left flexs justify-start ">
					<text class="image-first background-cover" :style="{backgroundImage:'url(' + village_2+ ')'}"></text>
					<text>乡村魅力榜</text>
				</view>
				<view class="index-first-top-right" @tap="voteList">
					<text>查看排行榜</text>
					<text class="lg cuIcon-right"></text>
				</view>

			</view>

			<view class="index-second-banner">
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" v-for="(item,index) in indexInfo.sp_village_ranking_view_list" :key="index" @tap="voteClick(item.village_id)">
						<view class="scroll-view-item_image">
							<image :src="item.img_url" mode=""></image>
						</view>
						<view class="scroll-view-item_title" style="color: #303030;">{{item.address}}</view>
						<view class="scroll-view-item_ranking">总票数：<text>{{item.vote_num}}</text></view>
						<view class="scroll-view-item_btm" :class="item.is_vote=='1'?'isgray':''" @tap.stop="vote(item.village_id)">
							{{item.is_vote=='0'?'投票':'已投'}}
						</view>
						<view class="index-second-tips">
							TOP{{item.rank}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 乡村魅力榜 e -->

		<!-- 游他乡 s -->
		<view class="index-first index-second index-third">
			<view class="cu-form-group flexs justify-between">
				<view class="index-first-top-left flexs justify-start ">
					<text class="image-first background-cover" :style="{backgroundImage:'url(' + village_3+ ')'}"></text>
					<text>游他乡</text>
					<text class="image-second background-cover" :style="{backgroundImage:'url(' + village_font1+ ')'}"></text>
				</view>
				<view class="index-first-top-right">
					<text @click="moreGoTo()">更多</text>
					<text class="lg cuIcon-right"></text>
				</view>
			</view>

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
		<!-- 游他乡 e -->


		<!-- 热门有趣的乡村风采 s -->
		<view class="index-four">
			<view class="index-four-title">
				<text>热门有趣的乡村风采</text>
				<text>感受独特的民俗风情，体验不同的乡村乐趣</text>
			</view>
			<mescroll-uni class="uni-list" @down="downCallback" @up="upCallback" @init="mescrollInit" :fixed='false'>
				<view class="information-in" v-for="(item,index) in beautyInfo" :key="index" @click="pagesClick(item.info_id)">
					<view class="info-pic background-cover" :style="{backgroundImage:'url(' + item.info_img+ ')'}">
						<!-- :style="{backgroundImage:'url(' + relateBg+ ')'}" -->
					</view>
					<view class="info-btm">
						<text class="information-first font-28">{{item.info_title}}</text>
						<view class="information-second font-28">{{item.info_content}}</view>
						<view class="information-some font-24 flexs justify-between">
							<view class="information-some-left">
								<text class="some-left-p">{{item.lable}}</text>
								<text>
									{{item.add_time}}
								</text>
							</view>
							<view class="information-some-right">
								<text class="some-right-p color">{{item.info_click_num}}</text><text>浏览</text>
								<text class="some-right-p child color">{{item.comment_num}}</text><text>回复</text>
							</view>

						</view>
					</view>

				</view>
			</mescroll-uni>
		</view>
		<!-- 热门有趣的乡村风采 e -->
	</view>
</template>

<script>
	import '../../static/common.css'
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	export default {
		components: {
			MescrollUni
		},
		data() {
			return {
				village_1: `${this.$env.img1}village_1.png`,
				village_2: `${this.$env.img1}village_2.png`,
				village_3: `${this.$env.img1}village_3.png`,
				village_font2: `${this.$env.img1}village_font2.png`,
				village_font1: `${this.$env.img1}village_font1.png`,
				villager: `${this.$env.img1}village_banner@2x.png`,
				villagerBg: require('../../static/img/villagerBg.png'),
				village_con_02: `${this.$env.img1}village_con_02@2x.png`,
				ivillage_message: `${this.$env.img1}ivillage_message@2x.png`,
				village_icon_04: `${this.$env.img1}village_icon_04@2x.png`,
				isVillager: true,
				isRanking: true,
				longitude: 0,
				latitude: 0,
				area_id: '',
				cuIcon: [{
					name: 'appreciate',
					isShow: true
				}, {
					name: 'check',
					isShow: true
				}],
				list: [{
						img: `${this.$env.img1}icon_01@2x.png`,
						font: '村景'
					},
					{
						img: `${this.$env.img1}icon_01@2x.png`,
						font: '特色风采'
					},
					{
						img: `${this.$env.img1}icon_01@2x.png`,
						font: '聊天室'
					}
				],
				bannerPic: "",
				indexInfo: {},
				/* 		pageIndex: 1,
						pageSize: 10, */
				beautyInfo: [],
				"page_info": {
					"page_count": 0,
					"page_no": 0,
					"page_size": 10,
					"total_size": 0
				},
				mescroll: null, //mescroll实例对象
			};
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo');
			this.$api.Key = this.userInfo.key
			this.getLocation();
			this.upCallback();
		},
		methods: {
			pagesClick(id) {
				let urls = 'https://m.ncweilv.com/h5/find/article.html?ids='+id
				uni.navigateTo({
					url: '../h5/h5?url=' + urls
				})
			},
			voteList() {
				uni.navigateTo({
					url: "../voteList/voteList"
				})
			},
			villageClick(id, name) {
				uni.navigateTo({
					url: "../details/details?villageId=" + id + "&village_name=" + name
				})
			},
			moreGoTo() {
				uni.navigateTo({
					url: '../villageList/villageList?area_id='+ this.area_id
				})
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			search() {
				uni.navigateTo({
					url: "../serch/serch"
				})
			},
			listClick(id) {
				if (id == 74) {
					uni.navigateTo({
						url: "../feature/feature?villageId=" + this.indexInfo.village_id
					})
				} else if (id == 77) {
					uni.navigateTo({
						url: "../details/details?villageId=" + this.indexInfo.village_id
					})
				} else if (id == 78) {
					uni.navigateTo({
						url: "../share/share?url=index/index"
					})
				}

			},
			//投票跳转详情
			voteClick(id) {
				uni.navigateTo({
					url: "../details/details?villageId=" + id + "&longitude=" + this.longitude + "&latitude=" + this.latitude
				})
			},
			detailsClick() {
				uni.navigateTo({
					url: "../details/details?villageId=" + this.indexInfo.village_id + "&longitude=" + this.longitude + "&latitude=" +
						this.latitude
				})
			},
			//获取经纬度 ，获取区域id
			getLocation(e) {
				let that = this;
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						// console.log(res)
						that.latitude = res.latitude;
						that.longitude = res.longitude;
						uni.setStorageSync('getLatitude', that.latitude);
						uni.setStorageSync('getLongitude', that.longitude);

						that.$request.httpTokenRequest(that.$api.currentCity, that.$api.get, {
							latitude: that.latitude,
							longitude: that.longitude,
							Key: that.$api.Key,
							Client: that.$api.CLIENT,
							Version: that.$api.VERSION,
							searchType: 1,
						}).then((res) => {
							if (res.data.flag === 200) {
								that.getIndex(that.latitude, that.longitude, res.data.data.area_id);
								that.area_id = res.data.data.area_id;
							} else {}
						});
					}
				});
			},
			//首页信息接口
			getIndex(latitude, longitude, areaId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getSmallProceduresIndex, that.$api.get, {
					latitude: latitude,
					longitude: that.longitude,
					areaId: areaId,
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.bannerPic = res.data.data.top_img_url
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
			//点击投票
			vote(id) {
				let that = this
				console.log(that.latitude, id)
				that.$request.httpTokenRequest(that.$api.addVillageVoteNum, that.$api.get, {
					latitude: that.latitude,
					longitude: that.longitude,
					areaId: id,
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
						that.getLocation()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.page_info.page_no = 0;
				this.beautyInfo = []; //如果是第一页需手动制空列表
				this.upCallback(this.mescroll)
			},
			/*上拉加载的回调*/
			upCallback(mescroll) {
				let that = this;
				// 此时mescroll会携带page的参数:
				this.$request.httpTokenRequest(this.$api.getInformation, this.$api.get, {
					pageIndex: that.page_info.page_no + 1,
					pageSize: that.page_info.page_size,
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION
				}).then((res) => {
					if (res.data.flag === 200) {
						for (let i = 0; i < res.data.data.data_list.length; i++) {
							that.beautyInfo.push(res.data.data.data_list[i])
						}
						that.page_info = res.data.data.page_info;
						if (mescroll) {
							mescroll.endBySize(res.data.data.data_list.length, that.page_info.total_size, null);
						}
					} else {
						if (mescroll) {
							mescroll.endErr()
						}
					}
				});
			}

		},

	}
</script>

<style lang="less" scoped>
	.index {
		.index-banner {
			height: 420upx;
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
						font-weight: 400;
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
					font-weight: 300;
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
					font-weight: 300;
				}

				.information-second {
					display: inline-block;
					width: 621upx;
					// height: 26upx;
					font-size: 26upx !important;
					color: #999;
					font-weight: 300;
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
