// let discount = prompt('Какая скидка?')
let totalSale = Number
let total = Number
let max = Object
let min = Object
let average = Number
let array = [
    {
        name: 'Milk',
        price: 3.25
    },
    {
        name: 'Coffee',
        price: 1.5
    },
    {
        name: 'Ice Cream',
        price: 7.85
    },
    {
        name: 'Tomatos',
        price: 4.14
    },
    {
        name: 'Onion',
        price: 2.25
    }
]
let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max` //done
// 2. Сохранить самый дешевый товар в переменную`min` //done
// 3. Сохранить общую цену без скидок в переменную`total` //done
// 4. Сохранить общую цену со скидкой в переменную`totalSale` //done
// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale //done
// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок* //done
// Писать весь код в функции setup() //done
// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА //done

let discount = 10

const setup = (array) => {
    function gepMaxPrice(arr) {
        max = arr.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
    }
    gepMaxPrice(array)

    function gepMinPrice(arr) {
        min = arr.reduce((acc, curr) => acc.price < curr.price ? acc : curr);
    }
    gepMinPrice(array)

    function getTotalPrices(arr) {
        total = arr.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    }
    getTotalPrices(array)

    function getTotalPricesWithSale(arr) {
        totalSale = total - (discount / 100 * total);
    }
    getTotalPricesWithSale(array)

    function saveArrWithSalePrices(arr) {
        arr_sale.push(...arr)
        // arr_sale = arr
        for(let i of arr_sale) {
            i.price = i.price - (discount / 100 * i.price);
        }
    }
    saveArrWithSalePrices(array)

    function getAveragePrice(arr) {
        for(let item of arr) {
            average = total / arr.length
        }
    }
    getAveragePrice(array)
}
setup(array)

console.log(...array);
console.log(max);
console.log(min);
console.log(total);
console.log(totalSale);
console.log(...arr_sale);
console.log(average);
