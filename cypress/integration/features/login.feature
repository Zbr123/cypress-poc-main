@login
Feature: Login
 Scenario: Login successfully
  Given I open Login Page
  When I SignIn
  And I fill the email input with "eddysnchz9+dde4@gmail.com"
  And I fill the password input with "Wad@@83gk3"
  Then I click on Login button
  

@shipping
Feature:shipping
Scenario:Add shipping address
Given I open Login Page
  When I fill the email input with "eddysnchz9+dde4@gmail.com"
  And I fill the password input with "Wad@@83gk3"
  And I click on Login button
  When I click on DD button
  And I click on shipping and add address
  And I fill Add new address field
  Then Add new shipping address