import { FC, PropsWithChildren, ReactNode } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
const CircularProgress: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <CircularProgressbarWithChildren
      value={89}
      circleRatio={0.7}
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
        trailColor: "#F4F5F9",
        pathColor: "#FF7E86",
        textColor: "#242731",
        strokeLinecap: "round",
      })}
    >
      <div className="text-3xl font-bold text-primary-dark relative bottom-2">
        {children}
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgress;

interface Props {}
