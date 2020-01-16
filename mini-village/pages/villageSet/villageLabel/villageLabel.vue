<template>
	<view class="add">

			<view class="cu-form-group textarea">
				<text>请选择乡村标签</text>
			</view>

		<view class="add-lable font-26">
			
			<view class="add-btm flexs justify-start">
				<view class="add-btm-in" v-for="(item,index) in labelInfo" :key="index" :class="item.label_id==TabCur?'active':''"
				 @tap="tabSelect(item.label_id)">
					{{item.label_name}}
				</view>

			</view>

		</view>

		<view class="padding flex flex-direction" @tap="labelBtm">
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
				textareaAValue: '',
				TabCur: 0,
				labelInfo: [],
				src:'',
			};
		},
		methods: {
			labelInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getLabels, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					labelType: 6
				}).then((res) => {
					if (res.data.flag === 200) {
						that.labelInfo = res.data.data
						that.TabCur = that.labelInfo[0].label_id
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				});
			},
			labelBtm() {
				let that = this
				that.$request.httpTokenRequest(that.$api.villageEdit, that.$api.post, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId,
					lableId:that.TabCur
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
		font-size: 32upx;
		font-family: PingFang-SC-Bold;
		font-weight: 700;
		color: rgba(48, 48, 48, 1);
	}

	.add-lable {
		padding: 0 30upx;
	}

	.add-p {
		display: block;
		margin-bottom: 24upx;
	}
	.add-btm{
		flex-wrap: wrap;
	}

	.add-btm-in {
		width: 22%;
		line-height: 66upx;
		margin-left: 16upx;
		border-radius: 33upx;
		margin-bottom: 30upx;
		text-align: center;
		color: #666666;
		background-color: #F5F5F5;
	}

	.active {
		color: #fff;
		background-color: #F63333;
	}
</style>
