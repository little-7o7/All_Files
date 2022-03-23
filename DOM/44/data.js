const data = [{
        title: "MacBook Air",
        img: "macbookair.png",
        price: 999,
        url: "https://www.apple.com/shop/buy-mac/macbook-air",
        colors: ["#C7C8CA", "#B1B2B7", "#E3CCB4"],
        specs: {
            display: {
                title: "Retina display",
                size: 13.3,
            },
            chip: {
                image: 'm1.png',
                title: "Apple M1 chip",
                description: "",
            },
            ram: {
                image: 'memory.png',
                title: "Up to 16GB unified memory",
                description: "For increased performance and power efficiency",
            },
            memory: {
                size: 2,
                type: "tb",
                description: "Maximum configurable storage<sup><sub>2</sub></sup>"
            },
            battery: 18,
            battery_sup: '3',
            camera: {
                title: "720p FaceTime HD camera",
                description: "With the image signal processor of M1 for drastically improved performance",
            },
            weight: 2.8,
            other: ["Touch ID"],
        },
    },
    {
        title: "MacBook Pro 13”",
        img: "macbook13.png",
        price: 1299,
        url: "https://www.apple.com/shop/buy-mac/macbook-pro/13-inch",
        colors: ["#C7C8CA", "#B1B2B7"],
        specs: {
            display: {
                title: "Retina display",
                size: 13.3,
            },
            chip: {
                image: 'm1.png',
                title: "Apple M1 chip",
                description: "Also available with Intel Core i5 or i7 processor",
            },
            ram: {
                image: 'memory.png',
                title: "Up to 16GB unified memory<sup><sub>4</sub></sup>",
                description: "For increased performance and power efficiency",
            },
            memory: {
                size: 2,
                type: "tb",
                description: "Maximum configurable storage<sup><sub>4</sub></sup>"
            },
            battery: 20,
            battery_sup: '5',
            camera: {
                title: "720p FaceTime HD camera",
                description: "With the image signal processor of M1 for drastically improved performance",
            },
            weight: 3.0,
            other: ["Touch Bar", " Sound", " Touch ID"],
        },
    },
    {
        title: "MacBook Pro 16”",
        img: "macbookpro.png",
        price: 2399,
        url: "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
        colors: ["#C7C8CA", "#B1B2B7", "#E3CCB4"],
        specs: {
            display: {
                title: "Retina display",
                size: 16,
            },
            chip: {
                image: 'intel.png',
                title: "Up to Intel Core i9 processor",
                description: "",
            },
            ram: {
                image: 'memory2.png',
                title: "Up to 64GB memory",
                description: "",
            },
            memory: {
                size: 8,
                type: "tb",
                description: "Maximum configurable storage<sup><sub>2</sub></sup>"
            },
            battery: 11,
            battery_sup: '6',
            camera: {
                title: "720p FaceTime HD camera",
                description: "",
            },
            weight: 4.3,
            other: ["Touch Bar", " Sound", " Touch ID"],
        },
    },
];



function CreateItems(array) {
    let body = document.querySelector('body')
    let items = document.createElement('div')
    items.classList.add('items')
    body.append(items)

    for (let item of array) {
        let big_box = document.createElement('div')
        big_box.classList.add('big_box')

        let title_img = document.createElement('img')
        title_img.setAttribute('src', `./img/${item.img}`)
        
        let title = document.createElement('h5')
        title.classList.add('title')
        title.innerHTML = item.title
        
        let price = document.createElement('span')
        price.classList.add('price')
        price.innerHTML = `From $${item.price}`
        
        let colors = document.createElement('div')
        colors.classList.add('colors')
        for (let color of item.colors) {
            let color_box = document.createElement('div')
            color_box.style.backgroundColor = color
            color_box.classList.add('color_box')
            colors.append(color_box)
        }
        
        let btn_buy = document.createElement('a')
        btn_buy.setAttribute('href', item.url)
        btn_buy.classList.add('btn_buy')
        btn_buy.innerHTML = 'Buy'
        
        let hr = document.createElement('hr')
        
        let dsp_h5 = document.createElement('h5')
        let dsp_title = document.createElement('span')
        dsp_h5.classList.add('dsp_h5')
        dsp_title.classList.add('dsp_title')
        dsp_h5.innerHTML = `${item.specs.display.size}”`
        dsp_title.innerHTML = item.specs.display.title
        
        let chip_img = document.createElement('img')
        let chip_title = document.createElement('span')
        let chip_description = document.createElement('span')
        chip_img.classList.add('chip_img')
        chip_title.classList.add('chip_title')
        chip_description.classList.add('chip_description')
        chip_img.setAttribute('src', `./img/${item.specs.chip.image}`)
        chip_title.innerHTML = item.specs.chip.title
        chip_description.innerHTML = item.specs.chip.description
        
        let ram_img = document.createElement('img')
        let ram_title = document.createElement('span')
        let ram_description = document.createElement('span')
        ram_img.classList.add('ram_img')
        ram_title.classList.add('ram_title')
        ram_description.classList.add('ram_description')
        ram_img.setAttribute('src', `./img/${item.specs.ram.image}`)
        ram_title.innerHTML = item.specs.ram.title
        ram_description.innerHTML = item.specs.ram.description
        
        let memory_img = document.createElement('h5')
        let memory_title = document.createElement('span')
        memory_img.innerHTML = `${item.specs.memory.size}TB`
        memory_title.innerHTML = item.specs.memory.description
        
        let battery_img = document.createElement('img')
        let battery_title = document.createElement('span')
        battery_img.classList.add('battery_img')
        battery_title.classList.add('battery_title')
        battery_img.setAttribute('src', `./img/battery.png`)
        battery_title.innerHTML = `Up to ${item.specs.battery} hours battery life`
        
        let cam_img = document.createElement('img')
        let cam_title = document.createElement('span')
        let cam_description = document.createElement('span')
        cam_img.classList.add('cam_img')
        cam_title.classList.add('cam_title')
        cam_description.classList.add('cam_description')
        cam_img.setAttribute('src', './img/video.png')
        cam_title.innerHTML = item.specs.camera.title
        cam_description.innerHTML = item.specs.camera.description
        
        let weight_img = document.createElement('h5')
        let weight_title = document.createElement('span')
        weight_img.classList.add('weight_img')
        weight_title.classList.add('weight_title')
        weight_img.innerHTML = `${item.specs.weight} lb.`
        weight_title.innerHTML = 'Weight'
        
        let other_title = document.createElement('span')
        other_title.classList.add('other_title')
        other_title.innerHTML = item.specs.other
        
        // hr
        
        let learn_more = document.createElement('a')
        learn_more.setAttribute('href', '')
        learn_more.classList.add('learn_more')
        learn_more.innerHTML = 'Learn more'
        
        items.append(big_box)
        big_box.append(title_img, title, price, colors, btn_buy, hr, dsp_h5, dsp_title, chip_img, chip_title, chip_description, ram_img, ram_title, ram_description, memory_img, memory_title, battery_img, battery_title, cam_img, cam_title, cam_description, weight_img, weight_title, other_title, hr, learn_more)
    }
}

CreateItems(data)