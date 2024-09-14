import React from "react";
import Button from "./Button";

const CallToAction: React.FC = () => {
  return (
    <section className="flex flex-col mt-3.5 -mb-10 ml-40 max-w-full tracking-wide w-[446px] max-md:mb-2.5">
      <p className="text-lg font-light leading-7 text-slate-600 max-md:max-w-full">
        Millions of companies of all sizes use Stripe online and in <br />{" "}
        person to accept payments, send payouts, automate <br /> financial
        processes, and ultimately grow revenue.
      </p>
      <div className="flex gap-2.5 items-center self-start mt-9 text-sm font-medium leading-loose">
        <Button
          text="Start now"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4ffbfcfa4aa5f23110d6577d0fb66b1517a41d8c10865be8adbf7b0bb24e2d?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
          variant="default"
        />
        <Button
          text="Contact sales"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d47ff3a575e911bf1e3606f088d325eac1ff77418c507740dc38573e47a35dbd?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
          variant="default"
        />
      </div>
    </section>
  );
};

export default CallToAction;
