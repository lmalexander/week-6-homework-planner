// Variables
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var now = moment().format("dddd, MMMM Do");

// Functions
function planner() { 
    for (i = 0; i < workHours.length; i++) {
         var div = $("<div>").text(workHours[i]);
         $(".planner").append(div);
        
   }
}
planner();

function currentDay() {
   var jumbotronDiv = $("<div>").text(now);
   document.getElementById("currentDay");
   $("#currentDay").append(jumbotronDiv); 
}
currentDay();

console.log(now);