import fetch from 'isomorphic-unfetch'

function helloWorld() {
    return fetch("http://localhost:8000/")
}

export {
    helloWorld 
}