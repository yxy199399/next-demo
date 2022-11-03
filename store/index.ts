// store/index.js
import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'
import mobxTest from './test'
import loginUser from './userInfo'

class RootStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }
  store = {
    mobxTest: mobxTest,
    userInfo: loginUser,
  }
  reset = () => {
    this.store = {} as any
  }
}
const rootStore = new RootStore()
// createContext有默认值，不需要Provider
const RootStoreContext = createContext(rootStore)

export default function useRootStore() {
  return useContext(RootStoreContext)
}
