// Global Time-Slot Array

var businessHours = [
    {
        id: 9,
        task: "Available",
    },
    {
        id: 10,
        task: "Available",
    },
    {
        id: 11,
        task: "Available",
    },
    {
        id: 12,
        task: "Available",
    },
    {
        id: 13,
        task: "Available",
    },
    {
        id: 14,
        task: "Available",
    },
    {
        id: 15,
        task: "Available",
    },
    {
        id: 16,
        task: "Available",
    },
    {
        id: 17,
        task: "Available",
    },
];

// Save Functions

function saveTimeslot() {

}

function retrieveTimeSlots() {
    for (var i = 0; i < businessHours.length; i++) {
        var testString = localStorage.getItem("savedTask_" + i)
        if (testString != undefined) {
            businessHours[i].task = testString;
            document.getElementById("timeSlot_" + i).innerHTML = testString;
        }
    }
}

retrieveTimeSlots();

// Time color-coding

var currentTime = moment().hour();
for (var i = 0; i < businessHours.length; i++) {
    if (currentTime == businessHours[i].id) {
        $("#work-hour_" + i).addClass("present");
    } else if (currentTime > businessHours[i].id) {
        $("#work-hour_" + i).addClass("past");
    } else {
        $("#work-hour_" + i).addClass("future");
    }
}

// Save Button Listener

$(document).on('click', '.saveBtn', function () {
    console.log(this.id);
    var saveString = this.id;
    var number = saveString[saveString.length - 1];
    var textToSave = $("#timeSlot_" + number).val();
    if (businessHours[number].task = "Available") {
        console.log(textToSave);
        localStorage.setItem("savedTask_" + number, textToSave);
        var thingWeJustSet = localStorage.getItem("timeSlot_" + number);
        console.log(thingWeJustSet);
    }
});

