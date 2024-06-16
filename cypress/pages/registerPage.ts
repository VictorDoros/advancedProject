import User from "../models/user"
import UserAPI from "../api/userAPI"

export default class RegisterPage {
  private get firstNameInput() {
    return "[data-testid='first-name']"
  }

  private get lastNameInput() {
    return "[data-testid='last-name']"
  }

  private get emailInput() {
    return "[data-testid='email']"
  }

  private get passwordInput() {
    return "[data-testid='password']"
  }

  private get confirmPasswordInput() {
    return "[data-testid='confirm-password']"
  }
  private get submitButton() {
    return "[data-testid='submit']"
  }

  load() {
    cy.step("Visit the 'Sign up' page")
    cy.visit("/signup")
  }

  register(user: User) {
    cy.step("Fill in the 'First Name' field")
    cy.get(this.firstNameInput).type(user.getFirstName())

    cy.step("Fill in the 'Last Name' field")
    cy.get(this.lastNameInput).type(user.getLastName())

    cy.step("Fill in the 'Email' field")
    cy.get(this.emailInput).type(user.getEmail())

    cy.step("Fill in the 'Password' field")
    cy.get(this.passwordInput).type(user.getPassword())

    cy.step("Fill in the 'Confirm Password' field")
    cy.get(this.confirmPasswordInput).type(user.getPassword())

    cy.step("Hit the [Submit] button")
    cy.get(this.submitButton).click()
  }

  registerUsingAPI(user: User) {
    return new UserAPI().register(user).then((response) => {
      user.setToken(response.body.access_token)
    })
  }
}
