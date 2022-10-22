import Re from "src/assets/icons/re.svg";
import Car from "src/assets/images/car.png";
import Icon1 from "src/assets/icons/icon (1).svg";
import Icon2 from "src/assets/icons/icon (2).svg";
import Icon3 from "src/assets/icons/icon3.svg";

export function RecommendCard({
  reco_prec,
  car_image,
  car_name,
  price,
  container,
}: RecommendCardProps) {
  return (
    <div
      className={`2xl:w-96 xl:w-80 md:w-72 sm:w-60 w-full  h-64 rounded-xl  px-6 py-4 flex flex-col justify-between ${
        container || "bg-tertiary-1"
      }`}
    >
      <div className="flex gap-3">
        <img alt="Re" src={Re} className="cursor-pointer" />
        <div className="font-bold">{reco_prec || "50"}% Recommend</div>
      </div>
      <img
        alt="carImage"
        className="xl:w-4/5 max-w-xs"
        src={car_image || Car}
      />
      <div className="text-xl font-bold">{car_name || "Mini Cooper"}</div>
      <div className="mt-2 flex justify-between">
        <div className="flex gap-4">
          <img src={Icon1} alt="icon1" />
          <div className="text-sm text-gray-dark3 font-medium">132K</div>
          <img src={Icon2} alt="icon2" />
          <img src={Icon3} alt="icon3" />
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
