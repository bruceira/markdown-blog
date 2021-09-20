const express = require("express")
const articleRouter = require("./routes/article")
const app = new express()


app.use("/articles", articleRouter)
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test aricle 1",
      createAt: new Date(),
      description: "Hello this is my fst article.........."
    },
    {
      title: "Test aricle 2",
      createAt: new Date(),
      description: "Hello this is my fst article.........."
    }
  ]
  res.render("articles/index", { articles })
})
app.listen(5000, () => {
  console.log("server is running")
})