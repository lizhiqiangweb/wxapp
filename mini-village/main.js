import Vue from 'vue'
import App from './App'
import request from '@/common/http.js'
import env from '@/common/env.js'
import api from '@/common/api.js'

import md5 from './js_sdk/js-md5/build/md5.min.js'
Vue.component('md5', md5)
import JMessage from './js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
Vue.component('JMessage', JMessage)

// 引入IM聊天
import Chat from './common/chat.js'

import cuCustom from '@/static/colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)


Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$env = env


App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()