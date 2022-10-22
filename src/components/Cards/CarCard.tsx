import { ReactComponent as HearOultined } from "src/assets/icons/heartOutlined.svg";
import Car from "src/assets/images/item.png";
import { ReactComponent as Type } from "src/assets/icons/type.svg";
import { ReactComponent as Person } from "src/assets/icons/person.svg";
import { useState } from "react";
export function CarCard({
  isFav,
  onClickFav,
  car_name,
  type,
  image,
  seats,
  price,
  isManual,
  onClick,
}: CarCardProps) {
  const [fav, setFav] = useState(false);

  return (
    <div
      className={` md:w-80  w-full   h-64 rounded-xl  px-6 py-5 flex flex-col justify-between ${"bg-white"}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div
            className="lg:text-lg text-gray-dark1 font-bold cursor-pointer"
            onClick={() => {
              onClick({ car_name, type, image, seats, price });
            }}
          >
            {car_name || "Porshe 718 Cayman S"}
          </div>
          <HearOultined
            onClick={() => {
              if (onClickFav) {
                onClickFav();
              }
              setFav(!fav);
            }}
            className={`${
              isFav || fav ? "fill-rose-500" : "stroke-gray-dark6"
            } w-6 h-6 cursor-pointer`}
          />
        </div>
        <div className="text-gray-dark3">{type || "Coupe"}</div>
      </div>
      <img
        alt="carImage"
        className="xl:w-4/5 w-4/5 max-w-xs mx-auto"
        src={image || Car}
      />
      <div className="mt-2 flex justify-between">
        <div className="flex gap-4 items-center text-gray-dark3 lg:text-lg">
          <div className="inline-flex items-center gap-2">
            <Person className="fill-primary-purple" />
            <div>{seats || 4}</div>
          </div>
          {isManual && (
            <div className="inline-flex items-center gap-2">
              <Type className="fill-primary-purple" />
              <div>Manual</div>
            </div>
          )}
        </div>
        <div className="lg:text-lg text-primary-dark font-medium">
          {"$" + parseInt(price || "") || "400$"}
          <span className="text-gray-dark3 font-normal">/d</span>
        </div>
      </div>
    </div>
  );
}

export const CardSkeleton = () => {
  return (
    <div
      className={` xl:w-80  w-full  h-64 rounded-xl  px-6 py-5 flex flex-col justify-between ${"bg-gray-300"}`}
    ></div>
  );
};
export function SkeletonList() {
  let list = [];
  for (let i = 0; i < 20; i++) {
    list.push(<CardSkeleton key={i} />);
  }
  return list;
}
export default CarCard;
interface CarCardProps {
  isFav?: boolean;
  onClickFav?: () => void;
  car_name?: string;
  type?: string;
  image?: string;
  seats?: string | number;
  price?: string;
  isManual?: boolean;
  onClick: Function;
}
