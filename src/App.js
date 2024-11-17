import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
    </div>
  );
}

export default App;
