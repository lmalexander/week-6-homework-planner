var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

function planner() {
    for (let index = 0; index < workHours.length; index++) {
         var div=$("<div>").text(workHours[index])

         $(".planner").append(div)
   }
}
planner();