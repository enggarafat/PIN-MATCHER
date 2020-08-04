document.getElementById("display-notify").style.display = "none";

// Generate button event handler

document.getElementById("click-generate").addEventListener("click",function(){

var creatRandomNumber = Math.floor(1000 + Math.random() * 9000);
document.getElementById("display-random-num").value = creatRandomNumber;


});

//Show input value in input-box

function showButtonText(x){

    const inputShower = document.querySelector(".showValue");
    inputShower.value = inputShower.value + x;
    inputShower.style.textAlign ="center";
    
}

// submitAction

function submitAction(){

    const showValue = document.querySelector(".showValue").value;
    const generateValue = document.querySelector(".generate-value").value;

    if(showValue == generateValue){

       document.querySelector(".notify-section").style.display="block";
       document.querySelector(".right").style.display= "block";
       document.querySelector(".wrong").style.display= "none";
       document.querySelector(".action-left").innerText = 0 + ' try left';

       }

    else{

        document.querySelector(".notify-section").style.display="block";
        document.querySelector(".wrong").style.display ="block";
        document.querySelector(".right").style.display ="none";

        document.querySelector(".action-left").innerText = 2 + ' try left';
    }

    document.querySelector(".showValue").value = "" ;

    
    
}


// remove number from last

function removeNumber(){

const currentValue =  document.querySelector(".showValue").value;
const finalValue = currentValue.substring(0, currentValue.length - 1);
document.querySelector(".showValue").value = finalValue;

}

// remove all number

function clearAll(){

document.querySelector(".showValue").value = null;

}



