const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URI;

console.log("connecting to ", url);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: { type: String, minlength: 4, required: true, unique: true },
  number: { type: String, minlength: 8, required: true, unique: true },
});

personSchema.plugin(mongooseUniqueValidator);

personSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
