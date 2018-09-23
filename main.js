var uN = document.getElementsByName('username')[0];
var pic = document.getElementsByName('pic')[0];
var progBar = document.getElementById("uploadp");

function clickFunk(){
    var fd = new FormData();
    // var b64 = btoa(pic);
    fd.append("username", uN.value);
    fd.append("avatar", pic.files[0]);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.19.35:3000/photo", true);
    //xhttp.setRequestHeader("Content-Type", "application/x-www-urlencoded");
     xhttp.upload.onprogress = function(e){
         console.log(e)
            var prog = e.loaded / e.total * 100
         progBar.value = prog
         
   
     }
     xhttp.send(fd);
}


