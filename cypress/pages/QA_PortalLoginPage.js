class loginPage{


    elements = {
        usernameInput: () => cy.get('input[placeholder="Username"]'),
        passwordInput: () => cy.get('input[placeholder="Password"]'),
        loginBtn: () => cy.get('.btn'),
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clickLogin() {
        this.elements.loginBtn().click()
    }

    errorMessageName() {
        cy.get('span[class="help-block"]').eq(0)
            .should('have.text', 'Please enter username.')
    }

    errorMessagePassword() {
        cy.get('span[class="help-block"]').eq(1).should('have.text', 'Please enter your password.')
    }

}



module.exports = new loginPage()