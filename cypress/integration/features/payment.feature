@payment
Feature:Payment
 Scenario: Payment method
  Given I open Login Page
  When I SignIn
  And I fill the email input with "eddysnchz9+dde4@gmail.com"
  And I fill the password input with "Wad@@83gk3"
  And I click on Login button
  When I click on DD button for add payment method
  And I click on payment
  And I click Add new card
  And I enter the card place holder name
  And I enter the card number
  And I fill card expiration cvv and zip code
  Then Add new card for payment
