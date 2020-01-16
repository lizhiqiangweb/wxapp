<template>
	<view class="homePage">
		<!-- 个人信息 s -->
		<view class="memberInfo">
			<view class="memberInfo-top flex">
				<view class="memberInfo-head">
					<image :src="memberInfo.avatar" mode=""></image>
				</view>
				<view class="memberInfo-info">
					<view class="memberInfo-name flex">
						{{memberName}}
						<text>| {{memberInfo.village_name}}</text>
					</view>
					<text class="identity">{{memberInfo.identity}}</text>
				</view>
			</view>
			<view class="memberInfo-bottom flex">
				<view class="fans">
					我的粉丝 <text>{{memberInfo.fans_num}}</text>
				</view>
				<view class="attention">
					我的关注 <text>{{memberInfo.attention_num}}</text>
				</view>
			</view>
		</view>
		<!-- 个人信息 e -->
		
		<!-- detail s -->
		<view class="detail-tab">
			<view class="detail-tab-box flex">
				<text v-for="(item, tabIndex) in detailTabList" :key="tabIndex" @click="tabClick(tabIndex)" :class="tabCurrent==tabIndex?'tab-line':'' ">{{item}}</text>
			</view>
		</view>
		<!-- detail e -->
		
		<!-- 动态 s -->
		<view class="details-mid-evelate" v-show="tabCurrent==0">
			<view class="evaluate-msg-in" v-for="(item,index) in dynamicsList" :key="index">
				<view class="chat-top flexs">
					<view class="evaluate-msg-head-left flexs">
						<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></text>
						<view class="head-info">
							<view class="head-info-name">
								<text class="head-info-nike">{{item.member_name}}</text>
							</view>
							<text class="head-info-time">{{item.addtime}}</text>
						</view>
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
			<!-- no-photo -->
			<view class="no-photo" v-if="dynamicsList.length == 0">
				<image src="../../static/img/no_data.png" mode=""></image>
			</view>
		</view>
		<!-- 发表评论 -->
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
		<!-- 发表评论 e -->
		
		<!-- 特色风采 s -->
		<view class="detail-two" v-show="tabCurrent==1">
			<view class="detail-tab-list">
				<text v-for="(item, twoTabListIndex) in detailTwoList" :key="twoTabListIndex" @click="tab2Click(twoTabListIndex)" :class="tab2Current==twoTabListIndex?'tabClick':'' ">{{item}}</text>
			</view>
			<!-- 照片 -->
			<view v-show="tab2Current=='0'" style="width: 100%;margin-top: 30px;">
				<view class="flexs justify-between feature-in">
					<view class="feature-box radius font-28" v-for="(item,index) in imgList" :key="index">
						<view class="feature-in-pic background-cover" @tap="previewImage1(imgList.length-index-1)" :style="{backgroundImage:'url(' + item.village_img+ ')'}">
							<view class="feature-lable" :style="{'background':item.label_color}">
								<!-- :style="{'background':aqua}" 动态背景颜色值-->
								{{item.label}}
							</view>
						</view>
						<text class="feature-p">{{item.img_des}}</text>
					</view>
				</view>
				<!-- no-photo -->
				<view class="no-photo" v-if="imgList.length < 1">
					<image src="../../static/img/no_data.png" mode=""></image>
				</view>
			</view>
			<!-- 资讯 -->
			<view v-show="tab2Current=='1'" style="width: 100%;margin-top: 30px;">
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
				</view>
				<!-- no-photo -->
				<view class="no-photo" v-if="msgInfo.length < 1">
					<image src="../../static/img/no_data.png" mode=""></image>
				</view>
			</view>
			<!-- 视频 -->
			<view v-show="tab2Current=='2'" style="width: 100%;margin-top: 30px;">
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
				<!-- no-photo -->
				<view class="no-photo" v-if="videoInfo.length < 1">
					<image src="../../static/img/no_data.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 特色风采 e -->
		
		<!-- 土货 s -->
		<view class="detail-three" v-show="tabCurrent==2">
			<!-- no-photo -->
			<view class="no-photo">
				<image src="../../static/img/no_data.png" mode=""></image>
			</view>
		</view>
		<!-- 土货 e -->
		
		<!-- 景点 s -->
		<view class="detail-four" v-show="tabCurrent==3">
			<!-- no-photo -->
			<view class="no-photo">
				<image src="../../static/img/no_data.png" mode=""></image>
			</view>
		</view>
		<!-- 景点 e -->
	</view>
