import React from "react";
import CircularProgress, { CircularProgressProps } from "../CircularProgress";
const PrecentCard = ({
  bg,
  titleColor,
  progressProps,
  title,
  iconContainer,
  iconSrc,
  progressText,
}: Props) => {
  return (
    <div className={`bg-${bg || "white"} h-72 w-60 rounded-xl`}>
      <div className="w-3/4 flex flex-col mx-auto my-6">
        <div
          className={`w-10 h-10  mx-auto rounded-full flex items-center justify-center ${iconContainer}`}
        >
          <img src={iconSrc} className="w-5 h-5" alt="icon" />
        </div>
        <div
          className={`mt-5 text-center text-${titleColor} text-2xl font-bold`}
        >
          {title || "Title"}
        </div>
        <div className="mt-8 w-3/4 mx-auto text-center text-white text-2xl font-bold">
          <CircularProgress {...progressProps}>{progressText}</CircularProgress>
        </div>
      </div>
    </div>
  );
};

export default PrecentCard;

interface Props {
  bg?: string;
  title?: string;
  titleColor?: string;
  iconContainer?: string;
  progressProps?: CircularProgressProps;
  iconSrc?: string;
  progressText?: string;
}
