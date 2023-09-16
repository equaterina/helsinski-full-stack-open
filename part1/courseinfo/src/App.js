const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercises }) => (
  <p>
    {part}: {exercises}
  </p>
);

const Content = ({ parts }) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];

  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  );
};

const Total = ({ parts }) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];

  return (
    <p>
      Number of exercises: {part1.exercises + part2.exercises + part3.exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
