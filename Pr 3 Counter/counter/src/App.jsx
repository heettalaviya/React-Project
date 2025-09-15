import { useEffect, useState } from 'react';
import './index.css';

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(JSON.parse(storedCount));
    }
  }, []);

  let increment = () => {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let decrement = () => {
    if (count <= 0) {
      alert("Decrement value is not allowed below 0");
      return;
    }

    let newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let reset = () => {
    setCount(0);
    localStorage.setItem("count", JSON.stringify(0));
  };

  return (
    <div className="container">
      <h1 className="title">Counter</h1>

      <div className="box">
        <h1 className="count">{count}</h1>
        <div className="btn-group">
          <button onClick={increment} className="btn">Increment</button>
          <button onClick={decrement} className="btn">Decrement</button>
        </div>
        <button onClick={reset} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
