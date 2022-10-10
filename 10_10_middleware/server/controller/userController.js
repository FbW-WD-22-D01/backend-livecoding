function loginUser(req, res){
    res.json({
        msg: "Successfully logged in"
    })
    next();
}
export {loginUser}