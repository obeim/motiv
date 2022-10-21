import { FC } from "react";
import PrecentCard from "src/components/Cards/PrecentCard";
import Range from "src/assets/icons/Range.svg";
import Lighting from "src/assets/icons/lighting.svg";
import Drop from "src/assets/icons/drop.svg";
import Tier from "src/assets/icons/tier.svg";

const Dashboard: FC = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center gap-9">
        <PrecentCard
          bg="primary-purple"
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
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
