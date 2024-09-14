import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative self-end mt-9 mb-0 w-full max-w-[1209px] max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h1 className="relative mt-24 text-8xl font-medium tracking-tighter leading-[98px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Financial <br /> infrastructure <br /> for the internet
          </h1>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a4002a034f81df93ea08b3a7601376fad0a3481e4576584c6949956e923bf2b?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
            alt="Financial infrastructure illustration"
            className="object-contain grow w-full aspect-[0.83] max-md:mt-5 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
