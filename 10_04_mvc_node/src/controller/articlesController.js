import Post from '../model/post.js';


// GET ALL POSTS
function getPosts(req, res) {
     
    Post.get().then(data => {
        res.status(200).json(data)
     }).catch(err => {
       console.error(err)
       res.status(400)
     });
}

export {getPosts}