import React from "react";
import Person from "./Person";

const ContactList = ({ persons, removeThisPerson }) => (
  <div>
    {persons.map((person) => (
      <Person 
        key={person.id} 
        person={person}
        removePerson={() => removeThisPerson(person.id)}
        />
    ))}
  </div>
);

export default ContactList;
