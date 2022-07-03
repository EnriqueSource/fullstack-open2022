import React, { useState, useEffect } from "react";
import Numbers from "./components/Numbers";
import SeachFilter from "./components/SearchFilter";
import AddPersonForm from "./components/AddPersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const persons = response.data;
        console.log(persons);
      })
  }, [])

  // Event handler
  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.filter((person) => person.name === newName);

    if (person.length !== 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");

      console.log(personObject);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
    console.log(event.target.value);

    const filter = new RegExp(filterName, "i");
    const filteredName = () =>
      persons.filter((person) => person.name.match(filter));
    setPersons(filteredName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SeachFilter value={filterName} onChange={handleFilterChange} />
      <h2>Add a new person</h2>
      <AddPersonForm
        onSubmit={addPerson}
        Value={newName}
        value={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} />
      <p>
        <strong>debug: </strong>
        {newName} {newNumber}
      </p>
    </div>
  );
};

export default App;
