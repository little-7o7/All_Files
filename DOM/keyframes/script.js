let boxes = document.querySelectorAll('div')
console.log(boxes);

boxes.forEach(box => {
    box.onmouseenter = () => {
        box.classList.add('boxes')
    }
})