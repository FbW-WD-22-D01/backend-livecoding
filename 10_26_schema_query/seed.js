import mongoose from 'mongoose'
import { faker } from '@faker-js/faker';
import Customer from './models/Customer.js';

//Datenbank initialisieren
// mongoose
//     .connect("mongodb://localhost:27017/26_10_query")
//     .then(() => console.log('Verbindung läuft'))
//     .catch((err) => console.log('Broken database...'))


// Datenbank initialisieren (mit await)
try{
    await mongoose.connect("mongodb://localhost:27017/26_10_query")
    console.log('Verbindung DB läuft')
} catch(err){
    console.log('Something broken with db ', err)
}

// Deutsch Lokalisierung
faker.locale='de'


// vorhandenen Daten löschen
try{
    await Customer.deleteMany({})
    console.log('Alle Daten gelöscht')
}catch(err){
    console.log('Löschen hat nciht geklappt', err)
}

// Neue Daten einspielen

    const howMany = 200

    const customerPromises = Array(howMany).fill(null).map( (el,index) => {
        const obj = {
            firstname: faker.name.firstName(),
            lastname:  faker.name.lastName(),
            isAdmin: faker.datatype.boolean(),
            address: {
                city: faker.address.cityName(),
                street: faker.address.street(),
                zip: faker.address.zipCode()
            }
        }

        obj.email= faker.internet.email(obj.firstname, obj.lastname)
        
        return Customer.create(obj)
    })

    

    try {
        const customerCreated = await Promise.all(customerPromises)
        console.log(`${howMany} fake Daten erzeugt`)
    } catch(error){
        console.log('Fehler beim Daten erzeugen', error)
    }

mongoose.connection.close()