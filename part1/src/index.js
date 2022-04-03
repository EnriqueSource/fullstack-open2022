import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.course}</h3>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
        <p>{props.part}: {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    title: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    title: 'Using props to pass data',
    exercises: 7 
  }
  const part3 = {
    title: 'State of component',
    exercises: 14
  }
  return (
    <>
      <Header course={course} />
      <Content part={part1.title} exercises={part1.exercises} />
      <Content part={part2.title} exercises={part2.exercises} />
      <Content part={part3.title} exercises={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
