
    let temp = Number(document.querySelector(".temp").innerHTML);
    let wSpeed= Number(document.querySelector(".wind").innerHTML);
    let windchill = "N/A";
    if(temp < 50 && wSpeed > 3.0){
    windchill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    windchill= Math.round(windchill);
    }else{
    document.getElementById("display").style.display = "none";
    }
    document.getElementById("windchill").innerHTML= windchill;
