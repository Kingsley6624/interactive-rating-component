import React, { useState } from "react";
import star from "../assets/images/icon-star.svg";

const RatingCard = ({ rate, setRate, setSubmitted, ratingTags }) => {
  return (
    <div className="bg-[#252d37ff] md:w-[35%] flex flex-col gap-4 rounded-3xl shadow p-8">
      <div className="relative rounded-full bg-[#252d37ff] p-2 w-fit before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/10  mb-2">
        <img src={star} alt="" />
      </div>
      <div className="space-y-2">
        <h1 className=" font-bold text-white text-2xl">How did we do?</h1>
        <p className="font-normal text-[#959eacff] text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex justify-between">
        {ratingTags.map((tag, index) => (
          <button
            className={`relative  text-[#959eacff] font-bold py-2 px-4 rounded-full hover:bg-[#fb7413ff] hover:text-[#252d37] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/10 ${
              rate === tag ? "bg-white text-[#252d37] hover:bg-white" : "bg-[#252d37] "
            }`}
            key={index}
            onClick={() => setRate(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <button
        className="w-full py-2 font-medium text-[#121417ff] bg-[#fb7413ff] rounded-full"
        onClick={() => {
          if (rate !== null) {
            setSubmitted(true);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default RatingCard;
