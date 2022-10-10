import { data } from "../data.js";

function checkUser(req, res, next){

    const {username, password} = req.body;

    if (username !== data.users[0].username || password !== data.users[0].password){
        next(new Error("Username or password wrong"));
        return;
    }
    next();
}

export {checkUser}