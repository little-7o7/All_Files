function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let body = document.querySelector('body')

function loginSection() {
    body.innerHTML = `
        <div class="conteiner">
            <h1 class="title">Вход</h1>
            <form class="enterForm">
                <input placeholder="Email" name="email" class="size"/>
                <input placeholder="Пароль" name="password" class="size"/>
                <button class="size">Войти</button>
            </form>
            <span class="login_register" onclick="registerSEction()">Регистрация</span>
        </div>    
    `
}

function registerSEction() {
    body.innerHTML = `
        <div class="conteiner">
            <h1 class="title">Регистрация</h1>
            <form class="registrationForm">
                <input placeholder="Email" name="email" class="size"/>
                <input placeholder="Имя" name="name" class="size"/>
                <input placeholder="Фамилия" name="surname" class="size"/>
                <input placeholder="Пароль" name="password" class="size"/>
                <button class="size">Регистрация</button>
                </form>
            <span class="login_register" onclick="loginSection()">Вход</span>
        </div>    
    `
}

registerSEction()





