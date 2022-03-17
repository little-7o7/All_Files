// let form = document.forms.add_name
// let table = document.querySelector('table')
// let arr = []

// let reload = () => {
//     table.innerHTML = ''

//     let tr = document.createElement('tr')
//     let th1 = document.createElement('th')
//     let th2 = document.createElement('th')
//     let th3 = document.createElement('th')

//     th1.innerText = 'ID'
//     th2.innerText = 'Имя'
//     th3.innerText = 'Действие'

//     tr.append(th1, th2, th3)
//     table.append(tr)

//     for (let item of arr) {
//         let tr1 = document.createElement('tr')
//         let td = document.createElement('td')
//         let td1 = document.createElement('td')
//         let btn = document.createElement('button')

//         td.innerText = item.id
//         td1.innerText = item.add_person
//         btn.innerText = 'Изменить'
//         btn.setAttribute('onclick', 'EditItem()')
//         tr1.append(td, td1, btn)
//         table.append(tr1)
//     }
// }

// form.onsubmit = () => {
//     event.preventDefault()

//     let formData = new FormData(form)
    
//     let obj = {
//         id: Math.random().toString().slice(2, 15)
//     }

//     formData.forEach((value, key) => {
//         obj[key] = value
//     })

//     arr.push(obj)
//     reload()
// }

// let EditItem = () => {
//     let id = event.target.previousElementSibling.previousElementSibling.innerText
//     console.log(id);

//     for(let item of arr) {
//         if(item.id == id) {
//             item.add_person = prompt('Введите новое значение')
//         }
//     }
//     reload()
// }
