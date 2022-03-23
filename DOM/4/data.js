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

function createItems(arr) {
    let doc = document.querySelector('body')
    let body = document.createElement('div')
    body.classList.add('body')

    for (let item of arr) {
        let item_box = document.createElement("div");
        item_box.classList.add('item_box')

        let item1 = document.createElement("div");
        let item2 = document.createElement("div");
        let item3 = document.createElement("div");
        let item4 = document.createElement("div");
        let item5 = document.createElement("div");
        let item6 = document.createElement("div");
        let item7 = document.createElement("div");
        let item8 = document.createElement("div");
        let item9 = document.createElement("div");
        let item10 = document.createElement("div");
        let item11 = document.createElement("div");

        item1.classList.add('item_boxs')
        item2.classList.add('item_boxs')
        item3.classList.add('item_boxs')
        item4.classList.add('item_boxs')
        item5.classList.add('item_boxs')
        item6.classList.add('item_boxs')
        item7.classList.add('item_boxs')
        item8.classList.add('item_boxs')
        item9.classList.add('item_boxs')
        item10.classList.add('item_boxs')
        item11.classList.add('item_boxs')

        // 1box
        let macbook_img = document.createElement("img");
        macbook_img.setAttribute('src', `./img/${item.img}`)

        // 2box
        let title = document.createElement("h5");
        let price = document.createElement('span')
        let colors = document.createElement("div");
        for (let item_color of item.colors) {
            let color = document.createElement('div')
            color.classList.add('color')
            color.style.backgroundColor = item_color
            colors.append(color)
        }
        let btn_a = document.createElement('a')
        let btn_buy = document.createElement("div");
        let hr = document.createElement('div')

        title.innerHTML = item.title
        price.innerHTML = `From $${item.price}`
        colors.classList.add('colors')
        btn_buy.classList.add('btn_buy')
        btn_buy.innerHTML = 'Buy'
        hr.classList.add('hr')
        title.classList.add('title')
        price.classList.add('price')
        btn_a.classList.add('btn_a')
        btn_a.setAttribute('href', item.url)

        // 3box
        let display_sz = document.createElement('h4')
        let display_title = document.createElement('span')
        display_sz.classList.add('display_sz')
        display_title.classList.add('display_title')
        display_sz.innerHTML = `${item.specs.display.size}”`
        display_title.innerHTML = `${item.specs.display.title}<sup><sub>1</sub></sup>`

        // 4box
        let chip_img = document.createElement('img')
        let chip_title = document.createElement('span')
        let chip_description = document.createElement('span')
        chip_img.classList.add('chip_img')
        chip_title.classList.add('chip_title')
        chip_description.classList.add('chip_description')
        chip_img.setAttribute('src', `./img/${item.specs.chip.image}`)
        chip_title.innerHTML = item.specs.chip.title
        chip_description.innerHTML = item.specs.chip.description

        // 5box
        let ram_img = document.createElement('img')
        let ram_title = document.createElement('span')
        let ram_description = document.createElement('span')
        ram_img.classList.add('ram_img')
        ram_title.classList.add('ram_title')
        ram_description.classList.add('ram_description')
        ram_img.setAttribute('src', `./img/${item.specs.ram.image}`)
        ram_title.innerHTML = item.specs.ram.title
        ram_description.innerHTML = item.specs.ram.description

        // 6box
        let memory_storage = document.createElement('h1')
        let memory_description = document.createElement('span')
        memory_storage.classList.add('memory_storage')
        memory_description.classList.add('memory_description')
        memory_storage.innerHTML = `${item.specs.memory.size}TB`
        memory_description.innerHTML = item.specs.memory.description

        // 7box
        let battery_img = document.createElement('img')
        let battery_title = document.createElement('span')
        battery_title.classList.add('battery_title')
        battery_img.setAttribute('src', `./img/battery.png`)
        battery_title.innerHTML = `Up to ${item.specs.battery} hours battery life<sup><sub>${item.specs.battery_sup}</sub></sup>`

        // 8box
        let camera_img = document.createElement('img')
        let camera_title = document.createElement('span')
        let camera_description = document.createElement('span')
        camera_img.classList.add('camera_img')
        camera_title.classList.add('camera_title')
        camera_description.classList.add('camera_description')
        camera_img.setAttribute('src', './img/video.png')
        camera_title.innerHTML = item.specs.camera.title
        camera_description.innerHTML = item.specs.camera.description

        // 9box
        let weight_h5 = document.createElement('h5')
        let weight_title = document.createElement('span')
        weight_h5.classList.add('weight_h5')
        weight_title.classList.add('weight_title')
        weight_h5.innerHTML = `${item.specs.weight} lb.`
        weight_title.innerHTML = 'Weight'

        // 10box
        let bar_items = document.createElement('span')
        bar_items.classList.add('bar_items')
        bar_items.innerHTML = item.specs.other


        // 11box
        let learn_more = document.createElement('a')
        learn_more.classList.add('learn_more')
        learn_more.setAttribute('href', '')
        learn_more.innerHTML = 'Learn more >'


        doc.append(body)
        body.append(item_box)

        item_box.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11)

        item1.append(macbook_img)

        btn_a.append(btn_buy)
        item2.append(title, price, colors, btn_a, hr)

        item3.append(display_sz, display_title)

        item4.append(chip_img, chip_title, chip_description)

        item5.append(ram_img, ram_title, ram_description)

        item6.append(memory_storage, memory_description)

        item7.append(battery_img, battery_title)

        item8.append(camera_img, camera_title, camera_description)

        item9.append(weight_h5, weight_title)

        item10.append(bar_items, hr)

        item11.append(learn_more)
    }
}

createItems(data);
