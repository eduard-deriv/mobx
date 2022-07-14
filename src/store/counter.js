import { makeAutoObservable } from "mobx";

class Counter {
    count = 0

    constructor() {
        this.count = window.localStorage.getItem("counter") || 0
        makeAutoObservable(this)
    }

    increase() {
        let new_value = this.count + 1
        window.localStorage.setItem("counter", new_value)
        this.count = new_value
    }

    decrease() {
        let new_value = this.count - 1
        window.localStorage.setItem("counter", new_value)
        this.count = new_value
    }

}

export default new Counter();