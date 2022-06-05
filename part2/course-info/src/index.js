import React from "react";
import ReactDOM from "react-dom";
import Courses from "./components/Courses";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  // Sumando el total de los ejercicios del curso 1
  const arrayOfExercises1 = courses[0].parts.map((part) => {
    return part.exercises;
  });

  const sumOfExercises1 = arrayOfExercises1.reduce((a, b) => a + b, 0);

  // Sumando el total de los ejercicios del curso 2
  const arrayOfExercises2 = courses[1].parts.map((part) => {
    return part.exercises;
  });

  const sumOfExercises2 = arrayOfExercises2.reduce((a, b) => a + b, 0);

  return (
    <>
      <Courses header="Web development curriculum" />
      <Courses title={courses[0].name} />
      <table>
        <tbody>
          <tr>
            <td>
              <Courses
                content={courses[0].parts.map((part) => (
                  <div key={part.id}>{part.name}</div>
                ))}
              />
            </td>
            <td>
              <Courses
                exercises={courses[0].parts.map((part) => (
                  <div key={part.id}>{part.exercises}</div>
                ))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Courses
        text1="Total of"
        sumOfExercises={sumOfExercises1}
        text2="exercises"
      />
      <Courses title={courses[1].name} />
      <table>
        <tbody>
          <tr>
            <td>
              <Courses
                content={courses[1].parts.map((part) => (
                  <div key={part.id}>{part.name}</div>
                ))}
              />
            </td>
            <td>
              <Courses
                exercises={courses[1].parts.map((part) => (
                  <div key={part.id}>{part.exercises}</div>
                ))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Courses
        text1="Total of"
        sumOfExercises={sumOfExercises2}
        text2="exercises"
      />
    </>
  );
};

ReactDOM.render(<App course={Courses} />, document.getElementById("root"));
