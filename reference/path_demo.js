const path = require('path');

// base file name (es para solo utilizar la base del nombre que en total es path_demo.js)
console.log(path.basename(__filename));

// directory name (al poner la palabra node en la terminal mas el nombre del archivo, te pone la carpeta en donde esta colocado esto en este caso sale C:\Users\dgg87\Desktop\node node\reference)
console.log(path.dirname(__filename));

// file extension (sirve para solo ver que tipo de archivo es, en este caso es .js)
console.log(path.extname(__filename));

// create path object (puedes acceder a una sola parte como si fuera un objeto, .root .dir .base .ext .name)
console.log(path.parse(__filename));

// concatenate paths(agarra el directorio, y le agrega el / text y el / hello.html el resultado es C:\Users\dgg87\Desktop\node node\reference\test\hello.html)
console.log(path.join(__dirname, '/test', 'hello.html'));
