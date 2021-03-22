// 1 Переменные
// var name = 'Valentin' //лучше не использовать
// const lastName = 'Badasin' //неизменяемая
// const firstName = 'Valentin' //неизменяемая
// const age = 33
// const isProgrammer = true


// 2 Мутирование
// console.log('Имя: ' + firstName + ', а возраст: ' + age)
// alert('Имя: ' + firstName + ', а возраст: ' + age)

// const nameC = prompt('Введите Фамилию')
// alert(firstName + ' ' + nameC)


// 3 Операторы
// let currentYear = 2021
// const birthYear = 1987
// const a = 10
// const b = 5
//
// const age = currentYear - birthYear
//
// console.log(currentYear++)
// console.log(currentYear++)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Valentin'
// const age = 33
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)


// 5 Приоритет операторов
// const fullAge = 32
// const birthYear = 1987
// const currentYear = 2021
//
// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)


// 6 Условные операторы
// const courseStatus = 'pending' //ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else console.log('Курс в процессе разработки')

// if (courseStatus === 'pending') {
//     console.log('Курс в процессе разработки')
// }

// 7 Булевая логика

// 8 Функции
// function calculateAge(year) {
//     return 2021 - year
// }

// const myAge = calculateAge(1987)
// console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// }
//
// logInfoAbout('Valentin', 1987)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars) 1-29
// console.log(cars.length)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Valentin',
    lastName: 'Badasin',
    year: 1987,
    languages: ['Ru', 'Ua', 'En'],
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person.firstName)
person.greet()












