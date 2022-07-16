import Semaphore from './Semaphore'

const semaphore = new Semaphore(2)

async function func(id: number) {
  console.log('queueing task', id)
  try {
    await semaphore.acquireResource()
    console.log('running task', id)
    setTimeout(() => {
      semaphore.releaseResource()
    }, 2000)
  } catch (e) {
    console.error(id, e)
  }
}
const index = () => {
  func(1)
  func(2)
  func(3)
  func(4)
  func(5)
  setTimeout(() => {
    func(10)
    func(11)
    func(12)
  }, 1500)

  setTimeout(() => {
    func(20)
    func(21)
    func(22)
  }, 2700)
}
index()
