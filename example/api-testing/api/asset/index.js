const { Router } = require('express');

const {
  createHandler,
  deleteHandler,
  getAllHandler,
  getByIdHandler,
  getBySlugHandler,
  updateHandler,
} = require('./asset.controller');

const router = Router();

router.get('/', getAllHandler);
router.get('/:id', getByIdHandler);
router.get('/slug/:slug', getBySlugHandler);
router.post('/', createHandler);
router.patch('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;
