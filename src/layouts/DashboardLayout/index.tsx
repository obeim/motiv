import { FC, PropsWithChildren, useState, ChangeEventHandler } from "react";
import { SideBar } from "./SideBar";
import SearchIcon from "src/assets/icons/search.svg";
import Avatar from "src/assets/images/avatar.png";
import Notification from "src/components/Notification";
import DashboardIcon from "src/assets/icons/dashboard_icon.svg";
import Booking from "src/assets/icons/Car.svg";

const DashboardLayout: FC<PropsWithChildren<Props>> = ({
  children,
  searchProps,
}) => {
  const [showBar, setShow] = useState<boolean>(false);
  return (
    <div className="flex select-none">
      <SideBar
        show={showBar}
        setShow={setShow}
        items={[
          { label: "Dashboard", icon: DashboardIcon, path: "/" },
          { label: "Cars", icon: Booking, path: "/booking" },
        ]}
      />
      <div className="flex flex-col w-full">
        <div>
          <div className="fixed z-10 right-0 top-0 h-16 lg:h-20 bg-white 2xl:w-[calc(100%-18rem-2px)]  md:w-[calc(100%-15rem-2px)] w-full">
            <div className="flex w-full p-4 items-center h-full justify-between">
              <Search {...searchProps} />
              <MenuIcon
                className="w-6 h-6 cursor-pointer md:hidden"
                onClick={() => setShow(!showBar)}
              />
              <div className="md:flex gap-9 h-full mx-2 items-center hidden ">
                <Notification hasNew />
                <img
                  src={Avatar}
                  className="h-5/6 rounded-full cursor-pointer"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-neutral-100 ">
          <div className="lg:pl-8 pl-3 mt-20 lg:mt-28 max-w-8xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

interface Props {
  searchProps?: SearchProps;
}
function MenuIcon({ onClick, className }: MenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={onClick}
      className={className || "w-6 h-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
}
interface MenuIconProps {
  onClick?: () => void;
  className?: string;
}

function Search({ onChange }: SearchProps) {
  return (
    <div className="relative">
      <img
        src={SearchIcon}
        alt="searchIcon"
        className=" cursor-pointer w-7 h-7 top-2 p-1 rounded-xl absolute left-2"
      />
      <input
        onChange={onChange}
        className="outline-none caret-amber-500 bg-zinc-100 h-11 w-72 rounded-lg  pl-10"
        placeholder=" Search or type"
        type="search"
      />
    </div>
  );
}

interface SearchProps {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
