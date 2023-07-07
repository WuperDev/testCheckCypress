
class MyAccount{

    elements= {
        MyAccountHeader: () => cy.get('.maintext'),

    }
}

module.exports = new MyAccount();