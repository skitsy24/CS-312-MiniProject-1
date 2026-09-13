import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

const posts = [];


app.get("/", (req, res) => {
  res.render("index", { posts: posts});
});

app.post("/posts", (req, res) => {
    // read post user created
    // turn it into an object
    // and add it to posts on the server
    res.redirect("/");
});

app.get("/posts/:id/edit", (req, res) => {
    res.render("edit");
})

app.post("/posts/:id/edit", (req, res) => {
    // read changes
    // add changes to post to posts on the server
     res.redirect("/");
})

app.post("/posts/:id/delete", (req, res) => {
    // remove post from posts on server
    res.redirect("/");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});