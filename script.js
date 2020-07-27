document.getElementById("display-notify").style.display = "none";

// Generate button event handler

document.getElementById("click-generate").addEventListener("click",function(){

var creatRandomNumber = Math.floor(1000 + Math.random() * 9000);
document.getElementById("display-random-num").value = creatRandomNumber;

})