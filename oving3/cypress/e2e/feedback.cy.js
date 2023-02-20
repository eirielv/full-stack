describe('My First Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/contactForm')
    })
    it('finds input fields', () => {

        cy.get('#name-field').should('have.length', 1)
        cy.get('#email').should('have.length', 1)
        cy.get('#feedback').should('have.length', 1)

    })


})