### 获取格式化的日期

#### getDate(time)

输出格式形如：yyyy-mm-dd hh:mm:ss

```js
getDate() // 2020-11-23 17:12:15
getDate('2020/01/01') // 2020-01-01 00:00:00
```

#### getFormatDate(time)

输出格式形如：yyyy-mm-dd

```js
getFormatDate() // 2020-11-23
getFormatDate('2020/01/01') // 2020-01-01
```

#### getFormatTime(time)

输出格式形如： hh:mm:ss

```js
getFormatTime() // 17:12:15
getFormatTime('2020/01/01') // 00:00:00
```

#### getDawnTime(time)

参数：默认值为当前时间

描述：获取指定日期的凌晨的时间

```js
getDawnTime('2020/01/01') // Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)
```

#### getNightTime(time)

参数：默认值为当前时间

描述：获取指定日期的傍晚的时间

```js
getNightTime('2020/01/01') // Wed Jan 01 2020 23:59:59 GMT+0800 (中国标准时间)
```

#### getBeginOfMonth(time)

参数：默认值为当前时间

描述：获取指定日期的月初时间

```js
getBeginOfMonth('2020/11/10 10:00:00') // Sun Nov 01 2020 00:00:00 GMT+0800 (中国标准时间)
```

#### getEndOfMonth(time)

参数：默认值为当前时间

描述：获取指定日期的月末时间

```js
getEndOfMonth('2020/11/10 10:00:00') // Mon Nov 30 2020 23:59:59 GMT+0800 (中国标准时间)
```

### 千分位分割符

#### thousandSeparatorFormat(value)

value: 合法的数值

```js
// 案例
thousandSeparatorFormat(12345) // 12,345
thousandSeparatorFormat(12345.12345) // 12,345.12345
thousandSeparatorFormat(0.12345) // 0.12345
```

### 检测设备类型

#### checkDevice()

返回值：android | ios | 未知类型

### 检测浏览器内核

#### checkBrowser()

返回值：trident | presto | webkit | gecko

### 检测是移动设备还是pc端设备

#### checkIsMobile()

返回值：true | false

### 获取16进制随机色

#### getRandomColor()

返回值：16进制颜色名，形如：#00ff00

### 获取由大写的英文字母构成的数组，[A, B, ...]

#### getUpperCaseArr(len)

len: 默认值为26

```js
// 例：
getUpperCaseArr() // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

getUpperCaseArr(2) // ['A', 'B']
```

### 获取由小写的英文字母构成的数组，[a, b, ...]

#### getLowerCaseArr(len)

len: 默认值为26

```js
// 例：
getLowerCaseArr() // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

getLowerCaseArr(2) // ['a', 'b']
```

### 将字符串按照指定长度分割成数组

#### seperateStr(str, len)

str: 需要分割的字符串

len: 默认值为10

```js
var str = 'this is a test 12345678';
seperateStr(str) // ['this is a ', 'test 12345', '678']
seperateStr(str, 12) // ['this is a te', 'st 12345678']
```

### rgb转16进制

#### RGBToHex(rgb)

```js
RGBToHex('rgb(0, 16, 255)') // #0010ff
```

### 16进制转rgb

#### HexToRGB(hex)

```js
HexToRGB('#10ffff') // rgb(16, 255, 255)
```

### 设置文档标题

#### setTitle(val)

```js
// 设置<title></title>之间的内容
setTitle('这里设置文档标题')
```