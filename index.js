// The index.js file of your application

//modules required for the web app
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require ("mysql");
const path = require("path");

//initialise express as app and use port number 8089
const app = express();
const port = 8089;

//create a connection
const db = mysql.createConnection ({ 
    host: "localhost",
    user: "root",
    password: "password",
    database: "Devices" 
});

// connect to database
db.connect((err) => {
    if (err) { 
        throw err;
    }
    console.log("Connected to database");

    //create the table called 'device' in the 'Devices' database, if the table doesn't exist
    //this table stores the user's device type, name, status etc...
    //the insert, update and delete are done on the same table
    db.query(`CREATE TABLE IF NOT EXISTS device (
        id INT UNSIGNED AUTO_INCREMENT NOT NULL, 
        type VARCHAR(30) NOT NULL,
        name VARCHAR(30) NOT NULL, 
        status VARCHAR(3) NOT NULL, 
        brightness INT UNSIGNED,
        volume INT UNSIGNED,
        channel INT UNSIGNED,
        startTime VARCHAR(10),
        endTime VARCHAR(10),
        track VARCHAR(50),
        timer CHAR(5),
        temperature INT UNSIGNED,
        speed INT UNSIGNED,
        water_vol INT UNSIGNED,
        PRIMARY KEY(id)
        );`
    );
});

global.db = db;

//use express.static to allow adding styles.css and scripts.js to the web app
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.listen(port, () => console.log(`Node server is running... on port ${port}!`));



// var http = require("http");

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Welcome to the mid-term application! \n\n");
//     res.write("This application must run on PORT 8089");
//     res.end();
//   })
//   .listen(8089, function() {
//     console.log("Node server is running...");
//   });