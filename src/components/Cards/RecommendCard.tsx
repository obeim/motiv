import { ReactComponent as Re } from "src/assets/icons/re.svg";
import Car from "src/assets/images/car.png";
import { ReactComponent as Type } from "src/assets/icons/type.svg";
import { ReactComponent as Setting } from "src/assets/icons/setting.svg";
import { ReactComponent as Thunder } from "src/assets/icons/thunder.svg";

export function RecommendCard({
  reco_prec,
  car_image,
  car_name,
  price,
  container,
}: RecommendCardProps) {
  return (
    <div
      className={`2xl:w-96 xl:w-80 md:w-72 w-full  h-64 rounded-xl  px-6 py-4 flex flex-col justify-between ${
        container || "bg-tertiary-1"
      }`}
    >
      <div className="flex gap-3">
        <Re className="fill-gray-dark3 cursor-pointer" />
        <div className="font-bold">{reco_prec || "50"}% Recommend</div>
      </div>
      <img
        alt="carImage"
        className="xl:w-4/5 max-w-xs w-full mx-auto"
        src={car_image || Car}
      />
      <div className="text-xl font-bold">{car_name || "Mini Cooper"}</div>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Type className="fill-gray-dark3" />
          <div className="text-sm text-gray-dark3 font-medium">132K</div>
          <Setting className="fill-gray-dark3" />
          <Thunder className="fill-gray-dark3" />
        </div>
        <div className="text-gray-dark3 text-sm font-medium">
          {price || "$28/h"}
        </div>
      </div>
    </div>
  );
}
interface RecommendCardProps {
  reco_prec?: string;
  car_image?: string;
  car_name?: string;
  price?: string;
  container?: string;
}
