let body = document.querySelector('body')

let slider_id = document.querySelector('#slider')
let top_side = slider_id.querySelector('.top')
let slider = top_side.querySelector('.slider')
let btn_left = slider.querySelector('.left')
let btn_right = slider.querySelector('.right')
let slider_div = slider.querySelector('.images')
let imgs = slider_div.querySelectorAll('img')
let images = Array.from(imgs);

let bottom_side = slider_id.querySelector('.bottom')

let counter = 0
let status = true

const NEXT_SLIDE = (isNext) => {
    // Удаляем класс у всех элементов
    for (let item of images) {
        item.classList.remove("active")
    }

    if (isNext) {
        counter++

        // Включаем бесконечную прокрутку
        if (counter > images.length - 1) {
            // Убрать класс у последнего
            counter = 0
        }
    } else {
        counter--

        if (counter < 0) counter = images.length - 1
    }

    images[counter].classList.add("active")
}

let sliderr = setInterval(() => {
    if (status === true) {
        NEXT_SLIDE(true)
        NEXT_NUMBER(true)
    }
}, 1000)

// Pause slider
slider_id.onmouseenter = () => status = false

// Continue slider
slider_id.onmouseleave = () => status = true


// Переключение слайдов вправо
btn_left.onclick = () => {
    NEXT_SLIDE(false)
    NEXT_NUMBER(false)
}

// Переключение слайдов влево
btn_right.onclick = () => {
    NEXT_SLIDE(true)
    NEXT_NUMBER(true)
}

// DOTS
let dots = document.querySelector(".dots")

Array.prototype.indexOf.call(images, slider_div);

for (let item of images) {
    bottom_side.innerHTML += `
        <div id="${images.indexOf(item)+1}" class="img_number"></div>
    `
}
let img_number1 = bottom_side.querySelector('.img_number')
img_number1.classList.add('active')

let img_number = bottom_side.querySelectorAll('.img_number')

const NEXT_NUMBER = (isNext) => {
    // Удаляем класс у всех элементов
    for (let item of img_number) {
        item.classList.remove("active")
    }

    if (isNext) {
        // counter++

        // Включаем бесконечную прокрутку
        if (counter > img_number.length - 1) {
            // Убрать класс у последнего
            counter = 0
        }
    } else {
        // counter--

        if (counter < 0) counter = images.length - 1
    }

    img_number[counter].classList.add("active")
}

// console.log(img_number);

img_number.forEach(btn => {
    btn.onclick = () => {
        counter = btn.id
        NEXT_SLIDE(false)
        NEXT_NUMBER(false)
    }
})