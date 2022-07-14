var root = document.querySelector('#root')
var h1 = document.createElement('h1')
h1.innerText = 'Hello world!';
h1.id = 'heading';
h1.className = 'heading-class class2';
Object.assign(h1.style, {
    color: '#626262',
    backgroundColor: '#e1e1e1',
    textAlign: 'center',
    borderRadius: '10px',
    padding: '10px'
})

root.appendChild(h1)

// add id, class, style