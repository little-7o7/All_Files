let body = document.querySelector('body')
let resize_bar = body.querySelector('.resize_bar')

let chat_bar = body.querySelector('.chats')


// * burger onclick(modal_screen) burger onclick(modal_screen) burger onclick(modal_screen) 
let burger = resize_bar.querySelector('.burger_hover')
let burger_modal = body.querySelector('.burger_modal')
let burger_modal_back = burger_modal.querySelector('.back')

burger.onclick = () => {
    burger_modal.style.display = "block"
}

burger_modal_back.onclick = () => {
    burger_modal.style.display = "none"
}
// * burger onclick(modal_screen) burger onclick(modal_screen) burger onclick(modal_screen) 

// * add_chats_btn_modal add_chats_btn_modal add_chats_btn_modal add_chats_btn_modal
let add_chats_btn_modal = body.querySelector('.add_chats_btn_modal')

chat_bar.onmouseenter = () => {
    add_chats_btn_modal.style.bottom = "22px"
}

add_chats_btn_modal.onmouseenter = () => {
    add_chats_btn_modal.style.bottom = "22px"
}

chat_bar.onmouseleave = () => {
    add_chats_btn_modal.style.bottom = "-80px"
}
// * add_chats_btn_modal add_chats_btn_modal add_chats_btn_modal add_chats_btn_modal
