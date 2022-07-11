import {makeAutoObservable} from "mobx";

class Counter {
    count = 2
    timer = 60

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.count = this.count + 1
    }

    decrease() {
        this.count = this.count - 1
    }

    get total() {
        return 'Count + time = ' + (this.count + this.timer)
    }
}

export default new Counter();