
let random = Math.floor(Math.random() * 5)

let background = ["url(./1.jpg)", "url(./2.jpg)", "url(./3.jpg)", "url(./4.jpg)", "url(./5.jpg)"]

document.getElementById("name").style.backgroundImage = background[random];

switch (random) {
    case 0:
        document.getElementById('hello').textContent = 'hamam'
        break;
    case 1:
        document.getElementById('hello').textContent = 'azadi'
        break;
    case 2:
        document.getElementById('hello').textContent = 'sio se pol'
        break;
    case 3:
        document.getElementById('hello').textContent = 'naghshe jahan'
        break;
    case 4:
        document.getElementById('hello').textContent = 'naghshe rostam'
        break;
}