function formatTime (time, length, unit) {
  if (!length) {
    return '';
  } 
  return +time < 10 && length === 2 ? '0' + time : time;
}

function handleTime(format, time, dateReg, timeReg) {
  time = time ? new Date(time) : new Date(); // 默认为获取当前日期
  var isDate = format.includes('yyyy') ? true : false; // 判断是年月日还是时分秒
  var lengthList = format.split(/[^a-z]/).filter(item => item !== '').map(item => item.length);
  if (isDate) { // 年月日格式
    var unitList = format.match(dateReg);
    console.log('unitList', unitList)
    var year = time.getFullYear() + (unitList[1]? unitList[1] : '');;
    var month = formatTime(time.getMonth() + 1, lengthList[1]) + (unitList[2] ? unitList[2] : '');
    var date =  formatTime(time.getDate(), lengthList[2]) + (unitList[3] ? unitList[3] : '');
    return year + month + date;
  } else { // 时分秒格式
    var unitList = format.match(timeReg);
    var hour = formatTime(time.getHours(), lengthList[0]) + (unitList[1] ? unitList[1] : '');
    var minute = formatTime(time.getMinutes(), lengthList[1]) + (unitList[2] ? unitList[2] : '');
    var second =  formatTime(time.getSeconds(), lengthList[2]) + (unitList[3] ? unitList[3] : '');
    return hour + minute + second;
  }
}

function getDate (format, time) {
  format = format ? format : 'yyyy-mm-dd hh:mm:ss';
  var formatList = format.split(' ');
  var dateReg = /^[a-z]{4}(?:([^a-z])[a-z]{1,2}(?:([^a-z])[a-z]{1,2}([^a-z])?)?)?$/; // 年月日校验正则
  var timeReg = /^[a-z]{1,2}(?:([^a-z])[a-z]{1,2}(?:([^a-z])[a-z]{1,2}([^a-z])?)?)?$/ // 时分秒校验正则
  if (!((formatList[0] && !formatList[1] && (timeReg.test(formatList[0]) || dateReg.test(formatList[0]))) || (formatList[0] && formatList[1] && dateReg.test(formatList[0]) && timeReg.test(formatList[1])))) { // 日期非法
    formatList = 'yyyy-mm-dd hh:mm:ss'.split(' '); // 默认日期格式
    console.log('数据非法！')
  }  
  var dateRes = handleTime(formatList[0], time, dateReg, timeReg)
  var timeRes = formatList[1] && handleTime(formatList[1], time, dateReg, timeReg)
  return dateRes + (timeRes ? ' ' + timeRes : '');
}

module.exports = {
  getDate
}
