const router = require('express').Router();
const StudentController = require('../controllers/studentController');

router.get('/', StudentController.showData);
router.get('/add', StudentController.addGet);
router.post('/add', StudentController.addPost);
router.get('/:email', StudentController.showData);
router.get('/:id/edit', StudentController.editGet);
router.post('/:id/edit', StudentController.editPost);
router.get('/:id/delete', StudentController.delete);
router.get('/*', StudentController.notFound);

module.exports = router;