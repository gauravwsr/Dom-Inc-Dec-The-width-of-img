let conterEl = document.getElementById("conter");
let imgEl = document.getElementById("dogimg");
let errormsgEl = document.getElementById("error-msg");
let conter = 100;

function OndecConter() {
    
    if (conter > 100) {
        conter = conter-5;
        imgEl.style.width =conter+"px";
        conterEl.textContent = conter;
        errormsgEl.textContent="";
    }
    else{
        errormsgEl.textContent="Can't Visible. Increase the size of the image."
    }
}

function OnIncConter() {
    
    if (conter <300) {
        conter = conter+5;
        imgEl.style.width =conter+"px";
        conterEl.textContent = conter; 
        errormsgEl.textContent="";
    }else{
        errormsgEl.textContent="Too big. Decrease the size of the image."
    }
}
