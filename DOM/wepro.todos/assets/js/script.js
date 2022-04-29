let API = "https://wepro-groups.herokuapp.com/todos"

const getItems = (api) => {
    axios.get(api)
        .then(res => {
            return console.log(res);
        })
        .catch(res => {
            return console.log(res);
        })
}
getItems(API)


const delItems = (api, id) => {
    axios.delete(api + "/" + id)
        .then(res => {
            console.log(`${id} deleted`);
        })
        .catch(res => {
            console.log(`${id} not deleted`);
        })
}