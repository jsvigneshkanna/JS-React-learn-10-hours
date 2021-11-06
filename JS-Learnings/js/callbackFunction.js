// Learning callback functions

// Default header sections & DOM
const headerContainer = document.querySelector('.header-container')
const jsHeader = document.createElement('h3')
const jsHeaderText = document.createTextNode('😎We are learning callback functions')
jsHeader.appendChild(jsHeaderText)
headerContainer.appendChild(jsHeader)
const submitBtn = document.getElementById('btn')
const inputText = document.getElementById('body-input')


function combineStrings(name, messageType) {
    if (messageType === 'Hi') {
        return `Hi ${name}, good to see you! 😎`
    }
    else if (messageType === 'Bye') {
        return `Bye ${name}, see you back!!! 🤞`
    } else {
        return `No comments ${name}, simply waste 🤣`
    }
}

// Normal callback functions type
function greetCustomers(name, messageType, combineStrings) {
    name = name.toUpperCase()
    greetings = combineStrings(name, messageType)
    console.log(greetings);
}

greetCustomers('vk', ' ', combineStrings)

// Advanced callback functions type
greetCustomers('vk', 'Hi', (name, messageType) => {
    if (messageType === 'Hi') {
        return `Hi ${name}, good to see you! 😎`
    }
    else if (messageType === 'Bye') {
        return `Bye ${name}, see you back!!! 🤞`
    } else {
        return `No comments ${name}, simply waste 🤣`
    }
})

// callback can be used for array-methods, setInterval, eventListner

submitBtn.addEventListener('click', () => {
    const customerName = inputText.value
    greetCustomers(customerName, ' ', combineStrings)
})