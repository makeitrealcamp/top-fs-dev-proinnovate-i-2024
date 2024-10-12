import express, { NextFunction, Request, Response } from 'express';

type Notes = {
  id: number;
  content: string;
  important?: boolean;
};

let notes: Notes[] = [
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

const app = express();

// Interceptar todos los request antes de que lleguen a la ruta
app.use(express.json());

// api/notes/1  -> PUT    ->  reemplaza todo el recurso indentificado con los datos de la solicitud
// api/notes/1  -> PATCH  ->  reemplaza una parte del recurso indentificado con los datos de la solicitud

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

// api/notes    -> GET    ->  Obtener todos los recursos en una coleccion
app.get('/api/notes', (req: Request, res: Response, next: NextFunction) => {
  res.json(notes);
});

// api/notes/1  -> GET    ->  Obtener un solo recurso
app.get('/api/notes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    return res.status(404).json({
      message: `Note with id:${id} not found`,
    });
  }

  return res.json(note);
});

// api/notes/1  -> DELETE ->  elimina el recurso identificado
app.delete('/api/notes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== Number(id));

  return res.status(204).end();
});

// api/notes    -> POST   ->  Crear un recurso basado en los datos de la solicitud/request
app.post('/api/notes', (req, res) => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

  const note = req.body;
  note.id = maxId + 1;

  if (!note.content) {
    return res.status(400).json({
      error: 'content missing',
    });
  }

  notes.push(note);

  return res.status(201).json(note);
});

app.put('/api/notes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    return res.status(404).json({
      message: `Note with id:${id} not found`,
    });
  }

  const updatedNote = {
    ...note,
    ...body,
  };

  notes = notes.map((note) => (note.id === Number(id) ? updatedNote : note));

  return res.json(updatedNote);
});

const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
