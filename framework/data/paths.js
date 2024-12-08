
class Paths{

    getUrl = async (path)=>{
        const serverHost = process.env.STORM_SERVER_HOST ||  'localhost';
        const port = process.env.SERVER_PORT || '8002';
        return `http://${serverHost}:${port}${path}`;
    }

    URL_WORKSPACES = this.getUrl('/workspaces');
}

module.exports = new Paths();