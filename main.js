var uN = document.getElementsByName('username')[0];
var pic = document.getElementsByName('pic')[0];


function clickFunk(){
    var fd = new FormData();
    var b64 = btoa(pic);
    fd.append("username", uN.value);
    fd.append("avatar", b64);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.19.35:3000/user", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(  JSON.stringify (fd));
    
}


