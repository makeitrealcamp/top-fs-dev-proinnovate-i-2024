import express, { NextFunction, Request, Response } from 'express';

const notes = [
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

// api/notes    -> GET    ->  Obtener todos los recursos en una coleccion
// api/notes/1  -> GET    ->  Obtener un solo recurso
// api/notes    -> POST   ->  Crear un recurso basado en los datos de la solicitud/request
// api/notes/1  -> PUT    ->  reemplaza todo el recurso indentificado con los datos de la solicitud
// api/notes/1  -> PATCH  ->  reemplaza una parte del recurso indentificado con los datos de la solicitud
// api/notes/1  -> DELETE ->  elimina el recurso identificado

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});
app.get('/api/notes', (req: Request, res: Response, next: NextFunction) => {
  res.json(notes);
});

const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
