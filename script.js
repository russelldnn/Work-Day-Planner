//jquery call for current time using moment set inside a setinterval function to actively update
setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do, YYYY, h:mm:ss a"));

},1000);
//event click listener for the save button on each row to save its associate rows user input
$(".saveBtn").on("click", function(){
    let goals = $(this).siblings(".description").val();
    let desc = $(this).parent().attr("id");
    //received help in using the variable desc to select for each div block
    localStorage.setItem(desc, goals);
})

//gets each rows stored user input by having the unique call name be the ID as set up in the variable desc
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

//a .each loop to cycle through each row (got help with this) replaces having to write out a lot of repeated code, this parses the "hour" from the associated ID
function timeTest(){
    let currentTime = moment().hour();
    console.log(currentTime);

    $(".time-block").each(function () {
        let thisHour = parseInt($(this).attr("id"));
        console.log(thisHour);
        //if else statements to compare the difference between the rows hour and the actual time and assigns classes to change the color dependantly
        if (thisHour === currentTime) {
            $(this).addClass ("present");
            $(this).removeClass ("past");
            $(this).removeClass ("future");
        } else if (thisHour < currentTime) {
            $(this).addClass ("past");
            $(this).removeClass ("present");
            $(this).removeClass ("future");
        } else {
            $(this).addClass ("future");
            $(this).removeClass ("past");
            $(this).removeClass ("present")
        }
    })
}
//function call
timeTest();
