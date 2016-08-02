$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Test google search",
  "description": "User can write word in google searh page and can search word.",
  "id": "test-google-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open google search on different browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberGoogleSearchTest.open_google_search_on_different_browser()"
});
formatter.result({
  "duration": 72281164700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Test google search",
  "description": "",
  "id": "test-google-search;test-google-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enter word \"facebook login\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should see the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook login",
      "offset": 17
    }
  ],
  "location": "CucumberGoogleSearchTest.user_enter_word(String)"
});
formatter.result({
  "duration": 2732504380,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.click_on_Search_button()"
});
formatter.result({
  "duration": 6663473157,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.user_should_see_the_result()"
});
formatter.result({
  "duration": 7785552902,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "search different words in google",
  "description": "",
  "id": "test-google-search;search-different-words-in-google",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User enter word \"\u003cwordslist\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see the result",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-google-search;search-different-words-in-google;",
  "rows": [
    {
      "cells": [
        "wordslist"
      ],
      "line": 18,
      "id": "test-google-search;search-different-words-in-google;;1"
    },
    {
      "cells": [
        "google"
      ],
      "line": 19,
      "id": "test-google-search;search-different-words-in-google;;2"
    },
    {
      "cells": [
        "facebook"
      ],
      "line": 20,
      "id": "test-google-search;search-different-words-in-google;;3"
    },
    {
      "cells": [
        "instagram"
      ],
      "line": 21,
      "id": "test-google-search;search-different-words-in-google;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open google search on different browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberGoogleSearchTest.open_google_search_on_different_browser()"
});
formatter.result({
  "duration": 34400459107,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "search different words in google",
  "description": "",
  "id": "test-google-search;search-different-words-in-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User enter word \"google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 17
    }
  ],
  "location": "CucumberGoogleSearchTest.user_enter_word(String)"
});
formatter.result({
  "duration": 1279655690,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.click_on_Search_button()"
});
formatter.result({
  "duration": 5046931826,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.user_should_see_the_result()"
});
formatter.result({
  "duration": 1215178383,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open google search on different browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberGoogleSearchTest.open_google_search_on_different_browser()"
});
formatter.result({
  "duration": 35521084102,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "search different words in google",
  "description": "",
  "id": "test-google-search;search-different-words-in-google;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User enter word \"facebook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 17
    }
  ],
  "location": "CucumberGoogleSearchTest.user_enter_word(String)"
});
formatter.result({
  "duration": 794386013,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.click_on_Search_button()"
});
formatter.result({
  "duration": 6111823170,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.user_should_see_the_result()"
});
formatter.result({
  "duration": 1245408934,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open google search on different browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberGoogleSearchTest.open_google_search_on_different_browser()"
});
formatter.result({
  "duration": 34693508666,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "search different words in google",
  "description": "",
  "id": "test-google-search;search-different-words-in-google;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User enter word \"instagram\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "instagram",
      "offset": 17
    }
  ],
  "location": "CucumberGoogleSearchTest.user_enter_word(String)"
});
formatter.result({
  "duration": 1109140974,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.click_on_Search_button()"
});
formatter.result({
  "duration": 1595933348,
  "status": "passed"
});
formatter.match({
  "location": "CucumberGoogleSearchTest.user_should_see_the_result()"
});
formatter.result({
  "duration": 1698700012,
  "status": "passed"
});
});