const DWJEventBus = require('../lib/dengwj')
require('./test1')

DWJEventBus.emit('test1', 'dwj', 'zww') 
DWJEventBus.emit('once', 'adwfwq', 'adqwqqq') 
DWJEventBus.emit('test2', 'qwjkqwkqwqwqwq', 'gwawqwqq') 
DWJEventBus.off('test2')
// DWJEventBus.off(['test1', 'once'])
// DWJEventBus.off('wfww')

console.log(DWJEventBus.eventBus);