import api from './api.js'
import env from './env.js'


//不带token
const httpRequest = (url,methods,param) => {
    let httpDefaultOpts = {
        url: env.baseUrl+url,
        data: param,
        method: methods,
        header: method == 'post' ? {
		Version:api.versionCode,
        'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    } : {
		 Version:api.versionCode,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
        dataType: 'json',
    }
    let promise = new Promise(function(resolve, reject) {
        uni.request(httpDefaultOpts).then(
            (res) => {
                resolve(res[1])
            }
        ).catch(
            (response) => {
                reject(response)
            }
        )
    })
    return promise
};

//带Token请求
const httpTokenRequest = (url,methods, param) => {
	// let key = uni.getStorageSync('key');
    let httpDefaultOpts = {
        url: env.baseUrl+url,
        data: param,
        method: methods,
        header: methods == 'post' ? {
        'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    } : {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
        dataType: 'json',
    }
    let promise = new Promise(function(resolve, reject) {
        uni.request(httpDefaultOpts).then((res) => {
                resolve(res[1])
				// if (res[1].data.msg === "请登录") {				
				// 	uni.navigateTo({
				// 		url: '../login/login' 
				// 	});	
				// }
            }
        ).catch(
            (response) => {
                reject(response)
            }
        )
    })
    return promise
};

// php请求
const phpTokenRequest = (url,methods, param) => {
	// let key = uni.getStorageSync('key');
    let httpDefaultOpts = {
        url: env.phpUrl+url,
        data: param,
        method: methods,
        header: methods == 'post' ? {
        'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    } : {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
        dataType: 'json',
    }
    let promise = new Promise(function(resolve, reject) {
        uni.request(httpDefaultOpts).then(
            (res) => {
                resolve(res[1])
				// if (res[1].data.msg === "请登录") {
				// 	uni.navigateTo({
				// 		url: '../login/login' 
				// 	});	
				// }
            }
        ).catch(
            (response) => {
                reject(response)
            }
        )
    })
    return promise
};
 
export default {
		httpRequest,
		httpTokenRequest,
		phpTokenRequest
}

