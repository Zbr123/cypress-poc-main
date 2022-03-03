export default class Shippingpage{
    shippingButton="#headlessui-menu-item-5 > a:nth-child(3)";

    addNewAdressButton=" main > div > button";

    streetAdressField="#address";

    suiteAppartmentBuilding="#apartment";

    cityField="#city";

    stateField="div:nth-child(4) > div > div > div> button > svg";

    stateFieldClickable="#downshift-0-item-13 > p"

    shippingZipCode="#zip";

    addAddressButton="div.flex.justify-end > button:nth-child(2)";

    profileButton="#headlessui-menu-button-1 > div > span > span";

    clickprofileButton()
    {
      cy.wait(35000);
      cy.get(this.profileButton).click();

    }



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

    clickConfirmAddressButton()
    {
      cy.get(this.addAddressButton).click();
    }



}