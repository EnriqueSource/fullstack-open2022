import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [isAlready, setIsAlready] = useState(false);

  // Event handler
  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      content: newName,
      id: persons.length + 1,
    };

    //console.log(personObject);

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handlePersonsChange = (event) => {
    setNewName(event.target.value);
    //console.log(event.target.value);
  };

  // extraemos los nombres existentes en  la lista
  const listOfPersons = persons.map((person) => person.content);
  console.log(listOfPersons);

  const handleIsAlready = () => {
    const listOfPersons = persons.map((person) => person.content);
    setIsAlready(listOfPersons.includes(newName));
  };

  console.log(isAlready);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonsChange} />
        </div>
        <div>
          <button type="submit" onClick={handleIsAlready}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
      <div>
        debug:
        {persons.map((person) => {
          return (
            <p key={person.id}>
              <strong>{person.content}</strong>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
