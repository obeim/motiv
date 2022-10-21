import { FC } from "react";
import PrecentCard from "src/components/Cards/PrecentCard";
import Range from "src/assets/icons/Range.svg";
import Lighting from "src/assets/icons/lighting.svg";
import Drop from "src/assets/icons/drop.svg";
import Tier from "src/assets/icons/tier.svg";
import AdCard from "src/components/Cards/AdCard";
import Running from "src/assets/images/36. people-rushing-3.png";
import { RewardCard } from "../components/Cards/RewardCard";

const Dashboard: FC = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center gap-9">
        <PrecentCard
          container="bg-primary-purple"
          title="Energy"
          iconContainer="bg-secondary-purple"
          titleColor="white"
          iconSrc={Lighting}
          progressText="45%"
          progressProps={{
            trailColor: "#B37EFC",
            pathColor: "white",
            text: "text-white",
          }}
        />
        <PrecentCard
          title="Range"
          progressText="157k%"
          iconContainer="bg-rose-400/20"
          iconSrc={Range}
          progressProps={{ text: "text-black" }}
        />
        <PrecentCard
          title="Break fluid"
          progressText="9%"
          iconContainer="bg-primary-purple/20"
          iconSrc={Drop}
          progressProps={{ text: "text-black", pathColor: "#A162F7" }}
        />
        <PrecentCard
          title="Tire Wear"
          iconSrc={Tier}
          iconContainer="bg-secondary-yellow/20"
          progressText="25%"
          progressProps={{ text: "text-black", pathColor: "#F6CC0D" }}
        />
        <div className=" w-full xl:col-span-4 lg:col-span-3 md:col-span-2 sm:col-span-2 col-span-1">
          <div className="flex flex-wrap gap-6 justify-between w-full">
            <div className="xl:w-55/10  w-full">
              <AdCard />
            </div>
            <div className="flex gap-3 flex-wrap">
              <RewardCard />
              <RewardCard
                container="bg-pompadour-100"
                commonColor="text-romantic-100"
                image={Running}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-carrot-100 mt-5 flex flex-wrap justify-between gap-3"></div>
    </div>
  );
};

export default Dashboard;
