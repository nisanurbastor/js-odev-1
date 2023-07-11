let username = prompt("Adiniz nedir?")
let nameInfo = document.querySelector("#myName")
nameInfo.innerHTML = `${username}`;


function updateClock(){
let currentDate = new Date()

let hours = currentDate.getHours()
let minutes = currentDate.getMinutes()
let seconds = currentDate.getSeconds()

let day = currentDate.getDay()

switch(day){
    case 1:
        day = "Pazartesi"
        break;
    case 2:
        day = "Salı"
        break;
    case 3: 
        day= "Çarşamba"     
        break;   
    case 4: 
        day = "Perşembe"     
        break;  
    case 5: 
        day = "Cuma"     
        break;  
    case 6: 
        day = "Cumartesi"     
        break;  
    case 7: 
        day = "Pazar"     
        break;  
}

let dateInfo = document.querySelector("#myClock")
dateInfo.innerHTML = `${hours}:${minutes}:${seconds} ${day}`}

setInterval(updateClock,1000)