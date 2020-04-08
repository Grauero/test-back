const router = require('express').Router();
const Comment = require('../models/Comment');

router.post('/', async (req, res) => {
  const { name } = req.body;

  if (name === 'user1' || name === 'user2') {
    const comments = await Comment.find({ userId: name });

    return res.json(comments);
  }

  return res.status(401).end();
});

module.exports = router;
