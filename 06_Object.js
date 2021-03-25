const people = {
    name: 'Valentin',
    age: 33,
    isProgrammer: true,
    languages: ['ru', "ua", 'en'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: "Computed Key", // key_4
    greet() {
        console.log('greet from people')
    },
    info() {
        console.info('Info about person for name: ', this.name)
    }
}

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        // console.log('Object keys and values: ', Object.keys(this), Object.values(this))
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if(top) {
            console.log('-------- Start ------')
        }
    }
}

logger.keysAndValues.call(logger)

// const bound = logger.keys.bind(people)
// console.log(bound)

// logger.keys.call(people)

// const keys = Object.keys(people)
// console.log(keys)
// keys.forEach((keys) => {
//
// })

// for (let key in people) {
//     if (people.hasOwnProperty(key)){
//         console.log('key:', key)
//         console.log('value:', people[key])
//     }
// }

// console.log(people.name)
// console.log(people["age"])
// const ageKey = 'age'
// people.age++
// console.log(people)

