import mongoose from "mongoose";
import User from "./models/users.js";
import { faker } from '@faker-js/faker';


// Datenbank initialisieren
mongoose
    .connect("mongodb://localhost:27017/live_validate")
    .then(() => console.log('Datenbank ist da'))
    .catch((err) => console.log('Irgendwas kaputt: ', err))


// Deutsche Lokalisierung
faker.locale = 'de';


// Alle alten Daten löschen
    try {
        await User.deleteMany({})
        console.log('All Users deleted')
    }catch(error){
        console.log(error)
    }

// Neue Daten anlegen
    const howMany = 200

    const userPromises = Array(howMany).fill(null).map( () => {
        const userObj = {
            name:            faker.name.firstName(),
            registeredAt:    faker.date.past(),
            email:           faker.internet.email(),
            password:        faker.internet.password(),
            creditCard:      faker.finance.creditCardNumber()
        }
        return User.create(userObj)
    })
   
    
    
    try {
        // alle Promises auflösen
        const userCreated = await Promise.all( userPromises )
        
        console.log(`****************************************************`);
        console.log(`${howMany} fake Users created and in DB stored`)
        console.log(`****************************************************`);
    } catch(err){
        console.log('Arggh something wrong: ', err)
    }



// Datenbankverbindung schließen
mongoose.connection.close()
