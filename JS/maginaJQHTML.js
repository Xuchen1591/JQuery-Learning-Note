/**
 * Created by Xuchen on 10/26/15.
 */
$(document).ready(function(){
    //METHOD list:
    //.text()   get & set text
    //.HTML()   get & set HTML
    //.val()    get & set value

    //GET
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });

    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });

    $("#btn3").click(function () {
        alert("Val: " + $("input").val());
    });

    //.attr()
    $("#btn4").click(function () {
        alert("hyper-link: " + $("#ahref").attr("href"));
    });


    //SET
    $("#btn5").click(function () {
        $("#para1").text("Hello Mr.Magina");
    });
    $("#btn6").click(function () {
        $("#para2").html("<b>Hello Mr.Magina</b>");
    });
    $("#btn7").click(function () {
        $("#para3").val("Magina.Zhang@sap.com");
    });
});