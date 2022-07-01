import React from "react";
import Person from "./Person";

const Numbers = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <Person key={person.id} person={person} />
    ))}
  </div>
);

export default Numbers;
