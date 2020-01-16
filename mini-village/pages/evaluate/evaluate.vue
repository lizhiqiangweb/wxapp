<template>
	<view class="evaluate">
		<!-- 头部s -->
		<view class="cu-card article" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="content">
					<image :src="evaluationList.village_img"></image>
					<view class="desc">
						<view class="text-content">{{evaluationList.village_name}}</view>
						<view>
							<view class="cu-tag bg-gray light md round">{{evaluationList.evaluate_scores}}<text class="text">分</text></view>
							<view class="cu-tag bg-gray light md round">{{evaluationList.comment_num}}<text class="text">评论</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 头部e -->
		<view class="evaluate-msg">
			<!-- 没有一条评论的时候展示发起评论 -->
			<view class="evaluate-msg-pic background-cover" :style="{backgroundImage:'url(' + comment+ ')'}" v-show="isShow" >
			</view>
			<view class="btm" v-show="isShow" @tap="publishEvaluate">
				发起评价
			</view>
			<!-- 没有一条评论的时候展示发起评论 -->

			<!-- 热门评论s -->
			<view class="evaluate-msg-in">
				<!-- 标题s -->
				<view class="evaluate-msg-title flexs justify-between"  @tap="publishEvaluate">
					<text class="evaluate-msg-title-left">热门评论</text>
					<view class="evaluate-msg-title-right flexs" >
						<text class="write background-cover" :style="{backgroundImage:'url(' + write+ ')'}"></text>
						<text>写评价</text>
					</view>
				</view>
				<!-- 标题e -->
				<view class="evaluate-msg-head justify-between" v-for="(item, evaluateIndex) in evaluate_list" :key='evaluateIndex'>
					<view class="evaluate-msg-head-left flex">
						<view class="msg-left">
							<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.avatar + ')'}"></text>
							<view class="head-info">
								<view class="head-info-name">
									<text class="head-info-nike">{{item.nickname}}</text>
									<view class="head-info-star">
										<img v-for="(item2, starIndex) in item.evaluate_scores" :key='starIndex' :src="stara" />
										<img v-for="(item3, starIndex1) in 5-item.evaluate_scores" :key='starIndex1' :src="starb" />
									</view>
								</view>
								<text class="head-info-time">{{item.eva_time}}</text>
							</view>
						</view>
						<view class="addPrise" @tap="addParise(item.evaluate_id)">
							<image v-if="item.has_praise==0" :src="unclick" mode=""></image>
							<image v-if="item.has_praise==1" :src="click" mode=""></image>
							<text>{{item.praise}}</text>
						</view>
					</view>
					<!-- img -->
					<view class="evaluate-msg-content">
						<text>{{item.eva_content}}</text>
						<view class="evaluate-img-list">
							<image @tap="previewImage(imgIndex, evaluateIndex)"  v-for="(item2, imgIndex) in item.evaluate_image" :key='imgIndex' v-if="item.evaluate_image!=='' && item.evaluate_image!==null" :src="item2" mode=""></image>
						</view>
					</view>
				</view>
				<!-- no-comment -->
				<view class="no-comment" v-if="evaluate_list.length < 1">
					<image src="../../static/img/no_comment.png" mode=""></image>
					<text @tap="publishEvaluate">发起评价</text>
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
				comment: `${this.$env.img1}pd_no_comment@2x.png`,
				write: `${this.$env.img1}pen@2x.png`,
				good: `${this.$env.img1}help@2x.png`,
				isCard: false,
				isShow: false,
				villageId:'',
				evaluationList:{},
				evaluate_list: [],
				stara: `${this.$env.img1}light_start@2x.png`,
				starb: `${this.$env.img1}gray_start@2x.png`, //暗星星
				unclick: `${this.$env.img1}help@2x.png`,
				click: `${this.$env.img1}red_help.png`,
				imgCurrent: '', //当前图片选择
			};
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
			publishEvaluate(){
				uni.navigateTo({
					url: "../publishEvaluate/publishEvaluate?villageId=" + this.villageId 
				})
			},
			// 图片预览
			previewImage(current, index) {
				this.imgCurrent = current;
				uni.previewImage({  
					// urls 这里是数组的形式
					urls: this.evaluate_list[index].evaluate_image,
					current: this.imgCurrent
				})
			},
			// 点赞
			addParise(id) {
				let that = this
				that.$request.httpTokenRequest(that.$api.addVillageEvaluatinParise, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					evaluateId: id,
					num: 1
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						// this.evaluate_list = []; //清空一次数组，导致白屏一下bug
						this.getVillageEvaluation();
						console.log(that.evaluate_list);
					}
				});
			},
			getVillageEvaluation() {
				let that = this;
				that.$request.httpTokenRequest(that.$api.getVillageEvaluation, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId
				}).then((res) => {
					if (res.data.flag === 200) {
						that.evaluationList = res.data.data;
						that.evaluate_list = res.data.data.evaluate_list;
						for(let i = 0; i < that.evaluationList.evaluate_list.length; i++) {
							that.evaluate_list[i].evaluate_scores = Number(that.evaluationList.evaluate_list[i].evaluate_scores);
							// if(that.evaluate_list[i].evaluate_image.)
							// 按照指定字符将字符串进行分割
							if(that.evaluate_list[i].evaluate_image !== '' && that.evaluate_list[i].evaluate_image !== null) {
								that.evaluate_list[i].evaluate_image = that.evaluate_list[i].evaluate_image.split(',');
							}
						}
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			
			},
		},
		computed: {
			// newImgList() {
			// 	for(let i = 0; i < this.evaluationList.evaluate_list.length; i++) {
			// 		if(this.evaluationList.evaluate_list[i].evaluate_image.indexOf('http') > 1) {
			// 			return this.evaluationList.evaluate_list[i].evaluate_image.split(',')
			// 		}
			// 	}
			// }
		},
		onLoad(option) {
			this.villageId = option.villageId;
		},
		onShow() {
			this.getVillageEvaluation();
		}
	}
