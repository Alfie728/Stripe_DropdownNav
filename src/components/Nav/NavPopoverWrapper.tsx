import clsx from "clsx";

const NavPopoverWrapper = ({
  index,
  isHovered,
  children,
}: {
  index: number;
  isHovered: number | null;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "absolute transition-all ease-[cubic-bezier(0.25,0.46,0.45,0.94)] duration-300",
        isHovered === index ? "opacity-100" : "opacity-0 pointer-events-none",
        isHovered === index
          ? "transform-none"
          : isHovered !== null && isHovered > index
          ? "-translate-x-28"
          : "translate-x-28"
      )}
    >
      {children}
    </div>
  );
};
export default NavPopoverWrapper;
