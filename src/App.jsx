import { useState } from "react";
import "./main.css";
import FeedbackForm from "./FeedbackForm";
import "./axeTestingHandler";

function App() {
  return (
    <>
      <main>
        <FeedbackForm></FeedbackForm>
        <div className="attribution">
          {/*  Rating state end  */}
          {/*  Thank you state start  */}
          You selected {/* Add rating here */} out of 5 Thank you! We appreciate
          you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
          {/*  Thank you state end  */}
        </div>
      </main>
    </>
  );
}

export default App;
