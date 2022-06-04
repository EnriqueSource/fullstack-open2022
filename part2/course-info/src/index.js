import React from "react";
import ReactDOM from "react-dom";

const Course = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <div>
        {props.content} {props.exercises}
      </div>
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
    ],
  };

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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
