///<reference types="cypress" />

describe('API automation pokeapi', () => {
    it('Successfully validate containt-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')

        cy.get('@pokemon').its('status').should('equal', 200)
        cy.get('@pokemon').its('body').should('have.a.property', 'base_experience')
        cy.get('@pokemon').its('body').should('include', {name: "ditto"})
            
    });

    it('Successfully validate body', () => {

        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.eq('limber')
        
        })
    });
})