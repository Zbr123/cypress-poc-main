@login
Feature: Login
 Scenario: Login successfully
  Given I open Login Page
  When I SignIn
  And I fill the email input with "eddysnchz9+dde4@gmail.com"
  And I fill the password input with "Wad@@83gk3"
  Then I click on Login button
  

