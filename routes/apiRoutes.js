var db = require("../models");

var request = require("request");

var points = 0;
var signInId;

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Royall14",
  database: "project2",
  multipleStatements: true
});

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/coords", function (req, res) {

    var lat = (req.query.lat);
    var lng = (req.query.long);

    var location = (lat + "," + lng);

    res.json({ signInId: signInId });

    var options = {
      method: "GET",
      url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      qs:
      {
        location: location,
        radius: "20000",
        type: "gym",
        output: "json",
        key: "AIzaSyBpN9uvSZcmOLHtbehWtVy3ISrbBOa84Y0"
      },
      headers:
      {
        "Postman-Token": "63243cff-2a5f-487a-b563-6d8d56d70bcf",
        "Cache-Control": "no-cache"
      }
    };

    request(options, function (error, response, body) {
      if (error) { throw new Error(error); }

      var body2 = JSON.parse(body);

      // console.log(body2.results);

      if ([body2.results] < 1) {
        console.log("there are no gyms nearby");
        return;
      } else {

        console.log("you're checked in!");

      }

    });


  });


  app.get("/api/userInfo", function (req, res) {

    var firstName = (req.query.fn);
    var lastName = (req.query.ln);
    var email = (req.query.ema);
    var profileImage = (req.query.pi);
    signInId = (req.query.sid);

    res.json({ sid: signInId });





    con.connect(function (err) {
      if (err) { throw err; }
      var userRecord = [
        [firstName, lastName, email, profileImage, signInId]
      ];


      console.log("Connected!");
      // var sql = "INSERT INTO userTable (firstName, lastName, email, profileImage, signInId) VALUES ? WHERE NOT EXISTS (SELECT * FROM userTable WHERE signInId = ? LIMIT 1)";
      var sql = "INSERT IGNORE INTO userTable (firstName, lastName, email, profileImage, signInId) VALUES ?";
      con.query(sql, [userRecord, signInId], function (err) {
        if (err) { throw err; }
        console.log("1 record inserted");
      });
    });
  });

  app.post("/api/addPoints", function (req, res) {
    points = points + 5;

    res.json({ points: points });



    signInId = (req.body.signInId);

    console.log(signInId);

    // signInId = "100636233918382122796";

    var sql = "UPDATE userTable SET points = ? WHERE signInId = ?";
    con.query(sql, [points, signInId], function (err) {
      if (err) { throw err; }
      console.log("1 record inserted");

    });
  });


  app.get("/test", function (req, res) {


    res.json({ msg: "test" });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};