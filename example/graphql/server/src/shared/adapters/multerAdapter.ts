import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';
import path from 'path';

export interface MulterAdapter {
  upload: ReturnType<typeof multer>;
}

export const createMulterAdapter = (): MulterAdapter => {
  const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback,
  ) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  };

  const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter,
  });

  return { upload };
};
