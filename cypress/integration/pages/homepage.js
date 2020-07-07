const validateUserLoggedIn = () => {
  cy.get('.bm-burger-button').should('be.visible');
}

const validateErrorMessage = (errorMessage) => {
  return cy.get('h3[data-test="error"]').should('have.text', errorMessage);
}

module.exports = {
  validateUserLoggedIn,
  validateErrorMessage
}