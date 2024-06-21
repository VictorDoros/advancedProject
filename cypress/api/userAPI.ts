import User from "../models/user"
import "cypress-plugin-api"

export default class UserAPI {
  register(user: User) {
    return cy.step("Register with API").api({
      method: "POST",
      url: "/api/v1/users/register",
      body: {
        firstName: user.getFirstName(),
        lastName: user.getLastName(),
        email: user.getEmail(),
        password: user.getPassword(),
      },
    })
  }
}
