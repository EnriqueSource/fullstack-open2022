import React from "react";
import Person from "./Person";

const ContactList = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <Person key={person.id} person={person} />
    ))}
  </div>
);

export default ContactList;
