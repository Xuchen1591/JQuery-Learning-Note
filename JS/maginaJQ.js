/**
 * Created by Xuchen on 10/25/15.
 */
$(document).ready(function () {
    $("button#hideAll").click(function () {
        //METHODS list:
        //hide()
        //toggle()

        $("p").hide("slow");

        //change between states HIDE & SHOW
        $("p").toggle();
        $(this).text("I changed");
    });
    $("button#hideClass").click(function () {
        $("p.class").text("button clicked");
        $("p.class").css("background-color","red","border","solid 2px");
    });
    $("button#hideId").click(function () {
        $("p#id").hide();
    });
    $("button#mouse").mouseover(function () {
        $("p#id").css("font-size","20px");
    });

    $("button#get").click(function () {
        //METHODS list:
        //fadeIn()
        //fadeOut()
        //fadeToggle()
        //fadeTo(speed, transparency)

        //$("div#div1").fadeIn();
        //$("div#div2").fadeIn("slow");
        //$("div#div3").fadeIn("3000");

        $("div#div1").fadeToggle();
        $("div#div2").fadeToggle("slow");
        $("div#div3").fadeTo("slow", 0.1);
    });

    $("p.flip").click(function () {
        //METHOD list:
        //slideUp()
        //slideDown()
        //slideToggle()

        $("div.panel").slideToggle("slow");
    })
    
    $("button#animationBtn").click(function () {
        var div=$("div#animationDiv");
        div.animate({height:'300px',opacity:'0.4'},"slow");
        div.animate({width:'300px',opacity:'0.8'},"slow");
        div.animate({fontSize:'3em'},"slow");
        div.animate({height:'100px',opacity:'0.4'},"slow");
        div.animate({width:'100px',opacity:'0.8'},"slow");
    });

    $("button#chain").click(function () {
        $("p#ac").css("color","red")
            .slideUp(2000)
            .slideDown(2000);
    })
});