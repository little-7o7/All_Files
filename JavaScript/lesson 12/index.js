function getPassword() {
    let keys = `0123456789abcdefghijklmnopqrstuwdxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+<>?:{};,./~`;
    let passwordLength = 16;
    let password = "";

    for(let i = 0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * keys.length);
        password += keys.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById("password").value = password
}