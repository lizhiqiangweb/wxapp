<template>
	<view class="publish-evaluate">
		
		<view class="cu-form-group margin-top texaInput">
			<textarea  :disabled="modalName!=null" @input="textareaAInput" maxlength="1000" placeholder="旅行过后说说您的体验，分享给大家吧！"></textarea>
		<!-- 	<view class="num">{{remnant}}/1000</view> -->
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
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-red margin-tb-sm lg">提交</button>
			</view>
		</view>
	
	</view>
</template>

<script>
	import '../../../static/common.css'
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
			};
		},
		methods: {
			star(val) {
				this.xing = val + 1
				console.log("点击了" + (val + 1) + "颗星")
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
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
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
		}

	}
</script>

<style lang="less" scoped>
	.publish-evaluate {
		padding-top:30upx;
		.texaInput{
			margin: 0 30upx;
			margin-bottom:30upx;
			padding:0;
			height: 420upx;
			font-size:28upx;
			color:#ABABAB;
			// border:2upx solid #DADADA;
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
