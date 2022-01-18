/* eslint-disable */

describe('Customer journey', () => {
  it('should load Homepage, add product to cart, navigate to cart & check if item is present', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // add first book to cart
    cy.get('ul[data-testid="bookList"] button').first().click();

    // navigate to cart
    cy.get('a[href*="cart"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/cart');

    // The cart page should contain an ul with book item
    cy.get('ul').contains(`Henri Potier à l'école des sorciers`);
  });
});
