'use strict';

function RGBToHex(rgb) { // rgb转16进制
  var arr = rgb.match(/\d+/g);
  return '#'.concat((arr[0] << 16 | arr[1] << 8 | arr[2]).toString(16).padStart(6, '0'));
}

function HexToRGB(hex) { // 16进制转rgb
  var arr = hex.replace(/([0-9a-fA-F])/g, '$1$1');
  return 'rgba('.concat(arr[0] >> 16, ', ').concat(arr[1] >> 8 & 0xff, ', ').concat(arr[2] & 0xff, '})');
}

module.exports = {
  RGBToHex: RGBToHex,
  HexToRGB: HexToRGB
}
