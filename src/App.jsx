import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./main.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="overpass-font">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="attribution">
        {/*  Rating state start  */}
        How did we do? Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering! 1 2 3 4 5
        Submit
        {/*  Rating state end  */}
        {/*  Thank you state start  */}
        You selected {/* Add rating here */} out of 5 Thank you! We appreciate
        you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
        {/*  Thank you state end  */}
      </div>
    </>
  );
}

export default App;
