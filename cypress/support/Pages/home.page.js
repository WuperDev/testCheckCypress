import CategoriesMenu from "../Components/categories-menu.component";

class HomePage{

    elements = {
        loginOrRegisterBtn: () => cy.get("#customer_menu_top"),

    }

    goToLoginPage(){
        this.elements.loginOrRegisterBtn().click()
    }

}

module.exports = new HomePage();