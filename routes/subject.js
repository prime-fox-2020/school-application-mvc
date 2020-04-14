const router = require('express').Router();
const SubjectController = require('../controllers/subjectController');

router.get('/', SubjectController.showData);
router.get('/add', SubjectController.addGet);
router.post('/add', SubjectController.addPost);
router.get('/:id', SubjectController.showData);
router.get('/:id/edit', SubjectController.editGet);
router.post('/:id/edit', SubjectController.editPost);
router.get('/:id/delete', SubjectController.delete);
router.get('/*', SubjectController.notFound);

module.exports = router;