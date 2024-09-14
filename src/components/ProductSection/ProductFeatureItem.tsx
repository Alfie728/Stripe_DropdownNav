import React from "react";

interface ProductFeatureItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ProductFeatureItem: React.FC<ProductFeatureItemProps> = ({
  iconSrc,
  title,
  description,
}) => (
  <div className="flex flex-col items-start pr-32 w-full max-md:pr-5">
    <div className="flex">
      <div className="flex flex-col pt-1.5 pr-4 w-11">
        <div className="flex flex-col w-full min-h-[28px]">
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain w-7 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col self-start tracking-wide text-sky-950">
        <div className="text-sm font-medium leading-normal">{title}</div>
        <div className="pr-1 w-full text-sm font-light leading-none">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default ProductFeatureItem;
