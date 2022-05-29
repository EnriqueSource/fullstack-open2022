import React, { useState } from "react";
import ReactDOM from "react-dom";

const AnecdotesDisplay = (props) => {
  return <div>{props.value}</div>;
};

const VotesDisplay = (props) => {
  return (
    <div value={props.votes}>
      {props.text} {props.display}
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const AnecdoteMostVotesDisplay = (props) => {
  if (props.maxVoted === 0) {
    return (
      <div>There are no votes yet. Be the first to give your opinion.</div>
    );
  }

  return (
    <div onClick={props.handleVotesClick}>{anecdotes[props.mostVotes]}</div>
  );
};

const MaxVotedDisplay = (props) => {
  return (
    <div onClick={props.handleVotesClick}>
      {props.text}
      {props.display}
    </div>
  );
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

  const [maxVoted, setMaxVoted] = useState(0);

  // Highest vote index
  const [mostVotes, setMostVotes] = useState(0);

  // Event handlers
  const handleVotesClick = () => {
    const votes = [...points];
    setPoints(votes);
    votes[selected] += 1;
    setVotes(votes[selected]);

    // Most voted:
    // We obtain the highest value within the array of votes.
    const maxVoted = Math.max(...votes);
    setMaxVoted(maxVoted);
    // We obtain the index of this highest value
    const mostVotes = votes.indexOf(maxVoted);
    setMostVotes(mostVotes);
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
      <h1>Anecdote of the day</h1>
      <AnecdotesDisplay value={props.anecdotes[selected]} />
      <table>
        <tbody>
          <tr>
            <td>
              <VotesDisplay text="has" />
            </td>
            <td>
              <VotesDisplay display={votes} />
            </td>
            <td>
              <VotesDisplay text="votes" />
            </td>
          </tr>
        </tbody>
      </table>
      <Button onClick={handleVotesClick} text="vote" />
      <Button onClick={handleNextClick} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <AnecdoteMostVotesDisplay mostVotes={mostVotes} maxVoted={maxVoted} />
      <table onClick={handleVotesClick}>
        <tbody>
          <tr>
            <td>
              <MaxVotedDisplay text="has" />
            </td>
            <td>
              <MaxVotedDisplay display={maxVoted} />
            </td>
            <td>
              <MaxVotedDisplay text="votes" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later.",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
