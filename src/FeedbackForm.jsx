import React, { useContext, useState } from "react";
import starIcon from "./assets/starter-files/images/icon-star.svg";
import { SharedContext } from "./context/FunctionProvider";

const RatingAmount = [1, 2, 3, 4, 5];

function FeedbackForm({ setShowFeedBack }) {
  const { setSharedValue, sharedValue } = useContext(SharedContext);

  const submitRating = (e) => {
    e.preventDefault();

    const expense = new FormData(e.target);
    const ratingValue = expense.get("buttonGroup");

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
        id={singleValue}
        value={singleValue}
        onClick={() => handleRatingClick(singleValue)}
      />
      <label className="ratings__singleButton" htmlFor={singleValue}>
        {singleValue}
      </label>
    </React.Fragment>
  ));

  return (
    <article id="feedbackContainer">
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
        <input
          id="feedbackFormBtn"
          disabled={sharedValue == ""}
          type="submit"
          value="SUBMIT"
        />
      </form>
    </article>
  );
}

export default FeedbackForm;
