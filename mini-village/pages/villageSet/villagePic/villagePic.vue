<template>
	<view>

		<form>
			<view class="cu-form-group ">
				<view class="grid col-1 flex-sub pic">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids background-cover"  @tap="showModal" data-target="showModal" v-if="imgList.length<1" :style="{backgroundImage:'url(' + villager_cover+ ')'}">
						<!-- <text class='cuIcon-cameraadd'></text> -->
					</view>
				</view>
			</view>
		</form>
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
		<view class="padding flex flex-direction" @tap="getPic">
			<button class="cu-btn bg-red margin-tb-sm lg">保存</button>
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				imgList: [],
				modalName: null,
				picUrl: '',
				villager_cover: `${this.$env.img1}villager_cover@2x.png`,
				pic: [{
						'name': '相册',
						'id': '1'
					},
					{
						'name': '拍照',
						'id': '2'
					},
				],
			};
		},
		methods: {
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
		getPic() {
			let that = this
			that.$request.httpTokenRequest(that.$api.villageEdit, that.$api.post, {
				Key: that.$api.Key,
				Client: that.$api.CLIENT,
				Version: that.$api.VERSION,
				villageId: that.villageId,
				villageImg:that.picUrl
			}).then((res) => {
				if (res.data.flag === 200) {
						uni.showToast({
						title: res.data.data,
						icon: 'none'
					});
					uni.navigateBack()
		
				} else {
					uni.showToast({
						title: res.data.data,
						icon: 'none'
					});
				}
			});
		},	
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.villageId = option.villageId;
		}
	}
</script>

<style style="less" scoped>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.cu-form-group {
		height: 420upx;
	}

	.pic {
		height: 420upx;
	}

	.bg-red {
		height: 88upx;
		background: rgba(246, 51, 51, 1);
		border-radius: 10upx;
	}
</style>
