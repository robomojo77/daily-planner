var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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