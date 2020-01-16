<template>
	<view class="feature">
		<scroll-view scroll-x class="bg-white nav" style="margin-bottom:50upx">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<mescroll-uni class="uni-list" @up="upCallback" :fixed='false'>
			<view class="details-mid-evelate" v-for="(item,index) in dynamicsList" :key="index">
				<view class="evaluate-msg-in">
					<view class="chat-top flexs">
						<view class="evaluate-msg-head-left flexs" @tap="goToHomePage(item.member_id, item.member_name)">
							<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
							<view class="head-info">
								<view class="head-info-name">
									<text class="head-info-nike">{{item.member_name}}</text>
									<text v-if="item.identity!==''" class="head-info-identity">{{item.identity}}</text>
								</view>
								<text class="head-info-time">{{item.addtime}}</text>
							</view>
						</view>
						<view class="chat-right" @tap="goToChat">
							聊一下
						</view>
					</view>
					<view class="evaluate-msg-btm">
						<view class="evaluate-msg-btm-p">
							{{item.circle_content}}
						</view>
						<view class="evaluate-msg-btm-pic flexs">
							<image @tap="previewImage(index2, index)" class="evaluate-msg-btm-pic-in background-cover" v-for="(item2,index2) in item.circle_img_url" :key="index2"
							 :src="item2">
							</image>
						</view>
					</view>
					<view class="chat-location">
						<text class="cuIcon-locationfill location-name">{{item.circle_address}}</text>
					</view>
					<view class="chat-msg flexs justify-between">
						<view class="chat-info-people flexs" @tap="shareClick(item.circle_id)">
							<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + share+ ')'}">
							</view>
							<text>{{item.share_num}}</text>
						</view>
						<view class="chat-info-people flexs" @tap="commentClick(item.circle_id)">
							<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + msg+ ')'}">
							</view>
							<text>{{item.tourist_circle_dynamic_view_list.length}}</text>
						</view>
						<view class="chat-info-people flexs" @tap="addParise(item.circle_id, index)">
							<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + unclick+ ')'}" v-if="!item.is_parise">
							</view>
							<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + click+ ')'}" v-if="item.is_parise==1">
							</view>
							<text>{{item.praise_num}}</text>
						</view>
					</view>

					<view class="comment-list" v-for="(item3,index3) in item.tourist_circle_dynamic_view_list" :key="index3" v-if="isShow">
						<!-- v-if="isShow" -->
						<view class="chat-top flexs">
							<view class="evaluate-msg-head-left flexs">
								<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item3.member_head+ ')'}"></text>
								<view class="head-info">
									<view class="head-info-name">
										<text class="head-info-nike">{{item3.member_name}}</text>
									</view>
									<text class="head-info-time">{{item3.addtime}}</text>
								</view>
							</view>
							<view class="chat-info-people flexs" @tap="evaPraise(item3.dynamic_id, index)">
								<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + unclick+ ')'}" v-if="!item3.is_parise">
								</view>
								<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + click+ ')'}" v-if="item3.is_parise==1">
								</view>
								<text>{{item3.praise_num}}</text>
							</view>
						</view>
						<view class="comment-msg">
							{{item3.dynamic_content}}
						</view>
					</view>
				</view>
			</view>

			<!-- 悬浮按钮s -->
			<view class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goUpload" data-target="bottomModal"></view>
			<!-- 悬浮按钮e-->
		</mescroll-uni>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]" v-if="setNewsBtnShow">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" @focus="InputFocus"
			 @blur="InputBlur" v-model="inputContent"></input>
			<!-- <view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view> -->
			<button class="cu-btn bg-green shadow" @tap="setNews()">发送</button>
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css';

	export default {
		data() {
			return {
				InputBottom: 0,
				TabCur: 0,
				scrollLeft: 0,
				value: '0',
				relateBg: `${this.$env.img1}ranking.png`,
				publish: `${this.$env.img1}publish@2x.png`,
				share: `${this.$env.img1}relay@2x.png`,
				msg: `${this.$env.img1}comment@2x.png`,
				unclick: `${this.$env.img1}help@2x.png`,
				click: `${this.$env.img1}red_help.png`,
				isShow: true,
				setNewsBtnShow: false,
				Longitude: '',
				Latitude: '',
				inputContent:'',
				imgCurrent: '', //当前图片选择
				"page_info": {
					"page_count": 0,
					"page_no": 0,
					"page_size": 10,
					"total_size": 0
				},
				dynamicsType: '1',
				dynamicsList: [],
				contentId:'',
				nav: [{
						name: '最新'
					},
					{
						name: '热门'
					},
					{
						name: '关注'
					},
				],

			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			// 打开对方个人主页
			goToHomePage(id, name) {
				uni.navigateTo({
					url: '../../homePage/homePage?member_id=' + id +'&memberName=' + name
				})
			},
			// 聊天
			goToChat() {
				uni.navigateTo({
					url: '../chatDialogue/chatDialogue'
				})
			},
			// 发送评论
			setNews(){
				let that = this
				that.$request.phpTokenRequest(that.$api.adddynamic, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					DynamicContent: that.inputContent,
					CircleID: that.contentId,
					DynamicType: 1
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						// that.isShow =false
						that.inputContent = '';
						that.setNewsBtnShow = false;
					}
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.dynamicsType = this.TabCur + 1;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				uni.showLoading({
					title: '加载中'
				})
				this.upCallback();
			},
			goUpload(e) {
				uni.navigateTo({
					url: '../publishDynamic/publishDynamic'
				})
			},
			/*上拉加载的回调*/
			upCallback() {
				let that = this
				that.Latitude = uni.getStorageSync('getLatitude');
				that.Longitude = uni.getStorageSync('getLongitude');
				that.$request.httpTokenRequest(that.$api.getDynamicList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					PageIndex: that.page_info.page_no + 1,
					PageSize: that.page_info.page_size,
					dynamicsType: that.dynamicsType,
					Longitude: that.Longitude,
					Latitude: that.Latitude,
				}).then((res) => {
					that.dynamicsList = [];
					if (res.data.flag === 200) {
						for (let i = 0; i < res.data.data.data_list.length; i++) {
							that.dynamicsList.push(res.data.data.data_list[i]);
						}
						that.page_info = res.data.data.page_info;
						console.log(that.dynamicsList)
						uni.hideLoading();
					} else {
						
					}
				});

			},
			// 图片预览
			previewImage(current, index) {
				this.imgCurrent = current;
				uni.previewImage({  
					// urls 这里是数组的形式
					urls: this.dynamicsList[index].circle_img_url,
					current: this.imgCurrent
				})
			},
			//评论展开
			commentClick(id) {
				this.contentId = id;
				console.log(this.contentId);
				// this.isShow = !this.isShow;
				this.setNewsBtnShow = !this.setNewsBtnShow;
			},
			//点赞
			addParise(id, index) {
				let that = this
				that.$request.phpTokenRequest(that.$api.adddynamic, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					CircleID: id,
					DynamicType: 2
				}).then((res) => {
					if (res.data.flag === 200) {
						if(that.dynamicsList[index].is_parise == 0) {
							that.dynamicsList[index].praise_num = Number(that.dynamicsList[index].praise_num) + 1;
							that.dynamicsList[index].is_parise = 1;
						} else {
							that.dynamicsList[index].praise_num = Number(that.dynamicsList[index].praise_num) - 1;
							that.dynamicsList[index].is_parise = 0;
						}
					}
					//bug
				});
			},
			evaPraise(id, index) {
				let that = this
				that.$request.phpTokenRequest(that.$api.evaPraise, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					DynamicID: id
				}).then((res) => {
					// console.log(res)
					if (res.data.flag === 200) {
						that.dynamicsList[index].praise_num = Number(that.dynamicsList[index].praise_num) - 1;
					}
				});
			},
			shareClick(id) {
				uni.navigateTo({
					url: '../../share/share?url=chat/chatLine/chatLine'+'&circleID='+id
					// url: '../../share/share?title='+content
				})
			}
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo');
			this.$api.Key = this.userInfo.key;
			// this.upCallback();
		},
		onLoad() {
			this.upCallback();
		}
	}
