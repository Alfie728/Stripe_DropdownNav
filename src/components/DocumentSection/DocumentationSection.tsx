import React from "react";
import LinkList from "./LinkList";
// import IconLink from "./IconLink";

interface DocumentationSectionProps {
  title: string;
  links: Array<{ text: string; href: string }>;
}

const DocumentationSection: React.FC<DocumentationSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-1">
        <h3 className="self-start text-sm font-medium tracking-wide leading-loose uppercase text-slate-500">
          {title}
        </h3>
        <LinkList links={links} />
      </div>
    </div>
  );
};

export default DocumentationSection;
