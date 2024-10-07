import { create } from "zustand"

export default create(set => ({
  counter: 0,
  increaseCounter() {
    set(state => ({ counter: state.counter + 1 }))
  },
  decreaseCounter() {
    set(state => ({ counter: state.counter - 1 }))
  }
}))
