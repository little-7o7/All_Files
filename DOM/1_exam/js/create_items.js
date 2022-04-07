import { uuidv4 } from "./uuid.js"
import { getAPI } from "./../script.js"

let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

let app_add_form = conteiner.querySelector('.app-add-form')

let createForm = app_add_form.querySelector('form')

let inp_two = document.querySelector('#inp_two')
let inp_three = document.querySelector('#inp_three')

function putNewItems() {
    createForm.onsubmit = (event) => {
        event.preventDefault();

        let newUser = {
            id: uuidv4(),
            increase: false,
            rise: false,
        };

        if (inp_two.value.length > 0 && inp_three.value.length > 0) {
            let fm = new FormData(createForm);

            fm.forEach((value, key) => {
                newUser[key] = value;
            });

            postAPI(newUser)
        }
    }

}

function postAPI(obj) {
    axios.post('http://localhost:3001/exam1/', obj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export { putNewItems }