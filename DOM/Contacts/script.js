let users

if (localStorage.getItem('users') == null) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json));
    function setData(arr) {
        users = arr
        setStorage(users)
    }
    setStorage(users)
}

function setStorage(arr) {
    let usersJSON = JSON.stringify(arr)
    localStorage.setItem("users", usersJSON);
}

let text = localStorage.getItem("users");
users = JSON.parse(text);



// functions functions functions functions functions functions functions functions  
// functions functions functions functions functions functions functions functions  
// functions functions functions functions functions functions functions functions  
// functions functions functions functions functions functions functions functions 

let body = document.querySelector('body')
let contacts = body.querySelector('.contacts')

users.push(1,2,3,4,5)


contacts.innerHTML = ''

function reloadAll(arr) {
    for (let user of arr) {
        contacts.innerHTML += `
            <div class="item create_info item${arr.indexOf(user)}" id="${arr.indexOf(user)}">
                <div class="item_left">
                    <img src="https://picsum.photos/94/94?random=${Math.random(Math.floor * 1000)}" alt="">
                    <div class='recvizit'>
                        <h2>${user.name} ${user.username}</h2>
                        <span>${user.phone}</span>
                    </div>
                </div>
                <div class="item_right">
                    <svg width="36" height="56" viewBox="0 0 36 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 53V1H35V53L18 36L1 53Z" stroke="black" stroke-width="2"/>
                    </svg>
                    <svg class='btn_more' width="68" height="13" viewBox="0 0 68 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5 13C37.0899 13 40 10.0899 40 6.5C40 2.91015 37.0899 0 33.5 0C29.9101 0 27 2.91015 27 6.5C27 10.0899 29.9101 13 33.5 13Z" fill="grey"/>
                        <path d="M61 13C64.866 13 68 10.0899 68 6.5C68 2.91015 64.866 0 61 0C57.134 0 54 2.91015 54 6.5C54 10.0899 57.134 13 61 13Z" fill="grey"/>
                        <path d="M6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13Z" fill="grey"/>
                    </svg>
                </div>
                <div class="mini_modal_back"></div>
                <div class="item_modal">
                    <span class='create_info'>Информация об Олеге</span>
                    <span class='button_for_delete'>Удалить пользователя</span>
                    <span style="border: none;" class='button_for_change'>Изменить пользователя</span>
                </div>
            </div>
        `
    }
}

reloadAll(users)


let usersCont = contacts.querySelectorAll('.item')

usersCont.forEach(item => {
    let btn_more = item.querySelector('.btn_more')
    let item_modal = item.querySelector('.item_modal')
    let mini_modal_back = item.querySelector('.mini_modal_back')
    
    item.onclick = () => {
        mini_modal_back.classList.add('dsp_ffff')
        item_modal.classList.add('dsp_ffff')
    }
    btn_more.onclick = () => {
        mini_modal_back.classList.add('dsp_ffff')
        item_modal.classList.add('dsp_ffff')
    }
    
    mini_modal_back.onclick = () => {
        console.log('asdfasdf');
        mini_modal_back.classList.remove('dsp_ffff')
        item_modal.classList.remove('dsp_ffff')
        console.log(mini_modal_back);
        console.log(item_modal);
    }
})



