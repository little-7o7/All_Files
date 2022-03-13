//тут я создаю элемент
let thro = document.querySelectorAll('.throw')
let pngs = document.querySelectorAll('.offer__slide')
let start = document.querySelector('#current')
let mobal = document.querySelectorAll('.btn__call')
let modal = document.querySelector('.modal')
let modal_cl = document.querySelector('div[data-close]')
let total = document.querySelector('#total')
let butons = document.querySelectorAll('.tabheader__item')
let tabcontent = document.querySelectorAll('.tabcontent')

total.innerText = `/0${pngs.length}`
for (const item of mobal) {
    item.onclick = () => {
        modal.style.top = '0px'

    }
    modal_cl.onclick = () => {
        modal.style.top = '-930px'
    }
}

// этот цыкл получает атрибут и предаёт значение в функцию
for (const key of thro) {
    //при onclick он берет этот атребут 
    key.onclick = () => {
        //вот тут усли что
        let atr = key.getAttribute('what')
        //тут он предает этот атрибут
        funk(atr)
    }
}

// это я не знаю что
let num = 1
let num2 = 1

const funk = (a) => {
    //если атрибут равен left то хоп хоп и он проходит а если нет
    if (a == 'left') {
        // тут проверка на 01 если 01 то хоп хоп и он проходит а если нет
        if (start.innerText == '01') {
            //тут у нас добавление атрибута 
            for (const item of pngs) {
                // вот тут если что
                item.classList.add('none')
            }
            //тут унас математика я в ней хорошо не разбераюсь так-что скипаем 
            num2 = pngs.length
            num = pngs.length
            //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 
            pngs[num2].classList.remove('none')
        } else {
            num--
            num2--
        }
        start.innerText = `0${num}`
        //тут у нас добавление атрибута 
        for (const item of pngs) {
            item.classList.add('none')
        }
        //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 
        pngs[num2].classList.remove('none')
        //если атрибут равен right то хоп хоп и он проходит а если нет
    } else if (a == 'right') {
        if (start.innerText == `0${pngs.length}`) {
            num = 1
            num2 = 0
            //тут у нас добавление атрибута
            for (const item of pngs) {
                // вот тут если что
                item.classList.add('none')
            }
            //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 
            pngs[num2].classList.remove('none')
        } else {
            num++
            num2++
        }
        start.innerText = `0${num}`
        //тут у нас добавление атрибута 
        for (const item of pngs) {
            // вот тут если что
            item.classList.add('none')
        }
        //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 

        pngs[num2].classList.remove('none')

    } else console.log('код не меняем');
}

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 3000) {
        modal.style.top = '0px';
    } else {
        modal.style.top = '-930px';
    }
});

const clear = () => {
    for (const keys of butons) {
        keys.classList.remove('tabheader__item_active')
    }
    for (const item of tabcontent) {
        item.classList.add('none')
    }
}

for (const keys of butons) {
    keys.onclick = () => {
        clear()
        keys.classList.add('tabheader__item_active')
        let num = Number(keys.getAttribute('which')) - 1 
        tabcontent[num].classList.remove('none')
    }
}
