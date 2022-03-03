import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import ChartPage from '../../integration/pages/ChartPage';

import SecurePage from '../../integration/pages/SecurePage';

const chartPage = new ChartPage();

const securePage = new SecurePage();




 When('I select prescribe Medicine', () => 
 {

    chartPage.clickprescribtionButton();
          
 });

 When('Medicine add to chart', () => {

                
    chartPage.clickMedicineAddToChart();
             
 });

 When('I proceed to CheckOut', () => 
  {

    chartPage.clickProccedToCheckOut();
                    
  });

 When('I confirm selected medicine to checkout', () => {

    chartPage.clickSecondProccedToCheckOut();
                       
 });

When('I select the shipping address', () => {

                           
    chartPage.clickSaveAndContinue();
                           
 });

When('Add payment method', () => {

    chartPage.clickPaymentMethoddropdown();
    chartPage.clickPaymentMethod();
                             
 });

When('I Place order', () => {
                                      
    chartPage.clickPlaceOrder();

});


Then('To check prescribe medicine is successfully added to chart', () => {
                                      
    chartPage.SuccessfullyPlaceOrder();

});

