## 事件总线 EventBus

## 说明
* 基于 JavaScript 封装的事件总线库，用于 react、vue、小程序等等（在自己能力范围内开发的，可能有有些地方没考虑完全）
* 开发自己的项目可以用自己的 **EventBus**

## npm
```
npm i dwj-eventbus
```
## test
test2 文件：
```js
const DWJEventBus = require('../lib/dengwj')
require('./test1')

DWJEventBus.emit('test1', 'dwj', 'zww') 
DWJEventBus.emit('once', 'adwfwq', 'adqwqqq') 
DWJEventBus.emit('test2', 'qwjkqwkqwqwqwq', 'gwawqwqq') 
DWJEventBus.off('test2')
// DWJEventBus.off(['test1', 'once'])
// DWJEventBus.off('wfww')

console.log(DWJEventBus.eventBus);
```
test1 文件
```js
const DWJEventBus = require('../lib/dengwj')

DWJEventBus.on('test1', (a, b) => {
  console.log(a, b);
})
DWJEventBus.on('test1', (a, b) => {
  console.log(a, b);
})
DWJEventBus.on('test2', (a, b) => {
  console.log(a, b);
})

DWJEventBus.once('once', (a, b) => {
  console.log('once');
  console.log(a, b, '第一个');
})
DWJEventBus.once('once', (a, b) => {
  console.log('once');
  console.log(a, b, '第二个');
})

console.log(DWJEventBus.eventBus);
```