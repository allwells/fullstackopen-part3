const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@fso-cluster.9wjsr.mongodb.net/phonebook?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Persons", personSchema);

// Get all users from the database
if (process.argv.length < 4) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}

// Insert persons to database
if (process.argv.length > 3) {
  const personName = process.argv[3];
  const personNumber = process.argv[4];

  const contactList = new Person({
    name: personName,
    number: personNumber,
  });

  // Save entry to database
  contactList.save().then((result) => {
    console.log(
      `added ${contactList.name} number ${contactList.number} to phonebook`
    );
    mongoose.connection.close();
  });
}
