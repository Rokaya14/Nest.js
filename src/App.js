import "./style.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/ducks/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const count = useSelector((state) => state.counter.count);

  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];
  return (
    <div className="App">
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
