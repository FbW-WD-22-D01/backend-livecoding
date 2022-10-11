export default function errorHandler(error, req, res, next){
    console.log("Middelware Error called");
    console.log("Path: ", req.path);
    console.log("Error: ", error);
    if(process.env.NODE_ENV === "production"){
        res.status(500).send("Error occured, take a look at your server logs!");
    } else {
        // DESTRUCTURE MESSAGE SO ITS DEFINED
        const {message, status} = error;
        res.send(message, status);
    }
}