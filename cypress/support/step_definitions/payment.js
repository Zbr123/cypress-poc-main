import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import PaymentPage from '../../integration/pages/PaymentPage';

import SecurePage from '../../integration/pages/SecurePage';



const paymentPage = new PaymentPage();

const securePage = new SecurePage();




When('I click on DD button for add payment method', () => {

    paymentPage.clickprofileButton();
  
  });


When('I click on payment', () => {

    paymentPage.clickPaymentButton();
  
  });
  
  When('I click Add new card', () => {
  
    paymentPage.addNewCardButton();
  
  });
  
  When('I enter the card place holder name {string}', (Cardholdername) => {
  
    paymentPage.typeCardholdername(Cardholdername);
    cy.wait(2000);
    
  
  });
  
  When('I enter the card number', () => {
  
    paymentPage.typeCardNumber();
    cy.wait(2000);
  
  });
  
  When('I fill card expiration cvv and zip code', () => {
  
    paymentPage.typeCardExpiration();
    paymentPage.typeCardCVVNumber();
    paymentPage.typeCardZipCode();
    cy.wait(2000);
  
    });
  
When('Add new card for payment', () => {
  
     paymentPage.clickAdd();
 
  });
    