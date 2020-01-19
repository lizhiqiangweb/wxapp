<template>
	<view class="feature">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view v-show="value=='0'" style="width: 100%;margin-top: 30px;">
			<view class="flexs justify-between feature-in">
				<view class="feature-box radius font-28" v-for="(item,index) in picInfo" :key="index">
					<view class="feature-in-pic background-cover" @tap="previewImage(picInfo.length-index-1)" :style="{backgroundImage:'url(' + item.village_img+ ')'}">
						<view class="feature-lable" :style="{'background':item.label_color}">
							<!-- :style="{'background':aqua}" 动态背景颜色值-->
							{{item.label}}
						</view>
					</view>
					<text class="feature-p">{{item.img_des}}</text>
				</view>
				<!-- no-photo -->
				<view class="no-photo" v-if="picInfo.length == 0">
					<image src="../../static/img/no_data.png" mode=""></image>
				</view>
			</view>
			<!-- 悬浮按钮s -->
			<view class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goPicUpload" data-target="bottomModal" v-if="isVillager=='1'"></view>
			<!-- 悬浮按钮e-->
		</view>
		<view v-show="value=='1'" style="width: 100%;margin-top: 30px;">
			<view class="information">
				<view class="information-in" v-for="(item,index) in msgInfo" :key="index" @tap="articleClick(item.info_id)">
					<view class="info-pic background-cover" :style="{backgroundImage:'url(' + item.info_img+ ')'}">
					</view>
					<view class="info-btm">
						<text class="information-first font-28">{{item.info_title}}</text>
						<text class="information-second font-28">{{item.info_content}}</text>
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
				<!-- 悬浮按钮s -->
				<view v-show='isShow' class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goUpload"
				 data-target="bottomModal"></view>
				<!-- 悬浮按钮e-->
				
				<!-- no-photo -->
				<view class="no-photo" v-if="msgInfo.length == 0">
					<image src="../../static/img/no_data.png" mode=""></image>
				</view>
			</view>
		</view>
		<view v-show="value=='2'" style="width: 100%;margin-top: 30px;">
			<view class="video-information">
				<view class="information-in" v-for="(item,index) in videoInfo" :key="index">

					<view class="info-pic background-cover">
						<video id="myVideo" :src="item.video_url" @error="videoErrorCallback" enable-danmu danmu-btn controls poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"
						 @tap="videoClick(item.video_id)"></video>
						<view class="feature-lable" :style="{'background':item.label_color}">
							{{item.label}}
						</view>
					</view>
					<view class="info-btm">
						<text class="information-first font-28">{{item.video_intro}}</text>
						<view class="details-info details-info-some">
							<view class="details-info-people">
								<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + play+ ')'}">
								</view>
								<text>{{item.info_click_num}}</text>
							</view>
							<view class="details-info-people" @tap="commentClick(item.video_id)">
								<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + msg+ ')'}">
								</view>
								<text>{{item.comment_num}}</text>
							</view>
							<view class="details-info-people" @tap="praiseClick(item.video_id)">
								<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + unclick+ ')'}" v-if="!item.has_praise"></view>
								<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + click+ ')'}" v-if="item.has_praise==1"></view>
							</view>
							<text>{{item.praise_num}}</text>
						</view>
					</view>
					
					<!-- 问题 vif='isShow' -->
					<view class="comment-list"  v-for="(item3, index3) in commentInfo" :key="index3" v-show="isShow">
						<view class="chat-top flexs">
							<view class="evaluate-msg-head-left flexs">
								<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item3.member_head+ ')'}"></text>
								<view class="head-info">
									<view class="head-info-name">
										<text class="head-info-nike">{{item3.member_nick_name}}</text>
									</view>
									<text class="head-info-time">{{item3.add_time}}</text>
								</view>
							</view>
							<view class="chat-info-people flexs" @tap="evaPraise(item3.comment_id)">
								<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + unclick+ ')'}" v-if="!item3.has_praise">
								</view>
								<view class="chat-info-icon background-cover" :style="{backgroundImage:'url(' + click+ ')'}" v-if="item3.has_praise==1">
								</view>
								<text>{{item3.praise}}</text>
							</view>
						</view>
						<view class="comment-msg">
							{{item3.comment_info}}
						</view>
					</view>
				</view>
				<!-- no-photo -->
				<view class="no-photo" v-if="videoInfo.length == 0">
					<image src="../../static/img/no_data.png" mode=""></image>
				</view>
			</view>
			
			<view class="box" v-if="isShow">
				<view class="cu-bar input">
					<view class="action">
						<text class="cuIcon-sound text-grey"></text>
					</view>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" class="solid-bottom" :focus="false"
					 maxlength="300" cursor-spacing="10"></input>
					<view class="action">
						<text class="cuIcon-emojifill text-grey"></text>
					</view>
					<button class="cu-btn bg-green shadow-blur" @tap="sendClick">发送</button>
				</view>
			</view>
			<!-- 悬浮按钮s -->
			<view class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goVideo" data-target="bottomModal" v-if="isVillager=='1'"></view>
			<!-- 悬浮按钮e-->
		</view>
	</view>
	</view>
</template>

