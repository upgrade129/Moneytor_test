module.exports = app => {
    const server = require("../controller/server.controller");
  
    var router = require("express").Router();
  
    router.post("/", server.create);
  
    router.get("/", server.findAll);
  
    
    router.get("/id", server.findOne);
  
    router.put("/id", server.update);
  
    router.delete("/id", server.delete);
  
    router.delete("/", server.deleteAll);
  
    app.use('/api/server', router);
  };