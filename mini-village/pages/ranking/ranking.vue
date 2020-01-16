<template>
	<view class="ranking">
		<view class="ranking-top background-cover" :style="{backgroundImage:'url(' + bj+ ')'}">
			<text class="rank-num">总魅力值</text>
			<text class="rank-figure">{{rankingTotal.charm_num}}</text>
			<view class="rank-btn">
				<text class="inline-block">魅力村排名：</text>
				<text class="inline-block rank-btn-second">第{{rankingTotal.village_charm_ranking}}名</text>
				<text class="inline-block background-cover rank-btn-three" :style="{backgroundImage:'url(' + arrow+ ')'}"></text>
			</view>
		</view>
		<view class="ranking-mid">
			<view class="ranking-mid-top background-cover " :style="{backgroundImage:'url(' + list_ranking+ ')'}"> </view>
			<scroll-view scroll-x class="nav">
				<view class="flex text-center ">
					<view class="cu-item flex-sub nav-in" :class="index==TabCur?'text-white':'' " v-for="(item,index) in nav" :key="index"
					 @tap="tabSelect" :data-id="index">
						<text>{{item.name}}</text>
						<view class="triagle background-cover" :class="index==TabCur?'activue':'unactive'" :style="{backgroundImage:'url(' + triagle+ ')'}">
						</view>
					</view>

				</view>
			</scroll-view>
		</view>
		<view v-show="value=='0'" style="width: 100%;margin-top: 30px;" class="list">
			<view class="list-in flexs justify-between" v-for="(item,index) in rankingInfo" :key="index">
				<view class="list-in-left flexs justify-start">
					<text class="one">{{item.rank}}</text>
					<view class="flexs justify-start head">
						<view class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></view>
						<text class="name">{{item.member_nick_name}}</text>
					</view>
				</view>
				<text class="list-in-right">{{item.num}}村贡献值</text>
			</view>
		</view>
			<view v-show="value=='1'" style="width: 100%;margin-top: 30px;" class="list">
			<view class="list-in flexs justify-between" v-for="(item,index) in rankingInfo" :key="index">
				<view class="list-in-left flexs justify-start">
					<text class="one">{{item.rank}}</text>
					<view class="flexs justify-start head">
						<view class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></view>
						<text class="name">{{item.member_nick_name}}</text>
					</view>
				</view>
				<text class="list-in-right">{{item.num}}村贡献值</text>
			</view>
		</view>
			<view v-show="value=='2'" style="width: 100%;margin-top: 30px;" class="list">
			<view class="list-in flexs justify-between" v-for="(item,index) in rankingInfo" :key="index">
				<view class="list-in-left flexs justify-start">
					<text class="one">{{item.rank}}</text>
					<view class="flexs justify-start head">
						<view class="head-pic background-cover" :style="{backgroundImage:'url(' + item.member_head+ ')'}"></view>
						<text class="name">{{item.member_nick_name}}</text>
					</view>
				</view>
				<text class="list-in-right">{{item.num}}村贡献值</text>
			</view>
		</view>
		<view class="ranking-btm background-cover" :style="{backgroundImage:'url(' + list_btn+ ')'}" @tap="contribution">
			涨贡献值
		</view>
	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				value: '0',
				isTriangle: true,
				bj: `${this.$env.img1}back_j.png`,
				arrow: `${this.$env.img1}More@2x.png`,
				triagle: `${this.$env.img1}triagle@2x.png`,
				list_btn: `${this.$env.img1}list_btn@2x.png`,
				list_ranking: `${this.$env.img1}contorbute_list.png`,
				nav: [{
						name: '微豆总榜',
						img: `${this.$env.img1}More@2x.png`
					},
					{
						name: '本月',
						img: `${this.$env.img1}More@2x.png`
					},
					{
						name: '本周',
						img: `${this.$env.img1}More@2x.png`
					},
				],
				PageIndex:'1',
				PageSize:'10',
				rankingInfo:[],
				rankingTotal:{}

			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if (e.currentTarget.dataset.id == "0") {
					this.value = '0'
					this.rankingInit('1')

				} else if (e.currentTarget.dataset.id == "1") {
					this.value = '1'
					this.rankingInit('2')
				} else if (e.currentTarget.dataset.id == "2") {
					this.value = '2'
					this.rankingInit('3')
				}
			},
			contribution(){
				uni.navigateTo({
					url: '../contribution/contribution?villageId=' + this.villageId
				})
			},
			rankingInit(type){
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageIntegralRecord, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId,
					PageIndex:that.PageIndex,
					PageSize:that.PageSize,
					type:type
				}).then((res) => {
					if (res.data.flag === 200) {
					that.rankingInfo=res.data.data.data_list
					console.log(that.rankingInfo)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			getVillageRanking(){
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageRanking, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.rankingTotal=res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'	
						});
					}
				});
			}
			
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.villageId = option.villageId;
			this.rankingInit('1')
			this.getVillageRanking()
		}
	}
