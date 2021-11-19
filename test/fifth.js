const {
  Builder,
  By,
  Key
} = require('selenium-webdriver');
const assert = require("assert");
let should = require("chai").should();

describe("Checking login page", function () {

  it('Please enter username.', async function () {

    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");
    
    
    await driver.findElement(By.className("btn")).sendKeys(Key.RETURN);

    
    let message = await driver.findElement(By.xpath("/html/body/div/div/form/div[1]/span")).getAttribute("value").then(function (value) {
      return value;
    });

    assert.strictEqual(message, "Please enter username.");
    // message.should.equal("Please enter username.");

    // await driver.takeScreenshot().then(
    //   function (image) {
    //     require('fs').writeFileSync('./screenshot_test5.png', image, 'base64')
    //   });
    await driver.quit();
  })


})