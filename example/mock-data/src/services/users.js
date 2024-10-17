const BASE_URL = import.meta.env.VITE_API_URL;

// POST - CREATE
export async function createNewUser(formData) {
  const URL = `${BASE_URL}/api/users`;

  const payload = {
    name: formData.name,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
  };

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return data;
}

// GET - REDAD
export async function getAllUsers() {
  const URL = `${BASE_URL}/api/users`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

// GET - REDAD
export async function getSingleUser(id) {
  const URL = `${BASE_URL}/api/users${id}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

// UPDATE - PUT/PATCH
export async function updateUser(id, formData) {
  const URL = `${BASE_URL}/api/users/${id}`;

  const payload = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return data;
}

// DELETE - DELETE
export async function deleteUser(id) {
  const URL = `${BASE_URL}/api/users/${id}`;

  const response = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}
