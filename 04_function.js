// Function
// Function Declaration
// function greet(name) {
//     console.log("привет - ", name)
// }
//
// // Function Expresion
// const greet2 = function greet2(name) {
//     console.log("привет 2 - ", name)
// }

// greet("Valek")
// greet2("Valek")

// console.log(typeof greet)
// console.log(typeof greet2)
// console.dir(greet)

// Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// Стрелочные функции
function greet(name) {
    console.log("привет - ", name)
}

const arrow = (name, age) => {
    console.log("привет - ", name, age)
}

const arrow2 = name => console.log("привет - ", name)

arrow("V")
arrow2('V2')

const pow2 = num => {
    return num ** 2
}

console.log(pow2(5))

// Параметры по умолчанию
const sum = (a, b) => a + b

console.log(sum(2 ,2))

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1,2,3,4,5,6,7,8,9,10,11,12)
console.log(res)


// Замыкание
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}
const loc = createMember("Valentin")
console.log(loc(" Badasin"))


















