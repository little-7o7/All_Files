// inp.onkeyup = () => {
//     console.log(inp.value);
// }

// inp.onfocus = () => {
//     inp.style.border = "4px solid green"
// }
// inp.onblur = () => {
//     inp.style.border = "4px solid red"
// }
// /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u


// po'lat

// rober downey.jr

let form = document.forms[0]
let inputs = form.querySelectorAll('input')


let patterns = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    surname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}


function validate(regex, field) {
    if(regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        validate(patterns[inp.name], inp)
    }
})


form.onsubmit = (enevt) => {
    event.preventDefault()

    let arrCheck = []

    inputs.forEach(inp => {
        arrCheck.push(inp.classList.value)
    })

    if (arrCheck.includes('invalid')) {
        alert('something went wrong')
    } else {
        let userData = {}

        let fm = new FormData(form)

        fm.forEach((value, key) => {
            userData[key] = value
        })

        console.log(userData);
    }
}