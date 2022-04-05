document.addEventListener("DOMContentLoaded", function(){
    new TypeIt("#element", {
        // strings: ["a Lecturer"],
        speed: 100,
        loop: true
    }).type("a Lecturer", {delay: 800}).delete(10, {delay: 800}).type("a Course Advisor", {delay: 800}).delete(16, {delay: 800}).type("a Father", {delay: 800}).delete(8, {delay: 800}).go();
})

$(window).scroll(function(){
    var aheight = $(window).height() / 2;
    console.log($(this).scrollTop());
    
    if($(this).scrollTop() >= 1250 && $(this).scrollTop() <= 2250){
        $(".me").css("color", "white");
        $(".menu div").css("color", "white");
        $(".menu div").hover(function(){
            $(this).css("color", "black")
        }, function(){
            $(this).css("color", "white")
        });


    }else if($(this).scrollTop() <= 550){
        $(".menu div").css("color", "white");
        $(".menu div").hover(function(){
            $(this).css("color", "#7a1ed0")
        }, function(){
            $(this).css("color", "white")
        });
    }else{
        $(".me").css("color", "#7a1ed0");
        $(".menu div").css("color", "black");
        $(".menu div").hover(function(){
            $(this).css("color", "#7a1ed0")
        }, function(){
            $(this).css("color", "black")
        });


        // $(".me").css("background-color", "white");
    }
})