module.exports = (sequelize, Sequelize) => {
    const Server = sequelize.define('server', {
      RAM: {
      type: Sequelize.STRING
      },
      CPU: {
      type: Sequelize.STRING
      },
      OperatingSystem: {
        type: Sequelize.STRING
      },
      Graphics: {
        type: Sequelize.STRING
      },
      Storage: {
        type: Sequelize.STRING
      },
    });
    
    return Server;
  }