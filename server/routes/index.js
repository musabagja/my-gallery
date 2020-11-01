const router = require('express').Router();
const Controller = require('../controllers/index');
const Authenticate = require('../middlewares/authenticate');
const Authorize = require('../middlewares/authorize')

router.post('/register', Controller.register);

router.post('/login', Controller.login);

router.use(Authenticate.token);

router.get('/photos', Controller.getPhotos);

router.post('/photos', Controller.addPhoto);

router.delete('/photos/:id', Authorize.photo, Controller.deletePhoto);

module.exports = router;