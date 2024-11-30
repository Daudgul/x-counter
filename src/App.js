import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle login
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setMessage(`Welcome, ${username}`);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login page</h2>
      {message && <p>{message}</p>}
      {message !== "Welcome, user" && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
