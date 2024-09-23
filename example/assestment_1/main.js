// Selecciona el contenedor donde se mostrarán los productos
const productList = document.getElementById('product-list');

// Función para obtener productos de la API
async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}

// Función para crear y mostrar los productos en el DOM
function displayProducts(products) {
  products.forEach((product) => {
    // Crear los elementos del DOM para cada producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p>${product.description.slice(0, 80)}...</p>
      <button id="buy-${product.id}">Comprar</button>
      <p id="timer-${product.id}" class="timer"></p>
    `;

    productList.appendChild(productCard);

    // Asigna un temporizador aleatorio entre 1 y 3 minutos
    const countdown = Math.floor(Math.random() * 3) + 1;
    const button = document.getElementById(`buy-${product.id}`);
    const timer = document.getElementById(`timer-${product.id}`);

    startCountdown(countdown * 60, button, timer); // Convierte minutos a segundos
  });
}

// Función para iniciar el temporizador
function startCountdown(duration, button, timerElement) {
  let timeLeft = duration;
  const interval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Tiempo restante: ${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      button.disabled = true;
      button.textContent = 'Tiempo agotado';
    }
    timeLeft--;
  }, 1000);
}

// Llama a la función para obtener productos al cargar la página
getProducts();
