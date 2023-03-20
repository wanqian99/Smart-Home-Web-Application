//for addDevice.html form validation
function inputValidation() {
    var type = document.getElementById("type").value;

    //if device type is not selected, alert the user and return false
    if (type == "") {
        alert("Select a Device type");
        return false;
    }

    //if device type is living room lights,
    //if name is null, alert the user and return false
    //if brightness value is 0, alert the user and return false
    if(type == "Living Room Lights") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["brightness"].value == 0) {
            alert("Brightness value must be larger than 0");
            return false;
        }
    }

    //if device type is television or radio,
    //if name is null, alert the user and return false
    //if volume value is 0, alert the user and return false
    //if channel is null, alert the user and return false
    if(type == "Television" || type == "Radio") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["volume"].value == 0) {
            alert("Volume value must be larger than 0");
            return false;
        }
        if (document.forms["form"]["channel"].value == "") {
            alert("Channel must be filled out");
            return false;
        }
    }

    //if device type is living room curtain or kitchen blinds or air purifier,
    //if name is null, alert the user and return false
    //if startTime is null, alert the user and return false
    //if endTime is null, alert the user and return false
    if(type == "Living Room Curtain" || type == "Kitchen Blinds" || type == "Air Purifier") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["startTime"].value == "") {
            alert("Start Time must be filled out");
            return false;
        }
        if (document.forms["form"]["startTime"].value == "") {
            alert("End Time must be filled out");
            return false;
        }
    }

    //if device type is audio speaker,
    //if name is null, alert the user and return false
    //if volume value is 0, alert the user and return false
    //if track is null, alert the user and return false
    if(type == "Audio Speaker") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["volume"].value == 0) {
            alert("Volume value must be larger than 0");
            return false;
        }
        if (document.forms["form"]["track"].value == "") {
            alert("Audio Track must be filled out");
            return false;
        }
    }

    //if device type is oven and air conditioner,
    //if name is null, alert the user and return false
    //if timer is null, alert the user and return false
    //if temperature is null, alert the user and return false
    if(type == "Oven" || type == "Air Conditioner") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["timer"].value == "") {
            alert("Timer must be filled out");
            return false;
        }
        if (document.forms["form"]["temperature"].value == "") {
            alert("Temperature must be filled out");
            return false;
        }
    }

    //if device type is rice cooker or alarm clock or microwave,
    //if name is null, alert the user and return false
    //if timer is null, alert the user and return false
    if(type == "Rice Cooker" || type == "Alarm Clock" || type == "Microwave") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["timer"].value == "") {
            alert("Timer must be filled out");
            return false;
        }
    }

    //if device type is living room fan,
    //if name is null, alert the user and return false
    //if timer is null, alert the user and return false
    //if speed value is 0, alert the user and return false
    if(type == "Living Room Fan") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["timer"].value == "") {
            alert("Timer must be filled out");
            return false;
        }
        if (document.forms["form"]["speed"].value == 0) {
            alert("Speed value must be larger than 0");
            return false;
        }
    }

    //if device type is smart door lock or wifi or cctv or motino sensor,
    //if name is null, alert the user and return false
    if(type == "Smart Door Lock" || type == "WiFi" || type == "CCTV" || type == "Motion Sensor") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
    }

    //if device type is refrigerator or heating system,
    //if name is null, alert the user and return false
    //if temperature is null, alert the user and return false
    if(type == "Refrigerator" || type == "Heating System") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["temperature"].value == "") {
            alert("Temperature must be filled out");
            return false;
        }
    }

    //if device type is bathtub,
    //if name is null, alert the user and return false
    //if temperature is null, alert the user and return false
    //if water volume is null, alert the user and return false
    if(type == "BathTub") {
        if (document.forms["form"]["name"].value == "") {
            alert("Name must be filled out");
            return false;
        }
        if (document.forms["form"]["water_vol"].value == "") {
            alert("Water Volume must be filled out");
            return false;
        }
        if (document.forms["form"]["temperature"].value == "") {
            alert("Temperature must be filled out");
            return false;
        }
    }
    
    //loop through all input, for each input that is null, insert a value 0 instead
    for(var i = 0; i < 12; i++)
    {
        if(document.getElementsByTagName("input")[i].value == '') {
            document.getElementsByTagName("input")[i].value = "0";
        }
    }
}






