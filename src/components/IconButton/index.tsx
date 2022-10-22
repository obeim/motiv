export function IconButton({
  icon,
  containerClassName,
  iconClassName,
  onClick,
}: IconButtonProps) {
  const Icon = icon;
  return (
    <div
      onClick={onClick}
      className={`flex w-10 h-10 items-center justify-center rounded-full  shadow-md cursor-pointer hover:scale-105 transition-transform duration-50 p-2 ${
        containerClassName || "bg-white"
      }`}
    >
      <Icon className={`${iconClassName || "fill-gray-500"}`} />
    </div>
  );
}
interface IconButtonProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  containerClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
}
