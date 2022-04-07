import { reload } from "./js/reload.js"
import { inpValues } from "./js/input_values.js"
import { search } from "./js/search.js"
import { putNewItems } from "./js/create_items.js"
import { deleteItem } from "./js/delete_items.js"
import { pathItem } from "./js/path_items.js"

function getAPI() {
    axios.get(`http://localhost:3001/exam1/`)
        .then(res => {
            if (res && res.status === 200) {
                reload(res.data)
                inpValues()
                search(res.data)
                putNewItems()
                deleteItem()
                pathItem()
            }
        })
        .catch(error => console.log(error))
}

getAPI()

export { getAPI }