$(document).ready(function(){
    cookiedata=document.cookie;
    if (cookiedata.indexOf("maindiv=done") < 0) {
        document.all['divpop'].style.visibility = "visible";
    }
    else {
        document.all['divpop'].style.visibility = "hidden";
    }
    
    function setCookie( name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    $(".popborder .close").click(function(){
        $("#divpop").fadeOut(500, function(){
            $(this).find(".popborder").empty();
        });
    });
});