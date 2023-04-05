context('clickTolerance', () => {
    beforeEach(() => {
        cy.visit('/test.html')
    })

    it('should hit blue line', function () {
        cy.get('body').click(241, 171);

        cy.get('#window-log').should('contain', 'Clicked on 241 x 171');
        cy.get('#leaflet-log').should('contain', 'Hit blue line!');
    });

    it('should miss blue line', function () {
        cy.get('body').click(241, 175);

        cy.get('#window-log').should('contain', 'Clicked on 241 x 175');
        cy.get('#leaflet-log').should('not.contain', 'Hit blue line!');
    });

    it('should hit red line', function () {
        cy.get('body').click(241, 332);

        cy.get('#window-log').should('contain', 'Clicked on 241 x 332');
        cy.get('#leaflet-log').should('contain', 'Hit red line!');
    });

    it('should hit red line outside visible area', function () {
        cy.get('body').click(241, 342);

        cy.get('#window-log').should('contain', 'Clicked on 241 x 342');
        cy.get('#leaflet-log').should('contain', 'Hit red line!');
    });

})