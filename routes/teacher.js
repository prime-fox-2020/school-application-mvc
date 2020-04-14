const router = require('express').Router();
const TeacherController = require('../controllers/teacherController');

router.get('/', TeacherController.showData);
router.get('/add', TeacherController.addGet);
router.post('/add', TeacherController.addPost);
router.get('/:id', TeacherController.showData);
router.get('/:id/edit', TeacherController.editGet);
router.post('/:id/edit', TeacherController.editPost);
router.get('/:id/delete', TeacherController.delete);
router.get('/*', TeacherController.notFound);

module.exports = router;