
const postgresUtil = require("./postgres-util");

module.exports.clearServicesTables = async ()=>{
        const queryString = `TRUNCATE TABLE services CASCADE;`;
        let res = await postgresUtil.queryDbFor(queryString);
        return res;
}

module.exports.clearRoutesTables = async ()=>{
        const queryString = `TRUNCATE TABLE routes CASCADE;`;
        let res = await postgresUtil.queryDbFor(queryString);
        return res;
}

