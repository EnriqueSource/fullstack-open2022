import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.courseTitle}</h3>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
        <p>{props.partsTitle}: {props.exercises}</p>
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
  const course = {
    courseName: 'Half Stack application development',
    parts: [
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
  }
  return (
    <>
      <Header courseTitle={course.courseName} />
      <Content partsTitle={course.parts[0]['title']} exercises={course.parts[0]['exercises']}/>
      <Content partsTitle={course.parts[1]['title']} exercises={course.parts[1]['exercises']}/>
      <Content partsTitle={course.parts[2]['title']} exercises={course.parts[2]['exercises']}/>
      <Total total={course.parts[0]['exercises'] + course.parts[1]['exercises'] + course.parts[2]['exercises']} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