</script>
<style>
	page {
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>

<style lang="less" scoped>
	.evaluate {
		height: 100%;
		padding: 230upx 0 0;
		box-sizing: border-box;
		position: relative;

		.article {
			height: 230upx;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			background-color: #fff;
			padding: 40upx 30upx;
			box-sizing: border-box;
		}

		.cu-card>.cu-item {
			margin: 0;
			border-radius: 0;
			padding: 0;
		}

		.cu-card.article>.cu-item .content {
			padding: 0;

			image {
				width: 150upx;
				height: 150upx;
			}

			.desc {
				justify-content: center;

				// align-items: center;
				.cu-tag {
					font-weight: normal;

					.text {
						display: inline-block;
						color: #999;
						margin-left: 20upx;
					}
				}

			}
		}

		.cu-card.article>.cu-item .content .text-content {
			height: 40upx;
			margin: 12upx 0 48upx 0;
			color: #303030;
			font-weight: 700;
		}

		.evaluate-msg {
			// width: 100%;
			height: auto;
			border-top: 20upx solid #EDEDED;
			background-color: #fff;

			.evaluate-msg-pic {
				width: 436upx;
				height: 346upx;
				margin: 0 auto;
			}

			.btm {
				width: 320upx;
				line-height: 88upx;
				margin: 0 auto;
				text-align: center;
				margin-top: 100upx;
				background: rgba(255, 255, 255, 1);
				border: 1upx solid rgba(102, 102, 102, 1);
				border-radius: 10upx;
			}


			.evaluate-msg-in {
				padding: 30upx;
				font-size: 26upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: #666666;

				.evaluate-msg-title {
					margin-bottom: 62upx;

					.evaluate-msg-title-left {
						font-size: 34upx;
						font-weight: 700;
					}

					.evaluate-msg-title-right {
						font-size: 28upx;
						color: #4D97FF;
						align-items: center;

						.write {
							width: 30upx;
							height: 30upx;
							display: inline-block;
							margin-right: 10upx;
						}
					}
				}
				.evaluate-msg-head {
					margin: 0 0 42upx 0;
					.evaluate-msg-head-left {
						justify-content: space-between;
						align-items: center;
						margin: 0 0 35upx 0;
						.msg-left {
							display: flex;
						}
						.head-pic{
							display: block;
							width: 90upx;
							height: 90upx;
							background-color:pink;
							border-radius: 50%;
							margin: 0 20upx 0 0;
						}
						.head-info{
							.head-info-name {
								display: flex;
								justify-content: space-around;
								.head-info-nike {
									margin: 0 0 23upx 0;
								}
								.head-info-star{
									margin: 0 0 0 30upx;
									image {
										width: 23upx;
										height: 22upx;
										margin: 0 7upx 0 0;
									}
								}
								
							}
						}
						.addPrise {
							display: flex;
							image {
								width: 30upx;
								height: 30upx;
								margin: 0 10upx 0 0;
							}
							text {
								font-size:28upx;
								font-weight:500;
								color:rgba(102,102,102,1);
							}
						}
					}
					.evaluate-msg-content {
						text {
							font-size: 26upx;
							font-weight: 500;
							color:rgba(102,102,102,1);
							line-height: 1.6;
						}
						.evaluate-img-list {
							display: flex;
							flex-wrap: wrap;
							margin: 26upx 0 0 0;
							// justify-content: space-around;
							image {
								width: 222upx;
								height: 222upx;
								margin: 0 10upx 14upx 0;
							}
						}
					}
				}
				.no-comment {
					display: flex;
					flex-direction: column;
					justify-content: center;
					image {
						margin: 0 auto 100upx;
						width: 436upx;
						height: 346upx;
					}
					text {
						display: block;
						width:320upx;
						height:88upx;
						line-height: 88upx;
						font-size:34upx;
						font-weight:500;
						color:rgba(48,48,48,1);
						border: 1upx solid rgba(102,102,102,1);
						border-radius: 10upx;
						margin: 0 auto;
						text-align: center;
					}
				}
			}

		}

	}
</style>
