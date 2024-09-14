import React from "react";

interface LinkListProps {
  links: Array<{ text: string; href: string }>;
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <ul className="flex flex-col items-start mt-2 text-sm font-light tracking-wide leading-none min-w-[254px] text-sky-950">
      {links.map((link, index) => (
        <li key={index} className="flex mt-2 first:mt-0">
          <a href={link.href} className="pr-1">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
