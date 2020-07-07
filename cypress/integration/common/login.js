const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
const loginPage = require('../pages/loginpage');
const homePage = require('../pages/homepage');

Given('I open Swag Labs page', () => {
  loginPage.open();
});

When(/^I login with username (.*) and password (.*)$/, (username, password) => {
  loginPage.login(username, password);
});

Then('I am in the login page', () => {
  loginPage.validateLoginPage();
});

Then('I should be logged in', () => {
  homePage.validateUserLoggedIn();
});

Then('I should get error message {string}', (errorMessage) => {
  homePage.validateErrorMessage(errorMessage);
});
