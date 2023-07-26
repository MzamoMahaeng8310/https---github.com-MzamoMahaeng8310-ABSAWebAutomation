exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        // this.txtUsername = page.getByLabel('Username')
        // this.txtPassword = page.getByLabel('Password')
        // this.btnLoginButton = page.getByRole('button', { name: 'Login'
        // })
    }
    async goToPage() {

        await this.page.goto("https://www.way2automation.com/angularjs-protractor/webtables/")
    }
    // async login(username, password) {

    //     await this.txtUsername.fill(username)
    //     await this.txtPassword.fill(password)
    //     await this.btnLoginButton.click()
    // }


}