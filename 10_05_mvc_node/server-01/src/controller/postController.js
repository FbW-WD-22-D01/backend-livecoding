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

async function addPost(req, res) {
    let {title, content} = req.body;
    try {
         if (title && content){
            let post = await Post.create(title, content)
    
            if (post) {
                res.status(200).json(post)
            }
            
            
        }else{
            res.status(400);
            return Promise.reject(new Error('Forgot title or/and content'));
        }
    } catch(err) {
        // Internal Server Error 500
        res.status(500);

    }
    
    
}

async function getPostById(req, res){
    const {id} = req.params;
    try {
        if (id){
            let post = await Post.getById(id)
    
            console.log(post);
            res.status(200).json(post)

        }else{
            res.status(400);
            return Promise.reject(new Error('Forgot title or/and content'));
        }
    } catch(err){
        // Internal Server Error 500
        res.status(500);
    }
}

export {getPosts, addPost, getPostById}