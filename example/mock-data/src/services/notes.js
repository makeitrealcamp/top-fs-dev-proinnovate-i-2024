const BASE_URL = import.meta.env.VITE_API_URL;

// GET - REDAD
export async function getAllNotes() {
  const URL = `${BASE_URL}/api/notes`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

export async function deleteNoteById(id) {
  const URL = `${BASE_URL}/api/notes/${id}`;

  const response = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return response;
}

export async function updateNoteById(id, updated) {
  const URL = `${BASE_URL}/notes/${id}`;

  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(updated),
  });

  return response;
}
