import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

import Post from './src/model/post.js'

// CONTROLLERS
import { getPosts, addPost, getPostById } from "./src/controller/postController.js";


const app = express();
const port = process.env.PORT;


/* app.get('/posts', (req, res) => {
  res.status(200).json(Post.get());
}) */

// Parses Content Type Application/Json 
app.use(express.json());

//Makes possible to send with x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));


app.get('/posts', getPosts)
          // Route // Controller
//app.get('/posts', getPosts)
app.post('/post/add', addPost)

app.get('/post/:id', getPostById);




app.listen(port, () => {
  console.log("Server listening on port:", port);
});
