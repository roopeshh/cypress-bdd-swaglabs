const open = () => {
  cy.visit('/');
}

const validateLoginPage = () => {
  cy.get('.bot_column').should('be.visible');
}

const login = (username, password) => {
  cy.get('input[data-test="username"]').type(username);
  cy.get('input[data-test="password"]').type(password);
  cy.get('form').submit();
}

module.exports = {
  open,
  login,
  validateLoginPage
}

