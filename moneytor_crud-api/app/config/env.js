const env = {
    host: "localhost",
    username: "root",
    password: "",
    database: "server",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  module.exports = env;