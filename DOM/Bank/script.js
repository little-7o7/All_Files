function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function regexValidate() {
    let conteiner = body.querySelector('.conteiner')
    let inputs = conteiner.querySelectorAll('input')

    let patterns = {
        name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        surname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        age: /^\S[0-9]{0,2}$/,
    };

    function validate(regex, field) {
        if (regex.test(field.value)) {
            field.classList.add("valid");
            field.classList.remove("invalid");
        } else {
            field.classList.add("invalid");
            field.classList.remove("valid");
        }
    }

    inputs.forEach((input) => {
        input.onkeyup = () => {
            validate(patterns[input.name], input);
        };
    });
}


function loginSection() {
    body.innerHTML = `
        <div class="conteiner">
            <h1 class="title">Вход</h1>
            <form class="enterForm">
                <input placeholder="Email" name="email"/>
                <input placeholder="Пароль" name="password"/>
                <button class="size">Войти</button>
            </form>
            <span class="login_register" onclick="registerSection()">Регистрация</span>
        </div>    
    `
    regexValidate()
    let conteiner = body.querySelector('.conteiner')
    let form = conteiner.querySelector('form')
    let inputs = form.querySelectorAll('input')
    form.onsubmit = (event) => {
        event.preventDefault();

        let arrCheck = [];

        inputs.forEach((inp) => {
            arrCheck.push(inp.classList.value);
        });

        if (arrCheck.includes("invalid")) {
            alert("Проверьте свои данные!!");
        } else {
            let userData = {};

            let fm = new FormData(form);

            fm.forEach((value, key) => {
                userData[key] = value;
            });

            // console.log(arrCheck);

            axios.get(`http://localhost:3001/bank/`)
            .then(res => {
                if (res && res.status === 200) {
                    for(let user of res.data) {
                        if (user.email == userData.email && user.password == userData.password) {
                            console.log(user.id);
                        } else {
                            body.innerHTML += 'sadffsd'
                        }
                    }
                }
            })
            .catch(error => console.log(error))
        }
    };
}

function registerSection() {
    body.innerHTML = `
        <div class="conteiner">
            <h1 class="title">Регистрация</h1>
            <form class="registrationForm">
                <input placeholder="Email" name="email"/>
                <input placeholder="Имя" name="name"/>
                <input placeholder="Фамилия" name="surname"/>
                <input placeholder="Пароль" name="password"/>
                <button class="size">Регистрация</button>
                </form>
            <span class="login_register" onclick="loginSection()">Вход</span>
        </div>    
    `
    regexValidate()
    let conteiner = body.querySelector('.conteiner')
    let form = conteiner.querySelector('form')
    let inputs = form.querySelectorAll('input')
    form.onsubmit = (event) => {
        event.preventDefault();

        let arrCheck = [];

        inputs.forEach((inp) => {
            arrCheck.push(inp.classList.value);
        });

        if (arrCheck.includes("invalid")) {
            alert("Проверьте свои данные!!");
        } else {
            let newUser = {
                id: uuidv4(),
            };

            let fm = new FormData(form);

            fm.forEach((value, key) => {
                newUser[key] = value;
            });

            axios.post('http://localhost:3001/bank/', newUser)
                .then(res => {
                    if (res && res.status === 201) {
                        loginSection()
                    }
                })
                .catch(error => console.log(error))
        }
    };
}






let body = document.querySelector('body')

registerSection()

