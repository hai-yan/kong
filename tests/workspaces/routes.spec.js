const { test, expect } = require('@playwright/test');
const { GatewayServices, Workspaces } = require('../../framework/pages/index');
const WorkspacesFlows = require('../../framework/flows/workspaces/workspaces.flow');
const RoutesFlows = require('../../framework/flows/workspaces/routes.flow');
const {db} = require("../../lib");


test.describe('Workspaces - Routes' , ()=>{
  let page;
  let routeInfo = {
    name : `test-routes-name0`,
    service : `test-name`,
    tags : `test-routes-tag`,
    protocols : `http`,
    paths : `/test-routes-path`
  };

  test.beforeAll(async ({browser}) => {
    await db.dbAll.clearRoutesTables();
    page = await browser.newPage();
    await WorkspacesFlows.navigate(page);
    await WorkspacesFlows.selectWorkspace(page);
    await WorkspacesFlows.clickRoutes(page);
  });

  test('Create a new routes', async ({})=>{
    await RoutesFlows.createRoute(routeInfo, page);
    // await RoutesFlows.verifyRouteList(routeInfo, page);
    // await RoutesFlows.verifyRouteDetail(routeInfo, page);
  })


})
