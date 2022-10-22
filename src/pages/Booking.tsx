import { FC, useState, useEffect, lazy, Suspense } from "react";
import { ReactComponent as Grid } from "src/assets/icons/grid.svg";
import { ReactComponent as Filter } from "src/assets/icons/filter.svg";
import { IconButton } from "src/components/IconButton";
import { Select } from "src/components/Select";
import { CardSkeleton, SkeletonList } from "src/components/Cards/CarCard";
import "react-loading-skeleton/dist/skeleton.css";

const CarCard = lazy(() => import("src/components/Cards/CarCard"));
const Booking: FC = () => {
  const [selected, setSelected] = useState(1);
  const [items, setItems] = useState<itemType[]>([]);
  const [err, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      fetch("https://6353c4d3ccce2f8c02fc556b.mockapi.io/api/booking/cars")
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
    getItems();
  }, []);

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
        {items.map((item: any) => (
          <Suspense fallback={<CardSkeleton />} key={item.id}>
            <CarCard {...item} />
          </Suspense>
        ))}

        {loading && SkeletonList()}
        {err && <div>{err}</div>}
      </div>
    </div>
  );
};

export default Booking;

interface itemType {
  car_name: string;
  type: string;
  price: string;
  seats: number;
  isManual: boolean;
  id: string;
}
