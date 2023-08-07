const { Given, When, Then, defineStep} = require('@cucumber/cucumber')

defineStep("I visit a login page", async function() {
    await page.goto('https://www.saucedemo.com/')
})

defineStep("I fill the login form with valid credentials", async function() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
})

defineStep("I should see the home page", async function() {
    await page.waitForSelector('.inventory_list')
})