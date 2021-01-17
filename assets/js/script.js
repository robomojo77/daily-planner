// Global Time-Slot Array

var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Save Functions

function saveTimeslot() {

}

function retrieveTimeSlots () {

}

retrieveTimeSlots();

// Time color-coding

var currentTime = moment().hour();
for (var i = 0; i < businessHours.length; i++) {
    if (currentTime == businessHours[i]) {
        $("#work-hour_" + i).addClass("present");
    } else if (currentTime > businessHours[i]) {
        $("#work-hour_" + i).addClass("past");
    } else {
        $("#work-hour_" + i).addClass("future");
    }
}

// Save Button Listener

$

