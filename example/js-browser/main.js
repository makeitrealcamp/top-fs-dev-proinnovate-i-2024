const button = document.getElementById('addContact');
const contactList = document.getElementById('contactList');
const form = document.querySelector('form');
const input = document.querySelector('input#contactName');

const URL = 'https://jsonplaceholder.typicode.com/todos';

button.addEventListener('click', async () => {
  // // obtener el valor previamente almacenado en el localStorage
  // const contact = localStorage.getItem('contact');
  // // convertirlo
  // const contactArray = JSON.parse(contact) || [];

  // // agregar el nuevo valor
  // contactArray.push(input.value);

  // // almacenar el nuevo valor en el localStorage
  // localStorage.setItem('contact', JSON.stringify(contactArray));

  const { value } = input;
  if (value.trim() !== '') {
    const payload = JSON.stringify({ title: value });
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: payload,
    };
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
  }
});

// asincrono

// async/await

async function getTodos() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.forEach((todo) => {
      const li = document.createElement('li');
      li.innerText = todo.title;

      contactList.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

getTodos();
