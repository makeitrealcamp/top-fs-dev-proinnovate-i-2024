import express, { Application } from 'express';

function configExpress(app: Application): void {
  // Interceptar todos los request antes de que lleguen a la ruta
  app.use(express.json());

  // cors
  // morgan
  // urlencoded
}

export default configExpress;
