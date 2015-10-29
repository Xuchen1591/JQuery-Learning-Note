/**
 * Created by Xuchen on 10/29/15.
 */
function loadXMLDoc(){
    var xmlhttp;
    var txt, i, x,xmlDoc;

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
            //responseText() used for none XML file, return String type
            //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

            //responseXML used for XML file, u can parse the XML
            xmlDoc=xmlhttp.responseXML;
            txt="";
            x=xmlDoc.getElementsByTagName("title");
            for (i=0;i<x.length;i++)
            {
                txt=txt + x[i].childNodes[0].nodeValue + "<br />";
            }
            document.getElementById("myDiv").innerHTML=txt;

        }
    }
    xmlhttp.open("GET","/Jquery Learn Note/testContent/books.xml",true);
    xmlhttp.send();

    //规定请求的类型、URL 以及是否异步处理请求。
    //method：请求的类型；GET 或 POST
    //url：文件在服务器上的位置
    //async：true（异步）或 false（同步）
    //xmlhttp.open("GET","test1.txt",true);
    //xmlhttp.send();
}