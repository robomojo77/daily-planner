// Global Time-Slot Array

var businessHours = [
    {
        id: 9,
        task: "",
    },
    {
        id: 10,
        task: "",
    },
    {
        id: 11,
        task: "",
    },
    {
        id: 12,
        task: "",
    },
    {
        id: 13,
        task: "",
    },
    {
        id: 14,
        task: "",
    },
    {
        id: 15,
        task: "",
    },
    {
        id: 16,
        task: "",
    },
    {
        id: 17,
        task: "",
    },
];

// Save Functions

function saveTimeslot() {

}

function retrieveTimeSlots() {
    for (var i = 0; i < businessHours.length; i++) {
        if (!localStorage.getItem("savedTask_" + i))
        document.getElementById("saveStatus_" + i).innerHTML = "UNsaved";
        document.getElementById("timeSlot_" + i).innerHTML = "Available";
        if (localStorage.getItem("savedTask_" + i) != undefined) {
            businessHours[i].task = localStorage.getItem("savedTask_" + i);
            document.getElementById("timeSlot_" + i).innerHTML = localStorage.getItem("savedTask_" + i);
            document.getElementById("saveStatus_" + i).innerHTML = "Saved";
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
    if (textToSave === localStorage.getItem("savedTask_" + number)) {
        localStorage.removeItem("savedTask_" + number);
        document.getElementById("saveStatus_" + number).innerHTML = "UNsaved";
        document.getElementById("timeSlot_" + number).innerHTML = "Available";
    } else {
        var textToSave = $("#timeSlot_" + number).val();
        console.log(textToSave);
        if (textToSave != "Available") {
            localStorage.setItem("savedTask_" + number, textToSave);
        }
        retrieveTimeSlots();
        var thingWeJustSet = localStorage.getItem("savedTask_" + number);
        console.log(thingWeJustSet);
    }


    /*if (businessHours[number].task = "Available") {
        console.log(textToSave);
        if (textToSave != "Available") {
            localStorage.setItem("savedTask_" + number, textToSave);
            retrieveTimeSlots();
        }
        var thingWeJustSet = localStorage.getItem("savedTask_" + number);
        console.log(thingWeJustSet);
    } else if (businessHours[number].task != "Available") {
        localStorage.removeItem("savedTask_" + number);
        retrieveTimeSlots();
    } else {
        return;
    } */
});