</script>

<style lang="less" scoped>
	.feature {
		// padding: 30upx;
		position: relative;

		.nav {
			padding: 0 30upx;
		}

		.details-mid-evelate {
			border-bottom: 1rpx solid #EDEDED;

			.evaluate-msg-in {
				font-size: 26upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: #666666;
				padding-top: 30upx;

				.chat-top {
					padding: 0 30upx;
					justify-content: space-between;
					align-items: flex-start;
				}

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

					.head-info-nike {
						color: #303030;
						font-size: 32upx;
						font-weight: 700;

					}
					.head-info-name {
						display: flex;
					}
					.head-info-identity {
						font-size:18upx;
						font-weight:500;
						color:rgba(77,202,112,1);
						border: 1px solid #4DCA70;
						padding: 7upx 12upx;
						border-radius: 15upx;
						display: block;
						margin: 0 0 0 20upx;
					}
					
					.head-info-time {
						display: block;
						margin-top: 20upx;
					}
				}

				.chat-right {
					width: 110upx;
					line-height: 50upx;
					text-align: center;
					border: 1upx solid #4D97FF;
					border-radius: 8upx;
					color: #4D97FF;
				}

				.evaluate-msg-btm {
					padding: 0 30upx;

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
							width: 222upx;
							height: 222upx;
							border-radius: 8upx;
							margin-right: 10upx;
							margin-bottom: 10upx;
						}

						.evaluate-msg-btm-pic-in:nth-of-type(4n) {
							margin-right: 0;
						}
					}

				}

				.chat-location {
					padding: 30upx 0;
					margin: 0 30upx;
					border-bottom: 1upx solid #EDEDED;
				}

				.chat-msg {
					padding: 0 30upx;
					margin: 35upx 0;

					.chat-info-people {
						.chat-info-icon {
							width: 30upx;
							height: 30upx;
							margin-right: 10upx;
						}
					}
				}

				.comment-list {
					margin: 40rpx 0;

					.chat-top {
						padding: 0 30upx;
						justify-content: space-between;
						align-items: flex-start;
					}

					.evaluate-msg-head-left {
						justify-content: flex-start;
						align-items: center;

						.head-pic {
							display: block;
							width: 54upx;
							height: 54upx;
							border-radius: 50%;
							margin-right: 20upx;

						}

						.head-info-nike {
							color: #4D97FF;
							font-size: 26upx;
							font-weight: 700;
							
						}

						.head-info-time {
							display: block;
							margin-top: 20upx;
							font-size: 20upx;
						}
					}

					.chat-info-people {
						.chat-info-icon {
							width: 30upx;
							height: 30upx;
							margin-right: 10upx;
						}
					}

					.comment-msg {
						margin-left: 105upx;
						margin-top: 20upx;
						color: #303030;
						font-size: 26upx;
					}


				}

			}
		}




		.fix {
			width: 110upx;
			height: 110upx;
			position: fixed;
			bottom: 134upx;
			right: 10px;
		}
	}
</style>
