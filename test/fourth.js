const {
  Builder,
  By,
  Key
} = require('selenium-webdriver');
const assert = require("assert");
let should = require("chai").should();

describe("Checking login page", function () {

  it('The presence of elements on the page.', async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");
    try {
      
      let inputs = await driver.findElements(By.className('form-control'));

    } catch (err) {
      console.log(err)
    } finally {
      await driver.quit();
    }

    // await driver.takeScreenshot().then(
    //   function (image) {
    //     require('fs').writeFileSync('./screenshot_test4.png', image, 'base64')
    //   });
    
  })
})