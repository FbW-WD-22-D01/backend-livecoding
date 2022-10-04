import db from '../config/config.js';

const Post = {};

// CREATE POST
/* Post.create = (title, content) => {
    return db.
} */

// GET ALL POSTS
Post.get = async () => {
    let data;

    try {
        data = await db.dat.posts;
        console.log(data)
    } catch(err) {
        
        console.error(err)
    }
    return data;
    
};

console.log(db)
export default Post;