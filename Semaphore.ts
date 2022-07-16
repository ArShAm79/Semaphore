class Semaphore {
  counter: number

  max: number

  waiting: any[]

  constructor(max: number) {
    this.counter = 0
    this.max = max
    this.waiting = []
  }

  takeResource() {
    if (this.waiting.length > 0 && this.counter < this.max) {
      this.counter += 1
      const promise = this.waiting.shift()
      promise?.resolve()
    }
  }

  acquireResource() {
    if (this.counter < this.max) {
      this.counter += 1
      return new Promise<void>((resolve) => {
        resolve()
      })
    }
    return new Promise((resolve, err) => {
      this.waiting.push({ resolve, err })
    })
  }

  releaseResource() {
    this.counter -= 1
    this.takeResource()
  }

  purge() {
    const unresolved = this.waiting.length

    for (let i = 0; i < unresolved; i += 1) {
      this.waiting[i].err('Task has been purged.')
    }

    this.counter = 0
    this.waiting = []

    return unresolved
  }
}
export default Semaphore
