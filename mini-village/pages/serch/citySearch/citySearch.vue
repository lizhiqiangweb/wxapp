<template>
	<view class="content">
		<view class="content-top">
			<view class="content-top-in">
				<text class="nameFirst">{{proviceName==''?'请选择省份':'请选择'}}</text>
				<text class="nameSecond" v-if="proviceName==''">选择省份/地区</text>
			</view>
			<view class="content-top-select">
				<view class="content-top-select-in flexs" v-if="proviceName!==''">
					<view class="content-top-select-left">
						<text class="first-text"></text>
						<text class="last-text"></text>
					</view>
					<view class="content-top-select-right">
						{{proviceName}}
					</view>
				</view>
				<view class="content-top-select-in flexs" v-if="proviceName!==''">
					<view class="content-top-select-left">
						<text class="first-text" :class="cityName==''?'un-select':''"></text>
						<text class="last-text"  v-if="cityName!==''"></text>
					</view>
					<view class="content-top-select-right" :class="cityName==''?'red':''">
						{{cityName==''? '请选择地区':cityName}}
					</view>
				</view>
				<view class="content-top-select-in flexs" v-if="cityName!==''">
					<view class="content-top-select-left">
						<text class="first-text" :class="areaName==''?'un-select':''"></text>
						<text class="last-text" v-if="areaName!==''"></text>
					</view>
					<view class="content-top-select-right" :class="areaName==''?'red':''">
						{{areaName==''? '请选择区':areaName}}
					</view>
				</view>
				<view class="content-top-select-in flexs" v-if="areaName!==''">
					<view class="content-top-select-left">
						<text class="first-text" :class="townName==''?'un-select':''"></text>
					</view>
					<view class="content-top-select-right" :class="townName==''?'red':''">
						{{townName==''? '请选择乡镇':townName}}
					</view>
				</view>

			</view>
		</view>
		<!-- :quickPanelData="quickPanelData" -->
		<uni-select :listData="selectSearch" @chooseItem="chooseItem" v-if="isSelect"></uni-select>

		<view class="search-list-list" v-if="searchList.length!==0">
			<view class="search-list-list-in" v-for="(item,index) in searchList" :key="index">
				<text class="title-fullname">{{item.full_name}}</text>
				<view class="title-in">
					<view class="title-in-image background-cover" :style="{backgroundImage:'url(' + item.img_url+ ')'}">
					</view>
					<view class="title-location">
						<view class="title-name">{{item.village_name}}</view>
						<text class="lg text-gray cuIcon-location"></text>
						<text class="locationfill-font">{{item.address}}</text>
					</view>

				</view>
			</view>
		</view>

		<view class="search-in" v-if="searchList.length==0&&isSelect==false">
			<view class="search-in-pic background-cover" :style="{backgroundImage:'url(' + no_house+ ')'}">
			</view>
			<view class="padding flex flex-direction" @tap="addSumbit">
				<button class="cu-btn margin-tb-sm lg">添加我的家乡</button>
			</view>
		</view>


	</view>
</template>

