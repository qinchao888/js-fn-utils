
function getFormatDate (date) { // yyyy-mm-dd
  try {
    var time = date ? new Date(date) : new Date()
    var year = time.getFullYear()
    var month = formatTime(time.getMonth() + 1)
    var date = formatTime(time.getDate())
    return year + '-' + month + '-' + date
  } catch (err) {
    console.log('getFormatDate error', err)
  }
}

function getFormatTime (date) { // hh:mm:ss
  try {
    var time = date ? new Date(date) : new Date()
    var hour = formatTime(time.getHours())
    var minute = formatTime(time.getMinutes())
    var second = formatTime(time.getSeconds())
    return hour + ':' + minute + ':' + second
  } catch (err) {
    console.log('getFormatTime error', err)
  }
}

function getDate (date) {
  var ymd = getFormatDate(date)
  var hms = getFormatTime(date)
  return ymd + ' ' + hms
}

function formatTime (val) {
  return val < 10 ? '0' + val : val
}

function getDawnTime (date) {
  var time = date ? new Date(date) : new Date()
  return new Date(time.setHours(0, 0, 0, 0))
}

function getNightTime (date) {
  var time = date ? new Date(date) : new Date()
  return new Date(time.setHours(23, 59, 59, 99))
}

function getBeginOfMonth (date) {
  var time = date ? new Date(date) : new Date()
  time.setDate(1)
  time.setHours(0, 0, 0, 0)
  // return new Date(time.getFullYear(), time.getMonth(), 1, 0, 0, 0, 0)
  return time
}

function getEndOfMonth (date) {
  var time = date ? new Date(date) : new Date()
  time.setMonth(time.getMonth() + 1)
  time.setDate(0)
  time.setHours(23, 59, 59, 99)
  return time
}

module.exports = {
  getFormatDate: getFormatDate,
  getFormatTime: getFormatTime,
  getDate: getDate,
  getDawnTime: getDawnTime,
  getNightTime: getNightTime,
  getBeginOfMonth: getBeginOfMonth,
  getEndOfMonth: getEndOfMonth
}