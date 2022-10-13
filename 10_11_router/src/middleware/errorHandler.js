
// ATTENTION! If next argument is not defined the error-handler cant go on
export default function errorHandler(error, req, res, next){
    console.log("Middelware Error called");
    console.log("Path: ", req.path);
    console.log("Error: ", error);
    
    res.send(error);
}