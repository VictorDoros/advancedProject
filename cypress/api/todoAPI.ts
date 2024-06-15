import User from "../models/user"
import 'cypress-plugin-api'

export default class ToDoAPI {
    addToDo(user: User) {
        cy.api({
            method: "POST",
            url: "/api/v1/tasks",
            body: {
              isCompleted: false,
              item: "Learn Cypress",
            },
            headers: {
              Authorization: `Bearer ${user.getToken()}`,
            },
          })
    }
}