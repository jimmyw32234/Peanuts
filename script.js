$(".confirm").click(function() {
var age = $(".age").val();
var pers = $(".pers").val();
if(age <=16 && pers ==="yes" ) {
    $(".lucy").show();
    $(".snoopy").hide();
    $(".cb").hide();
    $(".schroeder").hide();
    $(".message").hide();
} else if(age >16 && pers==="yes" ) {
    $(".snoopy").show();
    $(".lucy").hide();
    $(".cb").hide();
    $(".schroeder").hide();
    $(".message").hide();
    } else if (age >16 && pers==="no") {
        $(".cb").show();
        $(".snoopy").hide();
        $(".lucy").hide();
        $(".schroeder").hide();
        $(".message").hide();
    } else if(age<=16 && pers==="no") {
        $(".schroeder").show();
        $(".snoopy").hide();
        $(".cb").hide();
        $(".lucy").hide();
        $(".message").hide();
    } else { 
        $(".message").text("Answer each question correctly! The second answer is in lowercase!");
    }
    
});