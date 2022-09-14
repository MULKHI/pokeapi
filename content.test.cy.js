///<reference types="cypress" />

describe('API automation test pokeapi', () => {
    it('successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    });

    it('Update users', () => {
        var newUser = {
            "name": 'Putra',
            "job": 'Test Engineering'
            
        }
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })
    });

    //------------TUGAS------
    it('Tugas', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body.abilities[0].ability.name).to.eq('limber')
            expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')
        })
    });
})