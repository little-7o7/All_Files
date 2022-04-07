let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

let ul = conteiner.querySelector('ul')

function reload() {
    axios.get(`http://localhost:3001/exam1/`)
        .then(res => {
            if (res && res.status === 200) {
                paintingItems(res.data)
            }
        })
        .catch(error => console.log(error))
}

function paintingItems(arr) {
    ul.innerHTML = ''
    for (let user of arr) {
        ul.innerHTML += `
            <li class="list-group-item d-flex justify-content-between like">
                <span class="list-group-item-label"data-toggle="rise">${user.name}</span>
                <input type="text" class="list-group-item-input" value="${user.salary}">
                <div class="d-flex justify-content-center align-items-center">
                    <button type="button" class="btn-cookie btn-sm " data-toggle="increase">
                        <i class="fas fa-cookie"></i>
                    </button>
                    <button type="button" class="btn-trash btn-sm">
                        <i class="fas fa-trash" data-feather="circle"></i>
                    </button>
                    <i class="fas fa-star"></i>
                </div>
            </li>
        `
    }
}

export { reload }