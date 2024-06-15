import User from "../models/user"

export default class ToDoAPI {
    addToDo(user: User) {
        cy.request({
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