fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => myFunction(json))

let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

function myFunction(arr) {
    conteiner.innerHTML = ''
    for (let user of arr) {
        conteiner.innerHTML += `
            <div class="item" id="${arr.indexOf(user)}">
                <div class="username">
                    <img src="https://picsum.photos/35/35?random=${Math.floor(Math.random() * 1000)}" alt="">
                    <span>${user.username}</span>
                </div>
                <div class="image">
                    <img src="https://picsum.photos/455/455?random=${Math.floor(Math.random() * 1000)}" alt="">
                </div>
                <div class="like_comment">
                    <div class="like">
                        <img class="img_like" src="./like2.svg" alt="" style="width: 29px; height: 26px; cursor: pointer;">
                        <span class="span_like">13</span>
                    </div>
                    <div class="comment">
                        <img class="show_all_comment" src="./comment.svg" alt="" style="width: 29px; height: 26px; cursor: pointer;">
                        <span class="comments1"></span>
                    </div>
                </div>
            </div>
        `
    }

let modal = body.querySelector('.modal')
let back_g = body.querySelector('.back_g')
let screen = body.querySelector('.screen')
let items = body.querySelectorAll('.item')

let index

items.forEach(item => {
    item.onclick = () => {
        modal.style.display = 'flex'
        index = item.id
        createObject(index)
    }
})

back_g.onclick = () => {
    modal.style.display = 'none'
}

function createObject(idx) {
    screen.innerHTML = `
        <span>
            {<br>
                <div class="margin">
                    id: ${arr[idx].id},<br>
                    name: "${arr[idx].name}",<br>
                    username: "${arr[idx].username}",<br>
                    email: "${arr[idx].email}",<br>
                    address: {
                        <div class="margin">
                        street: "${arr[idx].address.street}",<br>
                        suite: "${arr[idx].address.suite}",<br>
                            city: "${arr[idx].address.city}",<br>
                            zipcode: "${arr[idx].address.zipcode}",<br>
                            geo: {
                                <div class="margin">
                                    lat: "${arr[idx].address.geo.lat}",<br>
                                    lng: "${arr[idx].address.geo.lng}",<br>
                                },
                                </div>
                        },
                        </div>
                    phone: "${arr[idx].phone}",<br>
                    website: "${arr[idx].website}",<br>
                    company: {
                        <div class="margin">
                            name: "${arr[idx].company.name}",<br>
                            catchPhrase: "${arr[idx].company.catchPhrase}",<br>
                            bs: "${arr[idx].company.bs}",<br>
                        },
                        </div>
                </div>
            }
        </span>
    `
}

}