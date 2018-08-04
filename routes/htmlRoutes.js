var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  app.get("/addUsers", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/addUsers.html"));
  });

  app.get("/group", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/group.html"));
  });

  app.get("/newGroup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/newGroup.html"));
  });

  app.get("/settings", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/settings.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
};
