import { defineConfig } from "cypress"
import allureWriter from "@shelex/cypress-allure-plugin/writer"

const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib")

export default defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    video: true,
    baseUrl: "https://todo.qacart.com",
    env:{
      allure: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true
    },
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run")
        await beforeRunHook(details)
      })

      on("after:run", async () => {
        console.log("override after:run")
        await afterRunHook()
      })

      allureWriter(on, config);
      return config

    },
  },
})
