import {
  test,
  expect
} from '@playwright/test';
import {  LoginPage} from '../../pages/Login'
import {AddUser } from  '../../pages/AddUser'
import  {generateRandomCharacters }  from '../utils/RandomGenerator.js'
const dataset = JSON.parse(JSON.stringify(require("../utils/placeholderTestData.json")));
test('Login Page', async ({ page}, testInfo) => {

  const login = new LoginPage(page)
  await login.goToPage()

  await testInfo.attach("Home", {
    body: await page.screenshot(),
    contentType: "image/png",
  })


  await testInfo.attach("Login", {
    body: await page.screenshot(),
    contentType: "image/png",
  })
 

});

for (const data of dataset) {
test(`Create User In The Table  ${data.FirstName}`, async ({  page},testInfo ) => {

  const login = new LoginPage(page)
  await login.goToPage()
  await page.locator("tbody").waitFor() 
  await page.pause()
  const createUser  = new AddUser(page)

  let random = generateRandomCharacters(4)
 // let randomNumber = Math.random();
let  usernameUnique = data.UserName + random

  await createUser.addTheUser(data.FirstName,data.LastName,usernameUnique,data.Password,data.Email,data.Mobile)

  await testInfo.attach("Table", {
    body: await page.screenshot(),
    contentType: "image/png",
  })
  
});
}


