import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";

const MyComponent: React.FC = () => {
  

  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <main className="flex overflow-hidden flex-col pb-48 w-full bg-white max-md:pb-24 max-md:max-w-full">
        <div className="flex relative flex-col pt-5 pl-20 w-full min-h-[483px] max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/941b21e0e8cab9dc3a5cec71635f81b7b760b1fc8e79496499541c8fedc8e3e7?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <Header />
          <Hero />
          <CallToAction />
        </div>
        <div className="flex w-full bg-white min-h-[41px] max-md:max-w-full" />
      </main>
    </div>
  );
};

export default MyComponent;
