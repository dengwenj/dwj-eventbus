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