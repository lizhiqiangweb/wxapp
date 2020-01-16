<template>
	<view class="publish-evaluate">
		<view class="cu-form-group margin-top texaInput">
			<textarea style="height: 200upx;" :disabled="modalName!=null" @input="textareaAInput" maxlength="1000" placeholder="说点什么..."></textarea>
		</view>
		<view>
			<form>
				<view class="cu-form-group">
					<view class="grid col-3 grid-square flex-sub">
						<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
							<image :src="imgList[index]" mode="aspectFill"></image>
							<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class='cuIcon-close'></text>
							</view>	
						</view>
						<view class="solids" @tap="showModal" data-target="showModal" v-if="imgList.length<9">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
				</view>
			</form>
			<view class="chat-location" @tap="getLocation">
				<text class="cuIcon-locationfill location-name">{{locationName}}</text>
			</view>

			<view class="padding flex flex-direction" @tap="sumbit">
				<button class="cu-btn bg-red margin-tb-sm lg">提交</button>
			</view>

			<view class="cu-modal" :class="modalName=='showModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop="">
					<radio-group class="block" @change="RadioChange">
						<view class="cu-list menu text-left">
							<view class="cu-item" v-for="(item,index) in pic" :key="index">
								<label class="flex justify-between align-center flex-sub">
									<view class="flex-sub" @tap="selectPic(item.id)">{{item.name}}</view>
								</label>
							</view>
						</view>
					</radio-group>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				modalName: null,
				textareaAValue: '',
				imgList: [],
				picUrl: '',
				Longitude: '',
				Latitude: '',
				pic: [{
						'name': '相册',
						'id': '1'
					},
					{
						'name': '拍照',
						'id': '2'
					},
				],
				locationName: ''
			};
		},
		methods: {
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			selectPic(id) {
				// id=1为相册  id=2 拍照 自己定义的
				if (id == 1) {
					this.hideModal()
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							if (this.imgList.length != 0) {
								this.imgList = this.imgList.concat(res.tempFilePaths)
								this.upload(this.imgList[0])
							} else {
								this.imgList = res.tempFilePaths
								this.upload(this.imgList[0])
							}

						}
					});
				} else if (id == 2) {
					let that = this;
					this.hideModal()
					uni.chooseImage({
						count: 1, //默认9
						sourceType: ['camera'], //拍照会掉拍照，然后存储在相册中
						success: function(res) {
							var tempFilePaths = res.tempFilePaths;
							uni.saveFile({
								tempFilePath: tempFilePaths[0],
								success: function(res) {
									var savedFilePath = res.savedFilePath;
									console.log(savedFilePath)
									if (that.imgList.length != 0) {
										that.imgList.push(savedFilePath)
										that.upload(that.imgList[0])
									} else {
										that.imgList.push(savedFilePath)
										that.upload(that.imgList[0])
									}
								}
							});
						},

					});
				}

			},
			//3.图片处理成二进制格式
			upload(url) {
				let that = this
				uni.uploadFile({
					url: that.$env.baseUrl + that.$api.fileUpload + '?type=' + 'grouptour', //后台图片上传接口
					filePath: url,
					name: "file",
					success: (uploadFileRes) => {
						let dataUrl = JSON.parse(uploadFileRes.data)
						that.picUrl = dataUrl.data[0]
					}
				});
			},

			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					// title: '召唤师',
					content: '确定要删除这张照片吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			sumbit() {
				if (this.textareaAValue == '') {
					uni.showToast({
						title: '请填写动态内容',
						icon: 'none'
					});
				} else if (this.imgList.length == 0) {
					uni.showToast({
						title: '请添加照片',
						icon: 'none'
					});
				} else if (this.locationName == '') {
					uni.showToast({
						title: '请选择你所在位置',
						icon: 'none'
					});
				} else {
					let that = this
					that.Latitude = uni.getStorageSync('getLatitude');
					that.Longitude = uni.getStorageSync('getLongitude');
					that.$request.phpTokenRequest(that.$api.AddTourist, that.$api.get, {
						Key: that.$api.Key,
						Client: that.$api.CLIENT,
						Version: that.$api.VERSION,
						CircleContent: that.textareaAValue,
						ImageUrl: that.picUrl,
						Longitude: that.Latitude,
						Latitude: that.Longitude,
					}).then((res) => {
						console.log(res)
						if (res.data.flag === 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
							uni.navigateBack()

						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}
					});
				}

			},
			getLocation() {
				uni.chooseLocation({
					success: function(res) {
						console.log(res)
						this.locationName = res.address
					}
				});
			},
			getAddress(Latitude, Longitude) {
				let that = this
				that.$request.httpTokenRequest(that.$api.getAddress, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					Longitude: Longitude,
					Latitude: Latitude
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						that.locationName = res.data.data.address
						console.log(that.locationName)
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
			this.$api.Key=this.userInfo.key
			let that = this
			uni.getLocation({
				type: 'gcj02',
				success: function(res) {
					// console.log(res)
					that.Latitude = res.latitude;
					that.Longitude = res.longitude;
					that.getAddress(that.Latitude, that.Longitude)
				}
			});
		}

	}
</script>

<style lang="less" scoped>
	.publish-evaluate {

		// padding-top:64upx;
		.star {
			padding: 0 30upx;
			display: flex;
			justify-content: flex-start;
			margin-bottom: 30upx;

			.span {
				display: inline-block;
				margin-right: 10upx;
				font-size: 32upx;
				font-family: PingFang-SC-Bold;
				font-weight: 700;
				color: #303030;
			}

			.starXin {
				height: auto;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				// line-height: 20upx;

				view {
					margin-left: 13upx;
				}
			}

			img {
				width: 36upx;
				height: 35upx;
			}
		}

		.texaInput {
			margin: 0 30upx;
			margin-bottom: 30upx;
			padding: 0;
			// height: 420upx;
			font-size: 28upx;
			color: #ABABAB;
			// border:2upx solid #DADADA;
			position: relative;
			font-family: PingFang-SC-Medium;
			font-weight: normal;

			.num {
				position: absolute;
				bottom: 30upx;
				right: 30upx;
			}

			textarea {
				margin: 0;
				height: 100%;
				padding: 30upx
			}

		}

		.chat-location {
			padding: 30upx 0;
			margin: 0 30upx;
		}

	}
</style>
