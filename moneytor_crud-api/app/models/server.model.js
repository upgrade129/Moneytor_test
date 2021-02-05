module.exports = (sequelize, Sequelize) => {
    const server = sequelize.define("server", {
      ServerID: {
        type: Sequelize.INTEGER, 
      },
      RAM: {
        type: Sequelize.INTEGER
      },
      CPU: {
        type: Sequelize.INTEGER
      },
      OperatingSystem: {
        type: Sequelize.STRING
      },
      Graphics: {
        type: Sequelize.STRING
      },
      Storage: {
        type: Sequelize.INTEGER
      },
      
    });
  
    return server;
  };