import React from "react";

const AdCard = ({ container }: AdCardProps) => {
  return (
    <div className="h-60">
      <div className="flex">
        <div>
          <div>Big Text</div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;

interface AdCardProps {
  container?: string;
}
