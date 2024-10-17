const BASE_URL = import.meta.env.VITE_API_URL;

export async function registerUser(user) {}

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
