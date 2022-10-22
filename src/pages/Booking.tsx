import { FC, useState } from "react";
import { ReactComponent as Grid } from "src/assets/icons/grid.svg";
import { ReactComponent as Filter } from "src/assets/icons/filter.svg";
import { IconButton } from "src/components/IconButton";
import { Select } from "src/components/Select";
import { CarCard } from "../components/Cards/CarCard";
const Booking: FC = () => {
  const [selected, setSelected] = useState(1);
  const [fav, setFav] = useState(false);
  return (
    <div>
      <div className="mdLtext-3xl text-2xl font-bold leading-10">Booking</div>
      <div className="flex my-10 items-center justify-between">
        <div className="flex  gap-8 items-center flex-wrap">
          <div className="w-32">
            <Select
              placeholder="New"
              options={[{ label: "Recent", value: "recent" }]}
            />
          </div>
          <div className="w-32">
            <Select
              placeholder="Type"
              options={[{ label: "Toyota", value: "recent" }]}
            />
          </div>
        </div>
        <div className="flex gap-2 md:static fixed top-20 right-5">
          <IconButton
            icon={Grid}
            containerClassName={`${
              selected === 1 ? "bg-primary-purple" : ""
            } md:w-10 md:h-10 w-8 h-8`}
            iconClassName={selected === 1 ? "fill-white" : ""}
            onClick={() => {
              setSelected(1);
            }}
          />
          <IconButton
            icon={Filter}
            containerClassName={`${
              selected === 2 ? "bg-primary-purple" : ""
            } md:w-10 md:h-10 w-8 h-8`}
            iconClassName={selected === 2 ? "fill-white" : ""}
            onClick={() => {
              setSelected(2);
            }}
          />
        </div>
      </div>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center gap-9 my-6">
        <CarCard
          isFav={fav}
          onClickFav={() => {
            setFav(!fav);
          }}
        />
        <CarCard
          isFav={fav}
          onClickFav={() => {
            setFav(!fav);
          }}
        />
        <CarCard
          isFav={fav}
          onClickFav={() => {
            setFav(!fav);
          }}
        />
        <CarCard
          isFav={fav}
          onClickFav={() => {
            setFav(!fav);
          }}
        />
        <CarCard
          isFav={fav}
          onClickFav={() => {
            setFav(!fav);
          }}
        />
      </div>
    </div>
  );
};

export default Booking;
