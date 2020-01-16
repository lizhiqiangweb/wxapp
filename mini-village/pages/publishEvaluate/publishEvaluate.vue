<template>
	<view class="publish-evaluate">
		<view class="star">
			<text class="span">总分</text>
			<view class="starXin" v-for="(item,index) in list" :key='index'>
				<view @click="star(index)"><img :src="xing>index?stara:starb" /></view>
			</view>
		</view>
		
		<view class="cu-form-group margin-top texaInput">
			<textarea  :disabled="modalName!=null" @input="textareaAInput" maxlength="1000" placeholder="请发表您的评论，字数控制在1000个字内"></textarea>
			<view class="num">{{remnant}}/1000</view>
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
						<view class="solids" @tap="ChooseImage" v-if="imgList.length<9">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
				</view>
			</form>
			<view class="padding flex flex-direction" @tap="sumbit">
				<button class="cu-btn bg-red margin-tb-sm lg">提交</button>
			</view>
		</view>
	
	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				list: [0, 1, 2, 3, 4],
				stara: `${this.$env.img1}light_start@2x.png`,
				starb: `${this.$env.img1}gray_start@2x.png`, //暗星星
				xing: 0,
				modalName: null,
				textareaAValue: '',
				remnant: 0,
				imgList: [],
				picUrl: '',
				villageId: ''
			};
		},
		methods: {
			star(val) {
				this.xing = val + 1
				console.log("点击了" + (val + 1) + "颗星")
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value;
				this.remnant = this.textareaAValue.length;
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths);
							this.upload(this.imgList[0])
						} else {
							this.imgList = res.tempFilePaths
							this.upload(this.imgList[0])
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
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
						evaluate_scores: that.xing,
						villageId: that.villageId
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
			}
		},
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key;
			this.villageId = option.villageId
		}

	}
</script>

<style lang="less" scoped>
	.publish-evaluate {
		padding-top:64upx;
		.star {
			padding: 0 30upx;
			display: flex;
			justify-content: flex-start;
			margin-bottom: 30upx;

			.span {
				display: inline-block;
				margin-right: 10upx;
				font-size: 32upx;
				font-family:PingFang-SC-Bold;
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
		.texaInput{
			margin: 0 30upx;
			margin-bottom:30upx;
			padding:0;
			height: 420upx;
			font-size:28upx;
			color:#ABABAB;
			border:2upx solid #DADADA;
			position: relative;
			font-family:PingFang-SC-Medium;
			font-weight: normal;
			
			.num{
				position: absolute;
				bottom:30upx;
				right:30upx;
			}
			textarea{
				margin:0;	
				height: 100%;
				padding:30upx
			}
		
		}
	}
</style>
