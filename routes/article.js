const express = require("express")
const path = require("path")
const router = express.Router()
const articleModel = require("../models/articleModel")


const app = new express()




const p = app.set('views', path.join(__dirname, '../views/articles'))
app.set('views', p);
app.set('view engine', 'ejs');

router.get("/new", async (req, res) => {
  res.render("articles/new", { article: new articleModel() })
})
router.get("/:slug", async (req, res) => {
  const article = await articleModel.findOne({ slug: req.params.slug })

  if (article == null) res.redirect("/")

  res.render('articles/show', { article })
})



router.post("/", async (req, res) => {

  let article = new articleModel({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })

  try {
    article = await article.save()
    res.redirect(`/articles/${article.slug}`)
  } catch (error) {
    res.render(`articles/n`, { article: article })
  }

})

router.delete("/:id", async (req, res) => {

  await articleModel.findByIdAndDelete(req.params.id)
  res.redirect("/")

})


module.exports = router