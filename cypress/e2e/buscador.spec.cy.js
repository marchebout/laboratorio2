describe('Componente del buscador', () => {
    it('Buscar un producto', () => {
      cy.visit('https://shop.demoqa.com/')
      cy.contains('Search').click()
      cy.get('input[type="search"]').type('T SHIRT{enter}')
      cy.scrollTo(0, 500)
      cy.get('.posted_in').should('include.text', 'T-shirt')
    })
  })