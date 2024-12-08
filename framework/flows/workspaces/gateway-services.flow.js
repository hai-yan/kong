const {GatewayServices} = require("../../pages");

module.exports.createService = async (serviceInfo, page) =>{
    let gatewayServices = new GatewayServices(page);
    await gatewayServices.clickCreateBtn();
    await gatewayServices.inputName(serviceInfo.name);
    await gatewayServices.inputTag(serviceInfo.tag);
    await gatewayServices.selectCreateByProtocolRadio();
    await gatewayServices.selectProtocol(serviceInfo.protocol);
    await gatewayServices.inputHost(serviceInfo.host);
    await gatewayServices.inputPort(serviceInfo.port);
    await gatewayServices.inputPath(serviceInfo.path);
    await gatewayServices.clickSaveBtn();
}

module.exports.verifyServiceList = async (serviceInfo, page) =>{
    let gatewayServices = new GatewayServices(page);
    await gatewayServices.waitServicesItemInList(serviceInfo.name)
}


// module.exports.verifyServiceDetail = async (serviceInfo, page) =>{
// }




