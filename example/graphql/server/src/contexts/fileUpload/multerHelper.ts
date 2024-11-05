import multer from "multer";


const localStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const memoryStorage = multer.memoryStorage();
  
export const upload = multer({
    storage: memoryStorage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
  });
  
  
  export const uploadMiddleware = upload.single('file');