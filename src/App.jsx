import "./main.css";
import "./axeTestingHandler";

import FeedbackForm from "./FeedbackForm";
import FeedbackResult from "./FeedbackResult";

import { SharedProvider } from "./context/FunctionProvider";
import { useState } from "react";

function App() {
  const [showFeedBack, setShowFeedBack] = useState(false);

  return (
    <>
      <main>
        <SharedProvider>
          {showFeedBack ? (
            <FeedbackResult />
          ) : (
            <FeedbackForm setShowFeedBack={setShowFeedBack}></FeedbackForm>
          )}
        </SharedProvider>
      </main>
    </>
  );
}

export default App;
