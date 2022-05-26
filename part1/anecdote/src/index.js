import React, { useState } from "react";
import ReactDOM from "react-dom";

const VotesDisplay = (props) => {
  return (
    <div value={props.votes}>
      {props.text} {props.value}
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);

  /*
    State that stores the votes.
    The value of the initial state is an array full of zeros
    with the same length as the constant "anecdotes" (6).
  */
  const [points, setPoints] = useState(Array(6).fill(0));

  const [votes, setVotes] = useState(0);

  // Event handlers
  const handleVoteClick = () => {
    const newPoints = [...points];
    setPoints(newPoints);
    newPoints[selected] += 1;
    setVotes(newPoints[selected]);
  };
  const handleNextClick = () => {
    const newPoints = [...points];
    setPoints(newPoints);
    const selected = Math.floor(Math.random() * anecdotes.length);
    setSelected(selected);
    setVotes(newPoints[selected]);
  };

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <table>
        <tbody>
          <tr>
            <td>
              <VotesDisplay text="has" />
            </td>
            <td>
              <VotesDisplay value={votes} />
            </td>
            <td>
              <VotesDisplay text="votes" />
            </td>
          </tr>
        </tbody>
      </table>
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextClick} text="next anecdote" />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later.",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil",
  "Debugging is twice as hard as writing tne code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
