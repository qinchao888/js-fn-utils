var date = require('./lib/date.js');
var number = require('./lib/number.js');
var tools = require('./lib/tools.js');
var color = require('./lib/color.js');

module.exports = {
  getDate: date.getDate,
  getFormatDate: date.getFormatDate,
  getFormatTime: date.getFormatTime,
  getDawnTime: date.getDawnTime,
  getNightTime: date.getNightTime,
  getBeginOfMonth: date.getBeginOfMonth,
  getEndOfMonth: date.getEndOfMonth,
  thousandSeparatorFormat: number.thousandSeparatorFormat,
  checkDevice: tools.checkDevice,
  checkBrowser: tools.checkBrowser,
  checkIsMobile: tools.checkIsMobile,
  getRandomColor: tools.getRandomColor,
  getUpperCaseArr: tools.getUpperCaseArr,
  getLowerCaseArr: tools.getLowerCaseArr,
  seperateStr: tools.seperateStr,
  setTitle: tools.setTitle,
  RGBToHex: color.RGBToHex,
  HexToRGB: color.HexToRGB,
}
