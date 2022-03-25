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
let header_inp = header.querySelector('input')
let header_sel = header.querySelector('select')
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
    reloadAll(searchedItem)
};

let searchedItem = todos

header_inp.onkeyup = () => {
    searchedItem = todos.filter(item => item.name.includes(header_inp.value))
    console.log(searchedItem);
    reloadAll(searchedItem)
}

header_sel.onchange = () => {
    console.log(header_sel.value);
    reloadAll(searchedItem)

}


function reloadAll(arr) {
    let checked = searchedItem.filter(item => item.select == 'checked')
    let unchecked = searchedItem.filter(item => item.select == 'unchecked')

    main.innerHTML = ""

    if (header_sel.value == 'null') {
        main.style.flexWrap = 'nowrap'
        main.innerHTML = `
            <div class="unchecked">
                <h3 style="width: 100%;">Is not Done! - ${unchecked.length}</h3>
            </div>
            <div class="line"></div>
            <div class="checked">
                <h3 style="width: 100%;">Is Done! - ${checked.length}</h3>
            </div>`

        let checked_box = main.querySelector('.checked')
        let unchecked_box = main.querySelector('.unchecked')

        for (let item of checked) {
            checked_box.innerHTML += `
            <div class="item" id="${item.id}">
                <h4>${item.name}</h4>
                <p>${item.date}</p>
                <label class="container">
                    <input type="checkbox" ${item.select} id="${item.id}" class="checkbox_jor_js">
                    <span class="checkmark"></span>
                    <span style="color: #186605;">Done!</span>
                </label>
            </div>`
        }
        for (let item of unchecked) {
            unchecked_box.innerHTML += `
            <div class="item" id="${item.id}">
                <h4>${item.name}</h4>
                <p>${item.date}</p>
                <label class="container">
                    <input type="checkbox" ${item.select} id="${item.id}" class="checkbox_jor_js">
                    <span class="checkmark"></span>
                    <span style="color: #FF0000;">Not done!</span>
                </label>
            </div>`
        }
    } else {
        main.innerHTML = ""
        main.style.flexWrap = 'wrap'
        if (header_sel.value == 'checked') {
            main.innerHTML += `<h3 style="width: 100%;">Is Done! - ${checked.length}</h3>`
            for (let item of checked) {
                main.innerHTML += `
                <div class="item" id="${item.id}">
                    <h4>${item.name}</h4>
                    <p>${item.date}</p>
                    <label class="container">
                        <input type="checkbox" ${item.select} id="${item.id}" class="checkbox_jor_js">
                        <span class="checkmark"></span>
                        <span style="color: #186605;">Done!</span>
                    </label>
                </div>`
            }
        } else if (header_sel.value == 'unchecked') {
            main.innerHTML += `<h3 style="width: 100%;">Is not Done! - ${unchecked.length}</h3>`
            for (let item of unchecked) {
                main.innerHTML += `
                <div class="item" id="${item.id}">
                    <h4>${item.name}</h4>
                    <p>${item.date}</p>
                    <label class="container">
                        <input type="checkbox" ${item.select} id="${item.id}" class="checkbox_jor_js">
                        <span class="checkmark"></span>
                        <span style="color: #FF0000;">Not done!</span>
                    </label>
                </div>`
            }
        }
    }
    setStorage(todos);
}

reloadAll(todos)

let checkbs = main.querySelectorAll('.checkbox_jor_js')


function changeSelect() {
    checkbs.forEach(checkb => {
        checkb.onchange = () => {
            if (checkb.checked) {
                let id = checkb.id
                let find = todos.find(item => item.id == id)
                let idx = todos.indexOf(find)
                todos[idx].select = 'checked'
                reloadAll(todos);
                setStorage(todos);
            } else {
                let id = checkb.id
                let find = todos.find(item => item.id == id)
                let idx = todos.indexOf(find)
                todos[idx].select = 'unchecked'
                reloadAll(todos);
                setStorage(todos);
            }
        }
    })
}

changeSelect()
