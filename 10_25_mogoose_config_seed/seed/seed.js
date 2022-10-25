import mongoose from "mongoose";
import User from "../models/User.js";
import { faker } from '@faker-js/faker';


// Datenbank initialisieren
mongoose
    .connect("mongodb://localhost:27017/25_10_seed")
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
            firstname:      faker.name.firstName(),
            lastname:       faker.name.lastName(),
            city:           faker.address.cityName(),
            birthday:       faker.date.birthdate({min:8, max: 85}),
            registeredAt:   faker.date.past(),
            email:          faker.internet.email(),
            isAdmin:        faker.datatype.boolean(),
            avatar:         faker.image.avatar()
            
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
