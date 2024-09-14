import React from "react";

interface IconLinkProps {
  iconSrc: string;
  text: string;
  href: string;
}

const IconLink: React.FC<IconLinkProps> = ({ iconSrc, text, href }) => {
  return (
    <a href={href} className="flex self-start mt-3 first:mt-0">
      <div className="flex flex-col pt-1 pr-2.5 w-[26px]">
        <div className="flex flex-col w-full min-h-[16px]">
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain w-4 aspect-square"
          />
        </div>
      </div>
      <span className="text-sm font-medium tracking-wide leading-normal text-sky-950">
        {text}
      </span>
    </a>
  );
};

export default IconLink;
