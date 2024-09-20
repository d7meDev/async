const ipDisplay = document.getElementById("ipDisplay");
document.addEventListener("DOMContentLoaded",(event)=>{
locateIp();

})

async function locateIp() {

    try{
    const response = await fetch("https://api.ipify.org?format=json");
    if(!response.ok){
        throw new Error("404");
    }
    const data = await response.json();
    ipDisplay.style.color ="rgb(0,0,0)"
    ipDisplay.textContent = data.ip;
    }

    catch(error){
        ipDisplay.style.color ="rgb(0,0,0)"
        ipDisplay.textContent = "Error";
    }
    

}

