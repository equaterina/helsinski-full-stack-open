import { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const average = (good * 1 + neutral * 0 - bad) / total;
  const positive = good / total;

  return total > 1 ? (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  ) : (
    <p>No feedback is given</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleUpdateGood = () => setGood(good + 1);
  const handleUpdateBad = () => setBad(bad + 1);
  const handleUpdateNeutral = () => setNeutral(neutral + 1);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleUpdateGood}>good</button>
        <button onClick={handleUpdateBad}>bad</button>
        <button onClick={handleUpdateNeutral}>neutral</button>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
