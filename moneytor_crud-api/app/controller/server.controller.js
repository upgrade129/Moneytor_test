const db = require('../config/db.config.js');
const Server = db.servers;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  Server.create({  
    RAM: req.body.RAM,
    CPU: req.body.CPU,
    OperatingSystem: req.body.OperatingSystem,
    Graphics: req.body.Graphics,
    Storage: req.body.Storage
  }).then(server => {    
    // Send created customer to client
    res.send(server);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  Server.findAll().then(servers => {
    // Send all customers to Client
    res.send(servers);
  });
};
 
// Find a Customer by Id
exports.findById = (req, res) => {  
  Server.findByPk(req.params.serverId).then(server => {
    res.send(server);
  })
};
 
// Update a Customer
exports.update = (req, res) => {
  const id = req.params.serverId;
  Server.update( {RAM: req.body.RAM,
                  CPU: req.body.CPU,
                  OperatingSystem: req.body.OperatingSystem,
                  Graphics: req.body.Graphics,
                  Storage: req.body.Storage }, 
           { where: {id: req.params.customerId} }
           ).then(() => {
           res.status(200).send("updated successfully a server with id = " + id);
           });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.serverId;
  Server.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a server with id = ' + id);
  });
};