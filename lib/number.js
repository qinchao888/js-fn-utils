'use strict';
function thousandSeparatorFormat (number) { // 千分位分割符
  number = number + '';
  if (number.indexOf('.') !== -1) { // 含有小数
    return number.replace(/(?!^)(?=(\d{3})+\.\d+$)/g, ',');
  } else { // 整数
    return number.replace(/(?!^)(?=(\d{3})+$)/g, ',')
  }
}

module.exports = {
  thousandSeparatorFormat: thousandSeparatorFormat
}
