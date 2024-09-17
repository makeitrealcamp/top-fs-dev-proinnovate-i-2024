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
btnSubmit.innerHTML = '<strong>Crear</strong>';
btnSubmit.style = 'background-color: yellow;';
btnSubmit.style.backgroundColor = 'red';

/// ----------------------------------

const peopleNames = ['cristian', 'mafe', 'nayib'];

const listPeople = document.querySelector('#people');

function renderDataInView(data) {
  data.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;

    listPeople.appendChild(li);
  });
}

renderDataInView(peopleNames);

// let list = '';
// peopleNames.forEach((name) => {
//   list += `<li>${name}</li>`;
// });
// listPeople.innerHTML = list;

//  Manejo de eventos

// btnSubmit click

function handleClick(evt) {
  evt.stopPropagation();

  const li = document.createElement('li');
  li.textContent = 'Name 11111';

  listPeople.appendChild(li);
}

btnSubmit.addEventListener('click', handleClick);
listPeople.addEventListener('click', (evt) => {
  evt.stopPropagation();
  const { target } = evt;
  target.remove();
});

// btnSubmit.removeEventListener('click', handleClick);

// document.addEventListener('keydown', (evt) => {
//   console.log(`Tecla presionada: ${evt.key}`);
// });
