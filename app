// window.alert(1)
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const h2List = document.querySelectorAll('h2')
const heading2 = document.querySelector('#sub-hello')

console.log(heading2)

const heading3 = h2List[h2List.length - 1]


setTimeout(() => {
    addStyle(heading, 'JavaScript')
}, 2000)

setTimeout(() => {
    addStyle(heading2, 'Get practice', 'yellow')
}, 3000)

const link = heading3.querySelector('a')

link.addEventListener('click',() => {
    console.log('link')
})

setTimeout(() => {
    addStyle(link, 'and all be ok!', 'blue', '4rem')
}, 4000)

function addStyle(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000000'
        heading.style.backgroundColor = '#ffffff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})
