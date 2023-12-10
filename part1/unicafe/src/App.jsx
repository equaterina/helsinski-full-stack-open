import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleUpdateGood = () => setGood(good + 1);
  const handleUpdateBad = () => setBad(bad + 1);
  const handleUpdateNeutral = () => setNeutral(neutral + 1);

  const total = good + bad + neutral;
  const average = ((good * 1) + (neutral * 0) - bad) / total;
  const positive = good / total;

  console.log(total)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleUpdateGood}>good</button>
        <button onClick={handleUpdateBad}>bad</button>
        <button onClick={handleUpdateNeutral}>neutral</button>
      </div>

      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>bad {bad}</p>
        <p>neutral {neutral}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p>
      </div>
    </div>
  )
}

export default App