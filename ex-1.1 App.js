import React from 'react'

const Header = (props) => {
  return(
    <div>
      <p>
         {props.name}
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>
        Content {props.part1} {props.part2} {props.part3} {props.exercises1} {props.exercises2} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Total Number of exercises 31
      </p>
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
    <div>
      <Header name= {course}/>
      <Content part1={part1}
       Content exercises1 = {exercises1} />
       <Content part2={part2}
       Content exercises2 = {exercises2} />
       <Content part3={part3}
       Content exercises3 = {exercises3} />
      <Total parts={exercises1+exercises2+exercises3} />
    </div>
  );
};



export default App