const {expect} = require('@playwright/test');
const {constants,pathsHelper} = require('../../../lib/index');
const paths = require('../../../framework/data/paths');

class GatewayServices{
    constructor(page) {
        this.page  = page;
    }

    #locatorsData={
        createServiceBtn: `[data-testid="new-gateway-service"]`,
        nameInput: `[data-testid="gateway-service-name-input"]`,
        tagsInput: `[data-testid="gateway-service-tags-input"]`,
        serviceByProtocolRadio: `[data-testid="gateway-service-protocol-radio"]`,
        protocolSelect: `[data-testid="gateway-service-protocol-select"]`,
        protocolItems: `.select-items-container`,
        hostInput: `[data-testid="gateway-service-host-input"]`,
        pathInput: `[data-testid="gateway-service-path-input"]`,
        portInput: `[data-testid="gateway-service-port-input"]`,
        saveBtn: `[data-testid="service-form-submit"]`,
        newServiceToolbarBtn:`[data-testid=toolbar-add-gateway-service]`,
        filterBtn: `[data-testid="filter-button"]`,
        servicesList: `.kong-ui-entities-gateway-services-list`
    }

    #createServiceBtn =() =>this.page.locator(this.#locatorsData.createServiceBtn);
    #nameInput =() =>this.page.locator(this.#locatorsData.nameInput);
    #tagsInput =() =>this.page.locator(this.#locatorsData.tagsInput);
    #serviceByProtocolRadio =() =>this.page.locator(this.#locatorsData.serviceByProtocolRadio);
    #protocolSelect =() =>this.page.locator(this.#locatorsData.protocolSelect);
    #protocolItems =() =>this.page.locator(this.#locatorsData.protocolItems);
    #protocolItem =(name) =>this.#protocolItems().locator(`[data-testid="select-item-${name}"]`);
    #hostInput =() =>this.page.locator(this.#locatorsData.hostInput);
    #pathInput =() =>this.page.locator(this.#locatorsData.pathInput);
    #portInput =() =>this.page.locator(this.#locatorsData.portInput);
    #saveBtn =() =>this.page.locator(this.#locatorsData.saveBtn);
    #filterBtn =() =>this.page.locator(this.#locatorsData.filterBtn);
    #servicesList =() =>this.page.locator(this.#locatorsData.servicesList);
    #servicesItemInList =(name) =>this.#servicesList().locator(`table td:has-text("${name}")`);

    clickCreateBtn = async () =>{
        return await this.#createServiceBtn().click();
    }

    inputName = async (name) =>{
        await this.#nameInput().fill(name);
    }

    inputTag = async (tag) =>{
        await this.#tagsInput().fill(tag);
    }

    selectCreateByProtocolRadio = async () =>{
        await this.#serviceByProtocolRadio().click();
    }

    selectProtocol = async (protocol) =>{
        await this.#protocolSelect().click();
        await this.#protocolItem(protocol).click();
    }

    inputHost = async (host) =>{
        await this.#hostInput().fill(host);
    }

    inputPort = async (name) =>{
        await this.#portInput().fill(name);
    }

    inputPath = async (name) =>{
        await this.#pathInput().fill(name);
    }

    clickSaveBtn = async () =>{
        await this.#saveBtn().isEnabled();
        await this.#saveBtn().click();
    }

    waitServicesItemInList = async (name) =>{
        await this.#filterBtn().isEnabled();
        await this.#servicesItemInList(name).isVisible();
    }



}

module.exports = GatewayServices;