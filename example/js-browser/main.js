// 1. El document object model (DOM) es una interfaz de programación de aplicaciones (API) para documentos HTML y XML. Define la estructura lógica de los documentos y la forma en que se accede y manipula un documento.

// seleccionar un elemento por su id
const elementById = document.getElementById('id');

// Seleccionar elementos por su clase
const elementsByClassName = document.getElementsByClassName('class');

// Seleccionar elementos por su etiqueta
const elementsByTagName = document.getElementsByTagName('div');

// Seleccionar de forma avanzada con querySelector

const firstElement = document.querySelector('div');
const allElements = document.querySelectorAll('div.miClase');

// 2. Manipulacion del DOM
const btnSubmit = document.querySelector('#submit');

// modificar contenido
btnSubmit.textContent = 'Enviar!!!';
btnSubmit.innerHTML = '<strong>Contenido en negrita</strong>';

// modificar atributos
