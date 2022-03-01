import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../../integration/pages/LoginPage';

import SecurePage from '../../integration/pages/SecurePage';

 

const loginPage = new LoginPage();

const securePage = new SecurePage();

 

Given('I open Login Page', () => {

  loginPage.visitLogin();

});

When('I SignIn', () => {

  loginPage.clickSignInButton();

});

 

When('I fill the email input with {string}', (username) => {

  loginPage.typeUsername(username);

});

 

When('I fill the password input with {string}', (password) => {

  loginPage.typePassword(password);

});

 

When('I click on Login button', () => {

  loginPage.clickLogin();

});

 


When('I click on DD button', () => {

  loginPage.clickprofileButton();

});

When('I click on payment', () => {

  loginPage.clickPaymentButton();

});

When('I click Add new card', () => {

  loginPage.addNewCardButton();

});

When('I enter the card place holder name {string}', (Cardholdername) => {

  loginPage.typeCardholdername(Cardholdername);
  cy.wait(2000);
  loginPage.pressTab();

});

When('I enter the card number {string}', (CardNumber) => {

  cy.wait(2000);
  loginPage.typeCardNumber(CardNumber);

});

When('I fill card expiration cvv and zip code', () => {

  loginPage.typeCardExpiration;
  loginPage.typeCardCVVNumber;
  loginPage.typeCardZipCode;

  });

  When('Add new card for payment', () => {

    loginPage.clickAdd();
    
    });
  

    When('I click on shipping and add address', () => {

      loginPage.shippingButton();
      loginPage.clickAddNewAddress();
 
      });
    
      When('I fill Add new address field', () => {

        loginPage.streetAddressField();
        loginPage.suiteAppartmentBuilding();
        loginPage.cityField();
        loginPage.stateField();
        loginPage.shippingZipCode();
        });

        Then('Add new shipping address', () => {

          loginPage.clickAddNewAddress();
          
          });