import express from "express";

const app = express();
const port = 3000;
const posts = [
  {
    id: 1,
    author: "Myles",
    title: "My First Post",
    content: "Domain Expansion, Infinite Void",
    createdAt: new Date()
  },

  {
    id: 2,
    author: "John",
    title: "Another Post",
    content: "This is another test post.",
    createdAt: new Date()
  }
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { posts: posts});
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});