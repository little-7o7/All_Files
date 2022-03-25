let body = document.querySelector('body')
let main = document.querySelector('main')

let add_task_btn = document.querySelector('#add_task_btn')
let table_btn = document.querySelector('#table')
let tile_btn = document.querySelector('#tile')

let modal_screens = body.querySelector('#modal_screens')
let modal_screen_for_create = modal_screens.querySelector('.modal_screen_for_create')
let back_g = modal_screen_for_create.querySelector('.back_g')

let form_for_create = modal_screen_for_create.querySelector('form')
let title = form_for_create.querySelector('#title')
let description = form_for_create.querySelector('#description')
let time = form_for_create.querySelector('#time')
let date = form_for_create.querySelector('#date')
let select = form_for_create.querySelector('#select')
let btn_add = form_for_create.querySelector('#btn_add')



let dashboard = [];
let style = 'table'

// localStorage localStorage localStorage localStorage localStorage localStorage localStorage
// localStorage localStorage localStorage localStorage localStorage localStorage localStorage

if (localStorage.getItem('dashboard') == null) {
    setStorage(dashboard)
}

let text = localStorage.getItem("dashboard");
dashboard = JSON.parse(text);

function setStorage(arr) {
    let dashboardJSON = JSON.stringify(arr)
    localStorage.setItem("dashboard", dashboardJSON);
}


reloadAll(dashboard)
// functions functions functions functions functions functions functions functions functions
// functions functions functions functions functions functions functions functions functions

function createModal() {
    modal_screens.style.display = 'block'
    modal_screen_for_create.style.display = 'flex'
}

function closeModal() {
    modal_screens.style.display = 'none'
    modal_screen_for_create.style.display = 'none'
}

add_task_btn.onclick = () => {
    setTimeout(createModal, 1000)
}

back_g.onclick = () => {
    setTimeout(closeModal, 500)
}

    form_for_create.onsubmit = (event) => {
    event.preventDefault();

    let newTask = {
        id: Math.random(),
    };

    if (title.value > 0 || description.value > 0) {
        let fm = new FormData(form_for_create);
        fm.forEach((value, key) => {
            newTask[key] = value;
        });
        dashboard.push(newTask);
        setTimeout(closeModal, 1000)
    }

    setStorage(dashboard);
    reloadAll(dashboard)
};

table_btn.onclick = () => {
    tile_btn.classList.remove('span_onclick')
    table_btn.classList.add('span_onclick')
    style = 'table'
    reloadAll(dashboard)
}

tile_btn.onclick = () => {
    table_btn.classList.remove('span_onclick')
    tile_btn.classList.add('span_onclick')
    style = 'tile'
    reloadAll(dashboard)
}


function reloadAll(arr) {
    main.innerHTML = ""
    if (style === 'table') {
        main.innerHTML = `
            <table>
                <tr>
                    <th>Заголовок задачи</th>
                    <th>Описание задачи</th>
                    <th>Дата</th>
                    <th>Время</th>
                    <th>Выполнено</th>
                </tr>
            </table>
        `
        let table = main.querySelector('table')
        for (let item of arr) {
            table.innerHTML += `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.date}</td>
                    <td>${item.time}</td>
                    <td class="progress">${item.which_task}</td>
                </tr>
            `
        }
    } else {
        main.innerHTML = `<div class="conteiner"></div>`
        let conteiner = main.querySelector('.conteiner')

        for (let item of arr) {
            conteiner.innerHTML += `
                <div class="item">
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                    <div>
                        <div class="time">
                            <span>${item.date}</span>
                            <span>${item.time}</span>
                        </div>
                        <h5 class="progress">${item.which_task}</h5>
                    </div>
                </div>
            `
        }
    }
    let progresss = main.querySelectorAll('.progress')
    progresss.forEach(progress => {
        if (progress.innerHTML == 'Не выполнено') {
            progress.style.color = '#FF3F3F'
        } else if (progress.innerHTML == 'В прогрессе') {
            progress.style.color = '#007FFF'
        } else {
            progress.style.color = '#000000'
        }
    })
}
