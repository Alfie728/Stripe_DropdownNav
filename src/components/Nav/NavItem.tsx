import React from "react";

interface NavItemProps {
  text: string;
  index: number;
  onMouseEnter: (index: number, el: HTMLDivElement) => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, index, onMouseEnter }) => {
  return (
    <div
      onMouseEnter={(e) => {
        onMouseEnter(index, e.currentTarget);
      }}
      className="self-stretch my-auto leading-loose text-center"
    >
      {text}
    </div>
  );
};

export default NavItem;
