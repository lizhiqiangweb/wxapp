<template>
	<!-- 城镇选择框s -->
	<view class="add-hometown">
		<view class="add-title">请选择城市</view>
		<view class="add-select flexs justify-between">
			<view class="add-select-in flexs justify-between" @tap="popup_bottom()">
				<text> {{provinceAddress==''?'-请选择省份-':ads.province}}</text>
				<text class="push background-cover" :style="{backgroundImage:'url(' + pull+ ')'}"></text>
			</view>
			<view class="add-select-in flexs justify-between" @tap="popup_bottom()">
				<text> {{cityAddress==''?'-请选择城市-':ads.city}}</text>
				<text class="push background-cover" :style="{backgroundImage:'url(' + pull+ ')'}"></text>
			</view>
			<view class="add-select-in flexs justify-between" @tap="popup_bottom()">
				<text> {{areaAddress==''?'-请选择县/地区-':ads.district}}</text>
				<text class="push background-cover" :style="{backgroundImage:'url(' + pull+ ')'}"></text>
			</view>
			<view class="add-select-in flexs justify-between" @tap="popup_bottom()">
				<text> {{townAddress==''?'-请选择乡/镇-':ads.town}}</text>
				<text class="push background-cover" :style="{backgroundImage:'url(' + pull+ ')'}"></text>
			</view>
			<view class="add-select-in flexs justify-between" @tap="popup_bottom()">
				<text> {{villageAddress==''?'-请选择村庄-':ads.village}}</text>
				<text class="push background-cover" :style="{backgroundImage:'url(' + pull+ ')'}"></text>
			</view>
		</view>
		<!-- 城镇选择框e-->

		<!-- 搜索框s -->
		<input placeholder="请输入村名，如XX村" name="input" class="input" @input="getName" @blur="getMap"></input>
		<!-- 搜索框e -->

		<view class="page-section page-section-gap">
			<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers" id="map1" ref="map1">
			</map>
		</view>

		<linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback()">
		</linkAddress>

		<view class="padding flex flex-direction" @tap="addSumbit">
			<button class="cu-btn bg-red margin-tb-sm lg">立即添加</button>
		</view>

	</view>


	</view>
</template>

<script>
	import '../../static/common.css'
	import linkAddress from '../../components/xuan-linkAddress/xuan-linkAddress.vue'
	export default {
		components: {
			linkAddress
		},
		data() {
			return {
				pull: `${this.$env.img1}village-pull@2x.png`,
				height: '500px',
				provinceAddress: '',
				cityAddress: '',
				areaAddress: '',
				townAddress: '',
				villageAddress: '',
				ads: {},
				title: 'map',
				sss: '',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: `${this.$env.img1}map-location.png`,
					width: 30,
					height: 58
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: `${this.$env.img1}map-location.png`,
					width: 30,
					height: 58
				}],
				name: ''

			};
		},
		methods: {
			getName(e) {
				this.name = e.target.value
			},
			//点击弹出弹窗
			popup_bottom() {
				this.height = '550rpx';
				//显示
				this.show_popup();

			},
			//显示弹窗
			show_popup() {
				this.$refs.linkAddress.show();
			},
			//回掉
			confirmCallback() {
				this.ads = uni.getStorageSync('commit_address');
				this.provinceAddress = this.ads.province;
				this.cityAddress = this.ads.city;
				this.areaAddress = this.ads.city;
				this.townAddress = this.ads.town;
				this.villageAddress = this.ads.village;
				let point = this.ads.province + this.ads.city + this.ads.district + this.ads.town + this.ads.city + this.ads.village
				this.getLogAndLat(point)
			},
			getMap() {
				let point = this.ads.province + this.ads.city + this.ads.district + this.ads.town + this.ads.city + this.ads.village +
					this.name
				this.getLogAndLat(point)
			},
			addSumbit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.addMyVillage, that.$api.get, {
					Key: that.$api.Key||userInfo.key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					proviceId: that.ads.Provice_id,
					cityId: that.ads.City_id,
					areaId: that.ads.Area_id,
					townId: that.ads.Town_id,
					villageId: that.ads.village_id,
					villageName: that.name || that.villageAddress
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						// uni.navigateTo({
						// 	url: "../details/details?villageId=" + that.ads.village_id + "&longitude=" + this.longitude + "&latitude=" + this.latitude
						// })
					} else {}
				});
			},
			getLogAndLat(address) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getLogAndLat, that.$api.get, {
					Key: that.$api.Key||userInfo.key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					address: address
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.covers[0].latitude = parseFloat(res.data.data.lat)
						that.covers[0].longitude = parseFloat(res.data.data.lng)
						that.covers[1].latitude = parseFloat(res.data.data.lat)
						that.covers[1].longitude = parseFloat(res.data.data.lng)
						that.latitude = parseFloat(res.data.data.lat)
						that.longitude = parseFloat(res.data.data.lng)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			}

		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			uni.removeStorageSync('commit_address')
			// console.log(this.ads)
		},
	}
</script>

<style lang="less" scoped>
	.add-hometown {
		font-size: 28upx;
		font-family: PingFang-SC-Regular;
		font-weight: 400;

		.add-title {
			margin: 40upx 30upx 0 30upx;
			font-weight: 700;
		}

		.add-select {
			flex-wrap: wrap;
			margin: 0 30upx;

			.add-select-in {
				width: 45%;
				padding-right: 18upx;
				padding-left: 60upx;
				line-height: 90upx;
				margin-top: 30upx;
				border: 1upx solid #DADADA;
				box-sizing: border-box;

				.push {
					display: inline-block;
					width: 26upx;
					height: 26upx;

				}
			}


		}

		.input {
			// width: 100%;
			height: 90upx;
			padding-left: 30upx;
			margin: 60upx 30upx 30upx 30upx;
			border: 1upx solid rgba(218, 218, 218, 1);
		}

		.page-section {
			margin: 0 30upx;
			z-index:-1,

			.map {
				width: 100%;
				height: 400upx;
			}
		}
	}
</style>
