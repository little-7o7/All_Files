let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

let ul = conteiner.querySelector('ul')

function deleteItem() {
    let btns_delete = ul.querySelectorAll('.btn-delete')

    btns_delete.forEach(btn => {
        let id = btn.id
        btn.onclick = () => {
            deleteAPI(id)
        }
    })
}

function deleteAPI(id) {
    axios.delete(`http://localhost:3001/exam1/${id}/`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export { deleteItem }