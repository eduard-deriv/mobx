import { makeAutoObservable } from "mobx";

class Counter {
    count = Number(0)

    constructor() {
        this.count = Number(window.localStorage.getItem('counter') || 0)
        makeAutoObservable(this)
    }

    increase() {
        let new_count = Number(this.count + 1)
        window.localStorage.setItem('counter', String(new_count))
        this.count = new_count
    }

    decrease() {
        let new_count = Number(this.count - 1)
        window.localStorage.setItem('counter', String(new_count))
        this.count = new_count
    }
}

export default new Counter();