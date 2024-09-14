import React from "react";

interface NavigationItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive,
}) => {
  return (
    <div className={`flex mt-4 ${isActive ? "relative" : ""}`}>
      <div className="flex flex-col pt-1 pr-2.5 w-[26px]">
        <div className="flex flex-col w-full min-h-[16px]">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain w-4 aspect-square"
          />
        </div>
      </div>
      <div
        className={`text-sm font-medium tracking-wide leading-normal text-sky-950 ${
          isActive ? "px-3" : ""
        }`}
      >
        {label}
      </div>
      {isActive && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ef8d97e80e6795eeb9eb42c0f004769ead3360fe1eb8315289112d0e1074fa?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
      )}
    </div>
  );
};

export default NavigationItem;
