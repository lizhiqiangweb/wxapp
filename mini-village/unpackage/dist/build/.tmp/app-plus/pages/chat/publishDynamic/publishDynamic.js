(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/publishDynamic/publishDynamic"],{1605:function(t,e,i){"use strict";i.r(e);var a=i("80d1"),n=i("2ec4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("61d4");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"7dc07e8e",null);e["default"]=u.exports},"2ec4":function(t,e,i){"use strict";i.r(e);var a=i("393c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"393c":function(t,e,i){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0acf");var n={data:function(){return{modalName:null,textareaAValue:"",imgList:[],picUrl:"",Longitude:"",Latitude:"",pic:[{name:"相册",id:"1"},{name:"拍照",id:"2"}],locationName:""}},methods:{textareaAInput:function(t){this.textareaAValue=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},selectPic:function(e){var i=this;if(1==e)this.hideModal(),t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=i.imgList.length?(i.imgList=i.imgList.concat(t.tempFilePaths),i.upload(i.imgList[0])):(i.imgList=t.tempFilePaths,i.upload(i.imgList[0]))}});else if(2==e){var n=this;this.hideModal(),t.chooseImage({count:1,sourceType:["camera"],success:function(e){var i=e.tempFilePaths;t.saveFile({tempFilePath:i[0],success:function(t){var e=t.savedFilePath;console.log(a(e," at pages/chat/publishDynamic/publishDynamic.vue:117")),n.imgList.length,n.imgList.push(e),n.upload(n.imgList[0])}})}})}},upload:function(e){var i=this;t.uploadFile({url:i.$env.baseUrl+i.$api.fileUpload+"?type=grouptour",filePath:e,name:"file",success:function(t){var e=JSON.parse(t.data);i.picUrl=e.data[0]}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var i=this;t.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&i.imgList.splice(e.currentTarget.dataset.index,1)}})},sumbit:function(){if(""==this.textareaAValue)t.showToast({title:"请填写动态内容",icon:"none"});else if(0==this.imgList.length)t.showToast({title:"请添加照片",icon:"none"});else if(""==this.locationName)t.showToast({title:"请选择你所在位置",icon:"none"});else{var e=this;e.Latitude=t.getStorageSync("getLatitude"),e.Longitude=t.getStorageSync("getLongitude"),e.$request.httpTokenRequest(e.$api.AddTourist,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,CircleContent:e.textareaAValue,ImageUrl:e.picUrl,Longitude:e.Latitude,Latitude:e.Longitude}).then(function(e){200===e.data.flag?(t.showToast({title:e.data.msg,icon:"none"}),t.navigateBack()):t.showToast({title:e.data.msg,icon:"none"})})}},getLocation:function(){t.chooseLocation({success:function(t){console.log(a(t," at pages/chat/publishDynamic/publishDynamic.vue:216")),this.locationName=t.address}})},getAddress:function(e,i){var n=this;n.$request.httpTokenRequest(n.$api.getAddress,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,Longitude:i,Latitude:e}).then(function(e){console.log(a(e," at pages/chat/publishDynamic/publishDynamic.vue:230")),200===e.data.flag?(n.locationName=e.data.data.address,console.log(a(n.locationName," at pages/chat/publishDynamic/publishDynamic.vue:233"))):t.showToast({title:e.data.msg,icon:"none"})})}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key;var e=this;t.getLocation({type:"gcj02",success:function(t){e.Latitude=t.latitude,e.Longitude=t.longitude,e.getAddress(e.Latitude,e.Longitude)}})}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},"61d4":function(t,e,i){"use strict";var a=i("956b"),n=i.n(a);n.a},"7b5c":function(t,e,i){"use strict";(function(t){i("fbf9"),i("921b");a(i("66fd"));var e=a(i("1605"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"80d1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"956b":function(t,e,i){}},[["7b5c","common/runtime","common/vendor"]]]);