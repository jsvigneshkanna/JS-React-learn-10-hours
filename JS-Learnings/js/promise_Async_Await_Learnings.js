// Learning JS Promises

// Default header sections & DOM
const headerContainer = document.querySelector('.header-container')
const jsHeader = document.createElement('h3')
const jsHeaderText = document.createTextNode('😎We are learning Promise 🙌')
jsHeader.appendChild(jsHeaderText)
headerContainer.appendChild(jsHeader)
const submitBtn = document.getElementById('btn')
const inputText = document.getElementById('body-input')


// Promises are used to avoid callback hells (bad wrote codes using recursion callbacks)
// async await

