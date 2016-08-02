package com.cucumber.SeondTest.GoogleSearchTest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CucumberGoogleSearchTest {

	WebDriver driver;

	@Given("^Open google search on different browser$")
	public void open_google_search_on_different_browser() throws Throwable {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://www.google.com");
	}
	//\"(.*)\"
	@When("^User enter word \"([^\"]*)\"$")
	public void user_enter_word(String word) throws Throwable {
		driver.findElement(By.id("lst-ib")).sendKeys(word);
		

	}
	
	@When("^click on Search button$")
	public void click_on_Search_button() throws Throwable {
		driver.findElement(By.id("sblsbb")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("^User should see the result$")
	public void user_should_see_the_result() throws Throwable {
		driver.quit();
		
	}
}
