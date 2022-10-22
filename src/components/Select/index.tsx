import { ChangeEventHandler } from "react";
import { ReactComponent as DropDownIcon } from "src/assets/icons/dropdownicon.svg";

export function Select({
  options,
  placeholder,
  classNames,
  optionClassNames,
  iconClassName,
  onChange,
}: SelectProps) {
  return (
    <div className="relative block w-full" style={{ minWidth: "7rem" }}>
      <select
        className={`appearance-none w-full p-1 rounded-3xl outline-none px-4 pr-8 font-poppins text-gray-dark2 ${classNames}`}
        onChange={onChange}
      >
        <option value="">{placeholder || "placeholder"}</option>
        {options?.map((option, index) => (
          <option key={index} className={optionClassNames} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <DropDownIcon
        className={`absolute top-3 right-4 w-3 h-2 ${
          iconClassName || "fill-gray-400 "
        }`}
      />
    </div>
  );
}
interface SelectProps {
  options?: Array<{ label: string; value: any }>;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  classNames?: string;
  iconClassName?: string;
  optionClassNames?: string;
}