<script>
	import uniSelect from '../../../components/lee-select/lee-select.vue'
	import vPinyin from '../../../common/vue-py.js';
	import '../../../static/common.css'

	export default {
		components: {
			uniSelect
		},
		data() {
			return {
				quickPanelData: [{
						title: '当前城市',
						navName: '当前',
						data: ['上海'],
						height: 150
					},
					{
						title: '热门城市',
						navName: '热',
						data: ['上海', '北京', '成都', '昆明', '西安'],
						height: 224
					}
				],
				proviceName: '',
				cityName: '',
				areaName: '',
				townName:'',
				isSelect: true,
				no_house: `${this.$env.img1}no_house@2x.png`,
				searchList: [],
				selectSearch: [],
				pyList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				],
				cityData: [{
					"initial": "A",
					"list": []
				}, {
					"initial": "B",
					"list": []
				}, {
					"initial": "C",
					"list": []
				}, {
					"initial": "D",
					"list": []
				}, {
					"initial": "E",
					"list": []
				}, {
					"initial": "F",
					"list": []
				}, {
					"initial": "G",
					"list": []
				}, {
					"initial": "H",
					"list": []
				}, {
					"initial": "I",
					"list": []
				}, {
					"initial": "J",
					"list": []
				}, {
					"initial": "K",
					"list": []
				}, {
					"initial": "L",
					"list": []
				}, {
					"initial": "M",
					"list": []
				}, {
					"initial": "N",
					"list": []
				}, {
					"initial": "O",
					"list": []
				}, {
					"initial": "P",
					"list": []
				}, {
					"initial": "Q",
					"list": []
				}, {
					"initial": "R",
					"list": []
				}, {
					"initial": "S",
					"list": []
				}, {
					"initial": "T",
					"list": []
				}, {
					"initial": "U",
					"list": []
				}, {
					"initial": "V",
					"list": []
				}, {
					"initial": "W",
					"list": []
				}, {
					"initial": "X",
					"list": []
				}, {
					"initial": "Y",
					"list": []
				}, {
					"initial": "Z",
					"list": []
				}],

			}
		},
		methods: {
			chooseItem(item) {
				this.linkAddress(item.code)
				console.log(item.label, item.name)
				if (item.label == '1') {
					this.proviceName = item.name
				} else if (item.label == '2') {
					this.cityName = item.name
				} else if (item.label == '3') {
					this.areaName = item.name
				} else if (item.label == '4') {
					this.townName=item.name
					this.getSearchVillageByAreaId(item.code)
					this.isSelect = false
				}

			},

			linkAddress(ParentID) {
				let that = this
				that.$request.phpTokenRequest(that.$api.GetAreaList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					ParentID: ParentID
				}).then((res) => {
					if (res.data.flag === 200) {
						if (res.data.data[0].area_deep == '5') {
							return
						} else {
							that.operationData(res.data.data)
						}

					} else {

						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			operationData(cityList) {
				let that = this
				for (var i = 0; i < that.cityData.length; i++) {
					that.cityData[i].list = []

				}
				for (var i = 0; i < cityList.length; i++) {
					var c = cityList[i].area_name;
					let py = vPinyin.chineseToPinYin(c)
					let firstPy = py.substring(0, 1)
					if (that.pyList.indexOf(firstPy) != -1) {
						that.cityData[that.pyList.indexOf(firstPy)].list.push({
							"code": cityList[i].area_id,
							"name": c,
							"pinyin": py,
							"label": cityList[i].area_deep,
						}, )
					}
				}
				that.selectSearch = that.cityData.filter(item => item.list.length !== 0)
			},
			getSearchVillageByAreaId(townId) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getSearchVillageByAreaId, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					townId: townId
				}).then((res) => {
					if (res.data.flag === 200) {
						that.searchList = res.data.data
						console.log(that.searchList)
					} else {

						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			addSumbit() {
				uni.navigateTo({
					url: "../../addHometown/addHometown"
				})
			}


		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.linkAddress(0)
		}
	}
</script>

<style lang="less" scoped>
	.content {
		height: 100vh;

		.content-top {
			padding: 40upx 30upx;
			border-bottom: 1upx solid #EDEDED;
			// #EDEDED
			margin-bottom: 30upx;

			.content-top-in {
				margin-bottom: 30upx;

				text {
					display: block;
					font-size: 32upx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #303030;
				}

				.nameSecond {
					color: #999999;
					font-size: 24upx;
					font-weight: normal;

				}

			}

			.content-top-select {
				.content-top-select-in {
					justify-content: flex-start;
					align-content: flex-start;

					.content-top-select-left {
						margin-right: 90upx;

						text {
							display: block;
							text-align: center;
							margin: 0 auto;
						}

						.first-text {
							width: 20upx;
							height: 20upx;
							background: #F44336;
							border: 1upx solid #F44336;
							border-radius: 50%;
						}

						.last-text {
							width: 2upx;
							height: 60upx;
							background: #F44336;
							color: #303030;
						}

						.un-select {
							width: 20upx;
							height: 20upx;
							background: #fff;
							border: 1upx solid #F44336;
							border-radius: 50%;
						}
						.red{
							color:#F44336
						}


					}
				}


			}
		}

		.search-list-list {
			margin: 0 30upx;
			font-size: 32upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #303030;

			.search-list-list-in {
				.title-fullname {
					display: block;
					margin: 30upx 0;
				}

				.title-in {
					width: 335upx;
					height: 312upx;
					background: rgba(255, 255, 255, 1);
					border: 1upx solid rgba(218, 218, 218, 1);
					border-radius: 8upx;
					font-size: 24upx;

					.title-in-image {
						width: 100%;
						height: 191upx;

					}

					.title-location {
						margin-left: 20upx;

						.title-name {
							display: block;
							margin: 17upx 0;
						}

						.locationfill-font {
							color: #999;
						}

					}
				}
			}

		}

		.search-in {
			padding-top: 20upx;

			.search-in-pic {
				width: 436upx;
				height: 390upx;
				margin: 0 auto;
				margin-bottom: 150upx;
			}

			.margin-tb-sm {
				border: 1upx solid rgba(246, 51, 51, 1);
				color: rgba(246, 51, 51, 1);
				border-radius: 10upx;
				background-color: #Fff;
			}
		}
	}
</style>
