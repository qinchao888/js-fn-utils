### 获取格式化的日期

#### getDate(format, time)

##### 参数: 

| 参数名称   |      值    |
|----------|:-------------:|
| format   |默认值：'yyyy-mm-dd hh:mm:ss'|
| time     |默认值：new Date()|

format 支持格式：

```
1. 'hh:mm:ss'
2. 'hh:mm:s'
3. 'hh:m:ss'
4. 'hh:m:s'
5. 'h:mm:ss'
6. 'h:mm:s'
7. 'h:m:ss'
8. 'h:m:s'
9. 'yyyy-mm-dd'
10. 'yyyy-mm-d'
11. 'yyyy-m-dd'
12. 'yyyy-m-d'
13. 'yyyy'
14. 'yyyy-mm'
15. 'hh'
16. 'hh:mm'
```

其中的 : 和 - 可以被非空字符替换。

```js
// 常见格式
getDate('yyyy年mm月dd日 hh时mm分ss秒') //2019年12月06日 15时45分30秒
getDate('yyyy-mm-dd hh:mm:ss') // 2019-12-06 15:45:30
getDate('yyyy/mm/dd hh:mm:ss') // 2019/12/06 15:45:30
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
