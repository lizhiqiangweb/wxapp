(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/nikeName/nikeName"],{"085e":function(e,n,t){"use strict";t.r(n);var a=t("912c"),i=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=i.a},6148:function(e,n,t){"use strict";var a=t("f1ea"),i=t.n(a);i.a},"8a5e":function(e,n,t){},"912c":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("0acf");var i={data:function(){return{user:{},wordChange:"",nikeName:""}},methods:{setUserRealName:function(e){this.user.real_name=e.detail.value},canelClick:function(){this.wordChange=""},nameClick:function(){var n=this;n.$request.phpTokenRequest(n.$api.editMember,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,MemberNickName:n.user.real_name}).then(function(n){console.log(e(n," at pages/meInfo/nikeName/nikeName.vue:40")),200===n.data.flag&&(a.showToast({title:n.data.msg,icon:"none"}),a.navigateBack())})}},onLoad:function(n){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.nikeName=n.name,this.wordChange=this.nikeName,console.log(e(this.nikeName," at pages/meInfo/nikeName/nikeName.vue:57"))}};n.default=i}).call(this,t("0de9")["default"],t("6e42")["default"])},"98b2":function(e,n,t){"use strict";(function(e){t("fbf9"),t("921b");a(t("66fd"));var n=a(t("e1c9"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},e1c9:function(e,n,t){"use strict";t.r(n);var a=t("f3d1"),i=t("085e");for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);t("f28f"),t("6148");var o=t("2877"),f=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"6527e525",null);n["default"]=f.exports},f1ea:function(e,n,t){},f28f:function(e,n,t){"use strict";var a=t("8a5e"),i=t.n(a);i.a},f3d1:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})}},[["98b2","common/runtime","common/vendor"]]]);