import { test as base, expect} from "@playwright/test";
import { HomePage } from "../../elements/homepage";
import { Helpers } from "../../utils/helpers";
import { Login } from "../../elements/login";



type Fixtures = {
    homepage: HomePage;
    helpers: Helpers;
    login: Login;
};


export const test = base.extend<Fixtures>({
    homepage: async ({ page }, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    },
    helpers: async ({ page }, use) => {
        const helpers = new Helpers(page);
        await use(helpers);
    },

    login: async ({ page }, use) => {
        const login = new Login(page);
        await use(login);
    }
}); 


export { expect };