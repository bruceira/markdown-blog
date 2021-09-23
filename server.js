const express = require("express")
const mongoose = require("mongoose")
const articleRouter = require("./routes/articleRouter")
const articleModel = require("./models/articleModel")

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,

})

const app = new express()

app.use(express.urlencoded({ extended: false }))
app.set("view engine", 'ejs')
app.use("/articles", articleRouter)

app.get("/", async (req, res) => {
  const articles = await articleModel.find().sort({ createdAt: 'desc' })
  res.render("articles/index", { articles })
})

const port = 5000
app.listen(port, () => {
  console.log(`Server is running to the port ${port}`)
})