</script>

<style lang="less" scoped>
	.ranking {
		box-sizing: border-box;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: #fff;
		line-height: 60upx;
		position: relative;

		.ranking-top {
			padding-top: 72upx;
			height: 464upx;
			overflow: hidden;
			box-sizing: border-box;

			.rank-num,
			.rank-figure,
			.rank-btn {
				display: block;
				margin: 0 auto;
				text-align: center;
			}

			.rank-figure {
				margin: 42upx 0 64upx 0;
				font-size: 90upx;
			}

			.rank-btn {
				width: 440upx;
				line-height: 80upx;
				color: #333;
				font-size: 32upx;
				background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(238, 200, 122, 1) 0%, rgba(239, 222, 177, 1) 0%, rgba(243, 231, 203, 1) 100%);
				border-radius: 40upx;

				.rank-btn-second {
					margin: 0 10upx 0 20upx;
				}

				.rank-btn-three {
					width: 20upx;
					height: 20upx;
				}
			}

		}

		.ranking-mid {
			// height: 190upx;
			margin-top: -30upx;
			padding-top: 30upx;
			background-color: #38BDFE;
			border-top-left-radius: 30upx;
			border-top-right-radius: 30upx;

			.ranking-mid-top {
				width: 426upx;
				height: 46upx;
				margin: 0 auto;

			}

			.nav {
				color: rgba(199, 236, 254, 1);
				// margin-top: 23upx;
				font-size: 26upx;

				.nav-in {
					position: relative;

					.triagle {
						width: 20upx;
						height: 14upx;
						// background-color: #fff;
						position: absolute;
						left: 50%;
						margin-left: -10upx;
						bottom: -2upx;
					}

					.activue {
						display: block;
					}

					.unactive {
						display: none;
					}
				}
			}



		}

		.list {
			color: #333;

			.list-in {
				padding: 0 60upx 0 64upx;
				margin-bottom: 40upx;

				.one {
					font-size: 30px;
					color: #DADADA;
				}

				.head {
					margin-left: 37upx;

					.head-pic {
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
						margin-right: 20upx;
					}

					.name {
						display: inline-blick;
						font-size: 28upx;
					}
				}

				.list-in-right {
					color: #F44336;
				}
			}

			.list-in:first-of-type {
				.one {
					color: #FF6967;
				}
			}

			.list-in:nth-of-type(2) {
				.one {
					color: #FE764A;
				}
			}

			.list-in:nth-of-type(3) {
				.one {
					color: #FCB238;
				}
			}
		}
		.ranking-btm{
			width: 390upx;
			line-height: 158upx;
			text-align:center;
			position: fixed;
			font-size:34upx;
			letter-spacing:4upx;
			left:0;
			bottom:15upx;
			margin-left: 195upx;
		}
	}
</style>
