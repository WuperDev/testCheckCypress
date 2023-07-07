
class LoginPage{

    elements = {
        url: "/index.php?rt=account/login",
        loginNameInput: () => cy.get('#loginFrm_loginname'),
        loginPasswordInput: () => cy.get('#loginFrm_password'),
        submitBtn: () => cy.findAllByRole('button', {name: "Login"}),
        errorAlert: () => cy.get('.alert')
    }

    visitLoginPage(){
        cy.visit(this.elements.url)
    }

    login(username, password){
        this.elements.loginNameInput().type(username)
        this.elements.loginPasswordInput().type(password)
        this.elements.submitBtn().click()
    }
}

module.exports = new LoginPage();