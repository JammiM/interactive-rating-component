import React, { useContext } from "react";
import { SharedContext } from "./context/FunctionProvider";
import thankYouLogo from "./assets/starter-files/images/illustration-thank-you.svg";
import { motion } from "motion/react";

function FeedbackResult() {
  const { sharedValue } = useContext(SharedContext);

  return (
    <motion.article
      id="feedbackResultContainer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      key="b"
      transition={{
        duration: 0.5,
      }}
    >
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
    </motion.article>
  );
}

export default FeedbackResult;
