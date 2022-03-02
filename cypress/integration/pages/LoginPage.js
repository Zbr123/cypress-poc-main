export default class LoginPage {

    path = "https://web.mc.falsepill.com/";
  
   
  
    // Create variables for element locators

    mainSignInButtonId="#main-sign-in-button";
  
    useremailInput = "#1-email";
  
    passwordInput = "[type=password]";
  
    loginButton = "button[type='submit']";
  
    signinButton ="[type=submit]";

    // Payment locators

    profileButton="#headlessui-menu-button-1 > div > span > span";

    paymentButton="#headlessui-menu-item-5 > a:nth-child(4)";

    addNewCard="main> div >  button";

    cardHolderName="#card-holder";

    cardNumberField=":nth-child(3) > :nth-child(2) > .px-xs > .__PrivateStripeElement > iframe";

    cardExpiration="input[placeholder='MM/YY']";

    cardCVVNumber="input[placeholder='123']";

    cardZipCode="#zip-code";

    addCardButton="";

    //Shipping locator

    shippingButton="#headlessui-menu-item-5 > a:nth-child(3)";

    addNewAdressButton=" main > div > button";

    streetAdressField="#address";

    suiteAppartmentBuilding="#apartment";

    cityField="#city";

    stateField="div:nth-child(4) > div > div > div> button > svg";

    stateFieldClickable="#downshift-0-item-13 > p"

    shippingZipCode="#zip";

    addAddressButton="div.flex.justify-end > button:nth-child(2)";





    //chart

    prescriptionButton="#__next div:nth-child(3) > div > div.sc-jJMGnK";
    addPrescribeMedicineButton="div.flex.justify-end > button";
    proceedToCheckOutButton="div > div.mt-xl.w-full > button";
    secondproccedToCheckOutButton="div.flex.justify-end > div > button";
    saveandcontinue=".flex.justify-end.w-full button";
    savePaymentsMethod="span > div.sc-bqGGPW.iPexDg > svg:nth-child(1)";
    savePaymentcard="ul > li:nth-child(1)";
    placeorder="div:nth-child(2) > div > div.flex.justify-end.w-full > button";

  
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

    //payment

    clickprofileButton(){
      cy.wait(35000);
       
      cy.get(this.profileButton).click();

    }


    clickPaymentButton(){
       
      cy.get(this.paymentButton).click();

    }

    addNewCardButton(){
     
      cy.get(this.addNewCard).click();

    }

    typeCardholdername(Cardholdername){
  
      cy.get(this.cardHolderName).type(Cardholdername);
  
    }

    pressTab(){
  
      cy.get('input').type('{tab}')
      cy.get('input').type("424242424242")
  
    }

    typeCardNumber(CardNumber){
  
      cy.get(this.cardNumberField).type(CardNumber);
  
    }

    typeCardExpiration(){
  
      cy.get(this.cardExpiration).type('226');
  
    }

    
    typeCardCVVNumber(){
  
      cy.get(this.cardCVVNumber).type('126');
  
    }

    typeCardZipCode(){
  
      cy.get(this.cardZipCode).type('54321');
  
    }

    clickAdd(){
  
      cy.get(this.addCardButton).click();
  
    }

    // Shipping

    clickShipping()
    {
      cy.get(this.shippingButton).click();
    }

    clickAddNewAddress()
    {
      cy.get(this.addNewAdressButton).click();
    }
    
    streetAddressFieldFunc()
    {
      cy.get(this.streetAdressField).type('R-521 abc society');
    }
 
    suiteAppartmentFunc()
    {
      cy.get(this.suiteAppartmentBuilding).type('5th floor');
    }

    cityFieldFunc()
    {
      cy.get(this.cityField).type('karachi');
      cy.wait(3000);
    }
 
    stateFieldFunc()
    {
      cy.get(this.stateField).click();
    }

    stateFieldselectFunc()
    {
      cy.get(this.stateFieldClickable).click();
    }

    shippingZipCodeFunc()
    {
      cy.get(this.shippingZipCode).type('30542');
    }

    clickNewAddressButton()
    {
      cy.get(this.addAddressButton).click();
    }

    // chart

    clickprescribtionButton()
    {
      cy.wait(35000);
      cy.get(this.prescriptionButton).click();
    }

    clickMedicineAddToChart()
    {
      cy.get(this.addPrescribeMedicineButton).click();
    }

    clickProccedToCheckOut()
    {
      cy.get(this.proceedToCheckOutButton).click();
    }

    clickSecondProccedToCheckOut()
    {
      cy.get(this.secondproccedToCheckOutButton).click();
    }
  
    clickSaveAndContinue()
    {
      cy.wait(10000);
      cy.get(this.saveandcontinue).click();
    }

    clickPaymentMethoddropdown()
    {
      cy.get(this.savePaymentsMethod).click();
    }

    clickPaymentMethod()
    {
      cy.wait(10000);
      cy.get(this.savePaymentcard).click();
    }

    clickPlaceOrder()
    {
      cy.get(this.placeorder).click();
      cy.wait(5000);
    }




  }