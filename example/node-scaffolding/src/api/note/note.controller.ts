import { Request, Response, NextFunction } from 'express';

import {
  createNote,
  deleteNoteById,
  getAllNotes,
  getOneNoteById,
  updateNoteById,
} from './note.service';

export function getAllNotesHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const notes = getAllNotes();
  res.json(notes);
}

export function getOneNoteHandler(req: Request, res: Response) {
  const { id } = req.params;
  const note = getOneNoteById(Number(id));

  if (!note) {
    res.status(404).json({
      error: `Note with id:${id} not found`,
    });
  } else {
    res.json(note);
  }
}

export function deleteNoteHandler(req: Request, res: Response) {
  const { id } = req.params;

  const confirmTransaction = deleteNoteById(Number(id));

  res.status(204).end();
}

export function createNoteHandler(req: Request, res: Response) {
  const { content, important } = req.body;

  if (!content) {
    res.status(400).json({
      error: 'content missing',
    });
  } else {
    const newNote = createNote(content, important);
    res.status(201).json(newNote);
  }
}

export function updateNoteHandler(req: Request, res: Response) {
  const { id } = req.params;
  const { content, important } = req.body;
  const updatedNote = updateNoteById(Number(id), content, important);

  if (!updatedNote) {
    res.status(404).json({
      message: `Note with id:${id} not found`,
    });
  } else {
    res.json(updatedNote);
  }
}
