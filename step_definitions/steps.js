const { I } = inject();
// Add in your custom step files

Given('I am on the homepage', () => {
  I.amOnPage('/');
});

When('I scroll to the {string} section', () => {
  I.click("//button[@id=\"onetrust-accept-btn-handler\"]");
  I.scrollTo('//h2[@aria-label="most read"]');
});

Then('I should see the {string} text', () => {
  I.see('MOST READ');
});

Then('The {string} section should have {int} posts',async () => {
  let numOfElements = await I.grabNumberOfVisibleElements('//ul[@class="trending-articles__list"]//li');
  if(numOfElements != "10"){
    console.log("Most Read Section has " +numOfElements+ " posts");
    throw new Error("Most Read Section has " +numOfElements+ " posts");//Intentional Failure
  }
});

Then('Resize to Mobile Size and check for non-availability of {string}', async () => {
  I.resizeWindow(390,844);;
  I.scrollPageToTop();
  I.dontSee('MOST READ');
  // await I.scrollTo('//h2[@aria-label="most read"]');
});

Then('Check for the presence of {string}', async () => {
  I.resizeWindow("maximize");
  I.click("//header[@role=\"banner\"]");
  I.wait(1);
  let url ;
  for (let i = 0; i < 3; i++) {
    I.pressKeyDown('Tab');
    I.pressKeyUp('Tab');
    I.wait(1);
    if(i==2){
      I.pressKeyDown('Enter');
      I.pressKeyUp('Enter');
      I.wait(5);
      url = await I.grabCurrentUrl();
    }
  }
  console.log(url);
  I.seeInCurrentUrl("/#most-read-container"); //Asserting the endpoint
  I.see('MOST READ');
});

Given('I am on live stream site', () => {
  I.amOnPage('https://www.aljazeera.com/live');
  I.click('//button[@id="onetrust-accept-btn-handler"]')
});

Then('Player should be visible', async () => {
  I.wait(6);
  await I.seeElement('//iframe[@class="video-js pause-controller"]');
});

Then('Switch Player Text should be visible', () => {
  I.see('Switch Player');
});
