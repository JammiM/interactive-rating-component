import "./main.css";
import "./axeTestingHandler";

import FeedbackForm from "./FeedbackForm";
import FeedbackResult from "./FeedbackResult";

import { SharedProvider } from "./context/FunctionProvider";

function App() {
  return (
    <>
      <main>
        <SharedProvider>
          <FeedbackForm></FeedbackForm>
          <FeedbackResult></FeedbackResult>
          {/* <div className="attribution">ssss</div> */}
        </SharedProvider>
      </main>
    </>
  );
}

export default App;
