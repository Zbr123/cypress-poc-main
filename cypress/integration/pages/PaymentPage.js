export default class PaymentPage{

     // Payment locators

     profileButton="#headlessui-menu-button-1 > div > span > span";

     paymentButton="#headlessui-menu-item-5 > a:nth-child(4)";
 
     addNewCard="main> div >  button";
 
     cardHolderName="#card-holder";
 
     cardNumberField="div:nth-child(3) > div > div > div > div > div:nth-child(3) > div:nth-child(2) > div";
 
     cardNumberFieldInput=":nth-child(3) > :nth-child(2) > .px-xs > .__PrivateStripeElement > iframe";
 
     cardExpiration="div:nth-child(3)  div.flex-start.flex.items-center > div.mr-sm > div:nth-child(2) > div";
 
     cardCVVNumber="div.relative div:nth-child(2) > div";
 
     cardZipCode="#zip-code";
 
     addCardButton="reach-portal > div:nth-child(3)  div:nth-child(2) > button";
  
     
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
  
      typeCardholdername(){

        cy.get(this.cardHolderName).type('Zubair'+cardHolderName());
        function cardHolderName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 4; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
          }
       }
    
  
      typeCardNumber()
      {
        cy.wait(10000)
        cy.iframe('[title="Secure card number input frame"]')
        .as('iframe')
        .find('[name="cardnumber"]')
        .type('4242424242424242')
        }

  
      typeCardExpiration()
      {
        cy.wait(10000)
        cy.iframe('[title="Secure expiration date input frame"]')
        .as('iframe')
        .find('[name="exp-date"]')
        .type('226')
      }
  
      
      typeCardCVVNumber()
      {
        cy.wait(10000)
        cy.iframe('[title="Secure CVC input frame"]')
        .as('iframe')
        .find('[name="cvc"]')
        .type('321')
        
      }
  
      typeCardZipCode()
      {
    
        cy.get(this.cardZipCode).type('07090');
    
      }
  
      clickAdd()
      {
    
        cy.get(this.addCardButton).click();
    
      }
    }
