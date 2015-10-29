/**
 * Created by Xuchen on 10/29/15.
 */
function loadXMLDoc(){
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","/Jquery Learn Note/testContent/test.txt",true);
    xmlhttp.send();

    //规定请求的类型、URL 以及是否异步处理请求。
    //method：请求的类型；GET 或 POST
    //url：文件在服务器上的位置
    //async：true（异步）或 false（同步）
    //xmlhttp.open("GET","test1.txt",true);
    //xmlhttp.send();
}