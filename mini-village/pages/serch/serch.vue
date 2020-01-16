<template>
	<view class="search">
		<!-- 搜索框 s -->
		<view class="cu-bar bg-white search index-search">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="搜一搜你自己的美丽家乡" confirm-type="search" @input="getName" @blur="nameSearch" v-model="myvillage"></input>
			</view>
		</view>
		<!-- 搜索框 e -->

		<!-- 历史记录s -->
		<view class="search-btm">
			<view class="search-btm-top flexs justify-between" @tap="citySearch">
				<text>懒得打字？来试试精确查找吧</text>
				<text class="search-btm-top-right">精确查找</text>
			</view>
			<view class="search-btm-btm" v-if="selfList.length!==0">
				<!-- v-show="selfList.length!=0" -->
					<text class="search-btm-title" v-if="selfList[0]!==''">历史搜索</text>
				<view class="search-btm-box">
					<view class="search-btm-history flexs justify-start"  v-for="(item,index) in selfList" :key="index" @tap="nameClick(item.tit)">
						<view class="search-btm-history-in" v-if="index < 6">
							{{item.tit}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 历史记录e-->

		<!-- 搜索结果s -->
		<!-- v-if="searchList.length!==0" -->

		<view class="search-list" v-if="searchList.length!==0 && noSearch == true">
			<view class="search-list-top">
				已为你找到与"{{name}}"相关的以下信息
			</view>
			
			<view class="search-list-list">
				<view class="search-list-list-in" v-for="(item,index) in searchList" :key="index" @tap="searchClick(item.village_id)" v-if="item.is_created == 1">
					<text class="title-fullname">{{item.full_name}}</text>
					<view class="title-in">
						<view class="title-in-image background-cover" :style="{backgroundImage:'url(' + item.img_url+ ')'}">
						</view>
						<view class="title-location">
							<view class="title-name">{{item.village_name}}</view>
							<text class="lg text-gray cuIcon-location"></text>
							<text class="locationfill-font">{{item.address}}</text>
						</view>

					</view>
				</view>
			</view>
		</view>
		<!-- 搜索结果e-->

	</view>
</template>

<script>
	import '../../static/common.css'
	export default {
		data() {
			return {
				name: '',
				PageIndex: '1',
				PageSize: '10',
				searchList: [],
				selfList: [],
				myvillage:'',
				noSearch: true
			};
		},
		methods: {
			citySearch(){
				uni.navigateTo({
					url: "citySearch/citySearch"
				})
			},
			getName(e) {
				this.name = e.target.value
			},
			nameClick(item){
				this.name = item
				this.myvillage = item
				this.nameSearch()
			},
			searchClick(id){
				uni.navigateTo({
					url: "../details/details?villageId=" + id 
				})
			},
			nameSearch() {
				if (this.name == "") {
					return
				} else {
					let that = this;
					// console.log(that.selfList)
					// uni.showLoading();
					that.$request.httpTokenRequest(that.$api.getSearchVillage, that.$api.get, {
						Key: that.$api.Key,
						Client: that.$api.CLIENT,
						Version: that.$api.VERSION,
						keyword: that.name,
						PageIndex: that.PageIndex,
						PageSize: that.PageSize,
					}).then((res) => {
						// uni.setStorageSync('nameHistory', that.name);
						that.selfList.unshift({
							tit: that.name
						});
						// console.log('1',res)
						uni.setStorageSync('nameHistory', that.selfList);
						that.myvillage = '';
						if (res.data.flag === 200) {
							that.searchList = res.data.data.data_list
							if (that.searchList.length == 0) {
								uni.navigateTo({
									url: "../search-in/search-in"
								});
							}
							console.log('123', that.searchList[0])
							if(that.searchList[0].is_created==0) {
								that.noSearch = false;
								uni.navigateTo({
									url: "../search-in/search-in"
								})
							} else {
								that.noSearch = true
							}
							uni.hideLoading(that.searchList)
							// uni.navigateTo({
							// 	url: "../details/details?villageId=" + that.ads.village_id + "&longitude=" + this.longitude + "&latitude=" + this.latitude
							// })
							that.myvillage = '';
						} else {
							console.log('0',res)
						}
					});
				}
			}
		},
		onLoad() {
			this.userInfo =  uni.getStorageSync('userInfo');
			this.$api.Key = this.userInfo.key
			let nameHistory = uni.getStorageSync('nameHistory');
			if(!nameHistory) {
				
			} else {
				this.selfList = nameHistory;
			}
		}
	}
</script>

<style lang="less" scoped>
	.search {
		.index-search {
			height: 80upx;
			margin: 10upx 30upx;
			box-sizing: border-box;

			.cuIcon-search {
				margin-left: 170upx;
			}

			.search-form {
				height: 100%;
				margin: 0;

				input {
					height: 80upx;
					line-height: 80upx;
				}
			}
		}

		.search-btm {
			border-top: 1upx solid #EDEDED;
			padding: 40upx 30upx 0 30upx;
			font-size: 28upx;
			font-family: PingFang-SC-Regular;
			font-weight: 400;

			.search-btm-top-right {
				color: #F44336;
				font-weight: 700;
			}

			.search-btm-btm {
				margin-top: 80upx;
			
			.search-btm-box {
				display: flex;
				flex-wrap: wrap;
			}
			
				.search-btm-title {
					display: block;
					font-size: 30upx;
					font-weight: bold;
					color: #303030;
					margin-bottom: 30upx;
					padding: 4upx 0;
				}

				.search-btm-history {
					text-align: left;
					flex-wrap: wrap;
					margin: 0 0 6upx 0;

					.search-btm-history-in {
						padding: 20upx 35upx;
						color: #666666;
						text-align: center;
						background-color: #F5F5F5;
						border-radius: 32upx;
					}
				}
			}

		}

		.search-list {
			margin: 0 30upx;
			font-size: 32upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #303030;

			.search-list-top {
				padding: 20upx 104upx;
				background-color: #F5F5F5;

			}

			.search-list-list {

				.search-list-list-in {
					.title-fullname {
						display: block;
						margin: 30upx 0;
					}

					.title-in {
						width: 335upx;
						height: 312upx;
						background: rgba(255, 255, 255, 1);
						border: 1upx solid rgba(218, 218, 218, 1);
						border-radius: 8upx;
						font-size: 24upx;

						.title-in-image {
							width: 100%;
							height: 191upx;

						}

						.title-location {
							margin-left: 20upx;

							.title-name {
								display: block;
								margin: 17upx 0;
							}

							.locationfill-font {
								color: #999;
							}

						}
					}
				}

			}
		}

	}
</style>
