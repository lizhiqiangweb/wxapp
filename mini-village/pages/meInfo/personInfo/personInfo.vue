<template>
	<view class="person-info">
		<view class="cu-form-group margin-top" @tap="showModal" data-target="RadioModal">
			<view class="title">修改头像</view>
			<view class="flexs right">
				<view class="head-pic background-cover" v-if="imgList.length==0" :style="{backgroundImage:'url(' + head+ ')'}">
					<!-- :style="{backgroundImage:'url(' + list_ranking+ ')'}"  取后台字段-->
				</view>
				<view class="head-pic background-cover" v-if="imgList.length!==0" v-for="(item,index) in imgList" :key="index"
				 @tap="ViewImage" :data-url="imgList[index]" :style="{backgroundImage:'url(' + imgList[index]+ ')'}">
				</view>
				<text class="lg text-gray cuIcon-right"></text>
			</view>
		</view>
		<view class="cu-form-group solid-bottom flexs justify-between" @tap="villageIntroduce">
			<view class="title">修改昵称</view>
			<view class="">
				<text>{{nikeName}}</text>
				<text class="lg text-gray cuIcon-right"></text>
			</view>

		</view>

		<!-- 照片弹框s -->
		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in picList" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub" @tap="selectPic(item.id)">{{item.name}}</view>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<!-- 照片弹框e -->
	</view>
</template>

<script>
	import '../../../static/common.css'
	export default {
		data() {
			return {
				picList: [{
						'name': '拍照',
						'id': '1'
					},
					{
						'name': '从手机相册选择',
						'id': '2'
					},
				],
				imgList: [],
				picUrl: '',
				modalName: null,
				nikeName: '',
				head: ''

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
			villageIntroduce() {
				uni.navigateTo({
					url: '../../meInfo/nikeName/nikeName?name=' + this.nikeName
				})
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
						that.pucSumbit(that.picUrl)
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
			pucSumbit(head) {
				let that = this
				that.$request.phpTokenRequest(that.$api.editMember, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					MemberHead: head
				}).then((res) => {
					console.log(res)
					if (res.data.flag === 200) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
						uni.navigateBack();
					}
				});
			},
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key;
			this.nikeName = option.name;
			this.head = option.head;
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}
</style>


<style lang="less" scoped>
	.person-info {
		.right {
			justify-content: center;
			align-items: center;
		}

		.head-pic {
			width: 80upx;
			height: 80upx;
			// background-color: red;
			border-radius: 50%;
		}
	}
</style>
