import React from "react";
import starIcon from "./assets/starter-files/images/icon-star.svg";

const RatingAmount = [1, 2, 3, 4, 5];

const RatingList = RatingAmount.map((singleValue, index) => (
  <div key={index}>
    <input key={index} type="button" value={singleValue} />
  </div>
));

function FeedbackForm() {
  return (
    <div>
      <img src={starIcon} className="logo" alt="icon star" />
      <h1>How did we do? </h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering! 1 2 3 4 5
      </p>
      <form action="" method="post">
        <div>{RatingList}</div>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default FeedbackForm;
