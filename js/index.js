var myString = '<p>Hola Mundo</p>\n';

//Remplazar los tag html y el caracter de nueva linea por ''
var quote = myString.replace(/(<.*?>)|(\n)/g, '');