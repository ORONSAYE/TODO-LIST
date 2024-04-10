$(document).ready(function() {
 var inputBox = $("#input-box");   
$(".button").click(function() {
    
    $("ul").append("<li>" + inputBox.val() + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>'); 
    inputBox.val("");  
})
    $("ul").on("click", ".fa-trash", function() {
        $(this).parent("li").fadeOut(200);
    })

    $("ul").on("click", ".fa-check", function() {
        $(this).parent("li").toggleClass("checked");
    })

})



