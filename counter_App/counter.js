let value = document.querySelector('.value')
let btn = document.querySelectorAll('.btn')
let btnArr = Array.from(btn)

let countNumber = 0
btnArr.map(function(btn){
    btn.addEventListener('click',(e)=>{
        let style = e.currentTarget.classList

        if(style.contains('decrease')){
            countNumber--
            if(countNumber < 0){
                countNumber = 0
            }
        }else if(style.contains('increase')){
            countNumber++
        }else{
            countNumber = 0
        }
        value.innerHTML = countNumber
    })
})

