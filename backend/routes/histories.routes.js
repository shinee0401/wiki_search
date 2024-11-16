module.exports = app => {
  const historiesController = require("../controllers/histories.controller.js");

  var router = require("express").Router();

  router.get("/search", historiesController.search);
  router.get("/histories", historiesController.index);
  router.delete("/histories/:id", historiesController.delete);
  
  app.use('/api', router);
};
