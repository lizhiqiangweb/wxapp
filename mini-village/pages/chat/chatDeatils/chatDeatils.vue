<template>
	<view class="chat">
		<!-- 好友 -->
		<view class="chatContent2">
			<view class="weChatBox">
				<view class="weChatItem" v-for="(item,weChatIndex) in member_list" :key="weChatIndex">
					<view class="weChat_left">
						<image class="peopleImg" :src="item.avatarUrl" mode=""></image>
						<text>
							{{item.nickName}}
						</text>
						<image class="adminIcon" v-if="item.flag == 1" src="../../../static/img/admin_icon.png" mode=""></image>
					</view>
					<image class="weChatIcon" src="../../../static/img/weChat.png" mode="" @click="goTo('../chatDialogue/chatDialogue?username='+item.username+'&nickName='+item.nickName+'&appkey='+item.appkey+'&avatar='+item.avatar)"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			news: [],
			member_list: [],
			headInfo: []
		};
	},
	methods: {
		getGroupMembers() {
			var that = this;
			that.JIM.getGroupMembers({
				'gid' :	that.news.gid
			}).onSuccess(function(data) {
				for(let i = 0; i < data.member_list.length; i++) {
					that.JIM.getResource({
						'media_id' : data.member_list[i].avatar,
					}).onSuccess(function(res) {
						if(data.member_list[i].flag == 1) {
							that.member_list.unshift({
								avatarUrl: res.url,
								username: data.member_list[i].username,
								nickName: data.member_list[i].nickName,
								appkey: data.member_list[i].appkey,
								flag: data.member_list[i].flag,
								avatar: data.member_list[i].avatar
							})
						} else {
							that.member_list.push({
								avatarUrl: res.url,
								username: data.member_list[i].username,
								nickName: data.member_list[i].nickName,
								appkey: data.member_list[i].appkey,
								flag: data.member_list[i].flag,
								avatar: data.member_list[i].avatar
							})
						}
					}).onFail(function(res) {
						if(data.member_list[i].avatar == '') {
							that.member_list.push({
								avatarUrl: that.headInfo.member_head,
								username: data.member_list[i].username,
								nickName: data.member_list[i].nickName,
								appkey: data.member_list[i].appkey,
								flag: data.member_list[i].flag,
								avatar: data.member_list[i].avatar
							})
						} else {
							that.member_list.push({
								avatarUrl: data.member_list[i].avatar,
								username: data.member_list[i].username,
								nickName: data.member_list[i].nickName,
								appkey: data.member_list[i].appkey,
								flag: data.member_list[i].flag,
								avatar: data.member_list[i].avatar
							})
						}
					});
				}
				console.log('成员信息', data)
			}).onFail(function(data) {
				console.log(data);
			});
		},
		goTo(path) {
			uni.navigateTo({
				url: path
			})
		},
		getUserInfo() {
			let that = this
			that.$request.phpTokenRequest(that.$api.GetMemberInfo, that.$api.get, {
				Key: that.$api.Key,
				Client: that.$api.CLIENT,
				Version: that.$api.VERSION,
			}).then((res) => {
				if (res.data.flag === 200) {
					that.headInfo = res.data.data;
					console.log(that.headInfo)
				}
			});
		}
		
	},
	onLoad(options) {
		this.news = options;
		this.getGroupMembers();
		this.getUserInfo();
		//动态设置标题
		uni.setNavigationBarTitle({
		    title: this.news.chatTit
		});
	}
};
</script>

<style lang="less">
.chat {
	padding: 0 30upx;
	.chatContent2 {
		.weChatBox {
			.weChatItem {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #EDEDED;
				padding: 0 0 32upx 0;
				margin: 28upx 0 0 0;
				.weChat_left {
					display: flex;
					align-items: center;
					.peopleImg {
						width: 90upx;
						height: 90upx;
						margin: 0 17upx 0 0;
					}
					text {
						font-size:32upx;
						font-weight:bold;
						color:rgba(48,48,48,1);
					}
					.adminIcon {
						width: 92upx;
						height: 40upx;
						margin: 0 0 0 15upx;
					}
				}
				.weChatIcon {
					width: 110upx;
					height: 50upx;
					display: block;
				}
			}
		}
	}
}
</style>
