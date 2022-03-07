@Chart
Feature: chart
 Scenario: Add prescribe medicine to chart
  Given I open Login Page
  When I SignIn
  And I fill the email input with "eddysnchz9+dde4@gmail.com"
  And I fill the password input with "Wad@@83gk3"
  And I click on Login button
  When I select prescribe Medicine
  And  Medicine add to chart
  And I proceed to CheckOut
  When I confirm selected medicine to checkout
  And I select the shipping address
  And Add payment method
  And I Place order
  Then To check prescribe medicine is successfully added to chart
  