//for addDevice.html device type dropdown selection
function typefunc(val) {
    var elements = document.getElementsByClassName("fields");
    //dont display all fields first
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    //if living room lights is selected, display name, status, brightness fields
    if(val == "Living Room Lights")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("brightness").style.display = "block";
    }

    //if television or radio is selected, display name, status, volume, channel fields
    if(val == "Television" || val == "Radio")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("volume").style.display = "block";
        document.getElementById("channel").style.display = "block";
    }

    //if living room curtain or kitchen blinds or air purifier is selected, display name, status, time fields
    if(val == "Living Room Curtain" || val == "Kitchen Blinds" || val == "Air Purifier")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("time").style.display = "block";
    }

    //if audio speaker is selected, display name, status, volume, track fields
    if(val == "Audio Speaker")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("volume").style.display = "block";
        document.getElementById("track").style.display = "block";
    }

    //if oven or air conditioner is selected, display name, status, timer, temperature fields
    if(val == "Oven" || val == "Air Conditioner")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("timer").style.display = "block";
        document.getElementById("temperature").style.display = "block";
    }

    //if rice cooker or alarm clock or microwave is selected, display name, status, timer fields
    if(val == "Rice Cooker" || val == "Alarm Clock" || val == "Microwave")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("timer").style.display = "block";
    }

    //if living room fan is selected, display name, status, timer, speed fields
    if(val == "Living Room Fan")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("timer").style.display = "block";
        document.getElementById("speed").style.display = "block";
    }

    //if smart door lock or wifi or cctv or motion sensor is selected, display name, status fields
    if(val == "Smart Door Lock" || val == "WiFi" || val == "CCTV" || val == "Motion Sensor")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
    }

    //if refrigerator or heating system is selected, display name, status, temperature fields
    if(val == "Refrigerator" || val == "Heating System")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("temperature").style.display = "block";
    }

    //if bathtub is selected, display name, status, water volume, temperature fields
    if(val == "BathTub")
    {
        document.getElementById("name").style.display = "block";
        document.getElementById("status").style.display = "block";
        document.getElementById("water_vol").style.display = "block";
        document.getElementById("temperature").style.display = "block";
    }
}





//for addDevice.html slider values update
function addbrightnessfunc(val) {
    document.getElementById("brightnessVal").innerHTML = "Brightness: " + val; 
}
function addvolumefunc(val) {
    document.getElementById("volumeVal").innerHTML = "Volume: " + val; 
}
function addspeedfunc(val) {
    document.getElementById("speedVal").innerHTML = "Speed: " + val; 
}





//for device.html check with user to proceed
function checkWithUser() {
    // ask user for confirmation
    if(window.confirm('Are you sure to proceed?')){
        // execute sql query if pressed OK
        return true;
    }
    else {
        // Cancel is pressed
        window.alert('This has been canceled.');
        // cancel the operation
        return false;
    }
}

