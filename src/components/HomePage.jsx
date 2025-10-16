import React, { useState } from "react";
import RatingCard from "./RatingCard";
import SuccessCard from "./SuccessCard";

const HomePage = () => {


  const ratingTags = [1, 2, 3, 4, 5];

   const highestRating = Math.max(...ratingTags)

  const [submitted, setSubmitted] = useState(false);
  const [rate, setRate] = useState(null)
  return (
    <div className="bg-[#121417ff] font-sans w-full min-h-screen flex justify-center items-center px-[5%]">
      {!submitted ? <RatingCard rate={rate} setRate={setRate} setSubmitted={setSubmitted} ratingTags={ratingTags} /> : <SuccessCard highestRating={highestRating} rate={rate} />}
    </div>
  );
};

export default HomePage;
