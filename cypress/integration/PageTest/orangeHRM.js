import Login_po from "../../support/PageClasses/Login_po";
import Logout_po from "../../support/PageClasses/Logout_po";
import link_po from "../../support/PageClasses/link";

describe('', () => {

  const login1 = new Login_po();
  const logout1 = new Logout_po();
  const lin = new link_po();

    it('Login Test', () => {

        login1.enterurl();
        login1.login();
        lin.clickonlink('Admin');
        cy.wait(1000);
        logout1.logout();

        
    });
});