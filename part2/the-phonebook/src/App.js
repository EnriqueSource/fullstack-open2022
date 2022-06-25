import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  // Event handler
  const addName = (event) => {
    event.preventDefault();
    const person = persons.filter((person) => person.content === newName);

    if (person.length !== 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        content: newName,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
      setNewName("");

      console.log(personObject);
    }
  };

  const handlePersonsChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonsChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
      <p>
        <strong>debug: </strong>
        {newName}
      </p>
    </div>
  );
};

export default App;
