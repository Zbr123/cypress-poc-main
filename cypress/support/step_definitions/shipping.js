import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import SecurePage from '../../integration/pages/SecurePage';

import Shippingpage from '../../integration/pages/ShippingPage';

const shippingpage = new Shippingpage();


When('I click on DD button for shipping address', () => {

 
  shippingpage.clickprofileButton();

  });

When('I click on shipping and add address', () => {

 shippingpage.clickShipping();
 shippingpage.clickAddNewAddress();
    

 });
  
 When('I fill Add new street address field', () => {

shippingpage.streetAddressFieldFunc();
      
});

 When('I fill Add new Appaertment Number field', () => {

 shippingpage.suiteAppartmentFunc();
       
 });

When('I fill Add new city field', () => {

shippingpage.cityFieldFunc();
         
});
         
When('I fill Add new state field', () => {

shippingpage.stateFieldFunc();
shippingpage.stateFieldselectFunc();
            
});
            
When('I fill Add new shipping Zip Code field', () => {

 shippingpage.shippingZipCodeFunc();

});
      
Then('Add new shipping address', () => {

 shippingpage.clickConfirmAddressButton();
        
});
