import express from "express";
import bodyParser from 'body-parser';

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

app.get('/posts', getPosts)
          // Route // Controller
//app.get('/posts', getPosts)
app.post('/post/add', addPost)

app.get('/post/:id', getPostById);




app.listen(port, () => {
  console.log("Server listening on port:", port);
});
