import React from "react";

const Courses = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <h2>{props.title}</h2>
      <div>
        {props.content} {props.exercises}
      </div>
      <div>
        <strong>
          {props.text1} {props.sumOfExercises} {props.text2}
        </strong>
      </div>
    </div>
  );
};

export default Courses;
