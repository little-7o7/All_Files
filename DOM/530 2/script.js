fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => getComment(json))

let body = document.querySelector('body')
let comments_div = body.querySelector('.comments_div')

let show_all_comments = body.querySelectorAll('.show_all_comment')
let comments1 = body.querySelector('.comments1')
let comments2 = body.querySelector('.comments2')
let dsp_none = body.querySelector('.dsp_none')

let form = body.querySelector('form')
let inp = form.querySelector('input')



function getComment(arr) {
    let comment = arr[Math.floor(Math.random() * (16 - 0)) + 0];
    console.log(comment);

    comments_div.innerHTML = `
        <div class="cmt">
            <div class="left">
                <span class="sender_username">no_name${comment.id}</span>
                <p class="sended_comment">${comment.name}</p>
            </div>
            <div class="right">
                <img src="./like2.svg" alt="" style="width: 13px; height: 11px; cursor: pointer;">
                <span class="mini_likes">7</span>
            </div>
        </div>
    `

    let array = []

    for (let i = 0; i < 3; i++) {
        let comments = arr[Math.floor(Math.random() * (16 - 0)) + 0];
        array.push(comments)
    }

    comments1.innerHTML = array.length
    comments2.innerHTML = array.length

    function showAllComments() {
        for(let comments of array) {
            comments_div.innerHTML += `
            <div class="cmt">
                <div class="left">
                    <span class="sender_username">no_name${comments.id}</span>
                    <p class="sended_comment">${comments.name}</p>
                </div>
                <div class="right">
                    <img src="./like2.svg" alt="" style="width: 13px; height: 11px; cursor: pointer;">
                    <span class="mini_likes">7</span>
                </div>
            </div>
            `
        }
        dsp_none.style.display = 'none'
    }


    show_all_comments.forEach(btn => {
        btn.onclick = () => {
        }
    })
    showAllComments()

    form.onsubmit = (event) => {
        event.preventDefault();

        let newComment = {
            id: Math.random(),
        };

        if (inp.value > 0) {
            let fm = new FormData(form);
            fm.forEach((value, key) => {
                newComment[key] = value;
            });

            array.push(newComment)
        }

        // reloadAll(dashboard)
    };

}






