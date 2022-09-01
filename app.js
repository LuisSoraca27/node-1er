const express = require("express");
const {Sequelize} = require("sequelize")

new Sequelize({
  dialect: 'postgres',
  host:'localhost',
  
});

// Dummy data
const users = [
  { id: 1, name: "Max", age: 23 },
  { id: 2, name: "John", age: 24 },
  { id: 3, name: "Joe", age: 25 },
];

const posts = [
  { id: 1, title: "Post 1", content: "This is post 1" },
  { id: 2, title: "Post 2", content: "This is post 2" },
  { id: 3, title: "Post 3", content: "This is post 3" },
];

const app = express();

app.use(express.json())

app.get('/posts', (req, res) => {
  res.status(200).json({
    status:'success',
    data:{
      posts
    }
  })
})

app.listen(4000, () => {
  console.log('Express app running')
})


