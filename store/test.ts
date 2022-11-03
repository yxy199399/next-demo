import { action, makeObservable, observable } from 'mobx'
class MobxTest {
  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action.bound,
    })
  }
  count = 0
  increment = () => {
    this.count++
  }

  reset = () => {
    this.count = 0
  }
}

const mobxTest = new MobxTest()

export default mobxTest