</template>

<script>
	import '../../static/common.css';
	
	export default {
		data() {
			return {
				member_id: '',
				memberInfo: [],
				detailTabList: [
					"动态",
					"特色风采",
					"土货",
					"景点"
				],
				detailTwoList: [
					"照片",
					"资讯",
					"视频"
				],
				publish: `${this.$env.img1}publish@2x.png`,
				share: `${this.$env.img1}relay@2x.png`,
				msg: `${this.$env.img1}comment@2x.png`,
				unclick: `${this.$env.img1}help@2x.png`,
				click: `${this.$env.img1}red_help.png`,
				play: `${this.$env.img1}play@2x.png`,
				lineLeft: 72,
				tabCurrent: 0,
				tab2Current: 0,
				setNewsBtnShow: false,
				inputContent:'',  // 发布评论
				contentId:'',
				dynamicsList: [],
				imgList: [],
				imgList1: [],
				memberName: '',
				msgInfo: [],
				videoInfo: []
			}
		},
		methods: {
			// 视频错误返回
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			// tab切换
			tabClick(index) {
				this.tabCurrent = index;
			},
			// 特色风采tab切换
			tab2Click(index) {
				this.tab2Current = index;
			},
			// 发表评论
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			// 资讯文章跳转
			articleClick(id) {
				let urls = 'https://m.ncweilv.com/h5/find/article.html?ids='+id
				uni.navigateTo({
					url: '../h5/h5?url=' + urls
				})
			},
			// 更新视频点击次数
			videoClick(videoId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.viewVideo, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					videoId: videoId
				}).then((res) => {
					if (res.data.flag === 200) {
						that.getVideoInfo()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			// 视频点赞
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
						that.getVideoInfo()
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
			// 视频评论
			// commentClick(videoId) {
			// 	this.isShow = !this.isShow
			// 	this.showCommentId = videoId
			// 	this.commentId = videoId
			// 	this.getVideoCommentList(videoId)
			// },
			
			// 视频评论列表
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
						that.getVideoInfo()
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						});
					}
				});
			},
			// 获取个人信息
			getMyHomeInfo() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getMyHomeInfo, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					memberId: that.member_id
				}).then((res) => {
					console.log(res)
					if(res.data.flag == 200) {
						that.memberInfo = res.data.data;
						console.log(that.memberInfo)
					}
				});
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
			// 获取动态
			getDynamicsList() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getMemberDynamicList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					memberId: that.member_id
				}).then((res) => {
					if(res.data.flag == 200) {
						that.dynamicsList = res.data.data.data_list;
						console.log('动态列表', that.dynamicsList);
					}
				});
			},
			// 获取特色风采图片 
			getImgList() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getMemberCharacteristicImgList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					memberId: that.member_id
				}).then((res) => {
					if(res.data.flag == 200) {
						that.imgList = res.data.data;
						console.log('图片', that.imgList);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			// 获取特色风采资讯
			getMsgInfo() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getMemberInformatioionList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					memberId: that.member_id
				}).then((res) => {
					if (res.data.flag === 200) {
						that.msgInfo = res.data.data;
						console.log('资讯', that.msgInfo);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			// 获取特色风采视频
			getVideoInfo() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getMemberVideoList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					memberId: that.member_id
				}).then((res) => {
					if (res.data.flag === 200) {
						that.videoInfo = res.data.data.data_list;
						console.log('视频', that.videoInfo);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
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
			// 图片预览1
			previewImage1(current) {
				let that = this;
				that.imgCurrent = current;
				for(let i = 0; i < that.imgList.length; i++) {
					that.imgList1.splice(0, 0, that.imgList[i].village_img);
				};
				uni.previewImage({
					// urls 这里是数组的形式
					urls: that.imgList1,
					current: that.imgCurrent
				});
			},
			//评论展开
			commentClick(id) {
				this.contentId = id;
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
			// 取消点赞
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
			// 分享
			shareClick(id) {
				uni.navigateTo({
					url: '../share/share?url=index/index'
				})
			}
			
		},
		onLoad(option) {
			this.member_id = option.member_id;
			this.memberName = option.memberName;
			this.getMyHomeInfo();
			this.getDynamicsList();
			this.getImgList();
			this.getMsgInfo();
			this.getVideoInfo();
		}
	}
</script>

<style lang="less" scoped>
.flex {
	display: flex;
}
.homePage {
	.memberInfo {
		padding: 0 30upx;
		margin: 0 0 40upx 0;
		.memberInfo-top {
			margin: 62upx 0 41upx 0;
			.memberInfo-head {
				image {
					width: 150upx;
					height: 150upx;
					display: block;
					margin: 0 31upx 0 0;
					border-radius: 50%;
				}
			}
			.memberInfo-info {
				margin: 26upx 0 0 0;
				.memberInfo-name {
					font-size:38upx;
					font-weight:bold;
					color:rgba(48,48,48,1);
					align-items: center;
					text {
						font-size:28upx;
						font-weight:500;
						color:rgba(102,102,102,1);
						margin: 0 0 0 19upx;
					}
				}
				.identity {
					font-size:18upx;
					font-weight:500;
					color:rgba(77,202,112,1);
					display: block;
					border: 1px solid #4DCA70;
					padding: 6upx 12upx;
					background: #FFFFFF;
					border-radius: 15upx;
					text-align: center;
					margin: 23upx 0 0 0;
					width: 40%;
				}
			}
		}
		.memberInfo-bottom {
			font-size:26upx;
			font-weight:500;
			color:rgba(102,102,102,1);
			.fans, .attention {
				text {
					margin: 0 0 0 13upx;
					font-size:32upx;
					font-weight:500;
					color:rgba(48,48,48,1);
				}
			}
			.fans {
				margin: 0 120upx 0 0;
			}
		}
	}
	.detail-tab {
		padding: 28upx 0;
		border-top: 1upx solid rgba(245,245,245,1);
		border-bottom: 20upx solid #F5F5F5;
		position: relative;
		.detail-tab-box {
			justify-content: space-around;
			padding: 0 30upx;
			text {
				font-size:32upx;
				font-weight:400;
				color:rgba(153,153,153,1);
				transition: all .3s ease-in; 
			}
		}
		.tab-line::after {
			content: '';
			display: block;
			background: linear-gradient(90deg,rgba(255,86,79,1) 0%,rgba(255,164,147,1) 99%);
			width: 100%;
			height:10upx;
			border-radius:5upx;
			transition: all .3s ease-in;
		}
		.tab-line {
			font-size: 34upx !important;
			color: #303030 !important;
			font-weight: bold !important;
		}
	}
	.details-mid-evelate {
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
	// detail-two
	.detail-two {
		padding: 31upx 30upx 0;
		.detail-tab-list {
			text {
				text-align: center;
				width: 80upx;
				font-size:32upx;
				font-weight:400;
				color:rgba(153,153,153,1);
				padding: 13upx;
				margin: 0 91upx 0 0;
				transition: all .3s ease-in;
			}
			.tabClick {
				border-bottom: 4upx solid #FF5952;
				color: #303030;
				font-weight: bold;
			}
		}
		// 风采
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
		.box {
			width: 100%;
			position: fixed;
			bottom: 0;
			right: 0;
		}
	}
}

.no-photo {
	display: flex;
	justify-content: center;
	image {
		width: 436upx;
		height: 346upx;
		margin: 120upx auto 0;
	}
}
</style>
