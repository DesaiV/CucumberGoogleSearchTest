Feature: Test google search
  User can write word in google searh page and can search word.
  
  Background:
   Given Open google search on different browser 

  Scenario: Test google search
    When User enter word "facebook login"
    And click on Search button
    Then User should see the result

    Scenario Outline: search different words in google
    When User enter word "<wordslist>"
    And click on Search button
    Then User should see the result

    Examples: 
      | wordslist |
      | google    |
      | facebook  |
      | instagram |