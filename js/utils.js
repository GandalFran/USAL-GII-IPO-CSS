function nextCSS() {
    const availableCss = ["tecnologia.css", "cine.css", "cienciaFiccion.css"];
    var currentCss = availableCss.indexOf(document.getElementById("cssLink").href.split("/").pop());
    
    currentCss = (currentCss+1>= availableCss.length) ? 0 : currentCss+1;
    document.getElementById("cssLink").href = "css/" + availableCss[currentCss];
}

function lastCSS() {
    const availableCss = ["tecnologia.css", "cine.css", "cienciaFiccion.css"];
    var currentCss = availableCss.indexOf(document.getElementById("cssLink").href.split("/").pop());
    
    currentCss = (currentCss-1 < 0) ? availableCss.length-1 : currentCss-1;
    document.getElementById("cssLink").href = "css/" + availableCss[currentCss];
}