// test data & object /element for the application 


import { Page } from "@playwright/test";

export class global {

    constructor(public page: Page) {

    }
    /*********test Data*************/
    public url: string = "https://sureshitacademy.in/hrms/login.php";
    public username: string = "sureshit";
    public password: string = "sureshit";

    public empfirstname: string = "Aditya";
    public emplastname: string = "Kulkarni";

    /************* Object /element*********** */

    public loginusername: string = "//input[@name='txtUserName']";
    public loginpassword: string = "//input[@name='txtPassword']";
    public buttonlogin: string = "//input[@name='Submit']";
    public linklogout: string = "//a[text()='Logout']";

    public empinfoframe: string = "//iframe[@id='rightMenu']"
    public Addbutton: string = "//input[@value='Add']";
    public txtboxfirstName: string = "//input[@name='txtEmpFirstName']";
    public txtboxlastName: string = "//input[@name='txtEmpLastName']";
    public SaveButton: string = "//input[@value='Save']";

}
