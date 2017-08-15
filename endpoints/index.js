var router = require('express').Router();
var Users = require('../controllers/Users');

router.get('/users', Users.getUsers);
router.get('/users/:id', Users.getUser);
router.post('/users', Users.postUser);
router.put('/users/:id', Users.putUser);
router.delete('/users/:id', Users.deleteUser);

module.exports = router;
