const express = require("express")
const mongoose = require('mongoose')
const articleRouter = require("./routes/article")
const methodOverride = require('method-override')
const article = require("./models/articleModel")
const app = new express()


mongoose.connect("mongodb://localhost/blog", () => {
  useUnifiedTopology: true
  console.log("Db connected")
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use("/articles", articleRouter)

app.get("/", async (req, res) => {
  const articles = await article.find().sort({ createdAt: 'desc' })
  res.render("articles/index", { articles })
})
app.listen(5000, () => {
  console.log("server is running")
})