import React from "react";

interface ButtonProps {
  text: string;
  icon?: string;
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant = "default" }) => {
  const baseClasses = "flex gap-2.5 items-center";
  const variantClasses =
    variant === "outline"
      ? "self-stretch px-3.5 py-2.5 text-base leading-relaxed rounded-2xl bg-white bg-opacity-20"
      : "grow self-stretch my-auto text-sm leading-loose";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      <span>{text}</span>
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 w-2.5 aspect-square"
        />
      )}
    </button>
  );
};

export default Button;
