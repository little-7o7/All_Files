function inpValues() {
    let inp_one = document.querySelector('#inp_one')
    let inp_two = document.querySelector('#inp_two')
    let inp_three = document.querySelector('#inp_three')

    inp_one.value = localStorage.getItem('inp_one')
    inp_two.value = localStorage.getItem('inp_two')
    inp_three.value = localStorage.getItem('inp_three')
    
    inp_one.onkeyup = () => {
        localStorage.setItem('inp_one', inp_one.value)
    }
    inp_two.onkeyup = () => {
        localStorage.setItem('inp_two', inp_two.value)
    }
    inp_three.onkeyup = () => {
        localStorage.setItem('inp_three', inp_three.value)
    }
}

export { inpValues }