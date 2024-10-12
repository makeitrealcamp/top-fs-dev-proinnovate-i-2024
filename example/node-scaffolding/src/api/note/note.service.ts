import { Note } from './note.type';

let notes: Note[] = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only js',
    important: false,
  },
  {
    id: 3,
    content: 'GET and Post',
    important: true,
  },
];

export function getAllNotes(): Note[] {
  return notes;
}

export function getOneNoteById(id: number): Note | undefined {
  return notes.find((note) => note.id === id);
}

export function deleteNoteById(id: number): boolean {
  const notesUpdated = notes.filter((note) => note.id !== id);
  if (notesUpdated.length === notes.length) {
    return false;
  }
  notes = notesUpdated;
  return true;
}

export function createNote(content: string, important: boolean = false): Note {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

  const note = {
    id: maxId + 1,
    content,
    important,
  };

  notes.push(note);

  return note;
}

export function updateNoteById(
  id: number,
  content: string,
  important: boolean
): Note | undefined {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return undefined;
  }

  const updatedNote = {
    ...note,
    content,
    important,
  };

  notes = notes.map((note) => (note.id === id ? updatedNote : note));

  return updatedNote;
}
