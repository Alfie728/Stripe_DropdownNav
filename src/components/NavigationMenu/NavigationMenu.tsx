import React, { forwardRef } from "react";
import NavigationSection from "./NavigationSection";

const navigationData = [
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f24e9ef595450ff3cdff0b8429102e0808c262d7cbb358b915670eca2dfe1263?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Support Center",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54a21c0644c13351e1f87a7a6ae28011578a0d258198b363746b4ec686dba8a0?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Support Plans",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84561470f69b2a96d9d0dbf13ca440904bb3a06c3a9d6027cfe7b705dc84c940?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Guides",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f2f99e6beb7920de747d1e838e366edd52e15bcbd46a2235d72d352358d88c5?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Customer Stories",
    },
  ],
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17ef8d97e80e6795eeb9eb42c0f004769ead3360fe1eb8315289112d0e1074fa?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Blog",
      isActive: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a31546d4dfda355ff82bf30fe56899f0ca3d3ab6e2729f152e738fa9c53946a?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Annual Conference",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a90a15b1a564a78a90932aadcd554b4ed6fbd388ca9f89a0c7843807f835b9b?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Contact Sales",
    },
  ],
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b2790a2081876966de2194912d7c67d8f836befaaa51ab093031192909e0664?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Jobs",
      isActive: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ee92c2efee22df3b41ea6c7ce878c3d224c614e415d2749a97005463d60b867?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Newsroom",
    },
  ],
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8939d79cbe836d80fb7eab60227b43c88388d385ff67cf129e5d532bb0a055e4?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Stripe Press",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/332802303bc64834904dd1cbd1c4b438ea61baa51e6c45c3553503a99d7dac7e?placeholderIfAbsent=true&apiKey=fe7c285c529849c48039374c59e6f014",
      label: "Become a Partner",
    },
  ],
];

const NavigationMenu = forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<"section">
>((props, ref) => (
  <section
    ref={ref}
    className="flex flex-col bg-white max-w-[604px] rounded-lg mt-4"
  >
    <div className="flex flex-col px-8 pb-5 w-full max-w-[530px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-8 max-md:max-w-full">
        {navigationData.slice(0, 2).map((sectionItems, index) => (
          <NavigationSection key={index} items={sectionItems} />
        ))}
      </div>
    </div>
    <div className="flex flex-col items-start px-7 pt-8 pb-7 mt-1 w-full rounded bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-8 max-md:max-w-full">
        {navigationData.slice(2).map((sectionItems, index) => (
          <NavigationSection key={index} items={sectionItems} />
        ))}
      </div>
    </div>
  </section>
));

export default NavigationMenu;
