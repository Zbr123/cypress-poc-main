export default class ChartPage {

    prescriptionButton="#__next div:nth-child(3) > div > div.sc-jJMGnK";

    addPrescribeMedicineButton="div.flex.justify-end > button";

    proceedToCheckOutButton="div > div.mt-xl.w-full > button";

    secondproccedToCheckOutButton="div.flex.justify-end > div > button";

    saveandcontinue=".flex.justify-end.w-full button";

    savePaymentsMethod="span > div.sc-bqGGPW.iPexDg > svg:nth-child(1)";

    savePaymentcard="ul > li:nth-child(1)";

    placeorder="div:nth-child(2) > div > div.flex.justify-end.w-full > button";
 
    thankYouDee="div.text-4xl.font-bold.text-center";

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


    SuccessfullyPlaceOrder()
    {
      cy.get(this.thankYouDee) .should('be.visible');
      cy.wait(5000);
    }


} 