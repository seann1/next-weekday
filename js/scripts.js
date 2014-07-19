
weekday = function(day) {
   var dayInput = day.toLowerCase();
   var today = new Date();
   var currentDay = today.getDay();
   console.log(currentDay);
   var todayParse = Date.parse(today);
   console.log(todayParse);

   if (dayInput === "sunday") {
      var dayNumber = 0
    } else if (dayInput === "monday") {
      dayNumber = 1
    } else if (dayInput === "tuesday") {
      dayNumber = 2
    } else if (dayInput === "wednesday") {
      dayNumber = 3
    } else if (dayInput === "thursday") {
      dayNumber = 4
    } else if (dayInput === "friday") {
      dayNumber = 5
    } else if (dayInput === "saturday") {
      dayNumber = 6
    }

    //if (dayNumber === currentDay) {
      //dayNumber = dayNumber + 7
    //}


    for (var i = 0; i < 50 ; i++) {
      todayParse = todayParse + 86400000;
      console.log(todayParse);

      var newDate = new Date(todayParse);
      //console.log(newDate);
      console.log(new Date(todayParse).getDay());
      if (new Date(todayParse).getDay() === dayNumber) {

        newDate = [dayInput, newDate.getMonth() + 1, newDate.getDate(), newDate.getYear() + 1900]
        return newDate
      } else if (isNaN(newDate) === true) {
        return alert("Please enter a day of the week");
      }
    };

  };


$(document).ready(function(){
  $("form#next-weekday").submit(function(event){
    event.preventDefault();
    var userInput = $("input#next-weekday").val();
    //var result = (weekday(userInput)[1]) (weekday(userInput)[2])  (weekday(userInput)[3]);
    $("span#output").text(result);
    $("span#inputDay").text(weekday(userInput)[0]);
    $("span#month").text(weekday(userInput)[1] + "/");
    $("span#day").text(weekday(userInput)[2] + "/");
    $("span#year").text(weekday(userInput)[3]);
    $("#result").fadeIn();
    event.preventDefault();

  });
});


