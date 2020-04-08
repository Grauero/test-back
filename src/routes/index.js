const router = require('express').Router();

const auth = require('./auth');
const comment = require('./comment');

router.use('/signin', auth);
router.use('/comments', comment);

module.exports = router;
