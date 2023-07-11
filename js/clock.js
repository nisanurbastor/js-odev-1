let username = prompt("Adiniz nedir?")
let nameInfo = document.querySelector("#myName")
nameInfo.innerHTML = `${username}`;


function updateClock(){
let currentDate = new Date()

let hours = currentDate.getHours()
let minutes = currentDate.getMinutes()
let seconds = currentDate.getSeconds()

let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
let day = days[currentDate.getDay()]

let dateInfo = document.querySelector("#myClock")
dateInfo.innerHTML = `${hours}:${minutes}:${seconds} ${day}`}

setInterval(updateClock,1000)