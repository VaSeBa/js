//  Event Loop

// const timeout = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)
// clearTimeout(timeout)
//
// const interval = setInterval(() => {
//     console.log('After timeout')
// }, 2500)
// clearInterval(timeout)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
//
// delay(() => {
//     console.log('after 2 sec')
// }, 2000)

const delay = (wait = 1000) => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return prom
}

delay(2500)
    .then(() => {
        console.log('After 2 sec')
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Finally'))