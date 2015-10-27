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



    //METHOD list:
    //append()
    //prepend()
    //before()
    //after()
    $("#addText").click(function () {
        $(".pAdd").append("<b> -- this is added text.</b>")
    });
    $("#addList").click(function () {
        $("#lAdd").append("<li>new list item</li>")
    });
    //prepend()     the same as append() but at the begainning

    //after() & before() see outside of Doc.ready()


    //METHOD list:
    //remove() - 删除被选元素（及其子元素）
    //empty() - 从被选元素中删除子元素
    $("#remove").click(function () {
        $("#waitForRemove").remove();
        //$("p").remove(".italic");     delete all <p> with class "italic"
    });
    $("#empty").click(function () {
        $("#waitForRemove").empty();
    });



    //METHOD list:
    //addClass() - 向被选元素添加一个或多个类
    //removeClass() - 从被选元素删除一个或多个类
    //toggleClass() - 对被选元素进行添加/删除类的切换操作
    //css() - 设置或返回样式属性
    $("#addClass").click(function () {
       $(".addClass").addClass("important");
        $("#addB").addClass("blue");
    });
});


function afterText() {
    var txt1="<b>I </b>";                    // 以 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 通过 jQuery 创建元素
    var txt3=document.createElement("big");  // 通过 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("#img").after(txt1,txt2,txt3);          // 在 img 之后插入新元素
};

















