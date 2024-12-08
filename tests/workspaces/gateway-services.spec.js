const { test, expect } = require('@playwright/test');
const { GatewayServices, Workspaces } = require('../../framework/pages/index');
const WorkspacesFlows = require('../../framework/flows/workspaces/workspaces.flow');
const GatewayServicesFlows = require('../../framework/flows/workspaces/gateway-services.flow');
const { db } = require('../../lib');

test.describe('Workspaces - Gateway Services' , ()=>{
  let page;
  let serviceInfo = {
    name : `test-name0`,
    tag : `test-tag`,
    protocol : `https`,
    host : `localhost`,
    path : `/test-path`,
    port : `82`,
  };

  test.beforeAll(async ({browser}) => {
    await db.dbAll.clearServicesTables();
    page = await browser.newPage();
    await WorkspacesFlows.navigate(page);
    await WorkspacesFlows.selectWorkspace(page);
    await WorkspacesFlows.clickGatewayServices(page);
  });

  test('Create a new gateway service by protocol, host, port, path', async ({})=>{
    await GatewayServicesFlows.createService(serviceInfo, page);
    await GatewayServicesFlows.verifyServiceList(serviceInfo, page);
    // await GatewayServicesFlows.verifyServiceDetail(serviceInfo, page);
  })


})
