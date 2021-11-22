// const {
//   Builder,
//   By,
//   Key
// } = require('selenium-webdriver');
// const assert = require("assert");
// let should = require("chai").should();

// describe("Checking login page", function () {

//   it('Filling in input fields', async function () {

//     let driver = await new Builder().forBrowser("firefox").build();
//     await driver.get("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");

//     driver.findElement(By.name("username")).clear();
//     driver.findElement(By.name("password")).clear();

//     await driver.findElement(By.name("username")).sendKeys("admin");
//     await driver.findElement(By.name("password")).sendKeys("12345");
//     await driver.findElement(By.className("btn")).sendKeys(Key.RETURN);
//     await driver.takeScreenshot().then(
//       function (image) {
//         require('fs').writeFileSync('./screenshot_test5.png', image, 'base64')
//       });

//     await driver.quit();
//   })
// })