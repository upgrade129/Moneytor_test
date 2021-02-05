const db = require("../models");
const server = db.server;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.ServerID) {
      res.status(400).send({
      message: "ID can not be empty!"
    });
    return;
  }

  const server = {
    ServerID: req.body.ServerID,
    RAM: req.body.RAM,
    CPU: req.body.CPU,
    OperatingSystem: req.body.OperatingSystem,
    Graphics: req.body.Graphics,
    Storage: req.body.Storage,
  };

  server.create(server)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the server."
      });
    });
  
};

exports.findAll = (req, res) => {
    const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  server.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving servers."
      });
    });
};
  


exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  
};

exports.update = (req, res) => {
    const id = req.params.id;

  server.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
    const id = req.params.id;

  server.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
    server.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
  
};

