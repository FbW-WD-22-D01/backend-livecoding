import db from '../config/config.js';

const Post = {};

// CREATE POST
Post.create = async (title, content) => {
     // Create and query items using plain JS
     await db.data.posts.push({title, content})
     // Finally write db.data content to file
     await db.write()
    // return the post object
     return {title, content};
}

// GET ALL POSTS
Post.get = async () => {
    try {
        const data = await db.data.posts;
        return data
    } catch(err) {
        return Promise.reject(new Error(err));
    }
};

export default Post;