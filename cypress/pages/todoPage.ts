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

  load() {
    cy.visit("/todo")
  }

  getWelcomeMessage() {
    return cy.get(this.welcomeMessage)
  }

  getToDoItem() {
    return cy.get(this.todoItem)
  }

  deleteToDo() {
    cy.get(this.deleteButton).click()
  }

  getNoToDosMessage() {
    return cy.get(this.noToDosMessage)
  }
}
