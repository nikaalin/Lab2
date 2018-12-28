var catCount = 0;

function start() {
    newCat();
    draw("graph",null);
}
function newCat() {
    catCount++;

    var cat = document.createElement("img");
    cat.class = "cat";
    cat.style.position = "fixed";

    cat.style.left = (Math.random() * 95) + "vw";
    cat.style.top = (Math.random() * 95) + "vh";
    document.body.appendChild(cat);
    cat.onclick = newCat;

    var startLeft = cat.style.left;
    var startTop = cat.style.top;
    var signH = randomSign();
    var signV = randomSign();


    var catSrc = "/img/pink";
    if (catCount % 5 === 0) {
        catSrc = "/img/black"
    }
    if (catCount % 32 === 0) {
        catSrc = "/img/angel_black"
    }

    if (catCount > 100) {
        catSrc = "/img/SCREAM"
    }

    if (catCount > 150) {
        catSrc = "/img/zochem"
    }

    if (signH < 0) {
        cat.src = catSrc + "_left.png";
    } else cat.src = catSrc + "_right.png";


    var startH = Date.now();
    var startV = Date.now();


    let timer = setInterval(function () {
        let timePassedH = Date.now() - startH;
        let timePassedV = Date.now() - startV;
        cat.style.left = (parseFloat(startLeft.slice(0, startLeft.indexOf("vw"))) + signH * timePassedH / 200) + 'vw';
        cat.style.top = (parseFloat(startTop.slice(0, startLeft.indexOf("%"))) + signV * timePassedV / 200) + '%';


        if (parseFloat(cat.style.left.slice(0, cat.style.left.indexOf("vw"))) >= 97) {
            signH = -1;
            startLeft = cat.style.left;
            startH = Date.now();
            startTop = cat.style.top;
            startV = Date.now();
            cat.src = catSrc + "_left.png";
        }
        if (parseFloat(cat.style.left.slice(0, cat.style.left.indexOf("vw"))) <= 0) {
            signH = 1;
            startLeft = cat.style.left;
            startH = Date.now();
            startTop = cat.style.top;
            startV = Date.now();
            cat.src = catSrc + "_right.png";
        }

        if (parseFloat(cat.style.top.slice(0, cat.style.top.indexOf("%"))) >= 90) {
            signV = -1;
            startTop = cat.style.top;
            startV = Date.now();
            startLeft = cat.style.left;
            startH = Date.now();
        }
        if (parseFloat(cat.style.top.slice(0, cat.style.top.indexOf("%"))) <= 0) {
            signV = 1;
            startTop = cat.style.top;
            startV = Date.now();
            startLeft = cat.style.left;
            startH = Date.now();
        }

    }, 10);

}


function randomSign() {
    if (Math.random() * 100 > 50) {
        return 1;
    } else {
        return -1;
    }
}