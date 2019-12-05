// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing and places it within req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// guests & waitlisted guests (DATA)
// =============================================================
var guestList = [
];
var waitList = [
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Hot Restaurant")
    res.sendFile(path.join(__dirname, "index.html"));
  });

// Create New guests - takes in JSON input
app.post("/api/guests", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newGuest = req.body;

  console.log(newGuest);

  // We then add the json the user sent to the guestList array
  guestList.push(newGuest);

  // We then display the JSON to the users
  res.json(newGuest);
});

// Create New waitlisted guests - takes in JSON input
app.post("/api/waitListGuests", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newwaitListGuest = req.body;
  
    console.log(newwaitListGuest);
  
    // We then add the json the user sent to the waitList array
    waitList.push(newwaitListGuest);
  
    // We then display the JSON to the users
    res.json(newwaitListGuest);
  });

  
  // Displays all guests
  app.get("/api/guestList", function(req, res) {
    return res.json(guestList);
  });

  // Displays all waitlist guests
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
