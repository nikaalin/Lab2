function validatePresssymbols(name) {
    document.forms["form"].elements[name].onkeypress = function (event) {
        let errName;
        if(name==="X")
            errName = "errY";
        else
            errName = "err"+name;
        if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 127 && event.keyCode !== 46 && event.keyCode !== 45) {
            document.getElementById(errName).innerHTML = 'Не отчаивайтесь, на клавиатуре<br> не так уж много кнопок.';
            document.getElementById(errName).style.visibility = 'visible';
            return false;
        }
        else{
            document.getElementById(errName).style.visibility = 'hidden';
        }
    };
}


function validateForm() {
    let isBad = false;
    if ((!document.forms["form"].elements["R"].value) || (document.forms["form"].elements["R"].value <= 1)
        || (document.forms["form"].elements["R"].value >= 4)) {
        document.getElementById("errR").innerHTML = 'Введите значение R<br>в диапазоне (1; 4)';
        document.getElementById("errR").style.visibility = 'visible';
        isBad=true;
    }
    else {
        document.getElementById("errR").style.visibility = 'hidden';
        draw("graph",document.forms["form"].elements["R"].value);
    }

    if ((!document.forms["form"].elements["Y"].value) || (document.forms["form"].elements["Y"].value <= -3)
        || (document.forms["form"].elements["Y"].value >= 5)||(!document.forms["form"].elements["X"].value)
        || (document.forms["form"].elements["X"].value <= -3) || (document.forms["form"].elements["X"].value >= 5)) {
        document.getElementById("errY").innerHTML = 'Введите значения<br>в диапазоне (-3; 5)';
        document.getElementById("errY").style.visibility = 'visible';
        isBad = true;
    }
    else {
        document.getElementById("errY").style.visibility = 'hidden';
    }

    if(!isBad)
        document.forms["form"].submit();

}

