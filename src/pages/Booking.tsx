import { FC, useState, useEffect, lazy, Suspense } from "react";
import { ReactComponent as Grid } from "src/assets/icons/grid.svg";
import { ReactComponent as Filter } from "src/assets/icons/filter.svg";
import { IconButton } from "src/components/IconButton";
import { Select } from "src/components/Select";
import { CardSkeleton, SkeletonList } from "src/components/Cards/CarCard";
import "react-loading-skeleton/dist/skeleton.css";
import DashboardLayout from "src/layouts/DashboardLayout";
import Modal from "src/components/Modal";
import Car from "src/assets/images/item.png";
import { motion } from "framer-motion";

const CarCard = lazy(() => import("src/components/Cards/CarCard"));

const Booking: FC = () => {
  const [selected, setSelected] = useState(1);
  const [filtered, setFilterd] = useState<itemType[]>([]);
  const [items, setItems] = useState<itemType[]>([]);
  const [types, setTypes] = useState<any[]>([]);
  const [err, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [item, setItem] = useState<itemType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      fetch("https://6353c4d3ccce2f8c02fc556b.mockapi.io/api/booking/cars")
        .then((response) => response.json())
        .then((data: itemType[]) => {
          setFilterd(data);
          setItems(data);
          setTypes(data.map((item) => item.type));
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
    setTimeout(() => {
      getItems();
    }, 200);
  }, []);

  return (
    <DashboardLayout
      searchProps={{
        onChange: (e) => {
          if (e.target.value) {
            setFilterd(
              filtered.filter((item) =>
                item.car_name
                  .toLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              )
            );
          } else setFilterd(items);
        },
      }}
    >
      <DetailsModal item={item} setModal={setModal} modal={modal} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="md:text-3xl text-2xl font-bold leading-10">Booking</div>
        <div className="flex my-10 items-center justify-between pr-8">
          <div className="flex  gap-8 items-center flex-wrap">
            <div className="w-32">
              <Select placeholder="New" />
            </div>
            <div className="w-32">
              <Select
                onChange={(e) => {
                  if (e.target.value) {
                    setFilterd(
                      items.filter((item) => item.type === e.target.value)
                    );
                  } else {
                    setFilterd(items);
                  }
                }}
                options={types.map((type) => {
                  return { label: type, value: type };
                })}
                placeholder="Type"
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

        <div className="flex flex-wrap w-full   justify-center md:justify-start items-center xl:gap-7 gap-3 my-6">
          {filtered.map((item: any) => (
            <Suspense fallback={<CardSkeleton />} key={item.id}>
              <CarCard
                onClick={(item: itemType) => {
                  setModal(true);
                  setItem(item);
                }}
                {...item}
              />
            </Suspense>
          ))}

          {loading && SkeletonList()}
          {err && <div>{err}</div>}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-gray-400 w-full">
            There is nothing to look at
          </div>
        )}
      </motion.div>
    </DashboardLayout>
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
function DetailsModal({
  modal,
  setModal,
  item,
}: {
  modal: boolean;
  setModal: Function;
  item: itemType | undefined;
}) {
  return (
    <Modal
      isOpen={modal}
      Close={() => {
        setModal(false);
      }}
    >
      <div className={` w-full   px-6 flex flex-col gap-3  ${"bg-white"}`}>
        <div>
          <div className="flex items-center  ">
            <div className=" text-2xl md:text-4xl text-gray-dark1 font-bold">
              {item?.car_name}
            </div>
          </div>
          <div className="text-gray-dark3">{item?.type}</div>
        </div>
        <div className="mt-2">
          <div className=" text-gray-dark3 lg:text-lg">
            <div className="inline-flex items-center gap-2">
              <div>{item?.seats || 4}</div>
              <div>Seats</div>
            </div>

            <div>Manual</div>
          </div>
          <div className="lg:text-lg text-primary-dark font-medium">
            Cost {"$" + parseInt(item?.price || "") || "400$"}
            <span className="text-gray-dark3 font-normal">/d</span>
          </div>
        </div>
        <img alt="carImage" className="xl:w-4/5 w-4/5  mx-auto" src={Car} />
      </div>
    </Modal>
  );
}
