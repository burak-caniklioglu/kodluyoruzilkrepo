let name = prompt("Adınızı Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${name}`
let turkce = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"];
const today = new Date()

let day = today.getDay()
let h = today.getHours()
let m = today.getMinutes()
let s = today.getSeconds()
let clock_and_day = document.querySelector("#myClock").innerHTML = `${h}:${m}:${s} ${turkce[day-1]}`
setTimeout(startTime, 1000)