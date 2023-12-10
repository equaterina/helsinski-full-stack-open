import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleUpdateGood = () => setGood(good + 1);
  const handleUpdateBad = () => setBad(bad + 1);
  const handleUpdateNeutral = () => setNeutral(neutral + 1)

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
      </div>
    </div>
  )
}

export default App