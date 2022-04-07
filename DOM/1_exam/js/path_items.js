let body = document.querySelector('body')
let conteiner = body.querySelector('.conteiner')

let ul = conteiner.querySelector('ul')

function pathItem() {
    let lis = ul.querySelectorAll('li')

    lis.forEach(li => {
        let span = li.querySelector('span')
        let btn_increase = li.querySelector('.btn-increase')
        let input = li.querySelector('input')

        let id = span.id
        
        span.onclick = () => {
            if (li.classList.contains('like')) {
                axios.patch(`http://localhost:3001/exam1/${id}/`, {rise: false})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                axios.patch(`http://localhost:3001/exam1/${id}/`, {rise: true})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
        
        btn_increase.onclick = () => {
            if (li.classList.contains('increase')) {
                axios.patch(`http://localhost:3001/exam1/${id}/`, {increase: false})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                axios.patch(`http://localhost:3001/exam1/${id}/`, {increase: true})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }

        input.onchange = () => {
            axios.patch(`http://localhost:3001/exam1/${id}/`, {salary: input.value})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    })
}

export { pathItem }