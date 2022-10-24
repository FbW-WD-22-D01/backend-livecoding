import mongoose, { Schema } from "mongoose";



// Datenbank --> Collection --> Dokument 

// Verbindung mit DB .connect(mongodb:// pfad / datenbank)
mongoose
    .connect('mongodb://localhost:27017/mongooseFirstSteps')
    .then(() => console.log('Datenbank läuft'))
    .catch( error => console.log(error))

// Schema erstellen     
const CatSchema = new Schema({name: {type: String}, color: {type: String}})

// Model erstellen (.model Funktion(Namen des Models(String), Schema ))
const Cat = mongoose.model('Cat', CatSchema);

// neue Instanz (MongoDb Dokument) erstellen
const kitty = new Cat({ name: 'Zildjian', color: "red" });

// Dokument in Datenbank speichern
await kitty.save()


console.log(kitty)


