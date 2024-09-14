import React, { useState, useRef } from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import ProductFeaturesSection from "../ProductSection";
import NavigationMenu from "../NavigationMenu";
import DocumentComponent from "../DocumentSection";
import NavPopoverWrapper from "./NavPopoverWrapper";
import clsx from "clsx";

const navItems = [
  { name: "Products", content: <ProductFeaturesSection /> },
  { name: "Solutions", content: <NavigationMenu /> },
  { name: "Developers", content: <DocumentComponent /> },
  { name: "Resources", content: null },
  { name: "Pricing", content: null },
];

const Nav = () => {
  const [isHovered, setIsHovered] = useState<number | null>(0);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(0);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(0);
  const [popoverWidth, setPopoverWidth] = useState<number | null>(0);
  const refs = useRef<HTMLDivElement[]>([]);

  const onMouseEnter = (index: number, el: HTMLElement) => {
    setIsHovered(index);
    setPopoverLeft(el.offsetLeft);
    const menuEl = refs.current[index];
    console.log(menuEl);
    if (menuEl) {
      setPopoverHeight(menuEl.offsetHeight);
      setPopoverWidth(menuEl.offsetWidth);
    }
  };

  return (
    <nav
      onMouseLeave={() => setIsHovered(null)}
      className="flex flex-wrap gap-9 items-center text-base tracking-wide whitespace-nowrap relative py-2"
    >
      <Logo />
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          index={index + 1}
          text={item.name}
          onMouseEnter={onMouseEnter}
        />
      ))}

      <div
        style={{
          left: popoverLeft ? popoverLeft : 0,
          height: popoverHeight ? `calc(${popoverHeight}px + 3rem)` : 0,
          width: `calc(max(${popoverWidth}px + 4rem, 600px))`,
        }}
        className={clsx(
          "absolute ease-[cubic-bezier(0.39,0.57,0.56,1)] duration-300 top-12 z-50 bg-white rounded-lg shadow flex items-center justify-center overflow-hidden",
          isHovered !== null
            ? "transition-all"
            : "opacity-0 pointer-events-none"
        )}
      >
        <NavPopoverWrapper index={1} isHovered={isHovered}>
          <ProductFeaturesSection
            ref={(el) => (refs.current[1] = el as HTMLDivElement)}
          />
        </NavPopoverWrapper>
        <NavPopoverWrapper index={2} isHovered={isHovered}>
          <NavigationMenu
            ref={(el) => (refs.current[2] = el as HTMLDivElement)}
          />
        </NavPopoverWrapper>
        <NavPopoverWrapper index={3} isHovered={isHovered}>
          <DocumentComponent
            ref={(el) => (refs.current[3] = el as HTMLDivElement)}
          />
        </NavPopoverWrapper>
      </div>
    </nav>
  );
};

export default Nav;
