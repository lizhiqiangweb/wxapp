<template>
	<view class="details">
		<view class="details-banner background-cover" :style="{backgroundImage:'url(' + detailsInfo.village_view.village_img+ ')'}"
		 v-if="detailsInfo.village_view.village_img !==''" @tap="villageManager">
		</view>
		<view class="details-banner background-cover" :style="{backgroundImage:'url(' + detailsBg+ ')'}" v-else @click="setClick">
			<view class="details-banner-in flexs">
				<text>本村还空空如也哦</text>
				<text v-if="detailsInfo.village_view.is_village_admin=='1'" class="set-text">去设置</text>
			</view>
		</view>
		<view class="details-location">
			<view class="location-top">
				<view class="location-top-left">
					<view class="location-title">
						{{detailsInfo.village_view.village_name}}
					</view>
					<view class="location-score background-cover" @tap="goTo('../voteList/voteList')" :style="{backgroundImage:'url(' + relateBg+ ')'}">
						<!-- <image :src="" mode="" class="img"></image> -->
						魅力村排名: 第{{detailsInfo.village_view.village_popularity_ranking}}名
					</view>
					<view class="location-card" v-if="detailsInfo.village_view.is_villager=='1'" @tap="exitVillage">
						退出本村
					</view>
				</view>
				<text class="location-top-right" v-if="detailsInfo.village_view.is_villager !=='1'" @tap="joinVillage">
					加入本村
				</text>
			</view>
			<view class="location-btm" @tap="locationClick">
				<view class="location-btm-left">
					<view class="location-icon background-cover" :style="{backgroundImage:'url(' + location+ ')'}">

					</view>
					<view class="">
						{{detailsInfo.village_view.village_address}}<text v-if="detailsInfo.village_view.village_dis!==''">·</text>{{detailsInfo.village_view.village_dis}}
					</view>
				</view>
				<text class="lg text-gray cuIcon-right"></text>
			</view>

		</view>
		<!-- btnList -->
		<view class="details-list">
			<view class="details-list-in" v-for="(item,index) in detailsInfo.menu_list" :key="index" @tap="menuClick(item.id)">
				<view class="details-list-icon background-cover" :style="{backgroundImage:'url(' + item.icon+ ')'}">
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="details-info">
			<view class="details-info-people" @tap="villagerListClick">
				<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + people+ ')'}">
				</view>
				<text class="text">村民</text>
				<text>{{detailsInfo.village_view.number_of_villagers}}</text>
			</view>
			<view class="details-info-people" @tap="evaluteListClick">
				<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + msg+ ')'}">
				</view>
				<text class="text">评论</text>
				<text>{{detailsInfo.village_view.evalute_num}}</text>
			</view>
			<view class="details-info-people">
				<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + vote+ ')'}">
				</view>
				<text class="text" @tap="voteBtnClick">投票</text>
				<text>{{detailsInfo.village_view.vote_num}}</text>
			</view>
		</view>
		<!-- 村简介 s  只有成为村民才显示-->
		<view class="details-introduce" v-if="detailsInfo.village_view.is_villager=='1'">
			<!-- v-if="detailsInfo.village_view.is_villager=='1'" -->
			<text class="details-introduce-title">{{detailsInfo.village_view.village_name}}简介<text class="details-introduce-title-in background-cover"
				 :style="{backgroundImage:'url(' +videoImage+ ')'}"></text></text>
			<view class="details-introduce-p">
				<view v-html="detailsInfo.village_view.village_intro"></view>
				<text class="change" v-if="detailsInfo.village_view.is_villager=='1'&&detailsInfo.village_view.is_villager!==''"
				 @tap="reviseClick">村简介不准确？<text class="change-in">点击修改</text></text>
				<text class="change" v-if="detailsInfo.village_view.is_villager=='1'&&detailsInfo.village_view.is_villager==''"
				 @tap="reviseClick">村简介不完善？<text class="change-in">点击添加</text></text>

			</view>
		</view>
		<!-- 村简介 e -->

		<!-- 申请村管理 s -->
		<view class="details-introduce details-manage">
			<view class="flexs justify-between details-manage-top">
				<text class="details-introduce-title details-title">村管理员</text>
				<text class="manager background-cover" :style="{backgroundImage:'url(' + thing_manager+ ')'}" v-if="detailsInfo.village_view.is_village_admin=='1'"
				 @tap="manageClick"></text>
			</view>
			<view class="details-manage-add" v-if="detailsInfo.village_view.is_village_admin !=='1'" @tap="applyVillager">
				<view class="details-manage-icon background-cover" :style="{backgroundImage:'url(' + manage+ ')'}">
				</view>
				申请村管理
			</view>
			<text class="details-manage-msg" v-if="detailsInfo.village_view.is_village_admin !=='1'">本村暂无管理员，赶紧申请村管理吧</text>
			<view class="details-manage-people" v-if="detailsInfo.village_view.is_village_admin =='1'">
				<view class="details-manage-pic">
					<view class="details-manage-pic-in background-cover" :style="{backgroundImage:'url(' + detailsInfo.administrator.member_head+ ')'}">
					</view>
					<view class="details-manage-level">村管理员</view>
				</view>
				<view class="details-manage-name">
					{{detailsInfo.administrator.member_nickname}}
				</view>
			</view>
		</view>
		<!-- 申请村管理 e -->

		<!--村排名 s  -->
		<view class="details-introduce details-ranking" v-if="detailsInfo.village_view.is_village_admin=='1'">
			<text class="details-introduce-title">村排名</text>
			<view class="details-ranking-list">
				<view class="details-ranking-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}" v-for="(item,index) in detailsInfo.villager_list"
				 :key="index">
					<view class="details-ranking-mark">
						<image :src="mark" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!--村排名 e  -->
		<!-- 精选路线s -->
		<view class="details-introduce details-line">
			<text class="details-introduce-title">精选路线</text>
			<view class="index-second-banner">
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" v-for="(item,index) in detailsInfo.recommend_app_tour_route_views" :key="index">
						<view class="scroll-view-item_image background-cover" :style="{backgroundImage:'url(' + item.images_path+ ')'}">
						</view>
						<view class="scroll-view-item_title" style="color: #303030;">{{item.tour_title}}</view>
						<view class="scroll-view-item_ranking">{{item.price}} <text> 人</text><text>{{item.have_joined_num}}已购买</text></view>
						<view class="index-second-tips">
							{{item.from_city_name}}
						</view>
						<view class="index-second-current">
							<text>{{index+1}}</text>/{{detailsInfo.recommend_app_tour_route_views.length}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 精选路线e -->
		<!-- 周边民宿s -->
		<view class="details-introduce details-line">
			<view class="flexs justify-between">
				<text class="details-introduce-title">周边民宿</text>
				<text style="color:#F44336">更多<image src="../../static/img/more.png" mode=""></image></text>
			</view>
			<view class="index-second-banner">
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" v-for="(item,index) in detailsInfo.house_list" :key="index">
						<view class="scroll-view-item_image background-cover" :style="{backgroundImage:'url(' + item.image_url+ ')'}">
							<!-- <image :src="item.image_url" mode=""></image> -->
						</view>
						<view class="scroll-view-item_title" style="color: #303030;">{{item.house_title}}</view>
						<view class="location">{{item.location}}</view>
						<view class="index-second-current">
							{{index+1}}/{{detailsInfo.house_list.length}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 周边民宿e -->
		<!-- 本村动态s -->
		<view class="details-introduce details-manage" >
			<view class="details-introduce-title details-title" style="text-align:left">本村动态</view>
			<view class="" v-for="(item,index) in villageListInfo" :key="index" v-if="villageListInfo.length!==0">

				<view class="details-info-person">
					<view class="details-info-person-left">
						<view class="details-info-header background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}">
						</view>
						<view class="details-info-name">
							<view class="details-info-name-top">
								<text class="info-first">{{item.member_name}}</text>
								<text v-if="item.identity !== ''" class="info-second" style="text-align:center">{{item.identity}}</text>
							</view>
							<view class="details-info-name-bottom">
								<text>{{item.addtime}}</text>
							</view>
						</view>
					</view>
					<view class="details-info-person-right" @click="attentionClick(item.member_id, item.is_attention)">
						{{item.is_attention=='0'?'关注':'聊一下'}}
					</view>
				</view>
				<text class="details-info-introduce">{{item.circle_content}}</text>
				<!-- img -->
				<view class="details-img-pic flexs">
					<image @tap="previewImage(index2, index)" class="evaluate-msg-btm-pic-in background-cover" v-for="(item2,index2) in item.circle_img_url" :key="index2"
					 :src="item2">
					</image>
				</view>
				<view class="details-info-location">
					<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + location+ ')'}">
					</view>
					<view class="details-info-location-adress">
						{{item.circle_address}}{{item.circle_dis}}
					</view>
				</view>
				<view class="details-info details-info-some">
					<view class="details-info-people" @tap="shareClick(item.circle_id)">
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + share+ ')'}">
						</view>
						<text>{{item.share_num}}</text>
					</view>
					<view class="details-info-people">
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + msg+ ')'}">
						</view>
						<text>{{item.comment_num}}</text>
					</view>
					<view class="details-info-people" @tap="addVillageEvaluatinParise(item.circle_id,item.is_parise)">
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + unclick+ ')'}" v-if="!item.is_parise">
						</view>
						<view class="details-info-icon background-cover" :style="{backgroundImage:'url(' + click+ ')'}" v-if="item.is_parise">
						</view>
						<text>{{item.praise_num}}</text>
					</view>
				</view>
			</view>
		
		<view class="no-comment" v-if="villageListInfoLength==0">
			<view class="no-comment-pic background-cover" :style="{backgroundImage:'url(' + noComment+ ')'}">
			</view>
			<view class="no-comment-btm" @tap='commentClick'>
				发布第一篇动态
			</view>
		</view>
		
		</view>

		<!-- 本村动态e-->
		<!-- 悬浮按钮s -->
		<view class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="showModal" data-target="bottomModal"
		 v-if="detailsInfo.village_view.is_villager=='1' ">
		</view>
		<!-- 悬浮按钮e-->

		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<!-- <view class="padding-xl"> -->
				<view class="details-list">
					<view class="details-list-in " v-for="(item,index) in list" :key="index" @tap="listClick(item.id)">
						<view class="details-list-icon background-cover" :style="{backgroundImage:'url(' + item.img+ ')'}">
						</view>
						<text>{{item.font}}</text>
					</view>
				</view>
				<!-- </view> -->
				<view class="cu-bar bg-white">
					<!-- <view class="action text-green">确定</view> -->
					<view class="action text-blue background-cover" @tap="hideModal" :style="{backgroundImage:'url(' + cancel+ ')'}">

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
				background: ['color1', 'color2', 'color3'],
				current: 0,
				modalName: null,
				thing_manager: `${this.$env.img1}thing_manager.png`,
				detailsBg: `${this.$env.img1}details_pic.png`,
				relateBg: `${this.$env.img1}ranking.png`,
				// arrow: `${this.$env.img1}triangle@2x.png`.
				location: `${this.$env.img1}Location@2x.png`,
				returns: `${this.$env.img1}return@2x.png`,
				people: `${this.$env.img1}villager@2x.png`,
				msg: `${this.$env.img1}comment@2x.png`,
				vote: `${this.$env.img1}vote@2x.png`,
				manage: `${this.$env.img1}plus@2x.png`,
				mark: `${this.$env.img1}goldl_03@2x.png`,
				// unMark:`${this.$env.img1}goldl_03@2x.png`,
				bg: `${this.$env.img1}jx@2x.png`,
				arrow: `${this.$env.img1}More@2x.png`,
				share: `${this.$env.img1}relay@2x.png`,
				unclick: `${this.$env.img1}help@2x.png`,
				click: `${this.$env.img1}red_help.png`,
				publish: `${this.$env.img1}publish@2x.png`,
				cancel: `${this.$env.img1}x@2x.png`,
				noComment: `${this.$env.img1}pd_no_comment@2x.png`,
				villageId: '',
				longitude: '',
				latitude: '',
				detailsInfo: [],
				unAttention: true,
				str: '关注',
				videoImage: '',
				villageListInfo: {},
				villageListInfoLength: '',
				list: [{
						img: `${this.$env.img1}icon_01@2x.png`,
						font: '村景',
						id: '1'
					},
					{
						img: `${this.$env.img1}details_2.png`,
						font: '特色风采',
						id: '2'
					},
					{
						img: `${this.$env.img1}details_3.png`,
						font: '民宿',
						id: '3'
					},
					{
						img: `${this.$env.img1}details_4.png`,
						font: '景点',
						id: '4'
					},
					{
						img: `${this.$env.img1}details_5.png`,
						font: '村动态',
						id: '5'
					},
					{
						img: `${this.$env.img1}details_6.png`,
						font: '土特产',
						id: '6'
					},
					{
						img: `${this.$env.img1}details_7.png`,
						font: '农家乐',
						id: '7'
					},


				],
			}
		},
		methods: {
			// 通用跳转
			goTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 图片预览
			previewImage(current, index) {
				this.imgCurrent = current;
				uni.previewImage({  
					// urls 这里是数组的形式
					urls: this.villageListInfo[index].circle_img_url,
					current: this.imgCurrent
				})
			},
			// 投票
			voteBtnClick() {
				let that = this;
				that.$request.httpTokenRequest(that.$api.addVillageVoteNum, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					areaId: that.detailsInfo.village_view.village_id
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none'
						})
					}
				});
			},
			evaluteListClick(){
					uni.navigateTo({
					url: '../evaluate/evaluate?villageId=' + this.villageId
				})
				
			},
			addVillageEvaluatinParise(id, num) {
				let that = this
				if (num == 1) {
					that.$request.httpTokenRequest(that.$api.addVillageEvaluatinParise, that.$api.get, {
						Key: that.$api.Key,
						Client: that.$api.CLIENT,
						Version: that.$api.VERSION,
						evaluateId: id,
						num: -1,
					}).then((res) => {
						if (res.data.flag === 200) {
							that.villageDynamics()
							
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					});
				} else {
					that.$request.httpTokenRequest(that.$api.addVillageEvaluatinParise, that.$api.get, {
						Key: that.$api.Key,
						Client: that.$api.CLIENT,
						Version: that.$api.VERSION,
						evaluateId: id,
						num: 1,
					}).then((res) => {
						if (res.data.flag === 200) {
							that.villageDynamics()

						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					});
				}


			},
			shareClick(id) {
				uni.navigateTo({
					url: '../share/share?url=chat/chatLine/chatLine' + '&circleID=' + id
				})
			},
			menuClick(id) {
				if (id == 65) {
					// 村景
					uni.navigateTo({
						url: '../scenery/scenery?villageId=' + this.villageId + '&isVillager=' + this.detailsInfo.village_view.is_villager

					})
				} else if (id == 66) {
					uni.navigateTo({
						url: '../feature/feature?villageId=' + this.villageId + '&isVillager=' + this.detailsInfo.village_view.is_villager
					})
				} else if (id == 67) {
					uni.navigateTo({
						url: '../chat/chatDialogue/chatDialogue_q'
					})
				} else if (id == 68) {
					uni.navigateTo({
						url: '../share/share?url=index/index'
					})
				} else if (id == 69) {
					uni.navigateTo({
						url: '../modal/homestay/homestay'
					})
				} else if (id == 70) {
					uni.showToast({
						title: '完善中，耐心等待',
						icon: 'none'
					});
				} else if (id == 77) {
					uni.showToast({
						title: '完善中，耐心等待',
						icon: 'none'
					});
				} else {
					uni.showToast({
						title: '完善中，耐心等待',
						icon: 'none'
					});
				}

			},
			listClick(id) {
				if (id == '1') {
					// 村景
					uni.navigateTo({
						url: '../scenery/scenery?villageId=' + this.villageId + '&isVillager=' + this.detailsInfo.village_view.is_villager

					})
					this.hideModal()
				} else if (id == '2') {
					uni.navigateTo({
						url: '../feature/feature?villageId=' + this.villageId + '&isVillager=' + this.detailsInfo.village_view.is_villager

					})
					this.hideModal()
				} else if (id == '3') {
					uni.navigateTo({
						url: '../modal/homestay/homestay?villageId=' + this.villageId + '&isVillager=' + this.detailsInfo.village_view.is_villager

					})
					this.hideModal()
				} else if (id == '4') {
					uni.showToast({
						title: '完善中，耐心等待',
						icon: 'none'
					});
				} else if (id == '5') {
					uni.navigateTo({
						url: '../chat/publishDynamic/publishDynamic'
					})
					this.hideModal()
				} else if (id == '6') {
					uni.showToast({
						title: '完善中，耐心等待',
						icon: 'none'
					});
				} else {
					uni.showToast({
						title: '完善中，耐心等待',
						icon: 'none'
					});
				}


			},
			//村管理设置首页图，如不是村管理，则不能设置
			setClick() {
				if (detailsInfo.village_view.is_villager == '') {
					uni.showToast({
						title: '您还不是村管理哦',
						icon: 'none'
					});
				} else {
					// 界面待定
					uni.navigateTo({
						url: '../villageManager/villageManager'
					})
				}
			},
			manageClick() {
				uni.navigateTo({
					url: '../villageSet/villageManager/villageManager?villageId=' + this.detailsInfo.village_view.village_id,

				})

			},
			locationClick() {
				const latitude = parseFloat(this.detailsInfo.village_view.latitude);
				const longitude = parseFloat(this.detailsInfo.village_view.longitude);
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					success: function() {}
				});
			},
			reviseClick() {
				let name = this.detailsInfo.village_view.village_name
				uni.navigateTo({
					url: '../villageIntroduce/villageIntroduce?villageId=' + this.villageId + '&villageName=' + name +
						'&villageContent=' + this.detailsInfo.village_view.village_intro
				})
			},
			// introducePage() {
			// 	uni.navigateTo({
			// 		url: '../villageSet/villageIntroduce/villageIntroduce'
			// 	})
			// },
			applyVillager() {
				uni.navigateTo({
					url: '../villageSet/applyVillager/applyVillager'
				})
			},
			attentionClick(memberId, is_attention) {
				let that = this;
				that.$request.httpTokenRequest(that.$api.addAttention, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					attentionMemberId: memberId
				}).then((res) => {
					if (res.data.flag === 200) {
						that.villageDynamics()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
				if(is_attention==1) {
					uni.navigateTo({
						url: "../chat/chatDialogue/chatDialogue"
					})
				}
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			detailsInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.villageInfo, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					latitude: parseFloat(that.latitude),
					longitude: parseFloat(that.longitude),
					villageId: that.villageId,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.detailsInfo = res.data.data
						that.videoImage = that.detailsInfo.village_view.village_video_url == "" ?
							`${that.$env.img1}details_upload_video.png` : `${that.$env.img1}details_video@2x.png`;
						console.log('村信息1', that.detailsInfo)
						
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			villageDynamics() {
				let that = this
				that.$request.httpTokenRequest(that.$api.villageDynamics, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					Latitude: that.latitude,
					Longitude: that.longitude,
					villageId: that.villageId,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.villageListInfo = res.data.data.data_list
						that.villageListInfoLength = that.villageListInfo.length;
						console.log('村信息2', that.villageListInfo)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			//编辑村简介
			// editorClick() {
			// 	uni.navigateTo({
			// 		url: '../villageSet/villageIntroduce/villageIntroduce'
			// 	})
			// },
			joinVillage() {
				uni.showModal({
					// title: '召唤师',
					content: '确定要加入本村？',
					cancelText: '再考虑下',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							let that = this
							that.$request.httpTokenRequest(that.$api.JoinVillage, that.$api.post, {
								Key: that.$api.Key,
								Client: that.$api.CLIENT,
								Version: that.$api.VERSION,
								villageId: that.villageId,
							}).then((res) => {
								if (res.data.flag === 200) {
									that.detailsInit()
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									});
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}

					}
				})
			},
			exitVillage() {
				uni.showModal({
					// title: '召唤师',
					content: '确定要退出本村？',
					cancelText: '再考虑下',
					confirmText: '确定',
					success: res => {
						let that = this
						that.$request.httpTokenRequest(that.$api.exitVillage, that.$api.post, {
							Key: that.$api.Key,
							Client: that.$api.CLIENT,
							Version: that.$api.VERSION,
						}).then((res) => {
							if (res.data.flag === 200) {
								that.detailsInit()

							} else {
								uni.showToast({
									title: res.data.msg,
									icon: 'none'
								});
							}
						});
					}
				})
			},
			villagerListClick() {
				uni.navigateTo({
					url: '../chat/villagerList/villagerList?villageId=' + this.villageId
				})
			},
			commentClick() {
				uni.navigateTo({
					url: 'villageDynamic?villageId=' + this.villageId + '&villageName=' + this.detailsInfo.village_view.village_name
				})
			}

		},
		onLoad(option) {
			let that = this
			that.userInfo = uni.getStorageSync('userInfo');
			that.latitude = uni.getStorageSync('getLatitude') || option.latitude;
			that.longitude = uni.getStorageSync('getLongitude') || option.longitude
			that.$api.Key = that.userInfo.key
			that.villageId = option.villageId;
			// uni.getLocation({
			// 	type: 'gcj02',
			// 	success: function(res) {
			// 		console.log(res)
			// 		longitude = res.longitude
			// 		latitude = res.latitude
			// 	}
			// });
			// that.longitude=longitude||option.longitude
			// that.latitude=latitude||option.latitude
			
			//设置动态标题
			if(option.village_name == undefined) {
				that.$request.httpTokenRequest(that.$api.villageInfo, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					latitude: parseFloat(that.latitude),
					longitude: parseFloat(that.longitude),
					villageId: that.villageId,
				}).then((res) => {
					uni.setNavigationBarTitle({
						title: res.data.data.village_view.village_name
					})
				});
			} else {
				uni.setNavigationBarTitle({
					title: option.village_name
				})
			}
		},
		onShow() {
			this.detailsInit()
			this.villageDynamics()
		}
	}
</script>

<style lang="less" scoped>
	.details {
		width: 100%;
		background-color: #fff;
		font-family: PingFang-SC-Bold;
		font-size: 24upx;
		color: #303030;
		font-weight: 500;
		position: relative;

		.details-banner {
			width: 100%;
			height: 420upx;
			color: #fff;
			font-size: 32upx;

			.details-banner-in {
				flex-direction: column;
				justify-content: center;
				align-items: center;

				text {
					display: block;
					margin-top: 130upx;
				}

				.set-text {
					text-align: center;
					margin-top: 60upx;
					width: 260upx;
					line-height: 80upx;
					background: #fff;
					border-radius: 40upx;
					color: #699DDB;
				}
			}

		}

		.details-location {
			height: 180upx;
			padding: 50upx 20upx 0 30upx;
			box-sizing: border-box;
			margin: 0 20upx;
			margin-top: -30upx;
			box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
			border-radius: 12upx;
			background-color: #fff;

			.location-top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.location-top-left {
					display: flex;
					align-items: center;
					justify-content: center;

					.location-title {
						font-size: 38upx;
						color: #333333;
						font-weight: 700;
					}

					.location-score {
						width: 210upx;
						height: 30upx;
						line-height: 30upx;
						padding-left: 30upx;
						color: #fff;
						font-size: 18upx;
						box-sizing: border-box;
						margin-left: 30upx;
						margin-right: 6upx;
						letter-spacing: 2upx;
						// .img{
						// 	width: 14upx;
						// 	height: 14upx;
						// }
					}

					.location-card {
						font-size: 18upx;
						padding: 6upx;
						color: #4D97FF;
						border: 1upx solid #4D97FF;
						box-sizing: border-box;
						border-radius: 6upx;
					}
				}

				.location-top-right {
					color: #4D97FF;
					font-size: 24upx;
				}
			}

			.location-btm {
				height: 26upx;
				margin-top: 30upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #999999;

				.location-btm-left {
					display: flex;
					align-items: center;

					.location-icon {
						width: 21upx;
						height: 26upx;
						margin: 0 6upx 0 0;
					}
				}

				.location-btm-right {
					width: 30upx;
					height: 30upx;
				}
			}




		}

		.details-list {
			width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.details-list-in {
				width: 25%;
				margin-top: 50upx;
				display: flex;
				flex-direction: column;
				align-items: center;

				.details-list-icon {
					width: 60upx;
					height: 60upx;
					margin-bottom: 25upx;

				}
			}
		}

		.details-info {
			margin: 80upx 30upx;
			display: flex;
			justify-content: center;
			align-items: center;

			.details-info-people {
				width: 33.33%;
				height: 80upx;
				margin: 0 10upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #F5F5F5;
				color: #666;
				font-size: 28upx;
				border-radius: 4upx;


				.details-info-icon {
					width: 30upx;
					height: 30upx;
				}

				.text {
					margin: 0 5upx;
				}

			}
		}

		.details-introduce {
			margin: 0 30upx;
			
			.details-introduce-title + text {
				image {
					width: 24upx;
					height: 24upx;
					display: block;
				}
			}
			.details-introduce-title {
				font-size: 34upx;
				font-weight: 800;
				margin-bottom: 30upx;
				display: block;

				.details-introduce-title-in {
					display: inline-block;
					width: 150upx;
					height: 40upx;
					margin-left: 30upx;
					vertical-align: middle;
				}

			}

			.details-introduce-p {

				font-size: 26upx;
				color: #666;
				font-size: 26upx;
				padding: 47upx 30upx 40upx 20upx;
				background-color: #F6F7F9;


				.change {
					font-size: 24upx;
					display: block;
					text-align: center;
					margin-top: 77upx;

					.change-in {
						color: #4D97FF;
						margin-left: 10upx;
					}
				}
			}
		}

		.details-manage {
			margin-top: 60upx;
			text-align: center;

			.details-manage-top {

				.details-title {
					text-align: center;
					margin-bottom: 0;
				}

				.manager {
					width: 180upx;
					height: 50upx;
					vertical-align: middle;
				}

			}


			.details-manage-add {
				width: 260upx;
				height: 80upx;
				border: 1upx solid #4D97FF;
				border-radius: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #4D97FF;
				margin: 0 auto;
				margin-bottom: 20upx;

				.details-manage-icon {
					width: 24upx;
					height: 24upx;
					font-size: 30upx;
					margin-right: 2upx;
				}

				.details-manage-msg {
					font-size: 26upx;
					display: block;
				}

			}

			.details-manage-people {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: #666;
				margin-top: 20upx;

				.details-manage-pic-in {
					width: 90upx;
					height: 90upx;
					// background: pink;
					border: 2upx solid rgba(210, 210, 210, 1);
					border-radius: 50%;
					margin-right: 20upx;

				}

				.details-manage-level {
					width: 92upx;
					// height: 28upx;
					background-color: #F3B503;
					border-radius: 14upx;
					font-size: 18upx;
					margin-top: -10upx;
					color: #FFFFFF;
					padding: 6upx;

				}

			}

		}

		.details-ranking {
			margin: 40upx 30upx 80upx 30upx;
			padding-bottom: 40upx;
			border-bottom: 1upx solid #EDEDED;

			.details-ranking-list {
				display: flex;
				align-items: center;
				flex: 7;

				.details-ranking-pic {
					width: 80upx;
					height: 80upx;
					margin-right: 20upx;
					border-radius: 50%;
					background-color: #F3B503;
					position: relative;

					.details-ranking-mark {
						width: 32upx;
						height: 32upx;
						position: absolute;
						top: -5px;
						left: 0;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

			}


		}

		.details-line {

			margin-top: 80upx;
			margin-bottom: 80upx;

			// 			.details-line-banner {
			// 				height: 420upx;
			// 				width: 100%;
			// 				box-shadow: 0upx 2upx 32upx 0upx rgba(209, 209, 209, 0.74);
			// 				border-radius: 8upx;
			// 
			// 				.screen-swiper {
			// 					min-height: 140upx !important;
			// 
			// 					.banner-title {
			// 						height: 20upx;
			// 						background-color: red;
			// 						position: absolute;
			// 						bottom: 0;
			// 						left: 0;
			// 						z-index: 9999;
			// 					}
			// 				}
			// 
			// 			}

			.index-second-banner {
				.scroll-view_H {
					/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
					white-space: nowrap;
					width: 100%;
					margin: 0 auto;


					.scroll-view-item_H {
						display: inline-block;
						width: 100%;
						// height: 210upx;
						background: rgba(255, 255, 255, 1);
						box-shadow: 0px 1px 16px 0px rgba(209, 209, 209, 0.74);
						border-radius: 4upx;
						margin: 2% 1% 2% 30upx;
						position: relative;
						// text-align: center;


						.scroll-view-item_image {
							width: 100%;
							height: 200upx;
							// margin-bottom: 20upx;

							image {
								width: 100%;
								height: 100%;
								overflow: hidden;
							}
						}

						.scroll-view-item_title {
							width: 500upx;
							color:rgba(51,51,51,1);
							font-size: 32upx;
							font-weight: bold;
							margin: 24upx 0 24upx 21upx;
							// margin: 0 auto;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.location {
							font-size:24upx;
							font-weight:500;
							color:rgba(153,153,153,1);
							margin: 16upx 0 30upx 21upx;
						}
						.scroll-view-item_ranking {
							margin: 16upx 0 30upx 17upx;
							text-align: left;
							font-size: 40upx;
							color:rgba(244,67,54,1);
							text:first-child {
								font-size: 28upx;
								color:rgba(244,67,54,1);
								margin: 0 25upx 0 8upx;
							}
							text {
								font-size:22upx;
								font-weight:bold;
								color:rgba(48,48,48,1);
							}
						}

						.index-second-tips {
							padding: 10upx 20upx;
							background-color: red;
							background: linear-gradient(0deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
							border-radius: 16upx;
							font-size: 23upx;
							font-family: DIN-Bold;
							font-weight: bold;
							color: #fff;
							text-align: center;
							position: absolute;
							top: 10upx;
							left: 7upx;
						}

						.index-second-current {
							position: absolute;
							top: 44%;
							right: 8%;
							color: #fff;
						}

					}
				}



			}
		}

		.details-house {
			.details-house-title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.details-house-right {
					color: #F44336;
					font-size: 28upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.details-arrow {
						width: 24upx;
						height: 24upx;

					}

				}
			}

			.third-in-house {
				display: block;
				margin-top: 23upx;
			}
		}

		.details-info-person {
			display: flex;
			justify-content: space-between;
			align-items: center;
			text-align: center;

			.details-info-person-left {
				display: flex;
				// justify-content: flex-start;
				align-items: center;

				.details-info-header {
					width: 90upx;
					height: 90upx;
					// margin: 20upx;
					background: rgba(72, 38, 27, 1);
					border-radius: 50%;
				}

				.details-info-name {
					display: flex;
					flex-direction: column;
					justify-content: center;


					.details-info-name-top,
					.details-info-name-bottom {
						display: flex;
						align-items: center;


						.info-first {
							font-size: 32upx;
							padding: 10upx;
						}

						.info-second {
							width: 80upx;
							line-height: 30upx;
							font-size: 18upx;
							margin-left: 20upx;
							border: 1upx solid #4DCA70;
							color: #4DCA70;
							border-radius: 15upx;
						}

					}

					.details-info-name-bottom {
						color: #999;
						margin: 0 0 0 8upx;
						.bottom-second {
							margin-left: 20upx;
						}
					}
				}


			}

			.details-info-person-right {
				width: 110upx;
				line-height: 50upx;
				border: 1upx solid #4D97FF;
				border-radius: 4upx;
				color: #4D97FF;
				text-align: center;
				// margin: 0 auto;
			}

		}

		.details-info-introduce {
			font-size: 26upx;
			color: #666;
			display: block;
			text-align: left;
			margin: 40upx 0 26upx 0upx;
		}
		.details-img-pic {
				display: flex;
				flex-wrap: wrap;
			image {
				width: 222upx;
				height: 222upx;
				display: block;
				margin: 0 10upx 0 0;
				border-radius: 8upx;
			}
			.pic-2 {
				
			}
		}
		.details-info-list {
			width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.details-info-in {
				width: 33.33%;
				// margin-top: 50upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 8upx;

				.details-info-icon {
					width: 152upx;
					height: 152upx;
					margin-bottom: 25upx;
					background-repeat: no-repeat;
					background-position: center center;
					background-size: cover;
				}
			}
		}

		.details-info-location {
			display: flex;
			align-items: center;
			margin: 20upx 0 0 0;
			border-bottom: 1px solid rgba(237,237,237,1);
			padding: 0 0 15upx 0;

			.details-info-icon {
				width: 30upx;
				height: 30upx;
				margin-right: 6upx;
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
			}
			.details-info-location-adress {
				padding: 11upx 26upx 11upx 15upx;
				background: #F6F7F9;
				display: block;
				border-radius: 22upx;
			}
		}

		.details-info-some {
			margin: 0;
			margin-bottom: 34upx;
			border-bottom: 1upx solid #EDEDED;

			.details-info-people {
				background-color: #fff;

				.details-info-icon {
					margin-right: 13upx;
				}
			}
		}

		.no-comment {
			margin: 0 auto;
			text-align: center;

			.no-comment-pic {
				width: 436upx;
				height: 346upx;
				margin: 0 auto;
			}

			.no-comment-btm {
				width: 320upx;
				line-height: 88upx;
				background: linear-gradient(-90deg, rgba(250, 113, 95, 1) 0%, rgba(244, 75, 75, 1) 100%);
				border-radius: 10upx;
				text-align: center;
				color: #fff;
				font-size: 34upx;
				margin: 100upx auto 20upx auto;
			}
		}

		.fix {
			width: 110upx;
			height: 110upx;
			position: fixed;
			bottom: 134upx;
			right: 10px;
		}

		.cu-dialog {
			height: 50%;
			border-radius: 28upx 28upx 0upx 0upx;
			background: #FFFFFF;
		}

		.action {
			width: 38upx;
			height: 38upx;
			margin: 0 auto;
			margin-top: 203upx;
		}

	}
</style>
