const router = require("express").Router();

const userRoutes = require("./user-route");
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-route");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
