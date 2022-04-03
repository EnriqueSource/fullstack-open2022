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
        <p>{props.parts}:  {props.exercises}</p>
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
  const parts = [
    {
      title: 'Fundamentals of React',
      exercises: 10
    },
    {
    title: 'Using props to pass data',
    exercises: 7 
    },
    {
    title: 'State of component',
    exercises: 14
    }
  ]
  return (
    <>
      <Header course={course} />
      <Content parts={parts[0]['title']} exercises={parts[0]['exercises']} />
      <Content parts={parts[1]['title']} exercises={parts[1]['exercises']} />
      <Content parts={parts[2]['title']} exercises={parts[2]['exercises']} />
      <Total total={parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises']}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
