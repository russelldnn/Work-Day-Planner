//jquery call for current time using moment set inside a setinterval function to actively update
setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do, YYYY, h:mm:ss a"));

},1000);

$(".saveBtn").on("click", function(){
    let goals = $(this).siblings(".description").val();
    localStorage.setItem(desc, goals);
})