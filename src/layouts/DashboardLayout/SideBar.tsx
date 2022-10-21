import Logo from "src/assets/images/logo.svg";
import Settings from "src/assets/icons/settings.svg";
import Logout from "src/assets/icons/signout.svg";

import { useNavigate, useLocation } from "react-router-dom";

export function SideBar({ show, setShow, items }: SideBarProps) {
  return (
    <div>
      <div
        className={`fixed transition-opacity duration-300 2xl:w-72 xl:w-60 w-60 h-full  bg-white left-0 top-0 md:opacity-100 md:block z-20 ${
          !show && "opacity-0"
        } px-5 py-9`}
      >
        <div className=" flex items-center gap-4">
          <img src={Logo} className="w-8" alt="logo" />
          <div className="font-bold lg:text-3xl text-2xl text-gray-dark">
            Motiv.
          </div>
        </div>

        <div className="flex mt-10 flex-col h-90 justify-between w-5/6">
          <div className="flex flex-col gap-2">
            {items &&
              items.map((item, index) => {
                return (
                  <VerticalLink
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    path={item.path}
                    onClick={() => {
                      if (setShow) {
                        setShow(false);
                      }
                    }}
                  />
                );
              })}
          </div>
          <div className="flex flex-col gap-2">
            <VerticalLink label="Settings" icon={Settings} />
            <VerticalLink label="Log out" icon={Logout} />
          </div>
        </div>
      </div>
      <div className="2xl:w-72 xl:w-60 w-60 h-screen md:block hidden"></div>
    </div>
  );
}
interface SideBarProps {
  show?: boolean;
  setShow?: Function;
  items?: Array<VerticalLinkProps>;
}

function VerticalLink({ label, icon, path, onClick }: VerticalLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (path) navigate(path);
        if (onClick) onClick();
      }}
      className={`flex gap-3 p-3 ${
        location.pathname === path && "bg-slate-100"
      } rounded-md cursor-pointer select-none	`}
    >
      <img src={icon} className="xl:w-6" alt="dashboard_icon" />
      <div className="text-gray-dark2 font-medium capitalize">{label}</div>
    </div>
  );
}
interface VerticalLinkProps {
  label: string;
  icon: any;
  path?: string;
  onClick?: () => void;
}
