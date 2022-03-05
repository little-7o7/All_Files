let name = "Alex"
let password = 7777
let money = 10000


let namePrompt = prompt('Как вас зовут?')
if (namePrompt === name) {
    let promptPassword = prompt('Номер счёта?')
    if (promptPassword == password) {
        let promptNal = prompt('Сколько обналичить?')
        if (promptNal <= money) {
            console.log('Обналичено = ' + promptNal)
            let left = money - promptNal
            console.log('Осталось = ' + left)
        } else {
            console.log('Недостаточно средств')
        }
    } else {
        console.log('Пользователь не найден, досвидули');
    }
} else {
    console.log('Пользователь не найден, досвидули');
}