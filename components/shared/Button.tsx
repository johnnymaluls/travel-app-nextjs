import Image from "next/image";
import { title } from "process";
import React from "react";

interface Props {
  type: "button" | "submit";
  text: string;
  icon?: string; //optional property
  variant: string;
  full?: boolean;
}

const Button = ({ type, text, icon, variant, full }: Props) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-base font-bold whitespace-nowrap cursor-pointer">
        {text}
      </label>
    </button>
  );
};

export default Button;
