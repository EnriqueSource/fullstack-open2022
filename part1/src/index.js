import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log('header submitted');
  return (
    <div>
      <h3>{props.course}</h3>
    </div>
  )
}

const Content = (props) => {
  console.log('Content submitted');
  return (
    <div>
      {props.part1}
      <br />
      {props.part2}
      <br />
      {props.part3}
    </div>
  )
}

const Total = (props) => {
  console.log('total exercises submitted')
  return (
    <div>
      <p>Total exercises = {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={part1 + ':' + ' ' + exercises1} part2={part2 + ':' + ' ' + exercises2} part3={part3 + ':' + ' ' + exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
