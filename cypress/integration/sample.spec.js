describe('sample test',() => {   

    it('do something' ,() => {
        expect(true).to.equal(true)
    })
  
    it ('vist example website ',()=>{
        cy.visit('http://example.cypress.io')

        cy.contains('type').click()
        cy.url().should('include','/commands/actions')

        cy.get('#email1')
        .type('fake@gmail.com')
        .should('have.value','fake@gmail.com')

        cy.get('.action-form').submit()
        .next().should('contain', 'Your form has been submitted!')
    })
    // it('Does not do much thing ',()=>{
    //     cy.visit('http://example.cypress.io')
    //     cy.contains('type').click()
    //     cy.url().should('include','commands/actions')
    //     cy.get('.action-email')
    //     .type('fake@gmail.com')
    //     .should('have.value','fake@gmail.com')

    //     cy.get('.action-div').dblclick().should('not.be.visible')
    //     cy.get('.action-input-hidden').should('be.visible')

    // })

})
