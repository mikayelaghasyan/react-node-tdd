/// <reference types="Cypress" />

describe('First visit', () => {
    it('Redirects to login form', () => {
        cy.visit('http://localhost:3000');
        cy.url().should('include', '/auth/login');
    });
});