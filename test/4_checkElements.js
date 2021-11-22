const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');
const assert = require("assert");


describe("Checking elements", function () {

  it('Open the page', async function () {

    let driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    // let userName = await driver.findElement(By.name("username"));
    // await driver.findElement(By.name("password"));
   
    let inputName = await driver.findElement(By.name("username"));
    let inputPassword =  await driver.findElement(By.name("password"));
    let btnLogin = await driver.findElement(By.className("btn"));
    if (inputName) {
      console.log("inputName is present");
    } else if (inputPassword) {
      console.log("inputName is present");
    } else if (btnLogin) {
      console.log("btnLogin is present");
    } else {
      console.log("There are no such elements on the page.");
    }
    // console.log(userName);

    await driver.quit();
  })
  
})