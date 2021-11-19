const {
  Builder,
  By,
  Key
} = require('selenium-webdriver');

describe("Checking login page", function () {

  it('Credential values.', async function () {

    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");

    let inputName = await driver.findElement(By.name("username")).getAttribute("value");
    let inputPassword = await driver.findElement(By.name("password")).getAttribute("value");

    await driver.quit();
  })
})