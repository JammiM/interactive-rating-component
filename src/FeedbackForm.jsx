import React, { useContext } from "react";
import starIcon from "./assets/starter-files/images/icon-star.svg";
import { SharedContext } from "./context/FunctionProvider";
import { motion } from "motion/react";

const RatingAmount = [1, 2, 3, 4, 5];

function FeedbackForm({ setShowFeedBack }) {
  const { setSharedValue, sharedValue } = useContext(SharedContext);

  const submitRating = (e) => {
    e.preventDefault();

    // const expense = new FormData(e.target);
    // const ratingValue = expense.get("buttonGroup");

    console.log("submitRating fired");

    setShowFeedBack(true);
  };

  function handleRatingClick(ratingValue) {
    setSharedValue(ratingValue);
  }

  const RatingList = RatingAmount.map((singleValue, index) => (
    <React.Fragment key={index}>
      <input
        type="radio"
        name="buttonGroup"
        id={`bg-${singleValue}`}
        value={singleValue}
        onClick={() => handleRatingClick(singleValue)}
      />
      <label className="ratings__singleButton" htmlFor={`bg-${singleValue}`}>
        {singleValue}
      </label>
    </React.Fragment>
  ));

  return (
    <motion.article
      id="feedbackContainer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      key="a"
      transition={{
        duration: 0.5,
      }}
    >
      <div>
        <img
          src={starIcon}
          className="feedbackContainer__logo"
          alt="icon star"
        />
      </div>
      <h1 className="feedbackContainer__heading">How did we do? </h1>
      <p className="feedbackContainer__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form id="feedbackForm" onSubmit={(event) => submitRating(event)}>
        <div className="ratings__buttonGroup">{RatingList}</div>
        <button
          id="feedbackFormBtn"
          disabled={sharedValue === ""}
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </motion.article>
  );
}

export default FeedbackForm;
