import React, { useState } from 'react'


const StatisticsLine = ({ text, value }) => {
  return (
   <tr>
     <td>{text}</td>
     <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral
  const average = (good * 1 + bad * (-1)) / all
  const positive = (good * 100 / all) + '%'

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={all} />
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positive} />
        </tbody>
      </table>
    </div>
  )
}

/*
<table>
        <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      </tbody>
      </table>*/

const Display = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

//const handleGood = () => setGood()

const Button = ({ text, event, value }) => {
  return (
    <button onClick={() => event(value + 1)}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' value={good} event={setGood} />
      <Button text='neutral' value={neutral} event={setNeutral} />
      <Button text='bad' value={bad} event={setBad} />

      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App