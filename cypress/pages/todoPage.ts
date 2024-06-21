export default class ToDoPage {
  private get welcomeMessage() {
    return '[data-testid="welcome"]'
  }

  private get todoItem() {
    return '[data-testid="todo-item"]'
  }

  private get deleteButton() {
    return '[data-testid="delete"]'
  }

  private get noToDosMessage() {
    return '[data-testid="no-todos"]'
  }

  private get checkToDoTask() {
    return '[data-testid="complete-task"]'
  }

  load() {
    cy.step("Visit the page")
    cy.visit("/todo")
  }

  getWelcomeMessage() {
    return cy.step("Confirm registration").get(this.welcomeMessage)
  }

  getToDoItem() {
    return cy.step("Confirm the presence of the item").get(this.todoItem)
  }

  deleteToDo() {
    cy.step("Delete the item")
    cy.get(this.deleteButton).click()
  }

  getNoToDosMessage() {
    return cy.step("Confirm the item is removed").get(this.noToDosMessage)
  }

  getCheckToDoTask() {
    return cy.step("Check the task and confirm it's checked").get(this.checkToDoTask).check()
  }
}
