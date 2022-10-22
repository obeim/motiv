import { FC, PropsWithChildren } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
const CircularProgress: FC<PropsWithChildren<CircularProgressProps>> = ({
  children,
  text,
  pathColor,
  trailColor,
}) => {
  return (
    <CircularProgressbarWithChildren
      value={57}
      circleRatio={0.7}
      strokeWidth={10}
      className="z-0"
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
        trailColor: trailColor || "#F4F5F9",
        pathColor: pathColor || "#FF7E86",
        textColor: "#242731",
        strokeLinecap: "round",
      })}
    >
      <div
        className={`text-3xl font-bold ${
          text || "primary-dark"
        } relative bottom-2`}
      >
        {children}
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgress;

export interface CircularProgressProps {
  text?: string;
  pathColor?: string;
  trailColor?: string;
}
