let size

if (localStorage.getItem('__little_7o7__myTelegram_resize_size') == null) {
    setStorage('480')
} else {
    size = localStorage.getItem("__little_7o7__myTelegram_resize_size");
}

function setStorage(px) {
    localStorage.setItem("__little_7o7__myTelegram_resize_size", px);
    // console.log(px);
}

let dragging = 0,
    body = document.body,
    target = document.getElementById('dragbar');

let  create_button = document.querySelector("#create_button")
body.style.setProperty("--left-width", size + 'px');

function clearJSEvents() {
    dragging = 0;
    body.removeEventListener("mousemove", resize);
    body.classList.remove('resizing');
}

function resize(e) {
    if (e.pageX > 635 || e.pageX < 330) {
        return;
    }
    body.style.setProperty("--left-width", e.pageX + 'px');
    // console.log(create_button);

    setStorage(e.pageX)
}

target.onmousedown = function (e) {
    e.preventDefault();
    dragging = 1;
    body.addEventListener('mousemove', resize);
    body.classList.add('resizing');
};

document.onmouseup = function () {
    dragging ? clearJSEvents() : '';
};

