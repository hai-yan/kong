const {expect} = require('@playwright/test');
const {constants,pathsHelper} = require('../../../lib/index');
const paths = require('../../../framework/data/paths');

class Routes{
    constructor(page) {
        this.page  = page;
    }

    #locatorsData={
        createServiceBtn: `[data-testid="new-route"]`,
        nameInput: `[data-testid="route-form-name"]`,
        serviceInput: `[data-testid="route-form-service-id"]`,
        tagsInput: `[data-testid="route-form-tags"]`,
        protocolSelect: `[data-testid="route-form-protocols"]`,
        protocolItems: `.select-items-container`,
        pathInput: `[data-testid="route-form-paths-input-1"]`,
        saveBtn: `[data-testid="route-form-submit"]`,
        filterBtn: `[data-testid="filter-button"]`,
        routesList: `.kong-ui-entities-routes-list`
    }

    #createServiceBtn =() =>this.page.locator(this.#locatorsData.createServiceBtn);
    #nameInput =() =>this.page.locator(this.#locatorsData.nameInput);
    #tagsInput =() =>this.page.locator(this.#locatorsData.tagsInput);
    #protocolSelect =() =>this.page.locator(this.#locatorsData.protocolSelect);
    #protocolItems =() =>this.page.locator(this.#locatorsData.protocolItems);
    #protocolItem =(name) =>this.#protocolItems().locator(`[data-testid="select-item-${name}"]`);
    #serviceInput =() =>this.page.locator(this.#locatorsData.serviceInput);
    #pathInput =() =>this.page.locator(this.#locatorsData.pathInput);
    #saveBtn =() =>this.page.locator(this.#locatorsData.saveBtn);
    #filterBtn =() =>this.page.locator(this.#locatorsData.filterBtn);
    #routesList =() =>this.page.locator(this.#locatorsData.routesList);
    #routeItemInList =(name) =>this.#routesList().locator(`table td:has-text("${name}")`);

    clickCreateBtn = async () =>{
        return await this.#createServiceBtn().click();
    }

    inputName = async (name) =>{
        await this.#nameInput().fill(name);
    }

    inputTag = async (tag) =>{
        await this.#tagsInput().fill(tag);
    }

    selectProtocol = async (protocol) =>{
        await this.#protocolSelect().click();
        await this.#protocolItem(protocol).click();
    }

    inputService = async (service) =>{
        await this.#serviceInput().fill(service);
    }

    inputPath = async (path) =>{
        await this.#pathInput().fill(path);
    }

    clickSaveBtn = async () =>{
        await this.#saveBtn().isEnabled();
        await this.#saveBtn().click();
    }

    waitRouteItemInList = async (name) =>{
        await this.#filterBtn().isEnabled();
        await this.#routeItemInList(name).isVisible();
    }


}

module.exports = Routes;