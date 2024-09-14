import React from "react";
import ProductFeatureItem from "./ProductFeatureItem";

interface ProductFeature {
  iconSrc: string;
  title: string;
  description: string;
}

interface ProductFeaturesListProps {
  features: ProductFeature[];
}

const ProductFeaturesList: React.FC<ProductFeaturesListProps> = ({
  features,
}) => (
  <div className="flex flex-col w-full min-w-[254px]">
    {features.map((feature, index) => (
      <div key={index} className={index > 0 ? "mt-5" : ""}>
        <ProductFeatureItem
          iconSrc={feature.iconSrc}
          title={feature.title}
          description={feature.description}
        />
      </div>
    ))}
  </div>
);

export default ProductFeaturesList;
