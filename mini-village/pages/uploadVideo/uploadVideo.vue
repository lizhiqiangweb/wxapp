<template>
	<view class="add">
		<form>
			<view class="cu-form-group textarea">
				<textarea maxlength="8" :disabled="modalName!=null" :auto-focus="true" @input="textareaAInput" placeholder="请输入视频描述，控制在20个字内"></textarea>
			</view>
			<view class="cu-form-group">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<video id="myVideo" :src="imgList[index]" @error="videoErrorCallback" compressed poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"></video>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="videoAdd"  v-if="imgList.length<1">
						<text class='cuIcon-record'></text>
					</view>
				</view>
			</view>
		</form>

		<view class="add-lable font-26">
			<text class="add-p">标签:</text>
			<view class="add-btm flexs justify-start">
				<view class="add-btm-in" :class="item.label_id==TabCur?'active':''" v-for="(item,index) in labelInfo"  @tap="tabSelect(item.label_id)"
				 >
					{{item.label_name}}
				</view>
			</view>

		</view>

		<view class="padding flex flex-direction">
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
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				imgList: [
					// 'https://test.img.ncweilv.com/video/1566528916415.mp4'
				],
				modalName: null,
				textareaAValue: '',
				TabCur: 0,
				labelInfo: [],
				src: '',
				nav: [{
						name: '乡村美食'
					},
					{
						name: '民俗文化'
					},
					{
						name: '古建筑'
					},
					{
						name: '人物传记'
					}
				],
				pic: [{
						'name': '相册',
						'id': '1'
					},
					{
						'name': '拍摄',
						'id': '2'
					},
				],
			};
		},
		methods: {
			labelInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getLabels, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					labelType: 5
				}).then((res) => {
					if (res.data.flag === 200) {
						that.labelInfo = res.data.data
						console.log(that.labelInfo)
						that.TabCur = that.labelInfo[0].label_id
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
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
					uni.chooseVideo({
						sourceType: ['album'], //从相册选择
						success: (res) => {
							// uni.showLoading();
							console.log(res)
							console.log(res.tempFilePath)
							if (this.imgList.length != 0) {
								this.imgList = this.imgList.concat(res.tempFilePath)
								this.uploadVideo(res.tempFilePath)
								
							} else {
								this.uploadVideo(res.tempFilePath)
								// this.imgList = res.tempFilePath
								// this.uploadVideo(this.imgList[0])
							}

						}
					});
				} else if (id == 2) {
					let that = this;
					this.hideModal()
					uni.chooseVideo({
						sourceType: ['camera'], //拍照会掉拍照，然后存储在相册中
						success: function(res) {
							uni.showLoading();
							var tempFilePaths = res.tempFilePath;
							uni.saveFile({
								tempFilePath: tempFilePaths,
								success: function(res) {
									var savedFilePath = res.savedFilePath;
									console.log(savedFilePath)
									if (that.imgList.length != 0) {
										that.imgList.push(savedFilePath)
										that.uploadVideo(that.imgList[0])
									} else {
										that.imgList.push(savedFilePath)
										that.uploadVideo(that.imgList[0])
									}
								}
							});
						},

					});
				}

			},
			//3.图片处理成二进制格式
			// uploadPic(url) {
			// 	let that = this
			// 	uni.uploadFile({
			// 		url: that.$env.baseUrl + that.$api.fileUpload + '?type=' + 'grouptour', //后台图片上传接口
			// 		filePath: url,
			// 		name: "file",
			// 		success: (uploadFileRes) => {
			// 			let dataUrl = JSON.parse(uploadFileRes.data)
			// 			console.log(dataUrl)
			// 			this.arr.push(dataUrl.data[0])
			// 		}
			// 	});
			// },
			//4.视频处理成二进制格式
			uploadVideo(url) {
				let self = this;
				uni.uploadFile({
					url: self.$env.baseUrl + self.$api.fileUpload + '?type=' + 'video',
					filePath: url,
					name: 'file',
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
						let src
						src = uploadFileRes.data
						console.log(src)
						uni.hideLoading()
					}
				});
			},
			videoAdd() {
				var self = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						console.log(res)
						uni.showLoading();
						uni.uploadFile({
							url: self.$env.baseUrl + self.$api.fileUpload + '?type=' + 'video',
							filePath: res.tempFilePath,
							name: 'file',
							success: (uploadFileRes) => {
								let src=""
								src = uploadFileRes.data
								self.imgList.push(src)
								uni.hideLoading()
							}
						});
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
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			tabSelect(id) {
				this.TabCur = id;
			}
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.villageId = option.villageId;
			this.labelInit()
		}
	}
</script>

<style style="less" scoped>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.cu-form-group+.cu-form-group {
		border: none;
	}

	.bg-red {
		height: 88upx;
		background: rgba(246, 51, 51, 1);
		border-radius: 10upx;
	}


	.cu-form-group textarea {
		height: 100upx;
		margin: 0;
		margin-top: 40upx;
		border: none;

	}

	.textarea {
		border: none;
	}

	.add-lable {
		padding: 0 30upx;
	}

	.add-p {
		display: block;
		margin-bottom: 24upx;
	}

	.add-btm-in {
		width: 150upx;
		line-height: 66upx;
		margin-left: 16upx;
		border-radius: 33upx;
		text-align: center;
		color: #666666;
		background-color: #F5F5F5;
	}

	.active {
		color: #fff;
		background-color: #F63333;
	}
</style>
