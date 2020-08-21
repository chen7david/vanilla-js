const body = document.querySelector('.background')
const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('click', function () {
        box.style.backgroundColor = 'black'
        box.innerHTML = '0'
    })
})

function rand(limit){
    return Math.floor(Math.random() * limit)
}

let counter = 0

function changeColor(){
    if(counter >= boxes.length) counter = 0
    const box = boxes[counter]
    const color = `rgb(${rand(255)},${rand(255)},${rand(255)})`
    box.style.backgroundColor = color
    body.style.backgroundColor = color
    box.innerHTML = rand(10)
    counter++
}

body.addEventListener('click', changeColor)

