const BASE_URL = import.meta.env.VITE_API_URL;

// GET - REDAD
export async function getAllNotes() {
  const URL = `${BASE_URL}/notes`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
