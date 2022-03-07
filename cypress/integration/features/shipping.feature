@shipping
Feature:shipping
Scenario:Add shipping address
 Given I open Login Page
  When I SignIn
  And I fill the email input with "eddysnchz9+dde4@gmail.com"
  And I fill the password input with "Wad@@83gk3"
  And I click on Login button
  When I click on DD button for shipping address
  And I click on shipping and add address
  And I fill Add new street address field
  When I fill Add new Appaertment Number field
  And I fill Add new city field
  And I fill Add new state field
  When I fill Add new shipping Zip Code field
  Then Add new shipping address