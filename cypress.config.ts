import { defineConfig } from "cypress"
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib")

export default defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    baseUrl: "https://todo.qacart.com",
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run")
        await beforeRunHook(details)
      })

      on("after:run", async () => {
        console.log("override after:run")
        await afterRunHook()
      })
    },
  },
})
