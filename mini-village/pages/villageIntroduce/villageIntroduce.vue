<template>
	<view class="introduce">
		<text class="introduce-name">{{villageName}} :</text>
		<view class="cu-form-group margin-top">
			<textarea  :disabled="modalName!=null" @input="textareaAInput" maxlength="120" placeholder="请输入本村简介，字数控制在120个字内" v-model="villageContent"></textarea>
			<view class="num">{{remnant}}/120</view>
		</view>
		<text class="introduce-name introduce-msg">可以介绍本村位置、交通、景点、特产、名人、请按本村实际情况填写!
         </text>
		<view class="flex flex-direction" @tap="videoInit">
			<button class="cu-btn bg-red margin-tb-sm lg">提交</button>
		</view>
	</view>
</template>

<script>
import '../../static/common.css'
	export default {
		data() {
			return {
				remnant: 0,
				modalName: null,
				villageName:'',
				textareaAValue:'',
				villageContent:''

			};
		},
		methods: {
			textareaAInput(e) {
				this.remnant = e.detail.value.length
			},
			videoInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.editVillageIntro, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId,
					villageIntro:that.villageContent
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
		onLoad(option) {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.villageId = option.villageId;
			this.villageName = option.villageName;
			this.villageContent=option.villageContent
		}
	}
</script>

<style lang="less" scoped>
	.introduce {
		padding: 35upx 30upx;
		font-size: 32upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: #303030;

		.introduce-name {
			display: block;
			margin-bottom: 34upx;
		}
		.cu-form-group{
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
		.introduce-msg{
			margin-top:30upx;
			color:#ABABAB;
			font-family:PingFang-SC-Medium;			
			font-size:24upx;
		}
		.margin-tb-sm{
			margin-top: 109upx;
		}
		.cu-btn.lg{
		 font-weight: normal
		}

	}
</style>
