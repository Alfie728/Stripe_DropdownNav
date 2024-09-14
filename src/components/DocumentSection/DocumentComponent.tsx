import React, { forwardRef } from "react";
import DocumentationSection from "./DocumentationSection";
import IconLink from "./IconLink";

const DocumentationComponent = forwardRef<HTMLElement, React.ComponentPropsWithRef<'main'>>((props, ref) => {
  const getStartedLinks = [
    { text: "Prebuilt checkout", href: "#" },
    { text: "Libraries and SDKs", href: "#" },
    { text: "Plugins", href: "#" },
    { text: "Code samples", href: "#" },
  ];

  const guidesLinks = [
    { text: "Accept online payments", href: "#" },
    { text: "Manage subscriptions", href: "#" },
    { text: "Send payments", href: "#" },
    { text: "Set up in-person payments", href: "#" },
  ];

  return (
    <main
      ref={ref}
      className="flex flex-col pb-1 bg-white max-w-[604px] rounded-lg"
    >
      <section className="flex flex-col px-8 pt-8 pb-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <header className="flex flex-col items-start pr-60 w-full max-md:pr-5 max-md:max-w-full">
              <div className="flex">
                <div className="flex flex-col pt-1 pr-2.5 w-[26px]">
                  <div className="flex flex-col w-full min-h-[16px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d73faf3f03c1491d255b8f67c2f4bcdb8319a0b0d81ee6ffd0bf6d5e32ea7c3?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
                      alt=""
                      className="object-contain w-4 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-sm tracking-wide min-w-[240px] text-sky-950 w-[279px]">
                  <h1 className="font-medium leading-none">Documentation</h1>
                  <p className="pr-2.5 w-full font-light leading-none">
                    Start integrating Stripe's products and tools
                  </p>
                </div>
              </div>
            </header>
          </div>
          <div className="self-end mt-8 w-full max-w-lg max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <DocumentationSection
                title="Get started"
                links={getStartedLinks}
              />
              <DocumentationSection title="Guides" links={guidesLinks} />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center self-center p-7 mt-1 rounded bg-slate-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[254px]">
            <div className="flex flex-col pb-1 w-full min-w-[254px]">
              <IconLink
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/43ec4df6990773df494daa40446a40fadd242ae76d4502d356e2c51e33bf96b8?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
                text="Full API Reference"
                href="#"
              />
              <IconLink
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/670659ca3b321b95cc21905ad9caa5da32452570df65dade851f9a285704b6a2?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
                text="API Status"
                href="#"
              />
            </div>
          </div>
          <div className="flex flex-col min-w-[240px] w-[254px]">
            <div className="flex flex-col pb-1 w-full min-w-[254px]">
              <IconLink
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bca8ec0702ab09664f0abdf435522ea7ef5a36a35bb9351f7cd5bb46f6142c6c?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
                text="API Changelog"
                href="#"
              />
              <IconLink
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1a36435ebc8291de1f0ae1ca67892dbc255cbb12eb55539cabea1a178244599b?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014"
                text="Build a Stripe App"
                href="#"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export default DocumentationComponent;
