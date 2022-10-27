import { application } from "express";

// ATTENTION! If next argument is not defined the error-handler cant go on
export default function errorHandler(error, req, res, next){
    console.log("Middelware Error called");
    console.log("Path: ", req.path);
    console.log("Error: ", error);
    if (process.env.NODE_ENV === "production") {
        res.status(500).send({msg: "Something went wrong!"});
    } else {
        res.status(error.status).send({msg: error.message});
    }
}
//https://expressjs.com/en/guide/error-handling.html