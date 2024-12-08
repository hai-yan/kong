const {Workspaces} = require("../../pages");

module.exports.navigate = async (page) =>{
    const workspaces = new Workspaces(page);
    await workspaces.navigate();
    await workspaces.waitWorkspacesTab();
}

module.exports.selectWorkspace = async (page) =>{
    const workspaces = new Workspaces(page);
    await workspaces.selectWorkspace();
}

module.exports.clickGatewayServices = async (page) =>{
    const workspaces = new Workspaces(page);
    await workspaces.clickGatewayServices();
}

module.exports.clickRoutes = async (page) =>{
    const workspaces = new Workspaces(page);
    await workspaces.clickRoutes();
}