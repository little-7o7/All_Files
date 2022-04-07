import { reload } from "./reload.js";

let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

let search_panel = conteiner.querySelector('.search-panel')

let inp = search_panel.querySelector('input')

let btn1 = search_panel.querySelector('#btn1')
let btn2 = search_panel.querySelector('#btn2')
let btn3 = search_panel.querySelector('#btn3')

function search(array) {
    inp.onkeyup = () => {
        let searchedItem = array.filter(item => item.name.trim().toLocaleLowerCase().includes(inp.value.trim().toLocaleLowerCase()))
        reload(searchedItem)
    }
    
    btn1.onclick = () => {
        reload(array)
        btn2.classList.remove('btn-light')
        btn3.classList.remove('btn-light')
        btn2.classList.add('btn-outline-light')
        btn3.classList.add('btn-outline-light')
        btn1.classList.remove('btn-outline-light')
        btn1.classList.add('btn-light')
    }
    
    btn2.onclick = () => {
        let inTop = array.filter(item => item.rise)
        reload(inTop)
        btn1.classList.remove('btn-light')
        btn3.classList.remove('btn-light')
        btn1.classList.add('btn-outline-light')
        btn3.classList.add('btn-outline-light')
        btn2.classList.remove('btn-outline-light')
        btn2.classList.add('btn-light')
    }
    
    btn3.onclick = () => {
        let inHight1000 = array.filter(item => item.salary >= 1000)
        reload(inHight1000)
        btn1.classList.remove('btn-light')
        btn2.classList.remove('btn-light')
        btn1.classList.add('btn-outline-light')
        btn2.classList.add('btn-outline-light')
        btn3.classList.remove('btn-outline-light')
        btn3.classList.add('btn-light')
    }
}

export { search }