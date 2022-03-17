let inp_one = document.querySelector('#one')
// let inp_two = document.querySelector('#two')

let button_send = document.querySelector('.send')
// let year = 0




button_send.onclick = () => {
    const nomash = inp_one.value
    console.log(nomash);
    localStorage.setItem("text", JSON.stringify(nomash));


    // year = 2022 - inp_two.value

    // const obj = {
    //     name: inp_one.value ,
    //     age: year
    // }

    // console.log(obj);





//     // Store an array in local storage
//     // The array to store
//     let array = [];
//     array.push(obj)
//     // Store after JSON stringifying (is this a verb?) it
//     localStorage.setItem('myArray', JSON.stringify(array));
//     // Get an array from local storage
//     // Retrieve the array from local storage
//     let array2 = localStorage.getItem('myArray');
//     // Parse it to something usable in js
//     array = JSON.parse(array2);
}

input.value = JSON.parse(localStorage.getItem("text"));

console.log(input.value)