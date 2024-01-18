const router = require("express").Router();
const { BlogPost, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth.js");

router.post("/", withAuth, async (req, res) => {
  try {
    const comment = { ...req.body }
    console.log(comment);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
    
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;