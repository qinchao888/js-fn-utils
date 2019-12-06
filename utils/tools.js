'use strict';

function checkDevice () { // 检测设备类型(ios or android)
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('Adr') > -1;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isAndroid) {
    return 'android';
  } else if (isIOS) {
    return 'ios';
  } else {
    return '未知类型';
  }
}

function checkBrowser () { // 检测浏览器内核
 var u = navigator.userAgent;
 var browserList = {
   trident: u.indexOf('Trident') > -1, //IE内核
   presto: u.indexOf('Presto') > -1, //opera内核
   webkit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
   gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1 //火狐内核
 };
 return Object.keys(browserList)[Object.values(browserList).indexOf(true)];
}

module.exports = {
  checkDevice: checkDevice,
  checkBrowser: checkBrowser
}
