let VERSION = "1.0.0"; //版本
let userInfo=uni.getStorageSync('userInfo');
let key = userInfo.key


// ||"b77ffd1da62aee94d3aedc7c94696d2d"
//     9b4e4007d0270f9094b35533386b4a37

export default {
	VERSION: VERSION, //版本
	CLIENT: 'Other', //客户端
	Key: key,
	// Key: 'ca38096355b5b455f5a74c26',
	post: 'post',
	get: 'get',
	currentCity: 'search/currentCity', //当前城市
	getSmallProceduresIndex: 'smallproduresindex/getSmallProceduresIndex', //小程序首页
	villageInfo: 'villagedetails/villageInfo', //乡村详情页信息
	getInformation: 'smallproduresindex/getInformation', //小程序首页（热门有趣乡村风采）
	addVillageVoteNum: 'smallproduresindex/addVillageVoteNum', //小程序乡村魅力版乡村投票
	getCharmingVillageRank: 'smallproduresindex/getCharmingVillageRank', //小程序魅力乡村排行
	getVillageImageList: 'villagedetails/getVillageImageList', //村景
	fileUpload: 'upload/fileUpload', //图片上传
	UploadImage: 'Upload.UploadImage', //php上传
	addVillageImgList: 'villagedetails/addVillageImgList', //村景图片上传
	getLabels: 'dictionary/getLabels', //获取标签列表 (0默认,1约伴标签,2问答标签3文章标签 5 村特色风采照片标签 6 乡村标签)
	getVillageCharacteristicImgList: 'villagedetails/getVillageCharacteristicImgList', //特色风采图片展示
	addCharacteristicImg: 'villagedetails/addCharacteristicImg', //特色风采添加图片
	getVillageInformatioinList: 'villagedetails/getVillageInformatioinList', //特色风采咨询展示
	getVillageVideoList: 'villagedetails/getVillageVideoList', //特色风采视频列表展示
	addVillageVideo: 'villagedetails/addVillageVideo', // 特色风采添加视频
	editVillageIntro: 'villagedetails/editVillageIntro', // 提交，编辑村简介
	getVillageIntegralRecord: 'villagedetails/getVillageIntegralRecord', // 微豆排行版
	getVillageRanking: 'villagedetails/getVillageRanking', // 村排名展示
	dayliTask: 'smallProduresContribution/dayliTask', // 获取小程序每日任务
	myContribution: 'account/myIntegralRecord', // 小程序贡献值明细
	GetDocument: 'Index.GetDocument', // 获取文档接口
	AskforAdmin: 'Village.AskforAdmin', // 村管理员申请
	villageEdit: 'villagedetails/villageEdit', // 编辑乡村详情
	GetAreaList: 'Index.GetAreaList', // 获取地区列表
	addMyVillage: 'villagedetails/addMyVillage', // 小程序添加我的家乡
	getSearchVillage: 'smallproduressearch/getSearchVillage', // 小程序搜索美丽乡村
	GetMemberInfo: 'Member.GetMemberInfo', // 获取用户信息
	editMember: 'Member.EditMember', // 修改用户信息
	getFansNum: 'member/getFansNum', // 获取我的关注，粉丝用户数
	getFriendList: 'member/getFriendList', // 获取我的好友列表
	getSpMessageByType: 'smallproduresMessage/getSpMessageByType', // 消息中心按照类别获取列表 3系统消息 5 本村消息 6 评论消息 7 点赞消息 8 粉丝消息
	getSpMessageCenterInfo: 'smallproduresMessage/getSpMessageCenterInfo', // 获取小程序的消息中心首页展示
	getOrderList: 'order/getOrderList', // 我的订单
	cancelOrder: 'order/cancelOrder', // 取消订单
	deleteOrder: 'order/deleteOrder', // 删除订单
	Getopenid: 'Login.Getopenid', // 获取微信小程序OPENID
	ThirdLogin: 'Login.ThirdLogin', // 第三方登录
	getDynamicList: 'smallproduresindex/getDynamicList', // 获取动态  1:最新 2:热门 3:关注人的动态
	adddynamic: 'Tourist.Adddynamic', // 动态点赞 //点赞/评论/回复 1.0.0
	evaPraise: 'Tourist.EvaPraise', // 对评论点赞
	GetWxMobile: 'Login.GetWxMobile', // 微信手机号解密
	BindPhone: 'Login.BindPhone', // 微信绑定手机号
	AddTourist: 'Tourist.AddTourist', // 发布动态
	likeVideo: 'video/likeVideo', // 点赞视频
	viewVideo: 'video/viewVideo', // 更新观看视频数
	getVideoCommentList: 'video/getVideoCommentList', // 获取视频评论列表
	commentVideo: 'video/commentVideo', // 视频发布评论
	getFriendList: 'member/getFriendList', // 获取我的好友列表 1关注列表 2粉丝列表 3 好友列表
	getChatroomVillagerList: 'smallProduresChat/getChatroomVillagerList', // 获取聊天室村民列表
	getSearchVillageByAreaId: 'smallproduressearch/getSearchVillageByAreaId', // 小程序高级搜索根据镇查找村  传townId
	WxBindMobile: 'Login.WxBindMobile', // 绑定手机号
	getAddress: 'public/getAddress', //根据经纬度获取地址
	getLogAndLat: 'public/getLogAndLat', //根据地址获取经纬度
	Getopenid: 'Login.Getopenid', //获取Getopenid
	JoinVillage: 'member/JoinVillage', //加入社区,村庄
	exitVillage: 'member/exitVillage', //退出社区,村庄
	villageDynamics: 'villagedetails/villageDynamics', //乡村详情页信息本村动态
	shareTouristCircle: 'tourist/shareTouristCircle', //分享动态
	addVillageEvaluatinParise: 'villagedetails/addVillageEvaluatinParise', // 村评价点赞  传evaluateId num点赞:1 取消点赞：-1 
	addAttention: 'attention/addAttention', // 用户添加关注
	
	getChatroomNum: 'smallProduresChat/getChatroomNum', // 获取聊天室房间号 
	getVillageEvaluation: 'villagedetails/getVillageEvaluation', // 村评价  传villageId 
	
	getMemberCharacteristicImgList: 'smallprodureshome/memberCharacteristicImgList' ,// 特色风采图片展示
	getMemberDynamicList: 'smallprodureshome/memberDynamicList', // 用户发布的动态列表
	getMemberInformatioionList: 'smallprodureshome/memberInformatioinList', // 特色风采资讯展示
	getMemberVideoList: 'smallprodureshome/memberVideoList', // 特色风采视频列表展示
	getMyHomeInfo: 'smallprodureshome/myHomeInfo', // 我的个人主页
	getTargetHomeInfo: 'smallprodureshome/targetHomeInfo', //对方个人主页
	
	
	

	


	
	
	

	
	
}
