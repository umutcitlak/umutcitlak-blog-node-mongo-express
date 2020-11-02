const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("site2/index");
});

router.get("/about", function (req, res) {
  res.render("site2/about");
});

router.get("/blog", function (req, res) {
  res.render("site2/blog");
});

router.get("/blog-single", function (req, res) {
  res.render("site2/blog-single");
});

router.get("/contact", function (req, res) {
  res.render("site2/contact");
});

router.get("/login", function (req, res) {
  res.render("site2/login");
});

router.get("/register", function (req, res) {
  res.render("site2/register");
});
router.get("/post/new", function (req, res) {
  res.render("site2/addpost");
});

router.post('/posts/test',(req,res)=>{
  res.redirect('/');
})

module.exports = router;
