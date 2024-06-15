import User from "../models/user"
import ToDoPage from "../pages/todoPage"
import NewToDoPage from "../pages/newToDoPage"
import RegisterPage from "../pages/registerPage"

describe("Todo Test cases", () => {
  let user: User
  let registerPage: RegisterPage
  let toDoPage: ToDoPage
  let newToDoPage: NewToDoPage

  beforeEach(() => {
    user = new User()
    registerPage = new RegisterPage()
    toDoPage = new ToDoPage()
    newToDoPage = new NewToDoPage()

    registerPage.registerUsingAPI(user)
  })

  it("Should be able to add a todo", () => {
    newToDoPage.load()
    newToDoPage.addToDo("Learn Cypress")
    toDoPage.getToDoItem().should("contain.text", "Learn Cypress")
  })

  it("Should be able to delete a todo", () => {
    newToDoPage.addToDoUsingAPI(user)
    toDoPage.load()
    toDoPage.getToDoItem().should("contain.text", "Learn Cypress")
    toDoPage.deleteToDo()
    toDoPage.getNoToDosMessage().should("be.visible")
  })
})
