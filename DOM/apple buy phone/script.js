let image_div = document.querySelector('.image_div')
let button_13pro = document.querySelector('#button-13pro')
let button_13pro_max = document.querySelector('#button-13pro-max')
let i13pro = document.querySelector('.i13pro')
let i13promax = document.querySelector('.i13promax')
let buttons_select_model2 = document.querySelector('.buttons_select_model2')
let price_changer = document.querySelector('.price_changer')
let inner13Pro = 'From $999 or $41.62/mo for 24 mo.*'
let inner13ProMax = 'From $1099 or $45.79/mo for 24 mo.*'

button_13pro.onclick = () => {
    image_div.style.backgroundImage = 'url(./images/13pro/iphone-13-pro-family-select.jpg)'
    price_changer.innerHTML = inner13Pro
    if(button_13pro_max.classList.contains('active')) {
        button_13pro_max.classList.remove('active')
        button_13pro.classList.add('active')
    } else {
        button_13pro.classList.add('active')
    }
}

button_13pro_max.onclick = () => {
    image_div.style.backgroundImage = 'url(./images/13promax/iphone-13-pro-max-family-select.jpg)'
    price_changer.innerHTML = inner13ProMax
    if(button_13pro.classList.contains('active')) {
        button_13pro.classList.remove('active')
        button_13pro_max.classList.add('active')
    } else {
        button_13pro_max.classList.add('active')
    }
}



// select model finishet select model finishet select model finishet select model finishet
// select model finishet select model finishet select model finishet select model finishet
// select model finishet select model finishet select model finishet select model finishet
// select model finishet select model finishet select model finishet select model finishet


let colors = document.querySelector('.colors')
let colorBlue = document.querySelector('.blue')
let colorSilver = document.querySelector('.silver')
let colorGold = document.querySelector('.gold')
let colorGrap = document.querySelector('.graphite')
let filteredImage_div = getComputedStyle(image_div)
let url_image_div = filteredImage_div.backgroundImage
console.log(url_image_div);

colorBlue.onclick = () => {
    if (button_13pro.classList.contains('active')) {
        image_div.style.backgroundImage = 'url(./images/13pro/iphone-13-pro-blue-select.png)'
    } else {
        image_div.style.backgroundImage = 'url(./images/13promax/iphone-13-pro-max-blue-select.png)'
    }
    if (colorSilver.classList.contains('active') || colorGold.classList.contains('active') || colorGrap.classList.contains('active')) {
        colorSilver.classList.remove('active')
        colorGold.classList.remove('active')
        colorGrap.classList.remove('active')
        colorBlue.classList.add('active')
    } else {
        colorBlue.classList.add('active')
    }
}

colorSilver.onclick = () => {
    if (button_13pro.classList.contains('active')) {
        image_div.style.backgroundImage = 'url(./images/13pro/iphone-13-pro-silver-select.png)'
    } else {
        image_div.style.backgroundImage = 'url(./images/13promax/iphone-13-pro-max-silver-select.png)'
    }
    if (colorBlue.classList.contains('active') || colorGold.classList.contains('active') || colorGrap.classList.contains('active')) {
        colorBlue.classList.remove('active')
        colorGold.classList.remove('active')
        colorGrap.classList.remove('active')
        colorSilver.classList.add('active')
    } else {
        colorSilver.classList.add('active')
    }
}

colorGold.onclick = () => {
    if (button_13pro.classList.contains('active')) {
        image_div.style.backgroundImage = 'url(./images/13pro/iphone-13-pro-gold-select.png)'
    } else {
        image_div.style.backgroundImage = 'url(./images/13promax/iphone-13-pro-max-gold-select.png)'
    }
    if (colorBlue.classList.contains('active') || colorSilver.classList.contains('active') || colorGrap.classList.contains('active')) {
        colorBlue.classList.remove('active')
        colorSilver.classList.remove('active')
        colorGrap.classList.remove('active')
        colorGold.classList.add('active')
    } else {
        colorGold.classList.add('active')
    }
}

colorGrap.onclick = () => {
    if (button_13pro.classList.contains('active')) {
        image_div.style.backgroundImage = 'url(./images/13pro/iphone-13-pro-graphite-select.png)'
    } else {
        image_div.style.backgroundImage = 'url(./images/13promax/iphone-13-pro-max-graphite-select.png)'
    }
    if (colorBlue.classList.contains('active') || colorSilver.classList.contains('active') || colorGold.classList.contains('active')) {
        colorBlue.classList.remove('active')
        colorSilver.classList.remove('active')
        colorGold.classList.remove('active')
        colorGrap.classList.add('active')
    } else {
        colorGrap.classList.add('active')
    }
}