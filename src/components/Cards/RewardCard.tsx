import Trophy from "src/assets/images/52. trophy-4.png";

export function RewardCard({
  container,
  commonColor,
  points,
  subtitle,
  image,
}: {
  container?: string;
  commonColor?: string;
  points?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div
      className={`w-56 font-bold p-5 rounded  h-60 flex items-center ${
        container || "bg-primary-Tangaroa"
      }`}
    >
      <div className="">
        <div className="flex items-start w-full  gap-3">
          <div className="text-2xl text-white w-2/4">
            You have earned{" "}
            <div className={`text-4xl text-carrot-100 ${commonColor}`}>
              {points || "20"}
            </div>
            <div>Badges!</div>
          </div>
          <img alt="reward" src={image || Trophy} className="h-2/4" />
        </div>
        <div className={`text-xs text-carrot-100 mt-2 ${commonColor}`}>
          {subtitle || "Hooray! Way to go Mohammed!"}
        </div>
      </div>
    </div>
  );
}
