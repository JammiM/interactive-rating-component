import "./main.css";
import "./axeTestingHandler";

import FeedbackForm from "./FeedbackForm";
import FeedbackResult from "./FeedbackResult";

import { SharedProvider } from "./context/FunctionProvider";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

function App() {
  const [showFeedBack, setShowFeedBack] = useState(false);

  return (
    <>
      <main>
        <SharedProvider>
          <AnimatePresence>
            {showFeedBack ? (
              <FeedbackResult />
            ) : (
              <FeedbackForm setShowFeedBack={setShowFeedBack}></FeedbackForm>
            )}
          </AnimatePresence>
        </SharedProvider>
      </main>
    </>
  );
}

export default App;