<script>
	import '../../static/common.css';
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				value: '0',
				picInfo: [],
				msgInfo: [],
				videoInfo: [],
				isShow: false,
				showCommentId: '',
				relateBg: `${this.$env.img1}ranking.png`,
				publish: `${this.$env.img1}publish@2x.png`,
				share: `${this.$env.img1}relay@2x.png`,
				msg: `${this.$env.img1}comment@2x.png`,
				unclick: `${this.$env.img1}help@2x.png`,
				click: `${this.$env.img1}red_help.png`,
				play: `${this.$env.img1}play@2x.png`,
				PageIndex: 1,
				PageSize: 10,
				InputBottom: 0,
				commentId: 0,
				commentInfo:[],
				isVillager:'0',
				nav: [{
						name: '照片'
					},
					{
						name: '资讯'
					},
					{
						name: '视频'
					},
				],
				imgCurrent: '',
				imgList: []
			};
		},
		methods: {
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			goVideo(e) {
				uni.navigateTo({
					url: '../uploadVideo/uploadVideo'
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if (e.currentTarget.dataset.id == "1") {
					this.value = '1'

				} else if (e.currentTarget.dataset.id == "0") {
					this.value = '0'
				} else if (e.currentTarget.dataset.id == "2") {
					this.value = '2'
				}
			},
			goPicUpload(e) {
				uni.navigateTo({
					url: '../addPic/addPic?villageId=' + this.villageId
				})
			},
			articleClick(id) {
				let urls = 'https://m.ncweilv.com/h5/find/article.html?ids='+id
				uni.navigateTo({
					url: '../h5/h5?url=' + urls
				})
			},
			featureInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageCharacteristicImgList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId
				}).then((res) => {
					// console.log(res)
					if (res.data.flag === 200) {
						that.picInfo = res.data.data;
						console.log(that.picInfo);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			// 图片预览
			previewImage(current) {
				let that = this;
				that.imgCurrent = current;
				for(let i = 0; i < that.picInfo.length; i++) {
					that.imgList.splice(0, 0, that.picInfo[i].village_img);
				};
				uni.previewImage({
					// urls 这里是数组的形式
					urls: that.imgList,
					current: that.imgCurrent
				});
			},
			infoInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageInformatioinList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId
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
			videoInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageVideoList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId
				}).then((res) => {
					if (res.data.flag === 200) {
						that.videoInfo = res.data.data.data_list;
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			videoClick(videoId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.viewVideo, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					videoId: videoId
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.videoInit()

					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			praiseClick(videoId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.likeVideo, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					videoId: videoId
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
						that.videoInit()

					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
			commentClick(videoId) {
				this.isShow = !this.isShow
				this.showCommentId = videoId
				this.commentId = videoId
				this.getVideoCommentList(videoId)
			},
			getVideoCommentList(videoId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getVideoCommentList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					videoId: videoId,
					PageIndex: that.PageIndex,
					PageSize: that.PageSize,
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.commentInfo=res.data.data.data_list
						console.log('commentInfo', that.commentInfo)
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
			sendClick() {
				let that = this
				that.$request.httpTokenRequest(that.$api.commentVideo, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					videoId: that.commentId,
					comment: that.InputBottom
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.isShow = false
						that.videoInit()

					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}


		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key;
			this.isVillager = option.isVillager;
			this.villageId = option.villageId ;
		},
		onShow() {
			this.featureInit()
			this.infoInit()
			this.videoInit()
		}
	}
</script>

<style lang="less" scoped>
	.feature {
		padding: 30upx;
		position: relative;

		.feature-in {
			flex-wrap: wrap;

			.feature-box {
				width: 330upx;
				height: 320upx;
				box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
				border-radius: 4upx;
				margin-bottom: 30upx;

				.feature-in-pic {
					width: 330upx;
					height: 248upx;

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
			}
		}

		.information {
			background-color: #fff;
			margin: 60upx 30upx 0 30upx;
			position: relative;

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
			}

			.info-btm {
				margin: 25upx 20upx;

				.information-first,
				.information-second {
					display: block;
					font-size: 34upx;
					color: #303030;
				}

				.information-second {
					font-size: 26upx;
					color: #666;
					font-weight: 500;
					margin: 20px 0 25upx 0;
				}
			}

			.information-some {
				.information-some-left {
					.some-left-p {
						display: inline-block;
						// width: 60upx;
						padding: 4upx;
						line-height: 32upx;
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

			.fix {
				width: 110upx;
				height: 110upx;
				position: fixed;
				bottom: 134upx;
				right: 10px;
			}
		}

		.video-information {
			background-color: #fff;
			margin: 60upx 30upx 0 30upx;
			position: relative;

			.information-in {
				background: rgba(255, 255, 255, 1);
				box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
				border-radius: 8upx;
				padding-bottom: 27upx;
				// margin-bottom: 30upx;
			}

			.info-pic {
				width: 100%;
				height: 280upx;
				position: relative;

				video {
					width: 100%;
					height: 100%;
				}

				.feature-lable {
					width: 96upx;
					line-height: 34upx;
					color: #fff;
					font-size: 20upx;
					text-align: center;
					position: absolute;
					top: 0;
					left: 0;
				}
			}


			.info-btm {
				margin: 25upx 20upx 0 20upx;

				.information-first,
					{
					display: block;
					font-size: 34upx;
					color: #303030;
				}

			}

			.details-info {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 35upx;

				.details-info-people {
					width: 33.33%;
					height: 80upx;
					margin: 0 10upx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #666;
					font-size: 28upx;

					.details-info-icon {
						width: 30upx;
						height: 30upx;
						margin-right: 13upx;
					}

					.text {
						margin: 0 5upx;
					}

				}

				.details-info-people:nth-of-type(1) {
					justify-content: start;
				}

				.details-info-people:nth-of-type(3) {

					justify-content: flex-end;
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

		.fix {
			width: 110upx;
			height: 110upx;
			position: fixed;
			bottom: 134upx;
			right: 10px;
		}

		.box {
			width: 100%;
			position: fixed;
			bottom: 0;
			right: 0;
		}
		
		.no-photo {
			display: flex;
			justify-content: center;
			margin: 0 auto;
			image {
				width: 436upx;
				height: 346upx;
				margin: 120upx auto 0;
			}
		}
	}
</style>
