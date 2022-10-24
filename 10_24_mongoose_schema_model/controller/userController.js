import User from "../models/User.js"


export async function showUsers(req, res, next){
   
    try{
        // Die find Methode kann query Strings annehmen 
        //  const users = await User.find({name: 'Martina'})
        
        const users = await User.find()
        res.send(users)
    } catch(error){
        res.status(400).send(error)
    }
    

}



export async function addUser(req, res, next){
    // Die Werte aus dem body auslesen
    const {newUser} = req.body


    try {
        // neue Instanz gemäß dem Schema erstellen 
        const dbUser= new User(newUser)
        
        // In Datenbank als Dokument anlegen
        await dbUser.save()
        
        // neuen user zurückschicken
        res.send(dbUser)
    }catch(error){
        res.status(400).send(error)
    }
}