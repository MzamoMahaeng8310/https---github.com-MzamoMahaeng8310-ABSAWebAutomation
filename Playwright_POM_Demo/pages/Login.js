exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
       
    }
    async goToPage() {

        await this.page.goto("https://www.way2automation.com/angularjs-protractor/webtables/")
    }
   


}