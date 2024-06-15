import User from "../models/user"
import RegisterPage from "../pages/registerPage"
import ToDoPage from "../pages/todoPage"

it("Should be able to register", () => {
  const user = new User()
  const registerPage = new RegisterPage()
  const todoPage = new ToDoPage()

  registerPage.load()
  registerPage.register(user)

  //Confirm Registration
  todoPage.getWelcomeMessage().should("be.visible")
})
