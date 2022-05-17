import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  return (
    <div>
      {props.text}
      {props.display}
      {props.percentageSign}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Total of votes
  const [total, setTotal] = useState(0);

  // Calculation of teh average
  // Array of value
  const [arrayOfValues, setArrayOfValues] = useState([]);

  // Sum of array values
  const sum = arrayOfValues.reduce((a, b) => a + b, 0);

  //average
  let average = 0;

  if (arrayOfValues.length !== 0) {
    average = sum / arrayOfValues.length;
  }

  // Percentage of positive comments
  // const [percent, setPercent] = useState(0);
  let percent = 0;

  if (arrayOfValues.length !== 0) {
    percent = (good / arrayOfValues.length) * 100;
  }

  // Event handlers
  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setArrayOfValues(arrayOfValues.concat(1));
    //setPercent()
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setArrayOfValues(arrayOfValues.concat(0));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setArrayOfValues(arrayOfValues.concat(-1));
  };

  return (
    <>
      <h1>give us your feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics text="good: " display={good} />
      <Statistics text="neutral: " display={neutral} />
      <Statistics text="bad: " display={bad} />
      <Statistics text="total: " display={total} />
      <Statistics text="average: " display={average} />
      <Statistics text="positive: " display={percent} percentageSign=" %" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
