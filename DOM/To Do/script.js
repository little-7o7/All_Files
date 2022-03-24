let todos = [{id: 0.9618167602332441, name: 'Buy car', date: '22:33', select: 'unchecked'},
{id: 0.522994763998317, name: 'Buy cap', date: '03:42', select: 'checked'},
{id: 0.9426195483006994, name: 'sdsd', date: '04:43', select: 'checked'},
{id: 0.7725075016821956, name: 'sdsd23', date: '04:44', select: 'unchecked'},
{id: 0.17063730457702553, name: '2444', date: '23:23', select: 'checked'},
{id: 0.7472941348463995, name: '2332', date: '23:44', select: 'checked'},
{id: 0.09902483272168516, name: '23323423', date: '23:35', select: 'checked'},
{id: 0.8293529649699218, name: 'asdasd', date: '23:23', select: 'unchecked'},
{id: 0.37245923039633855, name: 'asdas', date: '23:32', select: 'unchecked'}];

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
                    <input type="checkbox" ${item.select} id="checkbox">
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
                    <input type="checkbox" ${item.select} id="checkbox">
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
                        <input type="checkbox" ${item.select} id="checkbox">
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
                        <input type="checkbox" ${item.select} id="checkbox">
                        <span class="checkmark"></span>
                        <span style="color: #FF0000;">Not done!</span>
                    </label>
                </div>`
            }
        }
    }
}

reloadAll(todos)


// let checkbs = main.querySelectorAll('#checkbox')

// checkbs.forEach(chckb => {
//     chckb.onchange = () => {
//         if (chckb.checked) {
//             alert('Выбран');
//         }
//         else {
//             alert ('Не выбран');
//         }
//     }
// })


// let items = main.querySelectorAll('item')


// items.forEach(item => {
//     let checkb = item.querySelector('input')
// })


console.log(todos);