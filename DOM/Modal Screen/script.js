let openBtn = document.querySelector('#openBtn')
let closeBtn = document.querySelector('#closeBtn')
let modalScreenOne = document.querySelector('.modal1')
let answerScreenOne = document.querySelector('.answer')

openBtn.onclick = () => {
    modalScreenOne.style.top = '1920px'
    answerScreenOne.style.top = '2160px'
}

closeBtn.onclick = () => {
    modalScreenOne.style.top = '0px'
    answerScreenOne.style.top = '0px'
}

modalScreenOne.onclick = () => {
    modalScreenOne.style.top = '0px'
    answerScreenOne.style.top = '0px'
}