import { Router } from 'express';
import { handler } from './middleware';


const router = Router();



router.post('/upload', handler, (req, res) => {
  console.log(req.file);
  res.send('File uploaded successfully');
});
// router.post('/uploads', upload.array('files', 10), (req, res) => {
//   console.log(req.file);
//   res.send('File uploaded successfully');
// });

export default router;
