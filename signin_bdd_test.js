Feature('My First Test');

Scenario('Test Aljazeera', ({ I }) => {
  Given('I am on the homepage', () => {
    I.amOnPage('/');
  });

  When('I click on the cookies button', () => {
    I.click("//button[@id=\"onetrust-accept-btn-handler\"]");
  });

  When('I scroll to the "most read" section', () => {
    I.scrollTo('//h2[@aria-label="most read"]');
  });

  Then('I should see the "MOST READ" text', () => {
    I.see('MOST READ');
  });

  Then('the "most read" section should have 10 posts', async () => {
    let numOfElements = await I.grabNumberOfVisibleElements('//ul[@class="trending-articles__list"]//li');
    if (numOfElements !== "10") {
      console.log("Most Read Section has " + numOfElements + " posts");
      throw new Error("Most Read Section has " + numOfElements + " posts"); // Intentional Failure
    }
  });

  Then('I resize the window to a specific size', () => {
    I.resizeWindow(390, 844);
  });

  Then('I scroll to the top of the page', () => {
    I.scrollPageToTop();
  });

  Then('I scroll to the "most read" section again', async () => {
    await I.scrollTo('//h2[@aria-label="most read"]');
  });

  Then('I click on the header', async () => {
    I.click("//header[@role=\"banner\"]");
    I.wait(1);
    let url;
    for (let i = 0; i < 3; i++) {
      I.pressKeyDown('Tab');
      I.pressKeyUp('Tab');
      I.wait(1);
      if (i === 2) {
        I.pressKeyDown('Enter');
        I.pressKeyUp('Enter');
        I.wait(5);
        url = await I.grabCurrentUrl();
      }
    }
    console.log(url);
    I.seeInCurrentUrl("/#most-read-container"); // Asserting the endpoint
    I.see('MOST READ');
  });
});