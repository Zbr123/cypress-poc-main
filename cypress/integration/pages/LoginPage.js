
export default class LoginPage {

    path = "https://web.mc.falsepill.com/";
  
   
  
    // Create variables for element locators

    mainSignInButtonId="#main-sign-in-button";
  
    useremailInput = "#1-email";
  
    passwordInput = "[type=password]";
  
    loginButton = "button[type='submit']";
  
    signinButton ="[type=submit]";

   
    // Create independent methods to do actions on elements
  
    visitLogin(){
  
      cy.visit(this.path);
  
    }
  
    clickSignInButton(){
  
      cy.get(this.mainSignInButtonId).click();
      cy.wait(10000);
  
    }
   
  
    typeUsername(username){
  
      cy.wait(5000)
      cy.get(this.useremailInput).type(username);
  
    }
  
   
  
    typePassword(password){
  
      cy.get(this.passwordInput).type(password);
  
    }
  
   
  
    clickLogin(){
  
      cy.get(this.signinButton).click();
  
    }

  }