const { Builder, By, Key } = require('selenium-webdriver');

describe("Checking login page", function () {
  
  it('Open the page', async function () {

    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");

    await driver.quit();
  })
})