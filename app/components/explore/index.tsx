"use client";
import Button from "@/app/common-components/button";

const explores = [
  "Internet",
  "Business",
  "Chaos",
  "Sports",
  "Economics",
  "Legal",
  "Science",
];

const Explore = () => {
  return (
    <div className="bg-[#FFFFFF] py-10 px-4 ">
      <p className="text-[#292929] font-bold text-center text-2xl">
        Explore newsletters on
      </p>
      <div className="flex flex-wrap gap-3 px-4 justify-center mt-6 pb-10">
        {explores.map((explore) => {
          return (
            <div
              className="border border-[#7B8FFE] w-min py-2 px-3 rounded-[50px]"
              key={explore}
            >
              <span className="text-[#7B8FFE] font-normal text-base">
                {" "}
                {explore}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full">
        <Button
          buttonText="SIGN UP TO SUBSCRIBE"
          onClick={() => {}}
          className="!w-full !max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default Explore;
