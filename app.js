document.getElementById("mathhw").value = getCookie("mathhw");
document.getElementById("bandhw").value = getCookie("bandhw");
document.getElementById("spanhw").value = getCookie("spanhw");
document.getElementById("biblehw").value = getCookie("biblehw");
document.getElementById("biohw").value = getCookie("biohw");
document.getElementById("historyhw").value = getCookie("historyhw");
document.getElementById("hallhw").value = getCookie("hallhw");
document.getElementById("lithw").value = getCookie("lithw");

function NextClass(){
    window.scrollBy({
        top: 400,
        left: 0,
        behavior : "smooth"
    })
}
function LastClass(){
    window.scrollBy({
        top: -400,
        left: 0,
        behavior : "smooth"
    })
}

function BackToTop(){
    window.scrollBy({
        top: -40000,
        left: 0,
        behavior : "smooth"
    })
}
function BackToBottom(){
    window.scrollBy({
        top: 40000,
        left: 0,
        behavior : "smooth"
    })
}


var today = new Date();
if(today.getDay() == 5){
    document.getElementById("regulartiming1").style.display = 'none';
    document.getElementById("regulartiming2").style.display = 'none';
    document.getElementById("regulartiming3").style.display = 'none';
    document.getElementById("regulartiming4").style.display = 'none';
    document.getElementById("regulartiming5").style.display = 'none';
    document.getElementById("regulartiming6").style.display = 'none';
    document.getElementById("regulartiming7").style.display = 'none';
    document.getElementById("regulartiming8").style.display = 'none';
    document.getElementById("regulartiming9").style.display = 'none';
}

function SaveText(){
    setCookie(mathhw, document.getElementById("mathhw").value, 100);
    setCookie(bandhw, document.getElementById("bandhw").value, 100);
    setCookie(spanhw, document.getElementById("spanhw").value, 100);
    setCookie(biblehw, document.getElementById("biblehw").value, 100);
    setCookie(biohw, document.getElementById("biohw").value, 100);
    setCookie(historyhw, document.getElementById("historyhw").value, 100);
    setCookie(hallhw, document.getElementById("hallhw").value, 100);
    setCookie(lithw, document.getElementById("lithw").value, 100);
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}