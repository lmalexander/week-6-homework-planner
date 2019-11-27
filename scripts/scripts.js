// / Variables

// jumbotron today date
var todayDate = moment().format("dddd, MMMM Do");

// displays in col Time
var workHours12 = ["9am", "10am" , "11am","12pm","1pm","2pm","3pm","4pm","5pm"];

// compares to current time to determine past present & future 
var workHours24 = ["9", "10", "11", "12", "13", "14", "15", "16"];

// should print 2pm & 14
console.log(workHours12[5]);
console.log(workHours24[5]);


// / Functions

//jumbotron current day display
function currentDay() {
   var jumbotronDate = $("<div>").text(todayDate);
   document.getElementById("currentDay");
   $("#currentDay").append(jumbotronDate); 
};
currentDay();

//col 1 workHours display
function hours () {
   for (var i = 0; i < workHours.length; i++) {
         var hourDisplay = $("<div>").text(workHours[i]);
         document.getElementById("plannerRows").append(hourDisplay);
      }
   };
hours();


//function hours() { 
    //for (i = 0; i < workHours.length; i++) {
 //      for (i=0; i < Object.length; i++) {
 //         var hourDisplay = $("<div>").text(workHours.twelve);
 //         document.getElementById("hours");
 //        $("#hours").append(hourDisplay); 
  //     }


   //      var hourDisplay = $("<div>").text(workHours[i]);
         
  // }
//}
//hours();

// text boxes
//function textBoxes () {
  // var field = document.createElement("input");
   //field.setAttribute("type", "text");
   //document.body.appendChild("#textBox");
// }

