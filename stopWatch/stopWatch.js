let start = document.querySelector('#Start')
let stop = document.querySelector('#Stop')
let reset = document.querySelector('#Reset')
let second = document.querySelector('.second')
let microSecond = document.querySelector('.microSecond')

let interval 
let micro = "00"
let sec = "00"
start.onclick = function(){
    interval = setInterval(startTimer,200)
}
stop.onclick = function(){
    clearInterval(interval)
}
reset.onclick = function(){
    clearInterval(interval)
    micro = '00'
    sec = '00'

    second.innerHTML = sec
    microSecond.innerHTML = micro
}
function startTimer(){
    micro++
    if(micro < 9){
        microSecond.innerHTML = `0${micro}`
    }
    if(micro > 9){
        microSecond.innerHTML = micro
    }
    if(micro >= 60){
        sec++
        second.innerHTML = `0${sec}`
        micro = 0
        microSecond.innerHTML = '00'
    }
    if(sec > 9){
        second.innerHTML = sec

    }
}
// start.onclick = function(){
//     interval = setInterval(startTimer,30)
// }
// stop.onclick = function(){
//     clearInterval(interval)
// }
// reset.onclick = function(){
//     sec= '00'
//     micro = '00'

//     second.innerHTML = sec
//     microSecond.innerHTML = micro
// }

// function startTimer(){
//     micro++
//     if(micro<= 9){
//         microSecond.innerHTML = `0${micro}`
//     }
//     if(micro > 9 ){
//         microSecond.innerHTML = micro
//     }
//     if(micro >= 60){
//         sec++
//         second.innerHTML = `0${sec}`
//         micro = 0
//         microSecond.innerHTML = "00"
//     }
//     if(sec>9){
//         second.innerHTML = sec
//     }
// }