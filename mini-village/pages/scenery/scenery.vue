<template>
	<view class="scenery">
		<view class="flexs justify-between scenery-in" >
			<view class=" scenery-in-pic  radius background-cover" v-for="(item,index) in sceneryInfo" :key="index" @tap="previewImage(index, index)" :style="{backgroundImage:'url(' + item+ ')'}"></view>
		</view>
		<!-- 悬浮按钮s -->
		<view class="fix background-cover" :style="{backgroundImage:'url(' + publish+ ')'}" @tap="goPic" data-target="bottomModal" v-if="isVillager=='1'">
		</view>
		<!-- 悬浮按钮e-->
	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				// relateBg: `${this.$env.img1}ranking.png`,
				publish: `${this.$env.img1}publish@2x.png`,
				sceneryInfo:'',
				isVillager:'0',
				imgCurrent: ''
			};
		},
		methods: {
			goPic(e) {
				uni.navigateTo({
					url: '../uploadPic/uploadPic?villageId=' + this.villageId
				})
			},
			// 图片预览
			previewImage(current, index) {
				this.imgCurrent = current;
				uni.previewImage({  
					// urls 这里是数组的形式
					urls: this.sceneryInfo,
					current: this.imgCurrent
				})
			},
			sceneryInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getVillageImageList, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
					villageId: that.villageId
				}).then((res) => {
					// console.log(res)
					if (res.data.flag === 200) {
						that.sceneryInfo = res.data.data
						

					} else {
						uni.showToast({
							title: res.data.msg,
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
			this.isVillager = option.isVillager;

		},
		onShow() {
			this.sceneryInit()
		}
	}
</script>

<style lang="less" scoped> 
	.scenery {
		padding: 30upx;
		position: relative;

		.scenery-in {
			flex-wrap: wrap;

			.scenery-in-pic {
				width: 330upx;
				height: 330upx;
				margin-bottom: 30upx;
			}

		}

		.fix {
			width: 110upx;
			height: 110upx;
			position: fixed;
			bottom: 134upx;
			right: 10px;
		}
	}
</style>
