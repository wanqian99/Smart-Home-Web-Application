// The main.js file of your application

//is in charge of processing the get and post requests of the web app
module.exports = function (app) {

    //get request that sends the render of the index.html page
    app.get("/", function (req, res) {
        res.render("index.html")
    });



    //get request that sends the render of the about.html page
    app.get("/about", function (req, res) {
        res.render("about.html");
    });
    


    //get request that sends the render of the addDevice.html page
    app.get("/addDevice", function (req, res) {
        res.render("addDevice.html");
    });



    //post request that inserts the data from the addDevice.html form to the database table 'device'
    app.post("/addDevice", function (req, res) {

        //if the status of the device is off, the checkbox would not send any value back,
        //and would therefore be null. So if the status is null, make the status be 'Off',
        //and insert it into the database.
        if(req.body.status == null) {
            req.body.status = "Off";
        }
        else {
            req.body.status = "On";
        }

        // insert data into database
        let sqlquery = "INSERT INTO device (id, status, type, name, brightness, volume, " +
                        "channel, startTime, endTime, track, timer, temperature, speed, water_vol) " +
                        "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        
        // execute sql query
        let newdevice = [req.body.id, req.body.status, req.body.type, req.body.name, 
                        req.body.brightness, req.body.volume, req.body.channel, 
                        req.body.startTime, req.body.endTime, req.body.track, req.body.timer, 
                        req.body.temperature, req.body.speed, req.body.water_vol];
        
        db.query(sqlquery, newdevice, (err, result) => {
            if (err) {
                return console.error(err.message);
            }else{
                //message that notifies user the device have been added to the database
                res.send("The Device have been added." +
                "<br><br><a href='/device'>Return to Device page</a>");
            }            
        });
    });



    //get request that gets all data from the database table 'device' and send it to device.html
    app.get("/device", function(req, res) {
        //query database to get all the device
        let sqlquery = "SELECT * FROM device";

        //if the status of the device is off, the checkbox would not send any value back,
        //and would therefore be null. So if the status is null, make the status be 'Off',
        //and insert it into the database.
        if(req.body.status == null) {
            req.body.status = "Off";
        }
        else {
            req.body.status = "On";
        }

        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/"); 
            } else {
                //sends the result to device.html to render onto the page
                res.render("device.html", {result});
            }   
        });
    });



    //post request that updates the data from the device.html form to the database table 'device'
    app.post("/device", function(req, res) {

        //if the status of the device is off, the checkbox would not send any value back,
        //and would therefore be null. So if the status is null, make the status be 'Off',
        //and insert it into the database.
        if(req.body.status == null) {
            req.body.status = "Off";
        }
        else {
            req.body.status = "On";
        }

        // update data in database
        let sqlquery = "UPDATE device SET status=?, type=?, name=?, brightness=?, volume=?, channel=?, startTime=?, endTime=?, track=?, timer=?, temperature=?, speed=?, water_vol=? WHERE id='"+req.body.id+"'";

        // execute sql query
        let newdevice = [req.body.status, req.body.type, req.body.name, req.body.brightness, 
                         req.body.volume, req.body.channel, req.body.startTime, req.body.endTime, 
                         req.body.track, req.body.timer, req.body.temperature, req.body.speed, 
                         req.body.water_vol];

        
        db.query(sqlquery, newdevice, (err, result) => {
            if (err) {
                return console.error(err.message);
            } else {
                //message that notifies user the device have been updated to the database
                res.send("The Device have been updated." +
                "<br><br><a href='/device'>Return to Device page</a>");
            }            
        });
    });



    app.post("/deleteDevice", function(req, res) {
        // delete data in database by the id of that device that is to be deleted
        let sqlquery = "DELETE FROM device WHERE id='"+req.body.id+"'";
        
        db.query(sqlquery, (err, result) => {
            if (err) {
                return console.error(err.message);
            } else {
                //message that notifies user the device have been deleted from the database
                res.send("The Device have been deleted." +
                "<br><br><a href='/device'>Return to Device page</a>");
            }            
        });
    });
}