import "./style.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);

  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];
  return (
    <div className="App">
      <p>Learn React</p>
      <div className="App">
        <h1>Redux made easy</h1>
        <h2> Total Votes: {count}</h2>
        {voters.map((voter) => (
          <Counter name={voter} />
        ))}
      </div>
    </div>
  );
}

export default App;
