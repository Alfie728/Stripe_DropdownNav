import React, { forwardRef } from "react";
import ProductFeaturesList from "./ProductFeaturesList";

const leftFeatures = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59ce87eee0559487e3664bd9ed3c2ccceeb94b09d7e65482a3aab6ba93d5cef3?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Payments",
    description: "Online payments",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5357bf6f0352d2e42b9fb41f164d77a1694e6df14b0c3ebf5b58eacc8868defa?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Checkout",
    description: "Prebuilt payment form",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/472554064ebe394d22c53a3f42723df4fb7c53dd1f278ba734ae2778c6ddb252?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Elements",
    description: "Customizable payments UIs",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f3d1a17244393babfdfba9959ff5f45cb55db33cf4a9675a5af1f6c5bdfdb172?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Payment Links",
    description: "No-code payments",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef043c6c3db859de8dfc0d6d5617db403f6ed01f791e7d8659726a09644523ff?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Radar",
    description: "Fraud & risk management",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8e63cb74c92f2b29c7393f496722ffd0008c80c53ea2f9ede6765b619f2ba04e?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Connect",
    description: "Payments for platforms",
  },
];

const rightFeatures = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3e74b760bcada2e375f1d8e69b84d5b718e77c5c7de4621b155055876159946f?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Billing",
    description: "Subscription management",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/60397c18ea04f487fbd1d5c7a0adcf52d42b711708ad80839e14207483f970f4?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Invoicing",
    description: "Online invoices",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b1a60d6597307722ab4f83d16861276c10e0346b1cf796728b023728377a83dc?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Terminal",
    description: "In-person payments",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/334e12759a842616ecf40bc5e82ea462db5e92bb0a6184b909eb1680810ab82d?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Financial Connections",
    description: "Linked financial account data",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7b03ee64d16c7fff6de6c561df0d03ff3f01ae93e523a44e6c35a55b8571e45e?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Identity",
    description: "Online identity verification",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/15c43c4bf9eae12f4303dbb9db6e33028d2d413a02cd5a07182de6f3d35c09fc?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
    title: "Climate",
    description: "Carbon removal",
  },
];

const ProductFeaturesSection = forwardRef<HTMLElement, React.ComponentPropsWithRef<'section'>>((props, ref) => (
  <section
    ref={ref}
    className="py-8 pl-7 max-w-screen-sm bg-white max-md:pl-5 rounded-lg"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow min-h-[340px] max-md:mt-10">
          <ProductFeaturesList features={leftFeatures} />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow min-h-[340px] max-md:mt-10">
          <ProductFeaturesList features={rightFeatures} />
        </div>
      </div>
    </div>
  </section>
));

export default ProductFeaturesSection;
