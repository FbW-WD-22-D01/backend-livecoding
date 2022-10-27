import Customer from "../models/Customer.js"
import createError from 'http-errors';


// CREATE
export async function createUser(req, res, next){
    const { firstname, lastname, email, address, otherAddr, isAdmin} = req.body;
    
    try {

        const createdUser = await Customer.create({firstname, lastname, email, address, otherAddr, isAdmin});
        
        res.send({createdUser});

    } catch (error) {

        next(error);
    }

}

// READ
export async function showAllUsers(req, res, next){
    try {
        const users = await Customer.find()
        
        // if (!users) {

        //     // const error = new Error('Error');
        //     // error.status = 500;

        //     // next(error);

        //     next(createError(500,'No users'));
        // }else{
        //     res.send(users) 
        // }
        res.send(users) 
    }catch(err){
        console.log(err)
        res.send('Fehler')
    }
}

export async function showUserById(req, res, next){
    try {
        const user = await Customer.findById(req.params.userid)
        if (user) {
            res.send(user)
        } else{
            res.send({msg: "No user found."})
        }
    }catch (error){
        console.log(error)
        //todo: add next and write error to file with date and time in glibal middleware error handler 
        res.send('Fehler')
    }
}

// UPDATE

export async function updateUserById(req, res, next){

    const {userid} = req.params;
    //const { firstname, lastname, email, address, otherAddr, isAdmin} = req.body;
    console.log(req.body);
    try {
        const updatedUser = await Customer.findByIdAndUpdate(userid, req.body, {new: true});
        res.send(updatedUser);
    } catch (error) {
        next(error);
    }

}

// DELETE
export async function deleteUserById(req, res, next){

    const {userid} = req.params;

    try {
        const deletedUser = await Customer.findByIdAndDelete(userid);
        res.send(deletedUser);
    } catch (error) {
        next(error);
    }

}

// User nach firstname suchen:
// await Customer.find({firstname: req.params.firstname})