let todos = [];

if (localStorage.getItem('todos') == null) {
    setStorage(todos)
}

let text = localStorage.getItem("todos");
todos = JSON.parse(text);

function setStorage(arr) {
    let todosJSON = JSON.stringify(arr)
    localStorage.setItem("todos", todosJSON);
    console.log(arr);
}

function closeModal(btn, modal) {
    btn.onclick = () => {
        modal.style.display = 'none'
    }
}

function openModal(btn, modal) {
    btn.onclick = () => {
        modal.style.display = 'flex'
    }
}



let body = document.querySelector('body')
let header = body.querySelector('header')
let header_form = header.querySelector('form')
let header_inp = header.querySelector('input')
let header_sel = header.querySelector('select')
let header_form_btn = header_form.querySelector('button')
let header_btn = header.querySelector('#create')

let modal_screen = body.querySelector('.modal-screen')
let back_g = modal_screen.querySelector('.back-g')
let modal_form = body.querySelector('form')
let modal_inp_one = modal_form.querySelector('#one')
let modal_inp_two = modal_form.querySelector('#two')
let modal_sel = modal_form.querySelector('select')
let modal_btn = modal_form.querySelector('button')

let main = document.querySelector('main')

openModal(header_btn, modal_screen)
closeModal(back_g, modal_screen)
closeModal(modal_btn, modal_screen)


modal_form.onsubmit = (event) => {
    event.preventDefault();

    let newUser = {
        id: Math.random(),
    };

    if (modal_inp_one.value > 0 || modal_inp_two.value > 0 || modal_sel.value !== 'null') {
        let fm = new FormData(modal_form);
        fm.forEach((value, key) => {
            newUser[key] = value;
    });

        todos.push(newUser);

    }

    setStorage(todos);
};



let searchedItem = []

header_form.onsubmit = (event) => {
    event.preventDefault()

    let newUser = {};


    let fm = new FormData(modal_form);

    fm.forEach((value, key) => {
        newUser[key] = value;
    })

    function searchSelected(arr, obj) {
        arr.forEach((item) => {
            if (item.select == obj.select) {
                searchedItem.push(item)
            }
        })
    }

    console.log(newUser);
    console.log(searchedItem);
}
