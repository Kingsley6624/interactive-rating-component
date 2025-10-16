import React from "react";
import thanksImg from "../assets/images/illustration-thank-you.svg";

const SuccessCard = ({highestRating, rate}) => {
  return (
    <div className="bg-[#252d37ff] md:w-[35%] flex flex-col items-center gap-6 rounded-3xl shadow p-8">
      <img src={thanksImg} alt="" />
      <div className="relative text-[#fb7413ff] bg-[#252d37ff] w-fit before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/10 px-3 py-1">{`you Seleted ${rate} out of ${highestRating}`}</div>
      <h1 className=" text-white">Thank you!</h1>
      <p className="text-center text-[#959eacff]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default SuccessCard;
