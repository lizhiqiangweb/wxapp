let baseUrl = ""
let img1=""
let phpUrl=""

// App不限制http,https的，小程序限制正式环境只能用https,但测试环境下可以用http。

if (process.env.NODE_ENV === 'development') {
	// 测试环境
	// baseUrl = 'https://api.ncweilv.com/new/'
	// phpUrl ='https://m.ncweilv.com/nongcheng_api/Public/nongcheng/?service=',
	// img1 = 'https://ncweilv-download.oss-cn-shenzhen.aliyuncs.com/mini-app/' 
	
	// 正式环境
	// baseUrl = 'https://m.ncweilv.com/api/'
	// phpUrl ="https://m.ncweilv.com/nongcheng_api/Public/nongcheng/?service=",
	// img1 = 'https://ncweilv-download.oss-cn-shenzhen.aliyuncs.com/mini-app/' 
	
	// 测试环境
	baseUrl ='http://test.api.ncweilv.com/new/'
	phpUrl ='http://test.m.ncweilv.com/nongcheng_api/Public/nongcheng/?service=',
	img1 = 'https://ncweilv-download.oss-cn-shenzhen.aliyuncs.com/mini-app/'
} 


// export default baseUrl
export default{
	baseUrl,
	phpUrl,
	img1
}
	
