class Login_po{

    enterurl(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }

    login(){

        cy.get('[name="username"]').type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get('button[type="submit"]').click();

    }
}

export default Login_po;