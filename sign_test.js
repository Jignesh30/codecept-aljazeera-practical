//  Feature('My First Test');

// Scenario('Test Aljazeera',async ({ I }) => {
//   I.amOnPage('/');

//   //Click on cookies
//   I.click("//button[@id=\"onetrust-accept-btn-handler\"]");
  
//   I.scrollTo('//h2[@aria-label="most read"]');

//   //Scenario 1
//   I.see('MOST READ');

//   //Scenario 2
//   let numOfElements = await I.grabNumberOfVisibleElements('//ul[@class="trending-articles__list"]//li');
//   if(numOfElements != "10"){
//     console.log("Most Read Section has " +numOfElements+ " posts");
//     throw new Error("Most Read Section has " +numOfElements+ " posts");//Intentional Failure
//   }

//   //Scenario 3
//   I.resizeWindow(390,844);;
//   I.scrollPageToTop();
//   await I.scrollTo('//h2[@aria-label="most read"]');

//   //Scenario 4
//   I.click("//header[@role=\"banner\"]");
//   I.wait(1);
//   let url ;
//   for (let i = 0; i < 3; i++) {
//     I.pressKeyDown('Tab');
//     I.pressKeyUp('Tab');
//     I.wait(1);
//     if(i==2){
//       I.pressKeyDown('Enter');
//       I.pressKeyUp('Enter');
//       I.wait(5);
//       url = await I.grabCurrentUrl();
//     }
//   }
//   console.log(url);
//   I.seeInCurrentUrl("/#most-read-container"); //Asserting the endpoint
//   I.see('MOST READ');

// });