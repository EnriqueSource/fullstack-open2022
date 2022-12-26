import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SearchFilter from "./components/SearchFilter";
import personService from "./services/persons";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  // we obtain the list of contacts updated in each new rendering.
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, [])

  // event handler
  // add new contact person
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

  // delete contact person
  const removePerson = (id, name) => {
    if (window.confirm(`delete ${name}`)) {
      personService
        .remove(id)
        setPersons(persons.filter(person => person.id !== id));
    }
  };

  // handle name input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  // handle number input changes
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
      <ContactList persons={persons} removePerson={removePerson} />
      <p>
        <strong>debug: </strong>
        {newName} {newNumber}
      </p>
    </div>
  );
};

export default App;
