<template>
	<view class="add">
		<form>
			<view class="cu-form-group textarea">
				<text>请上传村头视频</text>
			</view>
			<view class="cu-form-group ">
				<view class="grid col-1 flex-sub video">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index">
						<!-- <image :src="imgList[index]" mode="aspectFill"></image> -->
						<video id="myVideo" class="my-videos" :src="src" @error="videoErrorCallback" compressed :duration='info.duration'
						 controls :poster="picUrl"></video>
						<!-- poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png" -->
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids background-cover" @tap="videoAdd" v-if="imgList.length<1" :style="{backgroundImage:'url(' + villager_video+ ')'}">
					</view>
				</view>
			</view>
		</form>


		<view class="flex justify-center btm bg-red" @tap="videoBtm">
			提交
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				imgList: [],
				TabCur: 0,
				src: '',
				picUrl: '',
				villager_video: `${this.$env.img1}villager_video@2x.png`,
				info: {}

			};
		},
		methods: {
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			videoAdd() {
				var self = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						console.log(res)
						self.info = res
						self.upload(self.info.thumbTempFilePath)
						uni.showLoading();
						uni.uploadFile({
							url: self.$env.phpUrl + self.$api.UploadImage,
							// url: self.$env.phpUrl + self.$api.UploadImage+'&Type='+'video'+'&Key='+self.$api.Key+'&Client='+ self.$api.CLIENT+'&Version='+self.$api.VERSION,
							filePath: res.tempFilePath,
							name: 'file[]',
							formData: {
								Type: 'video',
								Key: self.$api.Key,
								Client: self.$api.CLIENT,
								Version: self.$api.VERSION,
							},
							success: (uploadFileRes) => {
								let url = JSON.parse(uploadFileRes.data)
								console.log(url.data[0])
								let src = ""
								src = url.data[0]
								self.imgList.push(src)
								uni.hideLoading()
							}
						});
					}
				});
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
			DelImg(e) {
				uni.showModal({
					// title: '召唤师',
					content: '确定要删除这个视频吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			videoBtm() {
				let that = this
				that.$request.httpTokenRequest(that.$api.villageEdit, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId,
					videoUrl:that.src
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

	.cu-form-group+.cu-form-group {
		border: none;
	}

	.bg-red {
		height: 88upx;
		background: rgba(246, 51, 51, 1);
		border-radius: 10upx;
	}


	.textarea {
		border: none;
		font-size: 32upx;
		font-family: PingFang-SC-Bold;
		font-weight: 700;
		color: rgba(48, 48, 48, 1);
	}

	.video {
		height: 568upx;
	}

	.bg-img {
		width: 100%;
		height: 100%;
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

	.cu-tag {
		position: absolute;
		top: 50upx;
		right: 20upx;
	}
	.btm{
		margin: 0 auto;
		margin-top: 20upx;
		width: 90%;
		line-height: 88upx;
	}

	.active {
		color: #fff;
		background-color: #F63333;
	}
</style>
