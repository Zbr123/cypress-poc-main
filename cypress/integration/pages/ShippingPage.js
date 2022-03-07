export default class Shippingpage{
    shippingButton="#headlessui-menu-item-5 > a:nth-child(3)";

    addNewAdressButton=" main > div > button";

    streetAdressField="#address";

    suiteAppartmentBuilding="#apartment";

    cityField="#city";

    stateField="div:nth-child(4) > div > div > div> button > svg";

    stateFieldClickable="#downshift-0-item-33 > p"

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
      cy.get(this.streetAdressField).type('140 Central Ave');
    }
 
    suiteAppartmentFunc()
    {
      cy.get(this.suiteAppartmentBuilding).type(appartment()+', New Jersey');
      function appartment() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 4; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
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
      cy.get(this.shippingZipCode).type('07090');
    }

    clickConfirmAddressButton()
    {
      cy.get(this.addAddressButton).click();
    }



}