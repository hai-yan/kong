const {expect} = require('@playwright/test');
const {constants,pathsHelper} = require('../../../lib/index');
const paths = require('../../../framework/data/paths');

class Workspaces{
    constructor(page) {
        this.page  = page;
    }

    #locatorsData={
        sidebar: `.sidebar-content-container`,
        workspacesTab: `a[href="/workspaces"]`,
        gatewayServicesTab: `a[href="/default/services"]`,
        routesTab: `[data-testid="sidebar-item-routes"]`,
        workspaceName: `.workspace-name`
    }

    #sidebar =() =>this.page.locator(this.#locatorsData.sidebar);
    #workspacesTab =() =>this.#sidebar().locator(this.#locatorsData.workspacesTab);
    #gatewayServicesTab =() =>this.#sidebar().locator(this.#locatorsData.gatewayServicesTab);
    #routesTab =() =>this.#sidebar().locator(this.#locatorsData.routesTab);
    #workspaceName =() =>this.page.locator(this.#locatorsData.workspaceName);

    navigate = async () =>{
        const link =await paths.URL_WORKSPACES;
        return await this.page.goto(link);
    }

    waitWorkspacesTab= async () =>{
        await this.#workspacesTab().waitFor({state:"visible", timeout:constants.timeouts.long_time_out});
    }

    selectWorkspace = async () =>{
        return await this.#workspaceName().click();
    }

    clickGatewayServices = async () =>{
        return await this.#gatewayServicesTab().click();
    }

    clickRoutes = async () =>{
        return await this.#routesTab().click();
    }
}

module.exports = Workspaces;