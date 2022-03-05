// let arr = [
//     'timur',
//     'imran',
//     'sherzod',
//     'aminjon',
//     'muxammad',
//     'maxmud'
// ]
// let name = prompt('name') // global

// if(name.length > 0 && arr.includes(name)) {
//     let changed = prompt('changed') // local 
//     let index = arr.indexOf(name)
//     arr.splice(index,1,changed)
// } else {
//     console.log('error');
// }

// console.log(arr);

// let index

// arr.splice(,1,'hello')

// console.log(arr);

// let filtered = arr.filter((item, index) => item == idx)[0]

// console.log(arr.indexOf(filtered));



// sort, reduce

// let arr = ['bobur','amir','Cardor']

// Сортировка
// правильная сортировка чисел
// arr.sort((a,b) => a - b)
// простая сортировка с багами
// arr.sort()


// let sum = 0

// arr.map(item => sum += item)

// console.log(sum);

// let total = arr.reduce((item, prev) => item + prev)

// console.log(total);


let arr = [8,2,1,5,12,3,43,6,0,23]
let total = arr.reduce((item, prev) => item + prev) / 2
let max = Math.max.apply(0, arr);
let min = Math.min.apply(0, arr);


console.log(total);
console.log(max);
console.log(min);
