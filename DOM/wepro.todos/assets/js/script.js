let API = "https://wepro-groups.herokuapp.com/todos"


// let body = document.querySelector('body')

// let header = body.querySelector('header')
// let main = body.querySelector('main')

// let btn_create_for_modal = header.querySelector('.btn_create_for_modal')
// let select_status = header.querySelector('.select_status')

// let search_input = header.querySelector('.search_input')

// let modals = body.querySelector('.modals')
// let back_g = modals.querySelector('.back_g')
// let screen = modals.querySelector('.screen')

// let status = "all"


const getItems = (api) => {
    axios.get(api)
        .then(res => {
            // drawItems(res.data)
            // onChangeStatus(res.data)
            console.log(res.data)
        })
        .catch(res => {
            return console.log(res);
        })
}
getItems(API)


// function drawItems(arr) {
//     // main.innerHTML = ""
//     for (let item of arr) {
//         if (item.author == "little_7o7") {
//             console.log(item);
//         }
//     }
// }

// btn_create_for_modal.onclick = () => {
//     modals.style.top = "0"
//     screen.innerHTML = `
//         <div class="create_side">
//         <h2>Create To DOs</h2>
//         <form class="create_todos_form">
//                 <input type="text" placeholder="Title" name="title">
//                 <textarea type="text" placeholder="Description" name="description"></textarea>
//                 <input type="text" placeholder="Color" name="color">
//                 <select class="select_status_for_create" name="status">
//                     <option value="new" selected>New</option>
//                     <option value="in_progress">In Progress</option>
//                     <option value="done">Done</option>
//                 </select>
//                 <button>Create</button>
//             </form>
//         </div>
//     `
//     let create_todo_form = screen.querySelector('.create_todos_form')
//     formSubmit(create_todo_form)
// }

// back_g.onclick = () => {
//     modals.style.top = "-100%"
// }

// function onChangeStatus(arr) {
//     select_status.onchange = () => {
//         status = select_status.value
//         console.log(status);
//         drawItems(arr)
//     }
// }

// function formSubmit(form) {
//     console.log(form);
//     form.onsubmit = () => {
//         event.preventDefault()

//         let obj = {
//             author: "little_7o7"
//         }

//         let fm = new FormData(form)

//         fm.forEach((value, key) => {
//             obj[key] = value
//         })

//         axios.post(API, obj)
//             .then(res => {
//                 if (res.status == 200 || res.status == 201) {
//                     console.log("todo created");
//                 }
//             })

//         modals.style.top = "-100%"
//     }
// }


function clearAPI(api) {
    axios.delete(api + '/' + '626cebf21101b8aeb0205c23')
        .then(res => {
            console.log('deleted');
        })
        .catch(res => {
            console.log('not deleted');
        })
}

function sikl() {
    for (let i = 0; i < 10; i++) {
        clearAPI(API) 
    }
}

sikl()
setTimeout(function () { 
    location.reload();
  }, 10 * 1000);
