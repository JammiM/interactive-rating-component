import React, { useContext, useState } from "react";
import starIcon from "./assets/starter-files/images/icon-star.svg";
import { SharedContext } from "./context/FunctionProvider";

const RatingAmount = [1, 2, 3, 4, 5];

const RatingList = RatingAmount.map((singleValue, index) => (
  <React.Fragment key={index}>
    <input
      type="radio"
      name="buttonGroup"
      id={singleValue}
      value={singleValue}
    />
    <label className="ratings__singleButton" htmlFor={singleValue}>
      {singleValue}
    </label>
  </React.Fragment>
));

function FeedbackForm() {
  const { setSharedValue } = useContext(SharedContext);

  const submitRating = (e) => {
    e.preventDefault();

    const expense = new FormData(e.target);
    const ratingValue = expense.get("buttonGroup");

    console.log(ratingValue);
    setSharedValue(ratingValue);
  };

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
        <input id="feedbackFormBtn" type="submit" value="SUBMIT" />
      </form>
    </article>
  );
}

export default FeedbackForm;
