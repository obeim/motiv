import { FC, useEffect, useState } from "react";
import Car2 from "src/assets/images/car2.png";
import Car3 from "src/assets/images/car3.png";
import Drop from "src/assets/icons/drop.svg";
import Tier from "src/assets/icons/tier.svg";
import Range from "src/assets/icons/Range.svg";
import AdCard from "src/components/Cards/AdCard";
import Lighting from "src/assets/icons/lighting.svg";
import PrecentCard from "src/components/Cards/PrecentCard";
import Running from "src/assets/images/36. people-rushing-3.png";
import { RewardCard } from "src/components/Cards/RewardCard";
import { RecommendCard } from "src/components/Cards/RecommendCard";
import DashboardLayout from "src/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const Dashboard: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    energy: string;
    range: string;
    break_fluid: string;
    tire_wear: string;
  }>();
  const { trackPageView, pushInstruction } = useMatomo();

  useEffect(() => {
    // @ts-ignore
    pushInstruction("setUserId", "obei444444");
    async function getItems() {
      fetch("https://mocki.io/v1/a8e7ccd4-4bbc-41a9-9ee5-d29af099eb13")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
    getItems();
    // @ts-ignore

    trackPageView();
  }, []);
  return (
    <DashboardLayout>
      {loading && <div>loading...</div>}
      {err && <div>{err}</div>}
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl"
        >
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:justify-items-start justify-items-center	 gap-3">
            <PrecentCard
              container="bg-primary-purple auto"
              title="Energy"
              iconContainer="bg-secondary-purple"
              titleColor="white"
              iconSrc={Lighting}
              progressText={data.energy + "%"}
              progressProps={{
                trailColor: "#B37EFC",
                pathColor: "white",
                text: "text-white",
              }}
            />
            <PrecentCard
              title="Range"
              progressText={data.range + "%"}
              iconContainer="bg-rose-400/20"
              iconSrc={Range}
              progressProps={{ text: "text-black" }}
            />
            <PrecentCard
              title="Break fluid"
              progressText={data.break_fluid + "%"}
              iconContainer="bg-primary-purple/20"
              iconSrc={Drop}
              progressProps={{ text: "text-black", pathColor: "#A162F7" }}
            />
            <PrecentCard
              title="Tire Wear"
              iconSrc={Tier}
              iconContainer="bg-secondary-yellow/20"
              progressText={data.tire_wear + "%"}
              progressProps={{ text: "text-black", pathColor: "#F6CC0D" }}
            />
            <div className=" w-full xl:col-span-4 flex-1 lg:col-span-3 md:col-span-2 sm:col-span-2 col-span-1">
              <div className="2xl:col-span-1 gap-5 lg:col-span-2  w-full items-center md:justify-start justify-center flex flex-wrap ">
                <div className="xl:w-3/6 w-full">
                  <AdCard />
                </div>
                <div className="xl:w-1/5">
                  <RewardCard />
                </div>
                <div className="xl:w-1/5">
                  <RewardCard
                    container="bg-pompadour-100"
                    commonColor="text-romantic-100"
                    image={Running}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 flex md:justify-start justify-center flex-wrap gap-2">
            <RecommendCard />
            <RecommendCard
              car_image={Car2}
              container="bg-tertiary-2"
              car_name="Porsche 911 Carrera"
            />
            <RecommendCard
              car_image={Car3}
              container="bg-red-100"
              car_name="Porsche 911 Carrera"
            />
          </div>
          <div className="w-full text-carrot-100 mt-5 flex flex-wrap justify-between gap-3"></div>
        </motion.div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
