import { useState } from "react";
import "./App.css";

function Login() {
  const [username, setUsername] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const newUsername = {
      ...username,
      [e.target.name]: e.target.value,
    };
    setUsername(newUsername);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://crmaoc.herokuapp.com/login", {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username),
    })
      .then((res) => {
        if (res.status !== 401) {
          return res.json().then((data) => console.log(data));
        } else {
          return {};
        }
      })
      .catch((err) => {
        console.log("an error happened");
        console.log(err);
      });

    e.target.reset();
  };
  return (
    <div className="login-box">
      <form className="signForm" onSubmit={handleSubmit}>
        <div className="formline grey">
          <h3>Sign In</h3>
          <div className="formline">
            <label>Email </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="formline">
            <label>Password </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            ></input>

            <button className="buttonSignInHome">Sign In</button>
          </div>{" "}
        </div>
      </form>
    </div>
  );
}

export default Login;
