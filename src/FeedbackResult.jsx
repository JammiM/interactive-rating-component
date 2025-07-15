import React, { useContext } from "react";
import { SharedContext } from "./context/FunctionProvider";
import thankYouLogo from "./assets/starter-files/images/illustration-thank-you.svg";

function FeedbackResult() {
  const { sharedValue } = useContext(SharedContext);

  return (
    <article id="feedbackResultContainer">
      <img
        src={thankYouLogo}
        className="feedbackResultContainer__logo"
        alt="result logo"
      />
      <div className="feedbackResultContainer__value">
        You selected {sharedValue} out of 5
      </div>
      <h1 className="feedbackResultContainer__heading">Thank you! </h1>
      <p className="feedbackResultContainer__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </article>
  );
}

export default FeedbackResult;
