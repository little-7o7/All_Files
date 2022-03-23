let form = document.querySelector("form");
let inputs = form.querySelectorAll("input");
let inp_one = document.querySelector("#one");
let inp_two = document.querySelector("#two");
let button = document.querySelector("button");
let table = document.querySelector("table");
let main = document.querySelector("main");
let table_tr_th = document.querySelector(".table_tr_th");


let array = [];

if (localStorage.getItem('array') == null) {
  setStorage(array)
}

let text = localStorage.getItem("array");
array = JSON.parse(text);


function setStorage(arr) {
  let arrayJSON = JSON.stringify(arr)
  localStorage.setItem("array", arrayJSON);
}

let patterns = {
  name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
  surname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  age: /^\S[0-9]{0,2}$/,
};

function validate(regex, field) {
  if (regex.test(field.value)) {
    field.classList.add("valid");
    field.classList.remove("invalid");
  } else {
    field.classList.add("invalid");
    field.classList.remove("valid");
  }
}

inputs.forEach((input) => {
  input.onkeyup = () => {
    validate(patterns[input.name], input);
  };
});


form.onsubmit = (event) => {
  event.preventDefault();

  let arrCheck = [];

  inputs.forEach((inp) => {
    arrCheck.push(inp.classList.value);
  });

  if (arrCheck.includes("invalid")) {
    alert("Проверьте свои данные!!");
  } else {
    let newUser = {
      id: Math.random(),
    };

    let fm = new FormData(form);

    fm.forEach((value, key) => {
      newUser[key] = value;
    });

    array.push(newUser);
  }

  setStorage(array)

  reload(array);
};

function reload(arr) {
  let tr_class = document.createElement("tr");
  let th_1 = document.createElement("th");
  let th_2 = document.createElement("th");
  let th_3 = document.createElement("th");
  let th_4 = document.createElement("th");

  tr_class.classList.add("table_tr_th");
  th_1.innerHTML = "№";
  th_2.innerHTML = "Имя сотрудника";
  th_3.innerHTML = "Год рождения";
  th_4.innerHTML = "Действие";

  table.innerHTML = "";
  tr_class.append(th_1, th_2, th_3, th_4);
  table.append(tr_class);

  for (let item of arr) {
    let tr = document.createElement("tr");
    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");
    let td_4 = document.createElement("td");
    let del_btn = document.createElement("button");
    let rnm_btn = document.createElement("button");
    let del_img = document.createElement("img");
    let rnm_img = document.createElement("img");

    tr.setAttribute("id", item.id);

    td_1.innerHTML = arr.indexOf(item) + 1;
    td_2.innerHTML = item.name;
    td_3.innerHTML = 2022 - item.age;

    del_btn.append(del_img);
    rnm_btn.append(rnm_img);
    td_4.append(del_btn, rnm_btn);
    tr.append(td_1, td_2, td_3, td_4);
    table.append(tr);

    del_img.setAttribute("src", "./1.png");
    rnm_img.setAttribute("src", "./2.png");

    del_btn.onclick = () => {
      delItem(item.id, item.name, item.age);
    };

    rnm_btn.onclick = () => {
      rnmItem(item.id, item.name, item.age);
    };
  }
  setStorage(array)

}
setStorage(array)

reload(array);

let modal_for_check = document.querySelector(".modal_for_check");
let back_g_for_check = document.querySelector(".back_g_for_check");
let window_for_check = document.querySelector(".window_for_check");
let close_modal_for_check = document.querySelector(".close_check_modal");
let name_year = document.querySelector(".name_year");
let name_year_two = document.querySelector(".name_year_two");
let form_modal_check_form = document.querySelector(".modal_check_form");
let inp_github = document.querySelector(".inp_github");
let github_btn = document.querySelector(".github_btn");

back_g_for_check.onclick = () => {
  modal_for_check.classList.remove("top0");
  window_for_check.classList.remove("top0");
};

close_modal_for_check.onclick = () => {
  modal_for_check.classList.remove("top0");
  window_for_check.classList.remove("top0");
};

function delItem(id, name, age) {
  modal_for_check.classList.add("top0");
  window_for_check.classList.add("top0");

  let name_age = `${name}/${age}`;

  name_year.innerHTML = name_age;
  name_year_two.innerHTML = name_age;

  github_btn.onclick = (event) => {
    event.preventDefault();

    let inp_git_value = inp_github.value;

    if (inp_git_value == name_age) {
      let find = array.find((item) => item.id === id);
      let idx = array.indexOf(find);
      array.splice(idx, 1);
      alert("Удалено");
      modal_for_check.classList.remove("top0");
      window_for_check.classList.remove("top0");
    }
    if (inp_git_value !== name_age) {
      inp_github.style.border = "1px solid red";
    }
    reload(array);
  };

  reload(array);
}

function rnmItem(id, name, age) {
  modal_for_check.classList.add("top0");
  window_for_check.classList.add("top0");

  let name_age = `${name}/${age}`;

  name_year.innerHTML = name_age;
  name_year_two.innerHTML = name_age;

  github_btn.onclick = (event) => {
    event.preventDefault();
    let inp_git_value = inp_github.value;
    if (inp_git_value == name_age) {
      let find = array.find((item) => item.id === id);
      let idx = array.indexOf(find);
      array.splice(idx, 1);

      inp_one.value = name
      inp_two.value = age

      modal_for_check.classList.remove("top0");
      window_for_check.classList.remove("top0");
    }
    if (inp_git_value !== name_age) {
      inp_github.style.border = "1px solid red";
    }
    reload(array);
  };
  reload(array);
}


let with_name_plus = document.querySelector('.with_name_plus')
let with_name_minus = document.querySelector('.with_name_minus')
let with_age_plus = document.querySelector('.with_age_plus')
let with_age_minus = document.querySelector('.with_age_minus')

with_name_plus.onclick = () => {
  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }

  array = array.sort(SortArray);

  reload(array);
}


with_age_plus.onclick = () => {
  function SortArray(x, y) {
    return x.age.localeCompare(y.age);
  }

  array = array.sort(SortArray);

  reload(array);
}

with_name_minus.onclick = () => {
  function SortArray(y, x) {
    return x.name.localeCompare(y.name);
  }

  array = array.sort(SortArray);

  reload(array);
}


with_age_minus.onclick = () => {
  function SortArray(y, x) {
    return x.age.localeCompare(y.age);
  }

  array = array.sort(SortArray);

  reload(array);
}