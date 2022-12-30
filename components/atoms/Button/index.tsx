import { useRouter } from "next/router";
import React from "react";
import { buttonType } from "../../../common/types";
//ff7f66
const Button: React.FC<buttonType> = ({
  text,
  color,
  textColor,
  colorHover,
  pageLinkRouter,
  relative,
}) => {
  const router = useRouter();
  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.push(`${pageLinkRouter}`);
  };
  return (
    <button
      onClick={click}
      className={`flex flex-col bg-[${color}] hover:bg-[${colorHover}] p-[10px] font-bold shadow-lg rounded-md items-center justify-center ${relative}`}
    >
      <div className={`text-[16px] text-[${textColor}]`}>{text}</div>
    </button>
  );
};

export default Button;
