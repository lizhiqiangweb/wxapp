
const common = {
	//判断字符是否为空
	empty: function(str) {
		if (str == null) return true;
		if (str.length == 0) return true;
		if (str == '') return true;
		if (str == undefined) return true;
		return false;
	},
	intval: function(value, defaultValue) {
		var value = parseInt(value);
		if (isNaN(value)) value = defaultValue;
		return value;
	},
	floatval: function(value, defaultValue) {
		var value = parseFloat(value);
		if (isNaN(value)) value = defaultValue;
		return value;
	},
}

const tip = {
  msg: function(title, reurl, locationType) {
    uni.showToast({
      title: title,
	  icon:'none',
      duration: 2000,
      success: function(res) {
        if (reurl) {
          setTimeout(function() {
            if (locationType == 'reLaunch') {
              uni.reLaunch({
                url: reurl,
              })
            } else if (locationType == 'redirect') {
              uni.redirectTo({
                url: reurl,
              })
            } else if (locationType == 'switchTab') {
              uni.switchTab({
                url: reurl,
              })
            } else {
              uni.navigateTo({
                url: reurl,
              });
            }
          }, 2000)
        }
      }
    })
  },
  error: function(warningText, reurl, locationType) {
    uni.showModal({
      title: '温馨提示',
      content: warningText,
      showCancel: false,
      success: function(res) {
        if (reurl) {
          if (locationType == 'reLaunch') {
            uni.reLaunch({
              url: reurl,
            })
          } else if (locationType == 'redirect') {
            uni.redirectTo({
              url: reurl,
            })
          } else if (locationType == 'switchTab') {
            uni.switchTab({
              url: reurl,
            })
          } else if (locationType == 'navigateBack') {
            uni.navigateBack({
              delta: 1
            })
          } else {
            uni.navigateTo({
              url: reurl,
            });
          }
        }
      },
    })
  },
  success: function(successText, reurl, locationType) {
    uni.showModal({
      title: '操作成功',
      content: successText,
      showCancel: false,
      success: function(res) {
        if (reurl) {
          if (locationType == 'reLaunch') {
            uni.reLaunch({
              url: reurl,
            })
          } else if (locationType == 'redirect') {
            uni.redirectTo({
              url: reurl,
            })
          } else if (locationType == 'switchTab') {
            uni.switchTab({
              url: reurl,
            })
          } else {
            uni.navigateTo({
              url: reurl,
            });
          }
        }
      }
    })
  },
  confirm: function(msg, success) {
    uni.showModal({
      title: '确定要此操作吗？',
      content: msg,
      success: function(res) {
        if (res.confirm == true) {
          success();
        }
      },
      fail: function() {}
    })
  },
  seriousError: function(errorText, url) {
    uni.showModal({
      title: '严重错误',
      content: errorText,
      showCancel: false,
      confirmText: "我知道了"
    })
  }
}


const storage = {
	set: function(key, data) {
		uni.setStorageSync(key, data);
	},
	get: function(key) {
		return uni.getStorageSync(key);
	},
	removeKey: function(key) {
		return uni.removeStorageSync(key);
	}
}

const regex = {
  mobile: function(mobile) {
    var regex = new RegExp(/^0?(13|15|16|19|18|14|17)[0-9]{9}$/, 'g');
    return regex.test(mobile);
  },
}

export default {
	common: common,
	storage: storage,
	tip:tip,
	regex:regex
}
