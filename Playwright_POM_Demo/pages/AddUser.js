exports.AddUser = class AddUser {

    constructor(page) {
        this.page = page
        this.lnkAddUser = page.getByRole('button', { name: 'Add User' })
        this.txtFirstName = page.locator('input[name="FirstName"]')
        this.txtLastName = page.locator('input[name="LastName"]')
        this.txtUserName = page.locator('input[name="UserName"]')
        this.txtPassword = page.locator('input[name="Password"]')
        this.ChkCompany = page.getByLabel('Company AAA')
        this.drprole = page.getByRole('combobox')
        this.txtEmail = page.locator('input[name="Email"]')
        this.txtMobile = page.locator('input[name="Mobilephone"]')
        this.btnSave = page.getByRole('button', { name: 'Save' })

        
    }

    async addTheUser(firstname,lastName,userName,password,email,mmobile)
    {
        await this.lnkAddUser.click()
        await this.txtFirstName.fill(firstname)
        await this.txtLastName.fill(lastName)
        await this.txtUserName.fill(userName)
        await this.txtPassword.fill(password)
        await this.ChkCompany.check()
        await this.drprole.selectOption('2')
        await this.txtEmail.fill(email)
        await this.txtMobile.fill(mmobile)
        await page.pause()
        await btnSave.click()

    }



   

}