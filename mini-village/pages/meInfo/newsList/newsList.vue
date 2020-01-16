<template>
	<view class="chat-list">
		<view style="width: 100%">
			<view class="chat-top flexs" v-for="(item,index) in newsList" :key="index" @tap="newsClick(item.id)">
				<view class="evaluate-msg-head-left flexs">
					<text class="head-pic background-cover" :style="{backgroundImage:'url(' + item.img+ ')'}"></text>
					<view class="head-info">
						<view class="head-info-name">
							<text class="head-info-nike">{{item.title}} <text class="news" v-show="item.id==1&&item.num!==0||item.id==2&&item.num!==0||item.id==3&&item.num!==0||item.id==4&&item.num!==0">{{item.num}}</text></text>
						</view>
						<text class="head-info-time">{{item.content}}</text>
					</view>
				</view>
				<view class="chat-right">
					{{item.time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import '../../../static/common.css';

	export default {

		data() {
			return {
				newsList: [{
						'title': '评论',
						'content': '',
						'img': `${this.$env.img1}news_comment@2x.png`,
						'id': 1,
						'num':0,
						time:''
					},
					{
						'title': '点赞',
						'content': '',
						'img': `${this.$env.img1}news_help@2x.png`,
						'id': 2,
						'num':0,
						time:''
					},
					{
						'title': '粉丝',
						'content': '',
						'img': `${this.$env.img1}news_fans@2x.png`,
						'id': 3,
						'num':0,
						time:''
					},
					{
						'title': '本村消息',
						'content': '',
						'img': `${this.$env.img1}news_news@2x.png`,
						'id':4,
						'num':0,
						time:''
					},
					{
						'title': '系统消息',
						'content': '',
						'img': `${this.$env.img1}news_system@2x.png`,
						'id': 5,
						'num':0,
						time:''
					},

				],
				newsInfo:{}

			};
		},
		methods: {
			newsInit() {
				let that = this
				that.$request.httpTokenRequest(that.$api.getSpMessageCenterInfo, that.$api.get, {
					Key: that.$api.Key,
					Client: that.$api.CLIENT,
					Version: that.$api.VERSION,
				}).then((res) => {
					if (res.data.flag === 200) {
						that.newsInfo=res.data.data
						that.newsList[0].num=that.newsInfo.comment_count
						that.newsList[0].content=that.newsInfo.neares_comment_message_info.content
						that.newsList[0].time=that.newsInfo.neares_comment_message_info.date_desc
						
						that.newsList[1].num=that.newsInfo.like_count
						that.newsList[1].content=that.newsInfo.neares_like_message_info.content
						that.newsList[1].time=that.newsInfo.neares_like_message_info.date_desc
						
						that.newsList[2].num=that.newsInfo.fans_count
						that.newsList[2].content=that.newsInfo.neares_fans_count_message_info.content
						that.newsList[2].time=that.newsInfo.neares_fans_count_message_info.date_desc
						
						that.newsList[3].num=that.newsInfo.village_count
						that.newsList[3].content=that.newsInfo.neares_villaget_message_info.content
						that.newsList[3].time=that.newsInfo.neares_villaget_message_info.date_desc
						
						that.newsList[4].num=that.newsInfo.system_count
						that.newsList[4].content=that.newsInfo.neares_system_count_message_info.content
						that.newsList[4].time=that.newsInfo.neares_system_count_message_info.date_desc
						
						

						
					}
				});


			},
			newsClick(id){
				if(id==1){
					uni.navigateTo({
						url: '../myComment/myComment' 
					})
				}else if(id==2){
					uni.navigateTo({
						url: '../myLike/myLike' 
					})
				}else if(id==3){
					uni.navigateTo({
						url: '../fans/fans' 
					})
				}else if(id==4){
					uni.navigateTo({
						url: '../villageNews/villageNews' 
					})
				}
				
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo');
			this.$api.Key=this.userInfo.key
			this.newsInit()
		}
	}
</script>

<style lang="less" scoped>
	.chat-list {
		// padding: 30upx;
		position: relative;
		padding-top: 20upx;

		.chat-top {
			margin: 0 30upx;
			padding: 30upx 0;
			justify-content: space-between;
			align-items: flex-start;
			border-bottom: 1upx solid #EDEDED;

			.evaluate-msg-head-left {
				justify-content: flex-start;
				align-items: center;

				.head-pic {
					display: block;
					width: 90upx;
					height: 90upx;
					border-radius: 50%;
					margin-right: 20upx;

				}

				.head-info-name {


					.head-info-nike {
						color: #303030;
						font-size: 32upx;
						font-weight: 700;
						position: relative;

						.news {
							padding: 7upx 10upx;
							background: #F63333;
							border-radius: 50%;
							font-size: 26upx;
							font-weight: normal;
							color: #fff;
							position: absolute;
							top: -20upx;
							right: -20upx;
						}
					}

					.head-info-nike-in {
						display: inline-block;
						margin-left: 10upx;
						color: #999;
						font-size: 26upx;
						font-weight: normal;
					}



				}

				.head-info-time {
					display: block;
					margin-top: 20upx;
				}


			}

			.chat-add {
				width: 40upx;
				height: 40upx;
			}

		}

		.weixin-add {
			padding-top: 26upx;
			justify-content: space-between;
			align-items: center;

			.chat-right {
				width: 110upx;
				height: 50upx;
			}
		}
	}
</style>
