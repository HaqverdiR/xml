var uN = document.getElementsByName('username')[0];
var pic = document.getElementsByName('pic')[0];




function clickFunk(){
    var fd = new FormData();
    fd.append("username", uN.value);
    fd.append("avatar", pic.files[0])
    var rusl = new XMLHttpRequest();

    rusl.open("POST", "https://www.google.com", true);
    xhttp.send(fd);
    
}


