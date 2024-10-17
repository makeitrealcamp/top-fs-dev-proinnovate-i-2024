const BASE_URL = import.meta.env.VITE_API_URL;

export async function registerUser(user) {
  const URL = `${BASE_URL}/api/users`;

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  return data;
}

export async function loginUser(email, password) {
  const URL = `${BASE_URL}/auth/local/login`;

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  return data;
}

export async function verifyAccount(token) {
  const URL = `${BASE_URL}/auth/local/activate/${token}`;

  const response = await fetch(URL, {
    method: 'PATCH',
  });

  const data = await response.json();

  return data;
}
