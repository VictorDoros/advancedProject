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
    cy.step("Visit the page")
    cy.visit("/todo/new")
  }

  addToDo(task: string) {
    cy.step("Type a new ToDo task")
    cy.get(this.newToDoInput).type(task)

    cy.step("Submit the ToDo task")
    cy.get(this.newToDoSubmitButton).click()
  }

  addToDoUsingAPI(user: User) {
    return new ToDoAPI().addToDo(user)
  }
}
