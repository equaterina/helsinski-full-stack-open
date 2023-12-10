import { useState } from "react";

const Button = ({ handler, value }) => (
  <button onClick={handler}>{value}</button>
);

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const average = (good * 1 + neutral * 0 - bad) / total;
  const positive = good / total;

  return total >= 1 ? (
    <>
      <h1>statistics</h1>
      <table>
        <thead>
          <tr>
            <th>feedback</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
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
        <Button handler={handleUpdateGood} value="good" />
        <Button handler={handleUpdateBad} value="bad" />
        <Button handler={handleUpdateNeutral} value="neutral" />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
