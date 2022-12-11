import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SearchFilter from "./components/SearchFilter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
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
        id: persons.length + 1
      };

      console.log(personObject);
      personService
        .create(personObject)
        .then(retornedPerson => {
          setPersons(persons.concat(retornedPerson));
          setNewName("");
          setNewNumber("");
        })
      console.log(newName);
    }
  };

  const removeThisPerson = (person) => {
    console.log('the person ' + person + ' should be removed')
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
      <SearchFilter value={filterName} onChange={handleFilterChange} />
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contact list</h2>
      <ContactList persons={persons} removeThisPerson={removeThisPerson} />
      <p>
        <strong>debug: </strong>
        {newName} {newNumber}
      </p>
    </div>
  );
};

export default App;
