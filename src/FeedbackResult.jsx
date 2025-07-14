import React, { useContext } from "react";
import { SharedContext } from "./context/FunctionProvider";

function FeedbackResult() {
  const { sharedValue } = useContext(SharedContext);

  return (
    <article id="FeedbackResult">
      You selected <strong>{sharedValue}</strong> out of 5 Thank you! We
      appreciate you taking the time to give a rating. If you ever need more
      support, don&rsquo;t hesitate to get in touch!
    </article>
  );
}

export default FeedbackResult;
