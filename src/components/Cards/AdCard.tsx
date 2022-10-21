import React from "react";
import Desk from "src/assets/images/3-designer-desk-2.png";
const AdCard = ({ container }: AdCardProps) => {
  return (
    <div
      className={`2xl:h-60 md:h-60 h-auto rounded bg-primary-carrot ${container}`}
    >
      <div className="flex items-center h-full md:justify-between md:p-6 p-10 gap-4 lg:px-7 flex-wrap">
        <div className="my-auto">
          <div className="text-2xl text-primary-Tangaroa font-bold">
            Apply for a car loan !
          </div>
          <div className="mt-2 text-primary-Tangaroa font-medium">
            This is a sample of a generated text
          </div>
          <button className="mt-6 bg-primary-Tangaroa text-white font-bold py-3 px-5 rounded">
            Discover More
          </button>
        </div>
        <img
          src={Desk}
          alt="desk"
          className="lg:h-full h-auto mx-auto xl:block xl:mx-0 hidden"
        />
      </div>
    </div>
  );
};

export default AdCard;

interface AdCardProps {
  container?: string;
}
