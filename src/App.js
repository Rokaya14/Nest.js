import "./style.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/ducks/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // after that .. store will be updated with the user
    dispatch(getUser());
  }, [dispatch]);

  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];
  return (
    <div className="App">
      <div className="App">
        {user ? (
          <h1>
            Hello{" "}
            <span className="userName">
              {user.firstName} {user.lastName}
            </span>
          </h1>
        ) : (
          <h1>LOADING</h1>
        )}
        <h1>Redux made easy</h1>
        <h2>
          Total Votes: <span className="count">{count}</span>
        </h2>
        {voters.map((voter) => (
          <Counter name={voter} />
        ))}
      </div>
    </div>
  );
}

export default App;
