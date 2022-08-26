const router = require("express").Router();
// const sequelize = require("../config/connection");
const { Post, Comment, User } = require("../models");

// GET all posts
router.get("/", (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: {
      exclude: ["user_id", "updatedAt"],
    },
    include: [
      { model: User, attributes: { exclude: ["password", "createdAt"] } },
      { model: Comment },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
