//jquery call for current time using moment set inside a setinterval function to actively update
setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do, YYYY, h:mm:ss a"));

},1000);

$(".saveBtn").on("click", function(){
    let goals = $(this).siblings(".description").val();
    let desc = $(this).parent().attr("id");
    //received help in using the variable desc to select for each div block
    localStorage.setItem(desc, goals);
})

$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));