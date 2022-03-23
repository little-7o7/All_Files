let form = document.forms.todo
let inp = document.querySelector('input')
inp.value = window.localStorage.getItem('inputVal')

let todos = []
if (localStorage.getItem('todos') == null) {
    setStorage(todos)
}

let text = localStorage.getItem("todos");
todos = JSON.parse(text);

form.onsubmit = (e) => {
    e.preventDefault()
    
    let task = {
        id: Math.random()
    }
    
    let fm = new FormData(form)
    
    fm.forEach((value, key) => {
        task[key] = value
    })
    
    todos.push(task);
    
    setStorage(todos)

    reload(todos)
}

let ul = document.querySelector('ul')

function reload(arr) {
    ul.innerHTML = ""
    for (let item of arr) {
        ul.innerHTML += `
        <li id="${item.id}" > ${item.task} </li>
        `
    }
    console.log(...todos);
}

reload(todos)

inp.onkeyup = () => {
    let val = inp.value
    
    window.localStorage.setItem('inputVal', val)
    
}


function setStorage(arr) {
    let todosJSON = JSON.stringify(arr)
    localStorage.setItem("todos", todosJSON);
}
