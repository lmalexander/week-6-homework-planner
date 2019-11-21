// Variables
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var rightNow = moment().format("dddd, MMMM Do");

// Functions

//jumbtoron current day display
function currentDay() {
   var jumbotronDiv = $("<div>").text(rightNow);
   document.getElementById("currentDay");
   $("#currentDay").append(jumbotronDiv); 
}
currentDay();

//col 1 workHours display
function hours() { 
    for (i = 0; i < workHours.length; i++) {
         var hourDisplay = $("<div>").text(workHours[i]);
         document.getElementById("hours");
         $("#hours").append(hourDisplay); 
   }
}
hours();



