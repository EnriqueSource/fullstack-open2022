import React from "react";
import Person from "./Person";

const ContactList = ({ persons, removePerson }) => (
  <div>
    {persons.map((person) => (
      <Person 
        key={person.id} 
        person={person}
        removePerson={() => removePerson(person.id, person.name)}
        />
    ))}
  </div>
);

export default ContactList;
