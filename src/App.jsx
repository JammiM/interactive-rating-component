import { useState } from "react";
import "./main.css";
import FeedbackForm from "./FeedbackForm";
import "./axeTestingHandler";
import FeedbackResult from "./FeedbackResult";

function App() {
  return (
    <>
      <main>
        <FeedbackForm></FeedbackForm>
        <FeedbackResult></FeedbackResult>
        <div className="attribution"></div>
      </main>
    </>
  );
}

export default App;
