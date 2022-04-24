let clock = document.querySelector('.clock')

function digitalClock(){
    let date = new Date()
    let time = date.toLocaleTimeString()
    clock.innerHTML = time
}

setInterval(function(){
    digitalClock()
},1000)