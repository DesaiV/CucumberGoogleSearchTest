package com.cucumber.SeondTest.GoogleSearchTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", 
				 monochrome = true
				 ,plugin={"html:target/cucumber-html-report"})
public class TestRunner {

}
