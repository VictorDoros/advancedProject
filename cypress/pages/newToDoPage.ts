import User from "../models/user"
import ToDoAPI from "../api/todoAPI"

export default class NewToDoPage {

    private get newToDoInput() {
        return '[data-testid="new-todo"]'
    }

    private get newToDoSubmitButton() {
        return '[data-testid="submit-newTask"]'
    }

    load() {
        cy.visit('/todo/new')
    }

    addToDo(task: string) {
        cy.get(this.newToDoInput).type(task)
        cy.get(this.newToDoSubmitButton).click()
    }

    addToDoUsingAPI(user: User) {
        return new ToDoAPI().addToDo(user)
    }



}