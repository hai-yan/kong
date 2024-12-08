const {Routes} = require("../../pages");

module.exports.createRoute = async (routeInfo, page) =>{
    const routes = new Routes(page);
    await routes.clickCreateBtn();
    await routes.inputName(routeInfo.name);
    await routes.inputService(routeInfo.service);
    await routes.inputTag(routeInfo.tags);
    await routes.selectProtocol(routeInfo.protocols);
    await routes.inputPath(routeInfo.paths);
    await routes.clickSaveBtn();
    await routes.waitRouteItemInList(routeInfo.name);
}

// module.exports.verifyRouteList = async (serviceInfo, page) =>{
// }


// module.exports.verifyRouteDetail = async (serviceInfo, page) =>{
// }




