let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

let increaseP = conteiner.querySelector('.increaseP')

let ul = conteiner.querySelector('ul')

function reload(array) {
    paintingItems(array)
    let incNumb = array.filter(item => item.increase)
    increaseP.innerHTML = incNumb.length
}

function paintingItems(arr) {
    ul.innerHTML = ''
    for (let user of arr) {
        let className = 'list-group-item d-flex justify-content-between'
        if (user.increase) {
            className += ' increase'
        }
        if (user.rise) {
            className += ' like'
        }
        let id = user.id
        ul.innerHTML += `
            <li id="${user.id}" class="${className}">
                <span id="${user.id}" class="list-group-item-label" data-toggle="rise">${user.name}</span>
                <input type="text" class="list-group-item-input" value="${user.salary}">
                <div class="d-flex justify-content-center align-items-center">
                    <button id="${user.id}" type="button" class="btn-increase btn-cookie btn-sm " data-toggle="increase">
                        <i class="fas fa-cookie"></i>
                    </button>
                    <button id="${user.id}" type="button" class="btn-delete btn-trash btn-sm">
                        <i class="fas fa-trash" data-feather="circle"></i>
                    </button>
                    <i class="fas fa-star"></i>
                </div>
            </li>
        `
    }
}

export { reload }