let array = []

function getArr(count) {
    axios.get(`https://api.instantwebtools.net/v1/airlines/${count}/`)
        .then(res => {
            if (res && res.status === 200) {
                myFunction(res)
            }
        })
        .catch(error => console.log(error))
}

for (let i = 0; i <= 105; i++) {
    getArr(i)
}


function myFunction(item) {
    array.push(item)
    console.log('asdfasfd');
}



let body = document.querySelector('body')
let header = body.querySelector('header')

let add_btn_for_modal = header.querySelector('.add_btn')

let filter_icon = header.querySelector('.filter_icon')
let search_bar = header.querySelector('.search_bar')
let select = search_bar.querySelector('select')
let input = search_bar.querySelector('input')

let search_for_name = header.querySelector('.search_for_name')

let white_back = body.querySelector('.white_back')

let blur_modal = body.querySelector('.blur_modal')
let screen = body.querySelector('.screen')

let main = body.querySelector('main')

let items = main.querySelectorAll('.item')


let searchedItem = array


function closeWhiteModal() {
    white_back.classList.add('dsp_none')
    items.forEach(item => {
        let change_delete = item.querySelector('.change_delete')
        change_delete.classList.add('dsp_none2')
    })
}

function closeBlurModal() {
    blur_modal.classList.add('dsp_none')
}

add_btn_for_modal.onclick = () => {
    blur_modal.classList.remove('dsp_none')
    screen.innerHTML = ''
    screen.innerHTML = `
        <div class="modal_for_create_change_items">
            <span>Добавить новую авиалинию</span>
            <form class="add_form">
                <input type="text"/ class="sizer" placeholder="Название" name="name">
                <input type="text"/ class="sizer" placeholder="Страна" name="country">
                <input type="text"/ class="sizer" placeholder="Ссылка но фото" name="logo">
                <input type="text"/ class="sizer" placeholder="Слоган" name="slogan">
                <input type="text"/ class="sizer" placeholder="Откуда -  Куда" name="head_quaters">
                <input type="text"/ class="sizer" placeholder="Веб-сайт" name="website">
                <input type="text"/ class="sizer" placeholder="Когда было создано (год)" name="established">
                <button>Создать</button>
            </form>
        </div>
    `
}

filter_icon.onclick = () => {
    if (filter_icon.classList.contains('filter_icon_white')) {
        filter_icon.classList.remove('filter_icon_white')
        filter_icon.classList.add('filter_icon_black')
        search_bar.style.display = 'flex'
    } else if (filter_icon.classList.contains('filter_icon_black')) {
        filter_icon.classList.remove('filter_icon_black')
        filter_icon.classList.add('filter_icon_white')
        search_bar.style.display = 'none'
    }
}

function itemsFF() {
    items.forEach(item => {
        let item_left = item.querySelector('.left')
        item_left.onclick = () => {
            let idx = item.id
            blur_modal.classList.remove('dsp_none')
            screen.innerHTML = ''
            screen.innerHTML = `
                <div class="modal_for_items_info">
                    <div class="top">
                        <span>О авиалинии</span>
                        <svg onclick="changeItemModal(${idx})" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.625 2.87451C26.0518 2.44772 26.5585 2.10916 27.1161 1.87818C27.6737 1.6472 28.2714 1.52832 28.875 1.52832C29.4786 1.52832 30.0762 1.6472 30.6339 1.87818C31.1915 2.10916 31.6982 2.44772 32.125 2.87451C32.5518 3.30131 32.8903 3.80799 33.1213 4.36563C33.3523 4.92326 33.4712 5.52093 33.4712 6.12451C33.4712 6.7281 33.3523 7.32577 33.1213 7.8834C32.8903 8.44104 32.5518 8.94772 32.125 9.37452L10.1875 31.312L1.25 33.7495L3.6875 24.812L25.625 2.87451Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="info">
                    <span>Название: <strong>${airways_7o7[idx].name}</strong></span>
                        <span>Страна: <strong>${airways_7o7[idx].country}</strong></span>
                        <div>
                            <span>Ссылка но фото: </span>
                            <textarea rows="auto" disabled>${airways_7o7[idx].logo}</textarea>
                        </div>
                        <span>Слоган: <strong>${airways_7o7[idx].slogan}</strong></span>
                        <span>Откуда -  Куда: <strong>${airways_7o7[idx].head_quaters}</strong></span>
                        <span>Веб-сайт: <strong>${airways_7o7[idx].website}</strong></span>
                        <span>Когда было создано (год): <strong>${airways_7o7[idx].established}</strong></span>
                    </div>
                    <button onclick="closeBlurModal()">Закрыть</button>
                </div>
            `
        }
        let right = item.querySelector('.right')
        let change_delete = item.querySelector('.change_delete')
        right.onclick = () => {
            white_back.classList.remove('dsp_none')
            change_delete.classList.remove('dsp_none2')
        }
    })
}
itemsFF()

function changeItemModal(idx) {
    blur_modal.classList.remove('dsp_none')
    screen.innerHTML = ''
    screen.innerHTML = `
        <div class="modal_for_create_change_items">
            <span>Изменить</span>
            <form class="change_form">
                <input type="text"/ value="${airways_7o7[idx].name}" class="sizer" placeholder="Название" name="name">
                <input type="text"/ value="${airways_7o7[idx].country}" class="sizer" placeholder="Страна" name="country">
                <input type="text"/ value="${airways_7o7[idx].logo}" class="sizer" placeholder="Ссылка но фото" name="logo">
                <input type="text"/ value="${airways_7o7[idx].slogan}" class="sizer" placeholder="Слоган" name="slogan">
                <input type="text"/ value="${airways_7o7[idx].head_quaters}" class="sizer" placeholder="Откуда -  Куда" name="head_quaters">
                <input type="text"/ value="${airways_7o7[idx].website}" class="sizer" placeholder="Веб-сайт" name="website">
                <input type="text"/ value="${airways_7o7[idx].established}" class="sizer" placeholder="Когда было создано (год)" name="established">
                <button>Создать</button>
            </form>
        </div>
    `
}

search_for_name.onkeyup = () => {
    searchedItem = airways_7o7.filter(item => item.name.includes(search_for_name.value))
    reloadMain(searchedItem)
    console.log(searchedItem);
}

function reloadMain(arr) {
    main.innerHTML = ''
    for (let item of arr) {
        main.innerHTML += `
            <div class="item" id="${arr.indexOf(item)}">
                <div class="left">
                    <img src="https://picsum.photos/68/68?random=${Math.random(Math.floor * 1000)}" alt="">
                    <div class="texts">
                        <span class="name">${item.name}</span>
                        <span class="established">${item.established} - 2022</span>
                        <span class="country">${item.country}</span>
                    </div>
                </div>
                <div class="right">
                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="change_delete dsp_none2">
                    <span class="change">Изменить</span>
                    <hr>
                    <span class="delete">Удалить</span>
                </div>
            </div>
        `
    }
}

reloadMain(searchedItem)