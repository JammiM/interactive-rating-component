import React from "react";
import starIcon from "./assets/starter-files/images/icon-star.svg";

const RatingAmount = [1, 2, 3, 4, 5];

const RatingList = RatingAmount.map((singleValue, index) => (
  <div key={index}>
    <input
      className="ratings__singleButton"
      key={index}
      type="button"
      value={singleValue}
    />
  </div>
));

function FeedbackForm() {
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
      <form id="feedbackForm" action="" method="post">
        <div className="ratings__buttonGroup">{RatingList}</div>
        <input id="feedbackFormBtn" type="submit" value="SUBMIT" />
      </form>
    </article>
  );
}

export default FeedbackForm;
