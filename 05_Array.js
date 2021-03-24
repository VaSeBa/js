const cars = ['Мазда', 'Форд', 'Мерседес', 'БМВ']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name:'Valentin', budget: 4200},
    {name:'Vasy', budget: 4000},
    {name:'Vany', budget: 4500}
]

function addItemToAnd() {

}

const allBudget = people
    .filter(person => person.budget > 4000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
}, 0)

console.log(allBudget)

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(sqrt)
// console.log(pow2Fib)


// console.log(cars.includes('Мазда'))

// cars.push('Рено')
// console.log(cars)
// cars.unshift('Волга')
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// const index = people.findIndex(function (person){
//     return person.budget === 4500
// })
// const fin = people.find(function (person){
//     return person.budget === 4500
// })
// console.log(fin)

// const person = people.find(person => person.budget === 3500)
// console.log(person)


// const text = 'Привет, мы изучаем Java Script'
// const rev = text.split('').reverse().join('')
// console.log(rev)