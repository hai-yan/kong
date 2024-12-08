const pg = require('pg');

class PostgresUtil{
    user= process.env.STORM_DB_TENANTS_USER || 'kong';
    pwd= process.env.STORM_DB_TENANTS_PASSWORD || 'kong';
    host = process.env.STORM_DB_TENANTS_HOST || 'localhost';
    port= process.env.STORM_DB_TENANTS_PORT || '5432';
    dbPostgres= process.env.STORM_DB_TENANTS_NAME || 'kong';

    getPostgresConnectionInfo = async () =>{
      const  info = {
            user: this.user,
            password: this.pwd,
            host : this.host,
            port: this.port,
            database:this.dbPostgres
        };
      return info;
    }

    async queryDb(connectionInfo, queryString,values) {
        const client =new  pg.Client(connectionInfo)
        await client.connect();
        const results = await client.query(queryString, values);
        await client.end();
        return results;
    }

    async queryDbFor(queryString, values) {
        const connection =  await this.getPostgresConnectionInfo();
        return this.queryDb(connection, queryString, values);
    }

}

module.exports = new PostgresUtil();