import "./App.css";
import { useState, useEffect } from "react";
import Login from "./Login";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {console.log(users)}
      {users.length === 0 ? (
        <header className="App-header">
          <Login />
        </header>
      ) : null}
    </div>
  );
}

export default App;
