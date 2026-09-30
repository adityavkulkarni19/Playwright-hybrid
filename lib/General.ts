
import { global } from "./Global";

export class general extends global {

    async openapplication() {
        await this.page.goto(this.url);
        console.log('Application Opened');
    }

    async login() {
        await this.page.locator(this.loginusername).fill(this.username);
        await this.page.locator(this.loginpassword).fill(this.password);
        await this.page.locator(this.buttonlogin).click();
        console.log("Login completed");
    }
    async logout() {
        await this.page.locator(this.linklogout).click();
        console.log("Logout Completed");
    }
    async AddNewEmp() {
        const frame = this.page.frameLocator(this.empinfoframe);
        await frame.locator(this.Addbutton).click();
        await frame.locator(this.txtboxfirstName).fill(this.empfirstname);
        await frame.locator(this.txtboxlastName).fill(this.emplastname);
        await frame.locator(this.SaveButton).click();
    }
}