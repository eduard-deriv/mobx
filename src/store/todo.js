import { makeAutoObservable } from "mobx";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

class Todo {
    todos = []

    constructor() {
        makeAutoObservable(this)
        // makeAutoObservable(this, {}, {deep: true}) if we have deep nesting
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    completed(todo) {
        todo.completed = !todo.completed
    }

    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo();