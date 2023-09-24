
// changed to (document).ready to wait for page
//to upload before script ran
$(document).ready(function () {
    
  //first we add a listener for click events and saveBtn was in index.html
  //we have added listeners before and saved to local storage, not new
  $(".saveBtn").click(function(event){
    event.preventDefault();
    //no lie the "this" part was confusing and difficult
    var toDo = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //then we want to save data of the description and id (time) to local storage
    localStorage.setItem(time, toDo)
  })

    //used dayjs to put current day and date on header
    //this using the API of dayjs
    //was going to use other API but decided against it.
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMM D, YYYY, HH:mm:ss"));

 //loop
$(".time-block").each(function(){
  var currentTime = dayjs().hour;
  var timeBlo = $(this).attr("id").split("hour")[1];

  if (currentTime === timeBlo){
    $(this).removeClass("future");
    $(this).removeClass("past");
    $(this).addClass("present");

  }
  else if (currentTime < timeBlo){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");

  }
  else if (currentTime > timeBlo){
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

  }
})


//this part was giving me problems
//first i forgot my(.) in front of description
//then in the begining i was using ex:hour8 instead of #hour-8
//then after the getItem i was using the ID of ex:9AM
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));
$("#hour-21 .description").val(localStorage.getItem("hour-21"));
$("#hour-22 .description").val(localStorage.getItem("hour-22"));

//i tried to use this but it belong to a different API i found
//on the internet, wanted to use dayjs instead
    //var dayTimeCurrent =moment().format("dddd, MMM Do YYYY");
    //$("#currentDay").html(dayTimeCurrent);
    
  });    
