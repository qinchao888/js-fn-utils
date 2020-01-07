var date = require('./utils/date.js');
var number = require('./utils/number.js');
var tools = require('./utils/tools.js');

module.exports = {
  getDate: date.getDate,
  thousandSeparatorFormat: number.thousandSeparatorFormat,
  checkDevice: tools.checkDevice,
  checkBrowser: tools.checkBrowser,
  checkIsMobile: tools.checkIsMobile,
  getRandomColor: tools.getRandomColor,
  getUpperCaseArr: tools.getUpperCaseArr,
  getLowerCaseArr: tools.getLowerCaseArr,
  seperateStr: tools.seperateStr
}
