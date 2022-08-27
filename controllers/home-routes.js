const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, Comment, User } = require("../models");

// GET all posts
router.get("/", (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: ["id", "title", "content", "post_url", "user_id"],
    include: [
      {
        model: Comment,
        attributes: ["id", "content", "post_id", "created_at"],
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      console.log(dbPostData);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
