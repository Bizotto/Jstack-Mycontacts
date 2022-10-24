const { Router } = require('express');

const contactController = require('./app/controllers/contactController');
const categoryController = require('./app/controllers/categoryController');

const router = Router();

router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);
router.delete('/contacts/:id', contactController.delete);
router.post('/contacts', contactController.store);
router.put('/contacts/:id', contactController.update);

router.get('/categories', categoryController.index);
router.get('/categories/:id', categoryController.show);
router.delete('/categories/:id', categoryController.delete);
router.post('/categories', categoryController.store);
router.put('/categories/:id', categoryController.update);

module.exports = router;
