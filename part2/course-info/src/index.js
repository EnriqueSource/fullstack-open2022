import React from "react";
import ReactDOM from "react-dom";

const Course = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <div>
        {props.content} {props.exercises}
      </div>
      <p>
        <strong>
          {props.text1} {props.sumOfExercises} {props.text2}
        </strong>
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        title: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        title: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        title: "State of component",
        exercises: 14,
        id: 3,
      },
      {
        title: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  // Sumando el total de los ejercicios
  const arrayOfExercises = course.parts.map((part) => {
    return part.exercises;
  });

  const sumOfExercises = arrayOfExercises.reduce((a, b) => a + b, 0);

  return (
    <>
      <Course header={course.name} />
      <table>
        <tbody>
          <tr>
            <td>
              <Course
                content={course.parts.map((part) => (
                  <div key={part.id}>{part.title}</div>
                ))}
              />
            </td>
            <td>
              <Course
                exercises={course.parts.map((part) => (
                  <div key={part.id}>{part.exercises}</div>
                ))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Course
        text1="Total of"
        sumOfExercises={sumOfExercises}
        text2="exercises"
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
