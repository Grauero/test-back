const router = require('express').Router();
const Comment = require('../models/Comment');

router.post('/new-comment', async (req, res) => {
  const { APIkey, userId, name, surname, comment: newComment } = req.body;

  if (APIkey === 'user1' || APIkey === 'user2') {
    const comment = await new Comment({
      userId,
      name,
      surname,
      comment: newComment,
    }).save();

    return res.json(comment);
  }

  return res.status(401).end();
});

router.post('/key', (req, res) => {
  const { userId } = req.body;

  if (userId === 'user1' || userId === 'user2') {
    return res.json({ APIkey: userId });
  }

  return res.status(401).end();
});

module.exports = router;