//for device.html form validation
function updateValidation() {
    //loop through each form to check the form fields
    for(var i = 0; i < document.forms.length; i++) {
        var type = document.forms[i]["type"].value;

        //if device type is not selected, alert the user and return false
        if (type == "") {
            alert("Select a Device type");
            return false;
        }

        //if device type is living room lights,
        //if name is null, alert the user and return false
        //if brightness value is 0, alert the user and return false
        if(type == "Living Room Lights") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["brightness"].value == 0) {
                alert("Brightness value must be larger than 0");
                return false;
            }
        }
    
        //if device type is television or radio,
        //if name is null, alert the user and return false
        //if volume value is 0, alert the user and return false
        //if channel is null, alert the user and return false
        if(type == "Television" || type == "Radio") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["volume"].value == "") {
                alert("Volume value must be larger than 0");
                return false;
            }
            if (document.forms[i]["channel"].value == "") {
                alert("Channel must be filled out");
                return false;
            }
        }
    
        //if device type is living room curtain or kitchen blinds or air purifier,
        //if name is null, alert the user and return false
        //if startTime is null, alert the user and return false
        //if endTime is null, alert the user and return false
        if(type == "Living Room Curtain" || type == "Kitchen Blinds" || type == "Air Purifier") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["startTime"].value == "") {
                alert("Start Time must be filled out");
                return false;
            }
            if (document.forms[i]["endTime"].value == "") {
                alert("End Time must be filled out");
                return false;
            }
        }
    
        //if device type is audio speaker,
        //if name is null, alert the user and return false
        //if volume value is 0, alert the user and return false
        //if track is null, alert the user and return false
        if(type == "Audio Speaker") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["volume"].value == "") {
                alert("Volume value must be larger than 0");
                return false;
            }
            if (document.forms[i]["track"].value == "") {
                alert("Audio Track must be filled out");
                return false;
            }
        }
    
        //if device type is oven and air conditioner,
        //if name is null, alert the user and return false
        //if timer is null, alert the user and return false
        //if temperature is null, alert the user and return false
        if(type == "Oven" || type == "Air Conditioner") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["timer"].value == "") {
                alert("Timer must be filled out");
                return false;
            }
            if (document.forms[i]["temperature"].value == "") {
                alert("Temperature must be filled out");
                return false;
            }
        }
    
        //if device type is rice cooker or alarm clock or microwave,
        //if name is null, alert the user and return false
        //if timer is null, alert the user and return false
        if(type == "Rice Cooker" || type == "Alarm Clock" || type == "Microwave") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["timer"].value == "") {
                alert("Timer must be filled out");
                return false;
            }
        }
    
        //if device type is living room fan,
        //if name is null, alert the user and return false
        //if timer is null, alert the user and return false
        //if speed value is 0, alert the user and return false
        if(type == "Living Room Fan") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["timer"].value == "") {
                alert("Timer must be filled out");
                return false;
            }
            if (document.forms[i]["speed"].value == "") {
                alert("Speed value must be larger than 0");
                return false;
            }
        }
    
        //if device type is smart door lock or wifi or cctv or motino sensor,
        //if name is null, alert the user and return false
        if(type == "Smart Door Lock" || type == "WiFi" || type == "CCTV" || type == "Motion Sensor") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
        }
    
        //if device type is refrigerator or heating system,
        //if name is null, alert the user and return false
        //if temperature is null, alert the user and return false
        if(type == "Refrigerator" || type == "Heating System") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["temperature"].value == "") {
                alert("Temperature must be filled out");
                return false;
            }
        }
    
        //if device type is bathtub,
        //if name is null, alert the user and return false
        //if temperature is null, alert the user and return false
        //if water volume is null, alert the user and return false
        if(type == "BathTub") {
            if (document.forms[i]["name"].value == "") {
                alert("Name must be filled out");
                return false;
            }
            if (document.forms[i]["water_vol"].value == "") {
                alert("Water Volume must be filled out");
                return false;
            }
            if (document.forms[i]["temperature"].value == "") {
                alert("Temperature must be filled out");
                return false;
            }
        }
    }
}

//for device.html updates brightness slider values text
function brightnessfunc(val) {
    var brightness = document.getElementsByClassName("brightnessVal");
    for(var i = 0; i < brightness.length; i++) {
        brightness[i].innerHTML = "Brightness: " + val;
    }
}
//for device.html updates volume slider values text
function volumefunc(val) {
    var vol = document.getElementsByClassName("volumeVal");
    for(var i = 0; i < vol.length; i++) {
        vol[i].innerHTML = "Volume: " + val; 
    }
}
//for device.html updates speed slider values text
function speedfunc(val) {
    var speed = document.getElementsByClassName("speedVal");
    for(var i = 0; i < speed.length; i++) {
        speed[i].innerHTML = "Speed: " + val; 
    }
}