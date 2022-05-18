import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = (props) => {
  return (
    <div>
      <p value={props.average}>
        {props.text}: {props.value}
      </p>
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
  let positivePercent = 0;

  if (arrayOfValues.length !== 0) {
    positivePercent = (good / arrayOfValues.length) * 100;
  }

  // Event handlers
  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setArrayOfValues(arrayOfValues.concat(1));
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
    <div>
      <h1>give us your feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <h2>
        <strong>statistics</strong>
      </h2>
      <Statistics text="average" value={average} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
