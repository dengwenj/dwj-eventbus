class DWJEventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventFunc, thisArg) {
    if (!(eventName && typeof eventName === 'string')) {
      throw `${eventName} is not string`
    }

    if (!(eventFunc && typeof eventFunc === 'function')) {
      throw `${eventFunc} is not function`
    }

    let handleArray = this.eventBus[eventName]

    if (!handleArray) {
      handleArray = []
      this.eventBus[eventName] = handleArray
    }

    handleArray.push(eventFunc.bind(thisArg))
  }

  emit(eventName, ...args) {
    if (!(eventName && typeof eventName === 'string')) {
      throw `${eventName} is not string`
    }

    // 判断自身上有没有这个 key
    const handleBoolean = this.eventBus.hasOwnProperty(eventName)

    if (handleBoolean) {
      const handleArray = this.eventBus[eventName]
      handleArray.forEach(handleFunc => {
        handleFunc(...args)
      })
    }
  }

  once(eventName, eventFunc, thisArg) {
    if (!(eventName && typeof eventName === 'string')) {
      throw `${eventName} is not string`
    }

    if (!(eventFunc && typeof eventFunc === 'function')) {
      throw `${eventFunc} is not function`
    }

    let handleOnce = this.eventBus[eventName]

    // 只会执行一次
    if (!handleOnce) {
      handleOnce = []
      handleOnce.push(eventFunc.bind(thisArg))
      this.eventBus[eventName] = handleOnce
    }
  }

  off(deleteEventName) {
    if (!deleteEventName) return

    const eventNameArr = Array.isArray(deleteEventName)
    const handleBoolean = this.eventBus.hasOwnProperty(deleteEventName)

    if (eventNameArr) {
      deleteEventName.forEach(eventName => {
        this.off(eventName)
      })
    }

    if (handleBoolean) {
      delete this.eventBus[deleteEventName]
    }
  }
}



const d = new DWJEventBus()




d.emit('on', 1, 2)

d.on('on', (a, b) => {
  console.log(a, b);
})


module.exports = {
  DWJEventBus
}









