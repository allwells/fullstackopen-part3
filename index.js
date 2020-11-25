const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "Allwell",
    number: "123-4567-8910",
    id: 5,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Welcome to my api</h1>");
});

app.get("/api", (request, response) => {
  response.send('<p><a href="/api/persons">Contact list</a></p>');
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
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
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
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
  const exist = persons.find((person) => person.name === body.name);

  if (exist) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: idGen(),
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
