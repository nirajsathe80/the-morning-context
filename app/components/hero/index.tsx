"use client";

import Button from "@/app/common-components/button";

const Hero = () => {
  return (
    <div className="hero-bg px-4 py-7">
      <div className="border border-white relative">
        <p className="absolute top-[-10px] left-[50%] translate-x-[-50%] text-white font-normal text-sm uppercase hero-bg px-2">
          Our Journalism
        </p>
        <p className="font-[900] text-center text-lg text-white py-5 px-4">
          The Morning Context makes you smarter with original, accurate and
          independent journalism.
        </p>
        <div className=" flex justify-center pb-5">
          <Button
            buttonText="SUBSCRIBE"
            onClick={() => {}}
            className="!font-bold !text-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
