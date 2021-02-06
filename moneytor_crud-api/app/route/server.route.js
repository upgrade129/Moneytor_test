module.exports = function(app) {
 
    const servers = require('../controller/server.controller.js');
 
    app.post('/api/servers', servers.create);
 
    app.get('/api/servers', servers.findAll);
 
    app.get('/api/servers/:serverId', servers.findById);
 
    app.put('/api/servers/:serverId', servers.update);
 
    app.delete('/api/servers/:serverId', servers.delete);
}