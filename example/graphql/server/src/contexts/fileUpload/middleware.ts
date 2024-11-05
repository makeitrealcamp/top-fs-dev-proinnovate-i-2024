import { NextFunction, Request, Response } from 'express';
import { upload, uploadMiddleware } from './multerHelper';
import { handleUpload } from './cloudinaryHelper';

function runMiddleware(req: Request, res: Response, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const handler = async (req: Request, res: Response) => {
  try {
    await runMiddleware(req, res, upload.single('file'));
    const b64 = Buffer.from(req?.file.buffer).toString('base64');
    const dataURI = 'data:' + req?.file.mimetype + ';base64,' + b64;
    const cldRes = await handleUpload(dataURI); // cloudinary upload
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
};
