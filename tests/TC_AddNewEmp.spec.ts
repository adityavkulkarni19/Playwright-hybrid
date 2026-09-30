
import { test } from "@playwright/test"
import { general } from "../lib/General"

test('Add New Employee', async ({ page }) => {

    let obj = new general(page);
    await obj.openapplication();
    await obj.login();
    await obj.AddNewEmp();
    await obj.logout();
});