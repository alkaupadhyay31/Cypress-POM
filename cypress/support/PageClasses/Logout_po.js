class Logout_po{

    logout(){
 
       cy.get('.oxd-userdropdown-name').click();
 
       cy.wait(5000);
 
       cy.get('.oxd-dropdown-menu').find(':nth-child(4) > .oxd-userdropdown-link').click();
    } 
 }
 
 export default Logout_po;