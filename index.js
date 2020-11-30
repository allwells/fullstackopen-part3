require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const Person = require("./models/person");
const app = express();

morgan.token("body", (request, response) => {
  return JSON.stringify(request.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(express.json());
app.use(cors());
app.use(express.static("build"));

app.get("/", (request, response) => {
  response.send("<h1>Welcome to my api</h1>");
});

app.get("/api", (request, response) => {
  response.send('<p><a href="/api/persons">Contact list</a></p>');
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/info", (request, response) => {
  const info = Number(persons.length);
  const date = new Date().toString();
  response.send(`
    <p>Phonebook has info for ${info} people</p>
    <p>${date}</p>
    `);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;

  Person.findById(id).then((person) => {
    response.json(person);
  });
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;
  const id = Number(request.params.id);
  const person = {
    name: body.name,
    number: body.number,
  };
  (id, person, { new: true })
    .then((changed) => {
      response.json(changed.toJSON());
    })
    .catch((error) => next(error));
});

const idGen = () => {
  const max =
    persons.length > 0 ? Math.max(...persons.map((person) => person.id)) : 0;
  return max + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  // const exist = Person.find((person) => person.name === body.name);

  // if (exist) {
  //   return response.status(400).json({
  //     error: "name must be unique",
  //   });
  // }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((saved) => {
    response.json(saved);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
