
import loginPage from "../pages/QA_PortalLoginPage"

describe('QA Portal Login page', () => {

    beforeEach(() => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
    })

    // afterEach(() => {
    //     this.tests.attachments = ['/absolut/path/to/file.png'];
    // })

    it('Page has elements', () => {
        cy.get('input[placeholder="Username"]').should('be.visible');
        cy.get('input[placeholder="Password"]').should('be.visible');
        cy.get('.btn').should('be.visible');

    })

    it('Filling in the fields and clicking the login button', () => {
        loginPage.typeUsername('John')
        loginPage.typePassword('12345')
        loginPage.clickLogin()
    })

    it('Error messages for empty fields', () => {
        loginPage.clickLogin()

        cy.get('span[class="help-block"]').then(messages => {

            cy.wrap(messages).eq(0)
                .should('have.text', 'Please enter username.')
                .should('be.visible')
            cy.wrap(messages).eq(1)
                .should('have.text', 'Please enter your password.')
                .should('be.visible')
        })
    })

    it('Error message password', () => {
        loginPage.typeUsername('John')
        loginPage.clickLogin()
        // cy.get('span[class="help-block"]').eq(1).should('have.text', 'Please enter your password.')
        loginPage.errorMessagePassword()

    })

    it('Error message username', () => {
        loginPage.typePassword('password')
        loginPage.clickLogin()
        // cy.get('span[class="help-block"]').eq(0).should('have.text', 'Please enter username.')
        loginPage.errorMessageName()

    })

    it('Failed login', () => {
        loginPage.typeUsername('John')
        loginPage.typePassword('eVrwe435')
        loginPage.clickLogin()

        cy.get('span[class="help-block"]').eq(0).should('have.text', 'No account found with that username.')
        cy.screenshot('username not found')
    })


})