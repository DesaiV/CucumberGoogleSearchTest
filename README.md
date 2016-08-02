CucumberSearchFeatureTest

Test Search feature using BDD framework
Test scenarios are:

 Background:
   Given Open google search on different browser 

First scenario will only search for word "facebook login"  
  Scenario: Test google search
    When User enter word "facebook login"
    And click on Search button
    Then User should see the result

Second scenario using "Scenario outline" and "Examples"  feature. I am passing list of words and testing search feature.
    Scenario Outline: search different words in google
    When User enter word "<wordslist>"
    And click on Search button
    Then User should see the result

    Examples: 
      | wordslist |
      | google    |
      | facebook  |
      | instagram | 