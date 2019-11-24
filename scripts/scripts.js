// Variables
var todayDate = moment().format("dddd, MMMM Do");
var workHours = [
   {twelve: "9am" , twentyFour: "9"},
   {twelve: "10am" , twentyFour: "10"},
   {twelve: "11am" , twentyFour: "11"},
   {twelve: "12pm" , twentyFour: "12"},
   {twelve: "1pm" , twentyFour: "13"},
   {twelve: "2pm" , twentyFour: "13"},
   {twelve: "3pm" , twentyFour: "14"},
   {twelve: "4pm" , twentyFour: "15"},
   {twelve: "5pm" , twentyFour: "16"},
];
console.log(workHours[4].twelve);

// Functions
//jumbotron current day display
function currentDay() {
   var jumbotronDate = $("<div>").text(todayDate);
   document.getElementById("currentDay");
   $("#currentDay").append(jumbotronDate); 
};
currentDay();

//col 1 workHours display


function hours () {
   for (i = 0; i < workHours.length; i++) {
      //for (i = 0; i < workHours[i].length; i++) {
         var hourDisplay = $("<tr>").text(workHours);
         //var row = $("<tr>"); 
         document.getElementById("planner").append(hourDisplay);
      //}
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

